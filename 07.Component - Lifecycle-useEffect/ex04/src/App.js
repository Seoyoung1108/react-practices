import React, {useState, useEffect, useRef} from 'react';
import './assets/scss/App.scss'
import Clock from './Clock';

export default function App() {
    function getCurrentTime(){
        const now = new Date();
    
        return{
            hours: now.getHours(),
            minutes: now.getMinutes(),
            seconds: now.getSeconds(),
        }
    }

    const [currentTime, setCurrentTime] = useState(getCurrentTime);
    const [ticks, setTicks] = useState(0);

    const useInterval = (callback, delay) => {
        const savedCallback = useRef(null);
    
        useEffect(() => {
          savedCallback.current = callback;
        }, [callback]);
    
        useEffect(() => {
          const executeCallback = () => {
            savedCallback.current();
          };
    
          const timerId = setInterval(executeCallback, delay);
    
          return () => clearInterval(timerId);
        }, []);
    };
                                                                                                                                                                                                                                                          
    useInterval(() => {
      setCurrentTime(getCurrentTime);
      setTicks(x=>x+1);
    }, 1000);

    /**
     * useEffect(()=>{
     *  const intervalId = setInterval(()=>{
     *    setCurrentTime(getCurrentTime);
          setTicks(x=>x+1);
        },1000)
        
     *  return ()=>{
     *    clearInterval(intervalId);
     *  }
     * },[])
     * 
     * 
     * 
     */




    return (
        ticks % 5 === 0? null:
        <Clock
            title={`ex04: Clock Component II: ${ticks}`}
            hours={currentTime.hours}
            minutes={currentTime.minutes}
            seconds={currentTime.seconds} />
    );
}