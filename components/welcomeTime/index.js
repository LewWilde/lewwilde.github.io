import React, { useState } from 'react';
import Link from 'next/link'
import styles from '/styles/components/WelcomeTime.module.scss'

export default function WelcomeTime(props) {

    const d = new Date();
    const hour = d.getHours()
    let text

    switch (hour + 1) {

        case 1: case 2: case 3: case 4: case 5: case 6: case 7: case 8: case 9: case 10: case 11: case 12:

            text = 'Good Morning';
            break;

        case 13: case 14: case 15: case 16: case 17:

            text = 'Good Afternoon';
            break;

        case 18: case 19: case 20: case 21: case 22: case 23: case 24:

            text = 'Good Evening';
            break;

        default:
            text = 'Welcome';
            break;

    }

    if (typeof window === "undefined") {
        return text = 'Hello';
    }

    return (

        <h1 className={styles.heading}>{text}</h1>



    )

}