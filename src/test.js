import React from 'react'
import ReactDom from 'react-dom'

const ele1 = React.createElement('h1',null,"Hello");
ReactDom.render(ele1,document.getElementById('root'))
class Test {

    constructor(posts) {
        this.posts = posts;
    }

}

let test = new Test([1,2,3]);
console.log(test.posts);