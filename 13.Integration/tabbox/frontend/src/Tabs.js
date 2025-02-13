import React from 'react';
import TabItem from './TabItem';

function Tabs({data, selectTab}) {
    
    return (
        <ul>
            {data.map((tab)=>{
                return <TabItem no={tab.no} name={tab.name} active={tab.active} selectTab={selectTab} />
            })}
        </ul>
    );
}

export default Tabs;