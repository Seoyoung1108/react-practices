import React, {useState, useEffect} from 'react';

function TabView({contents}) {

    return (
        <div className='Tab_Biew'>
            {contents}
        </div>
    );
}

export default TabView;