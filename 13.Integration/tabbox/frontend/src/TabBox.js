import React,{useState} from 'react';
import Tabs from './Tabs';
import TabView from './TabView';
import './assets/scss/TabBox.scss';

function TabBox({data}) {
    const [activeIndex, setActiveIndex]=useState(0);

    const selectTab = (no)=>{
        //console.log(`${no} selected`);
        const index = data.findIndex((e)=>e.no===no);
        setActiveIndex(index);
    }

    return (
        <div className="tab-box">
            <Tabs data={data.map((e,i)=>{
                const {contents, ...rest} = e;

                if(i===activeIndex){
                    rest.active=true;
                }

                return rest;
            })} selectTab={selectTab} />
            <TabView data={data} selectTab={selectTab} />
        </div>
    );
}

export default TabBox;