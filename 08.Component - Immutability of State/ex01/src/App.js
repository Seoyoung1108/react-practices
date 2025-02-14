import React, { useEffect, useState } from 'react';
import data from './assets/json/data.js';

function App() {
    const [order, setOrder] = useState(data);
    const [payment, setPayment] = useState(order.payment);
    const [goods, setGoods] = useState(order.goods);

    useEffect(()=>{
        console.log('changed');
    },[order])

    function onClickReceiveUpdate(){
        // violation
        //order.receive='서울시 서초구 방배동';
        //setOrder(order);

        // solution(상태를 바꿀 때는 객체를 새로 만들어서 바꾸기)
        const orderUpdated = Object.assign({}, order, {receive:'서울시 서초구 방배동'});
        setOrder(orderUpdated);
    }

    function onClickMethodUpdate(){
        // violation
        // const orderUpdated = Object.assign({}, order);
        // orderUpdated.payment.method = 'Mobile';
        // setOrder(orderUpdated);

        // solution
        const orderUpdated = Object.assign({}, order);
        orderUpdated.payment=Object.assign({}, order.payment, {method: 'new payment'})
        setPayment(orderUpdated.payment);
    }

    function onClickAdd(){
        // violation
        //order.goods.

        // sol.2
        const goodsUpdated = [{"no":"c002-003", "name":"블루양말", "price":2000, "amount":3}];
        setGoods(goodsUpdated);

    }

    function onClickNameUpdate(){
        // 안됨. -> goods.splice(2,1,Object.assign({},goods[2],{name:'블루면티'}));
        const goodsUpdate = [...goods.slice(0,2), Object.assign({}, goods[2], {name:'블루면티'}), ...goods.slice(3)]
        setGoods(goodsUpdate);
    }

    return (
        <div id='App'>
            <button onClick={onClickReceiveUpdate}>
                {"배송지 수정"}
            </button>
            <br/><br/>

            <button onClick={onClickMethodUpdate}>
                {"결제수단 변경"}
            </button>
            <br/><br/>

            <button onClick={onClickAdd}>
                {"상품 추가"}
            </button>
            <br/><br/>

            <button onClick={onClickNameUpdate}>
                {"3rd 상품이름 변경"}
            </button>
            <br/><br/>

            <hr/>

            <p>{`배송지:${order.receive}`}</p>
            <p>{`결제수단:${order.payment.method}`}</p>
            <p>{'상품'}</p>
            <ul>
                {order.goods.map((g,i)=>{
                    return <li key={i}>{`${g.name}:${g.price}:${g.amount}`}</li>
                })}
            </ul>
        </div>
    );
}

export {App};