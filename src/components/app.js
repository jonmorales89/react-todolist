import React, {Component} from 'react';
import axios from 'axios';
import List from './list';
import Add from './add_todo';

const BASE_URL = 'http://api.reactprototypes.com';

const API_KEY = '?key=lFZ101DeMo';


class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            list: []
        }
    }

    componentWillMount(){
        this.fetchTodos();
    }

    fetchTodos(){
        axios.get(`${BASE_URL}/todos${API_KEY}`).then((resp) => {
            console.log('Server response:',resp);

            this.setState({
                list: resp.data.todos
            })
        })
    }

    addTodo(item){
        axios.post(`${BASE_URL}/todos${API_KEY}`, item).then((resp) => {
            this.fetchTodos();
        }).catch((error) => {
            console.warn('Error adding to server:', error);
        })
    }

    removeTodo(id) {
        console.log('itemID:',id);
        axios.delete(`${BASE_URL}/todos/${id + API_KEY}`).then((resp)=>{
            console.log('Item deleted',resp);

            this.fetchTodos();
        })
    }
    
    render(){
        return (
        <div className="container">
            <h1 className="text-center">Todo List</h1>
            <Add add={(i) => this.addTodo(i)}/>
            <List remove={(id) => this.removeTodo(id)} list={this.state.list}/>
        </div>
        )
    }
}

export default App;
