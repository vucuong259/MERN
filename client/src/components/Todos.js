import React, {useState, useEffect} from 'react';
import TodoItem from './Todoitem';
import AddTodo from './AddTodo';
import axios from 'axios';

const Todos = () => {

    const [todosState, setTodosState] = useState([]);

    useEffect(() =>{
        const getTodos = async () => {
            try {
                const res = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
                setTodosState(res.data);
            } catch(error) {
                console.log(error.message);
            }
        }

        getTodos();
    }, [])

    const markComplete = (id) => {
        const newTodos = todosState.map(todo => {
            if(todo.id === id) todo.completed = !todo.completed;
            return todo
        });

        setTodosState(newTodos);
    }

    const deleteTodo = async (id) => {
        try {
            await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
            const newTodos = todosState.filter(todo => {
                return todo.id !== id;
            });
    
            setTodosState(newTodos);
        } catch (error) {
            console.log(error.messages);
        }

        
    }

    const addTodo = async (title) => {
        try {
            const res = await axios.post('https://jsonplaceholder.typicode.com/todos', {
                title,
                completed: false
             }
            )
            const newTodos = [...todosState, res.data];
            setTodosState(newTodos);
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <>
        <AddTodo addTodoFunc = {addTodo} />
        {
            todosState.map((todo) => {
                return <TodoItem 
                    key={todo.id}
                    todoProps={todo} 
                    markCompleteFunc={markComplete} 
                    deleteTodoFunc = {deleteTodo}  
                    />
            })
        }
        </>
    )
}

export default Todos
