import { useRef, useState } from 'react';

export function SubInput(){
    const [Text, setText] = useState("");
    const textRef = useRef();

    return (
        <div>
            <h1>SubInput 컴포넌트입니다.</h1>
            {/* ref속성을 통해 textRef객체의 textRef.
            current초기값이 undefined에서 <input ~>태그로 변경됨*/}
            <input type='text' ref={textRef} value={text} onChange={e => setText(e.target.value)} />
            <button type='button'
            onClick={() => {
                alert(text);
                // console.log('textRef.current: ', textRef.current);
                textRef.current.focus();
                textRef.current.value = "";
                //setText("");
            }
        }
        >작성완료</button>
        </div>
    );
}

export function Timer() {
    // const timerRef = useRef(null); //timerRef.current === null 이라는 의미
    const timerRef = useRef(); //timerRef.current ===undefined 라는 의미
    const [time, setTime] = useState(0);

    const startTimer = () => {
        if (!timerRef.current) {
            timerRef.current = setInterval(() => {
                setTime((prev) => prev +1);
            }, 1000);
        }
    };

    const stopTimer = () => {
        clearInterval(timerRef.current);
        timerRef.current = null;
    };

    const resetTimer = () => {
        clearInterval(timerRef.current);
        setTime(0);
        timerRef.current - null;
    };

    return (
        <div>
            <h1>{time}초</h1>
            <button onClick={startTimer}>시작</button>
            <button onClick={stopTimer}>중지</button>
            <button onClick={resetTimer}>초기화</button>
        </div>
    );
}