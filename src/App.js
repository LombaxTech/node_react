import React, { Component, useState, useEffect } from 'react';

const App = () => {
    const [count, setCount] = useState(0);
    const [secondCount, setSecondCount] = useState(10);

    const increment = () => {
        setCount(count + 1);
    }

    const incrementSecondCount = () => {
        setSecondCount(secondCount + 10);
    }

    useEffect(() => {
        document.title = `clicked ${count} times`
        console.log('some change')
    })

    return (
        <div>
            <h2>Counter App</h2>
            <h2>{count}</h2>
            <button onClick={increment}>increment</button>
            <h1>Second count: {secondCount}</h1>
            <button onClick={incrementSecondCount}>Increment Second Count</button>
        </div>
    )
}

// function App() {
//     return (
//         <h2>Counter App</h2>
//     );
// }

// class App extends Component {

//     state = {
//         count: 0
//     }

//     increment = () => {
//         this.setState({
//             count: this.state.count + 1
//         })
//     }

//     componentDidMount() {
//         document.title = `Clicked ${this.state.count} times`;
//     }

//     componentDidUpdate() {
//         document.title = `Clicked ${this.state.count} times`;
//         // console.log('hello world')
//     }

//     render() {
//         return (
//             <div>
//                 <h2>Counter App!</h2>
//                 <div>{this.state.count}</div>
//                 <button onClick={this.increment}>Increment</button>
//             </div>
//         )
//     }
// }

export default App;
