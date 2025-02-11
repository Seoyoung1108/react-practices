import React from 'react';

function TitleBar02() {
    const onClick = () => {
        console.log('function');
    }
    return (
        <div>
            <h4>
                Function Handler in Function Component(click here!)
            </h4>
        </div>
    )
}

export default TitleBar02;