import React, { useState } from 'react';
import Link from 'next/link'
import styles from '/styles/components/NavBar.module.scss'

export default function NavBar(props) {



    return (

        <div className={styles.NavBar}>
            <Link href="/">
                <a className={styles.imprint}>
                    <div className={styles.markTL}></div>
                    <div className={styles.markTR}></div>
                    <div className={styles.markBL}></div>
                    <div className={styles.markBR}></div>
                    <span>Lew<span className={styles.separator} aria-hidden="true">_</span>Wilde</span>
                </a>

            </Link>

        </div >

    );


}