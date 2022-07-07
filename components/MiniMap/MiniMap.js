import React, { useEffect, useState, useCallback } from 'react';
import Link from 'next/link'
import styles from './minimap.module.scss'

export default function MiniMap(props) {

    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);
    
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

    const updateGyro = useCallback( e => {

        setMouseX(e.gamma);
        setMouseY(e.beta);
    })


    const markerPos = {
        
        left: `${mouseX}%`,
        top: `${mouseY}%`
    };

    return (
        <>
        <div className={styles.debug}>
           <div>x:{mouseX}</div> 
            <div>y:{mouseY}</div>
        </div>

        <div className={styles.minimap}>

            <div className={styles.marker} style={markerPos} ></div>

        </div>
        </>
        

    );


}