import React, {useRef} from 'react';
import logo from './assets/images/react-logo.png';

export default function App() {
    const imgRef = useRef(null);

    const onKeyUp = (e) =>{
        if(e.key==='Enter'){
            console.log('keyup:'+ e.target.value);
        }
    }

    const onKeyDown = (e) =>{
        //console.log('keydown:'+ e.target.value);
    }

    const onChange = (e)=>{
        console.log(e.target.value);
    }

    const onFocus = (e)=>{
        console.log('focus');
    }

    const onBlur = (e)=>{
        console.log('blur');
    }

    const onMouseOverImg = (e) => {
        console.log(imgRef.current.offsetTop);
        const offsetTop=imgRef.current.offsetTop;
        const offsetLeft=imgRef.current.offsetLeft;
        console.log(e.clientX,e.clientY);
        // 크기 계산
    }
    //onMouseMove, onMouseOut, onMouseUp, onMouseDown, onClick, onDoubleClick

    return (
        <>
            <h2>Event Handler 예제</h2>
            <input
                type='text'
                placeholder='메세지를 입력 하세요'
                onKeyUp={onKeyUp}
                onKeyDown={onKeyDown}
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur} />
            <br/>
            <br/>
            <img
                ref={imgRef}
                style={{
                    cursor: 'pointer',
                    width: 190,
                    border: '1px solid #ccc'
                }}
                src={logo}
                onMouseOver={onMouseOverImg}/>
        </>
    );
}