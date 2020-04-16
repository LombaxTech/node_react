import React, { Component, useState, useEffect } from 'react';

// const App = () => {
//     const [count, setCount] = useState(0);
//     const [secondCount, setSecondCount] = useState(10);

//     const increment = () => {
//         setCount(count + 1);
//     }

//     const incrementSecondCount = () => {
//         setSecondCount(secondCount + 10);
//     }

//     useEffect(() => {
//         document.title = `clicked ${count} times`
//         console.log('some change')
//     })

//     return (
//         <div>
//             <h2>Counter App</h2>
//             <h2>{count}</h2>
//             <button onClick={increment}>increment</button>
//             <h1>Second count: {secondCount}</h1>
//             <button onClick={incrementSecondCount}>Increment Second Count</button>
//         </div>
//     )
// }

const App = () => {
    // state
    const [news, setNews] = useState([]);
    const [searchQuery, setSearchQuery] = useState('react');
    const [url, setUrl] = useState('http://hn.algolia.com/api/v1/search?query=react');
    const [loading, setLoading] = useState(false);

    // fetch news
    const fetchNews = async () => {
        // setLoading(true)
        // fetch('http://hn.algolia.com/api/v1/search?query=react')
        // fetch(url)
        //     .then(result => result.json())
        //     // .then(data => console.log(data))
        //     .then(data => setNews(data.hits), setLoading(false))
        //     .catch(err => console.error(err))

        setLoading(true);
        try {
            let result = await fetch(url);
            let data = await result.json();
            setNews(data.hits);
            setLoading(false);
        } catch (err) {
            console.log(err)
        }

    }

    useEffect(() => {
        fetchNews();
    }, [url])

    const handleChange = e => {
        setSearchQuery(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        setUrl(`http://hn.algolia.com/api/v1/search?query=${searchQuery}`)
    }

    const showLoading = () => (loading ? <h2>Loading...</h2> : '');

    const searchForm = () => {
        return (
            <form onSubmit={handleSubmit}>
                <input type="text" value={searchQuery} onChange={handleChange} />
                <button>Search</button>
            </form>
        )
    }

    const showNews = () => (
        news.map((n, i) => (
            <p index={i}>{n.title}</p>
        ))
    )

    return (
        <div>
            <h1>News</h1>
            {showLoading()}
            {searchForm()}
            {showNews()}
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
