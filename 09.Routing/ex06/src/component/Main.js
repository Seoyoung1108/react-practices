import React from 'react';
import Header from "../layout/Header";
import Navigation from "../layout/Navigation";
import Footer from "../layout/Footer";
import * as styles from '../assets/scss/component/Main.scss';
import {SiteLayout} from '../layout';

export default function Main() {
    return (
        <SiteLayout>
            <div className={styles.Main}>
                <h2>Main</h2>
            </div>
        </SiteLayout>
    );
}