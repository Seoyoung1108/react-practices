import React, {useState} from 'react';

function TabItem(props) {

  function onClick(){
    props.selectTab(props.no);
  }
    
  return (
    <li className={(() => {
      if (props.active === true) {
        return "active";
      } else {
        return "";
      }
    })()} onClick={onClick}>{props.name}</li>
  );
}
  
export default TabItem;