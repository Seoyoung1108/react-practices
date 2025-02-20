import React from 'react';
import * as styles from '../assets/scss/layout/Content.scss';
import Header from './Header';
import Navigation from './Navigation';
import Footer from './Footer';
import {Outlet} from 'react-router';

function SiteLayout() {
    return (
        <>
            <Header />
            <div className={styles.Content}>
                <Outlet />
            </div>
            <Navigation />
            <Footer />
        </>
    );
}

export default SiteLayout;