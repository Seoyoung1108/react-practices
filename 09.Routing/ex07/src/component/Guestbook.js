import React from 'react';
import Header from "../layout/Header";
import Navigation from "../layout/Navigation";
import Footer from "../layout/Footer";
import * as styles from '../assets/scss/component/Guestbook.scss';
import SiteLayout from '../layout/SiteLayout';

export default function Guestbook() {
    return (
        <SiteLayout>
            <div className={styles.Guestbook}>
                <h2>Guestbook</h2>
            </div>

        </SiteLayout>
    );
}