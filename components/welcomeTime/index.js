'use client'

import { useMemo } from 'react';
import { Heading } from '../Typography/Heading';


export default function WelcomeTime() {

    const text = useMemo(() => {

        const d = new Date();
        const hour = d.getHours()

        switch (hour + 1) {

            case 1: case 2: case 3: case 4: case 5: case 6: case 7: case 8: case 9: case 10: case 11: case 12:

                return ('Good Morning');


            case 13: case 14: case 15: case 16: case 17:

                return ('Good Afternoon');


            case 18: case 19: case 20: case 21: case 22: case 23: case 24:

                return ('Good Evening');


            default:
                return ('Welcome');

        }

    }, [])

    return (

        <Heading level={1}>{text}</Heading>

    )

}