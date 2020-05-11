import React, {Component} from 'react';
import ReactDOM from "react-dom";
import Main from "./Main"
import {BrowserRouter} from 'react-router-dom'

// let tasks=["task1","task2","task3"];
// let liList = tasks.map((t,i)=> {
//     return React.createElement("li", {key:i}, t)
// });
// let element = React.createElement("ol",null,liList);

// const element = <div><ol>
//         {tasks.map((t,i) => <li key={i}>{t}</li>)}
//     </ol></div>;
//
// class Title extends Component{
//
//     render(){
//         return (<h1>Title</h1>)
//     }
// }
// class Body extends Component{
//     render(){
//         return (<div><ol>
//             {this.props.tasks.map((t,i) => <li key={i}>{t}</li>)}
//         </ol></div>)
//     }
// }
// class Main extends Component{
//     render(){
//         return <div><Title/>
//             <Body tasks={["test1","test2","test3"]}/>
//         </div>
//     }
// }
// ReactDOM.render(<Main/>,document.getElementById('root'));

ReactDOM.render(<BrowserRouter><Main/></BrowserRouter>,document.getElementById('root'));
