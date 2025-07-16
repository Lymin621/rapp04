export default function View({number}){
    console.log("View Update!!!");
    return <div>{number % 2 === 0 ? <h3>짝수</h3> : <h3>홀수</h3>}</div>;
}