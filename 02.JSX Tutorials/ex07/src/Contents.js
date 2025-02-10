import React from 'react';

function Contents(props) {
    /*
    1. JSX 밖은 JS 구문이 가능하기 때문에 주석문이 가능하다.
    */

    return (
        <div
            /*
                2. JSX 태그 안에 주석이 가능하다. - 비추
            */
            className='Clock'
            title='시계'>
            {/*
                3. 표현식이 실행되는 블록은 주석이 가능하다. - 추천
            */}
            <p>Comment</p>

            {/*
                4. JSX는 HTML이 아니므로 <!-- --> 사용 불가
            */}
            <div>{'00:00:00'}</div>
        </div>
    );
}

export default Contents;