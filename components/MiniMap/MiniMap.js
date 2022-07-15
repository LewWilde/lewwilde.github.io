import React, { useEffect, useState, useCallback } from 'react';
import Link from 'next/link'
import styles from './minimap.module.scss'

export default function MiniMap(props) {

    
    const [mouseX, setMouseX] = useState(50);
    const [mouseY, setMouseY] = useState(50);
    
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

        const rx = (u * 100) / 2 + 50;
        const ry = (v * 100) / 2 + 50;

        setMouseX(rx);
        setMouseY(ry);
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
        
        left: `${mouseX}%`,
        top: `${mouseY}%`
    };

    return (
        <>
       {/* <div className={styles.debug}>
           <div>x:{mouseX}</div> 
            <div>y:{mouseY}</div>
        </div> */} 

        <div className={styles.minimap}>

            <div className={styles.marker} style={markerPos} ></div>

        </div>
        </>
        

    );


}