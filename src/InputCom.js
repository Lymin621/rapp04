import { useState } from "react";

function InputCom() {
    const [text, setText] = useState("");
    const textOnChange = (e) => {
        setText(e.target.value);
    };

    const [date, setDate] = useState("");
    const dateOnChange = (e) => {
        setDate(e.target.value);
    };

    cosnt [Option, setOption] = useState("");
    const optionOnChange = (e) => {
        setOption(e.target.value);
    };

    const [tare, setTare] = useState("");
    const tareOnChange = (e) => {
        setTare(e.target.value);
    };

    return (
        <div>
            <input value={text} onChange={textOnChange} />
            <div>{text}</div>
            <input type="date" value={date} onChange={dateOnChange} />
            <div>{date}</div>
            <select value={option} onChange={optionOnChange}>
                <option key={"one"} value="one">1번</option>
                <option key={"two"} value="two">2번</option>
                <option key={"three"} value="three">3번</option>
            </select>
            <div>{option}</div>

            <textarea value={tare} onChange={tareOnChange} />
            <div>{tare}</div>
            {/* {
            dangerouslySetInnerHTML: 
            React에서 HTML 문자열을 직접 DOM에 렌더링하고자 할 때 사용하는 특수한 속성임.

            React는 기본적으로 XSS(Cross-Site Scripting) 공격을 방지하기 위해
            HTML 문자열을 escape(이스케이프) 처리를 한다.
            그래서 <br>과 같은 태그를 태그화하여 처리하지 못하고 "<br>"이라는
            문자열로 출력을 하므로,
            이부분을 태그로 출력될 수 있도록 하기 위해 사용하는 속성이다.
            }*/}
            <div dangerouslySetInnerHTML={{ __html: tare.replaceAll("\n", "<br>")}}></div>
            </div>
    );

}

export default InputCom;

/* **************************************************************************************** */
// export default function InputCom() {
//     const [text, setText] = useState("");
//     const [date, setDate] = useState("");
//     const [option, setOption] = useState("");
//     const [tare, setTare] = useState("");

//     return (
//         <div>
//             <input value={text} onChange={(e) => setText(e.target.value)} />
//             <div>{text}</div>
//             <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
//             <div>{date}</div>

//             <select value={option} onChange={(e) => setOption(e.target.value)}>
//                 <option key={"one"} value="one">1번</option>
//                 <option key={"two"} value="two">2번</option>
//                 <option key={"three"} value="three">3번</option>
//             </select>
//             <div>{option}</div>

//             <textarea value={tare} onChange={(e) => setTare(e.target.value)} />
//             <div>{tare}</div>
//             <div dangerouslySetInnerHTML={{ __html: tare.replaceAll("\n", "<br>") }}></div>
//         </div>
//     );
// }




/* ************************************************************************************** */
// function InputCom() {
//     const [namestate, setNamestate] = useState({
//         name: "",
//         birth: "",
//         gender: "",
//         etc: ""
//     });

//     const handleOnChange = (e) => {
//         consle.log('namestate: ', namestate);
//         setNamestate({
                //기존의 90~95번 줄의 state복사 {name : "", birth : "", genbder : "", etc : ""}
//              ...namestate,
                //위에서 복제한 state 속성 중 현재 이벤트에 해당되는 속성값만 덮어쓰기 하기
//              [e.target.name]: e.target.value ,
//         });
//     };

//     const [text, setText] = useState("");

//     const handleKeyUp = (e) => {
//         setText(e.target.value);
//     };

//     return (
//         <div>
//             <input 
//              type="text" 
//              name="name" 
//              value={namestate.name} 
//              onChange={handleOnChange}
//              placeholder="이름" 
//              />
//             <div>{namestate.name}</div>

//             <input 
//              type="date"
//              name="birth"
//              value={namestate.birth}
//              onChange={handleOnChange}
//              />
//             <div>{namestate.birth}</div>

//             <select name="gender" value={namestate.gender} onChange={handleOnChange}>
//                 <option key={"man"} value="man">남자</option>
//                 <option key={"two"} value="woman">여자</option>
//             </select>
//             <div>{namestate.gneder}</div>

//             <textarea name="etc" value={namestate.etc} onChange={handleOnChange} />
//             <div>{namestate.etc}</div><br /><br />
//             <div dangerouslySetInnerHTML={{ __html: namestate.etc.replaceAll("\n", "<br>") }}></div><hr />
//             <input type="text" value={text} onKeyUp={handleKeyUp} 
//              placeholder="입력 후 키보드에서 손 떼보세요" />
//             <p>입력한 값: {text}</p>
//         </div>
//     );
// }
// export default InputCom;