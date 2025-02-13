import React, { useEffect, useState } from 'react';
import Task from './Task';

function Card({card}) {
    const tasks = card.tasks;
    const [isOpen, setIsOpen] = useState(false);

    function onClick(){
        setIsOpen(!isOpen);
      }

    return (
        <div className='Card'>
          <div className={(() => {
            if (isOpen === true) {
                return "Card_Title_Open";
            } else {
                return "Card_Title";
            }
            })()} onClick={onClick}>{card.title}</div>
          <div className='Card_Details' style={{display:isOpen?'':'none'}}>

            {card.description}

            <div className='Task_List'>
              <ul>
                {tasks && tasks.map((task)=>{
                    return <Task task={task} />
                })}
              </ul>

              <input className='Input_Add_Task' type='text' placeholder='태스크 추가' />

            </div>

          </div>
        </div>
    );
}

export default Card;