import React from 'react';
import Tabs from './Tabs';
import TabView from './TabView';
import './assets/scss/TabBox.scss';

function TabBox({data}) {
    return (
        <div className="tab-box">
            <Tabs data={data} />
            <TabView data={data} />
        </div>
    );
}

export default TabBox;