import React from 'react';

function Task({task}) {
    return (
        <li className='Task'>
            <input type='checkbox' checked={(() => {
            if (task.done === true) {
                return "true";
            } else {
                return "";
            }
            })()} />
            {task.name}
            <a href='#' className='Task_Remove'></a>
        </li>
    );
}

export default Task;