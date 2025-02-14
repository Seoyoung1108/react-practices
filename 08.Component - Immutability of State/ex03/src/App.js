import React, { useState } from 'react';
import data from './assets/json/data.js';
import update from 'react-addons-update';

function GoodList({goods}){
    const goodsUpdated = goods.concat({"no":"c002-003", "name":"블루양말", "price":2000, "amount":3});
    
    return(
        <ul>
            {goodsUpdated.map((g,i)=>{
                return <li key={i}>{`${g.name}:${g.price}:${g.amount}`}</li>
            })}
        </ul>
    )
}

function App() {
    const [order, setOrder] = useState(data);

    function onClick(){
        setOrder(update(order, {
            receive:{
                $set: '서울'
            }
        }));
    }

    return (
        <div id='App'>
            <p>{`배송지:${order.receive}`}</p>
            <p>{`결제수단:${order.payment.method}`}</p>
            <p>{'상품'}</p>
            <GoodList goods={order.goods} />
            <button onClick={onClick}>
                {"배송지 수정"}
            </button>
        </div>
    );
}

export {App};