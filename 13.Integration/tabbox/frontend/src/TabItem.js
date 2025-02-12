import React, {useState} from 'react';

function TabItem(props) {
  const [selected, setSelected] = useState(props.active);

  function onClick(){
    setSelected(!selected);
  }
    
  return (
    <li className={(() => {
      if (selected === true) {
        return "active";
      } else {
        return "";
      }
    })()} onClick={onClick}>{props.name}</li>
  );
}
  
export default TabItem;