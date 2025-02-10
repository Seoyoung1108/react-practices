import React from 'react';

function TabItem(props) {
    return (
        <>
        {(() => {
            if (props.active === true) {
              return (
                <li className="active">{props.name}</li>
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