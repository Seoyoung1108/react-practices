import React from 'react';
import Header from "../layout/Header";
import Navigation from "../layout/Navigation";
import Footer from "../layout/Footer";
import * as styles from '../assets/scss/component/Main.scss';

export default function Main() {
    return (
        <>
            <Header/>
            <div className={styles.Main}>
                <h2>Main</h2>
            </div>
            <Navigation/>
            <Footer/>
        </>
    );
}