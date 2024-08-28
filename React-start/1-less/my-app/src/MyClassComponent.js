import { Component } from 'react';
class MyClassComponent extends Component{
 
    state = {
        todos: [],
        input: '',
        timer:0,
    };

    componentDidMount() {
        this.IntervalId = setInterval(() => {
            this.setState((prevState)=>({timer :prevState.timer+1}))
        },[1000])
        const lsTodos = localStorage.getItem('todos')
        if (lsTodos) {
            this.setState({todos: JSON.parse(lsTodos)})
        }
        console.log('componentDidMount')
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.todos !== this.state.todos) {
            localStorage.setItem('todos',JSON.stringify(this.state.todos))
            console.log('componentDidUpdate')
        }
        
    }

    addTasks =() => {
        this.setState({ todos: [...this.state.todos, this.state.input] })
         this.setState({input:''})
    };

    onChangeHandler = (event) => {
        const value = event.target.value
        this.setState({input:value})
    };

    componentWillUnmount() {
        clearInterval(this.IntervalId)
    }

    render() {
    return (
        <div>
            <h2>{this.state.timer}</h2>
            <input value={this.state.input} onChange={this.onChangeHandler} />
            <button onClick={this.addTasks}>Press me</button>
            {this.state.todos.map((todo,index)=><p key={index}>{todo}</p>)}
        </div>
    )
    }
}

export default MyClassComponent;