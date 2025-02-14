import React, {useState, useEffect} from 'react';
import update from 'react-addons-update';
import data from './assets/json/data.js';

function App() {
    const [order, setOrder] = useState(data);
    const [payment, setPayment] = useState(order.payment);
    const [goods, setGoods] = useState(order.goods);

    useEffect(()=>{
        console.log('changed');
    },[order, payment])

    function onClickReceiveUpdate(){

        const orderUpdated = update(order, {
            receive:{
                $set: '서울시 서초구 방배동'
            }});
        
            setOrder(orderUpdated);
    }

    function onClickMethodUpdate(){
        const orderUpdated = update(order, {
            payment:{
                method:{
                    $set:'Mobile'
                }
            }});
        
        setPayment(orderUpdated.payment);
    }

    function onClickAdd(){
        // recommended: 배열 요소 추가
        const goodsUpdated = update(goods, {
            $unshift:[{"no":"c002-003", "name":"블루양말", "price":2000, "amount":3}]
        })

        setGoods(goodsUpdated);

    }

    function onClickNameUpdate(){
        // recommended: 배열 요소 수정

        const goodsUpdate = update(goods, {
            2: {
                name:{
                    $set: '블루면티'
                }
            }
        })

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
            <p>{`결제수단:${payment.method}`}</p>
            <p>{'상품'}</p>
            <ul>
                {goods.map((g,i)=>{
                    return <li key={i}>{`${g.name}:${g.price}:${g.amount}`}</li>
                })}
            </ul>
        </div>
    );
}

export {App};