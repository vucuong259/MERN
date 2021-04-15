import React, {useState} from 'react';
import PropTypes from 'prop-types';

const AddTodo = (props) => {

    const addTodo = props.addTodoFunc;

    const [title, setTitle] = useState('');

    const addTodoFormStyle = {
        display: 'flex'
    }

    const addTodoInputStyle = {
        flex: '10',
        padding: '5px'
    }
    
    const changeTitle = (event) => {
        setTitle(event.target.value);
    }

    const addSingleTodo = (e) => {
        e.preventDefault();
        if(title !== ''){
            addTodo(title);
            setTitle('');
        }
    }

    return (
        <form style={addTodoFormStyle} onSubmit={addSingleTodo}>
            <input style={addTodoInputStyle} type="text" name="title" placeholder="Thêm việc" value={title} onChange={changeTitle}/>
            <input type="submit" className="btn" value="Thêm"/>
        </form>
    )
}

AddTodo.propTypes = {
    addTodoFunc: PropTypes.func.isRequired
}

export default AddTodo;