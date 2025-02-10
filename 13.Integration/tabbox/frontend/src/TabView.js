import React, {useState, useEffect} from 'react';

function TabView({data}) {
    const [view, setView] = useState("");

    useEffect(() => {
        for(let i=0; i<7; i++){
            if(data[i].active===true){
                setView(data[i].contents);
                console.log(data[i].contents);
                break;
            }
        }
      }, []);

    return (
        <div>
            {view}
        </div>
    );
}

export default TabView;