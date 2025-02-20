import React from 'react';
import * as styles from '../../assets/scss/component/gallery/Gallery.scss';
import SiteLayout from '../../layout/SiteLayout';

export default function Gallery() {
    return (
        <SiteLayout>
            <div className={styles.Gallery}>
                <h2>Gallery</h2>
            </div>
        </SiteLayout>
    );
}