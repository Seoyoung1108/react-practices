import React from 'react';

function Contents({title, name}) {
    /*
    return (
        <p>{title}</p>
    );
    */
    return React.createElement('p', null, 'Pure React(React API) 컴포넌트');
}

export default Contents;