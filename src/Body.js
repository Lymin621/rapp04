import { useState } from 'react';
import View from './View';

function Body() {
    console.log("Body Update!!!");
    const [count, setCount] = useState(0);

    const onIncrease = () => {
        //count++ 같은 후위연산자 사용시 작동 불가.
        //리액트 Hook의 state를 사용하는 변수는
        //직접 값을 변경할 수 없다. (count 직접 변경 불가)
        setCount(count + 1);
    };

    const onDecrease = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <h1>Body.js의 내용입니다.</h1>
            <h2>{count}</h2>
            <View number={count} />
            <div>
                <button onClick={onDecrease}>-</button>
                <button onClick={onIncrease}>+</button>
            </div>
        </div>
    );
}

export default Body;