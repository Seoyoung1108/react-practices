import React from 'react';
import Header from "../layout/Header";
import Navigation from "../layout/Navigation";
import Footer from "../layout/Footer";
import * as styles from '../assets/scss/component/About.scss';
import SiteLayout from '../layout/SiteLayout';

export default function About() {
    return (
        <SiteLayout>
            <div className={styles.About}>
                <h2>About</h2>
            </div>
        </SiteLayout>
    );
}