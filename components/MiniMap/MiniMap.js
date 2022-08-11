import React, { useEffect, useState, useCallback, useMemo } from 'react';
import Link from 'next/link'
import styles from './minimap.module.scss'

export default function MiniMap(props) {

    
    const [mouseX, setMouseX] = useState(50);
    const [mouseY, setMouseY] = useState(50);
    const [mouseZ, setMouseZ] = useState(0);
    const [north, setNorth] = useState(0);
    
    useEffect(()=>{

        window.addEventListener("mousemove", updateMouse);
        window.addEventListener("deviceorientation", updateGyro, true);

        return () => {
            window.removeEventListener("mousemove", updateMouse)
            window.removeEventListener("deviceorientation", updateGyro, true);
        };

    }, [])

    const updateMouse = useCallback( e => {

        const vw = window.innerWidth;
        const vh = window.innerHeight;
        const x = ((e.pageX / vw)*2) - 1;
        const y = ((e.pageY / vh)*2) - 1;

        const u = x * Math.sqrt(1 - y * y / 2);
        const v = y * Math.sqrt(1 - x * x / 2);

        const mx = (u * 100) / 2 ;
        const my = (v * 100) / 2 ;

        setMouseX(mx);
        setMouseY(my);


        const rx = e.pageX;
        const ry = e.pageY;

        const halfPi = 1.57;
        setMouseZ(-(Math.atan2(vh - ry, vw/2 - rx)-halfPi));
        setNorth((Math.atan2(vh - (16*4) - ry, (16*4) - rx)-halfPi))
    })

    const clamp = (num, min, max) => Math.max(Math.min(num, Math.max(min, max)), Math.min(min, max));
    const normalise = (num, min, max) => ((num - min) / (max - min) * 2) - 1;

    const updateGyro = useCallback( e => {

        const x = (e.gamma / 90) // In degree in the range [-90,90)
        const y = normalise(clamp((e.beta) / 180, 0, 0.5), 0, 0.5) // In degree in the range [-180,180)

        const u = x * Math.sqrt(1 - y * y / 2);
        const v = y * Math.sqrt(1 - x * x / 2);

        const rx = (u * 100) / 2 + 50;
        const ry = (v * 100) / 2 + 50;

        setMouseX(clamp(rx,0,100));
        setMouseY(ry);
    })


    const markerPos = {
        
        //left: `${mouseX}%`,
        //top: `${mouseY}%`,
        transform: `translate(${mouseX}%,${mouseY}%)`
    };

    const rotate = {
        transform: `rotateZ(${mouseZ}rad)`,
        transformOrigin: '50% 50%'
    }

    const northR = {
        transform: `rotateZ(${north}rad)`,
        transformOrigin: '50% 50%'
    }

    return (
        <>
       { /*<div className={styles.debug}>
           <div>z:{mouseZ * (180/Math.PI) }</div> 
    </div>*/ } 

        <div className={styles.minimap}>
            <svg version="1.1" x="0px" y="0px" viewBox="0 0 160 160" enable-background="new 0 0 160 160">
            
            <path className={styles.north} style={northR} d="M94.54,9.47c-3.59-0.74-7.27-1.2-11.04-1.38L80,4l-3.5,4.08c-3.76,0.18-7.45,0.65-11.04,1.38"/>
            <path className={styles.dots} stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="
	M105.26,19.02L105.26,19.02 M126.67,33.33L126.67,33.33 M140.98,54.74L140.98,54.74 M140.98,105.26L140.98,105.26 M126.67,126.67
	L126.67,126.67 M105.26,140.98L105.26,140.98 M54.74,140.98L54.74,140.98 M33.33,126.67L33.33,126.67 M19.02,105.26L19.02,105.26
	 M19.02,54.74L19.02,54.74 M33.33,33.33L33.33,33.33 M54.74,19.02L54.74,19.02"/>
            <path className={styles.cardinals}  d="M80,14v4 M146,80h-4 M80,146v-4 M14,80h4 M80,14v4 M146,80h-4 M80,146v-4 M14,80h4 M80,14v4 M146,80h-4 M80,146v-4 M14,80h4 M80, 14v4 M146,80h-4 M80,146v-4 M14,80h4 M80,14v4"/>
            <polyline className={styles.pawn} style={markerPos} points="69,80 76.5,80 80,84 80,84 83.5,80 91,80 " />
                 <g className={styles.horizon} style={rotate} >
                    <path className={styles.down}  d="M118.5,113h-16 M118.5,110v3 M41.5,113h16 M41.5,113v-3"/>
                    <path className={styles.center}  d="M118.5,80h-16 M118.5,77v3 M41.5,80h16 M41.5,77v3"/>
                    <path className={styles.up}   d="M41.5,47h16M41.5,50v-3 M118.5,47h-16 M118.5,50v-3"/>
                </g>
            </svg>
        </div>
        </>
        

    );


}