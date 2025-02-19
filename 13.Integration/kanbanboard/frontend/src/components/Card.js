import React, { useEffect, useRef, useState } from 'react';
import Task from './Task';
import axios from 'axios';
import serialize from 'form-serialize';

function Card({card}) {
    const refAdd = useRef(null);
    const [tasks, setTasks] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const getTasks = async (id) => {
      const cardno = id;
      try{
        const response = await axios.get('/kanbanboard/task', {params:{cardno}}, {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        });
        const jsonResult = response.data;

        setTasks(jsonResult.data);

      } catch(error) {
          console.error(error);
      }
    }

    function onClick(id){
        getTasks(id);
        setIsOpen(!isOpen);
    }

    const addTask = async (task) => {
      try {
          const response = await axios.post('/kanbanboard/task', task, {
              headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
              },
          });

          const jsonResult = response.data;

          setTasks([jsonResult.data, ...tasks]);
          refAdd.current.reset();
      } catch(err) {
          console.error(err);
      }
    }

    function onClickAddTask(e){
        e.preventDefault();

        try{
            const task = {
              name: e.target.value,
              done: 'N',
              cardNo: card.no
            }

            addTask(task); 
        } catch(error){
            console.error(error);
        }
    }

    const handleKeyPress = (e) => {
      if (e.key === 'Enter') {
        onClickAddTask(e);  // Enter 키를 누르면 폼 제출
      }
    };

    const updateTasks1 = (deletedId) => {
      setTasks(tasks.filter((task)=>{
        //console.log(task.no, deletedId);
        task.no !== deletedId;
      }))
    };

    const updateTasks2 = (updatedTask) => {
      const index = tasks.findIndex((task) => task.no===updatedTask.no);
      setTasks([...tasks.slice(0,index), updatedTask, ...tasks.slice(index+1)]);
    }

    return (
        <div className='Card'>
          <div className={(() => {
            if (isOpen === true) {
                return "Card_Title_Open";
            } else {
                return "Card_Title";
            }
            })()} onClick={()=>onClick(card.no)}>{card.title}</div>
          <div className='Card_Details'>

            {card.description}

            <div className='Task_List' style={{display:isOpen?'':'none'}}>
              <ul>
                {tasks && tasks.map((task)=>{
                    return <Task task={task} cardNo={card.no} onUpdateTasks1={updateTasks1} onUpdateTasks2={updateTasks2} />
                })}
              </ul>

              <form ref={refAdd}>
                <input className='Input_Add_Task' name='name' type='text' placeholder='태스크 추가' onKeyDown={handleKeyPress} />
              </form>
            </div>
          </div>
        </div>
    );
}

export default Card;