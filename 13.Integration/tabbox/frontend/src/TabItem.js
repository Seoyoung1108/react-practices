import React from 'react';

function TabItem(props) {
  function onClick(){

  }
    
  return (
      <>
      {(() => {
          if (props.active === true) {
            return (
              <li className="active" onClick={onClick}>{props.name}</li>
            );
          } else {
            return (
              <li>{props.name}</li>
            );
          }
        })()}
      </>
  );
}

export default TabItem;