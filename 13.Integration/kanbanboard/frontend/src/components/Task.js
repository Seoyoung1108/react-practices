import React from 'react';
import axios from 'axios';

function Task({task, cardNo, onUpdateTasks1, onUpdateTasks2}) {
    const cardno = cardNo;
    
    let isDone = task.done==="N"? 0:1;

    const deleteTask = async (id) => {
        try{
            const response = await axios.delete(`/kanbanboard/task/${id}`);
            const jsonResult = response.data;
            
            onUpdateTasks1(jsonResult.data);

        } catch(error) {
            error.response ? `${error.response.status}` : error;
        }
    }

    const updateTask = async (id) => {
        isDone = 1-isDone;


        try{
            const response = await axios.put(`/kanbanboard/task/${id}?isDone=${isDone}&cardno=${cardno}`);
            const jsonResult = response.data;
            console.log(jsonResult);

            onUpdateTasks2(jsonResult.data);

        } catch(error) {
            error.response ? `${error.response.status}` : error;
        }
        

    }

    function onClickUpdate(e){
        e.preventDefault();
        updateTask(task.no);
    }

    return (
        <li className='Task'>
            <input type='checkbox' onChange={onClickUpdate} checked={(() => {
            if (task.done === "Y") {
                return "true";
            } else {
                return "";
            }
            })()}/>
            {task.name}
            <button onClick={()=>deleteTask(task.no)} className='Task_Remove'></button>
        </li>
    );
}

export default Task;