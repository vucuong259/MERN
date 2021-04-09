import React, {useState} from 'react';
import PropTypes from 'prop-types';

const AddTodo = (props) => {
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

    return (
        <form style={addTodoFormStyle}>
            <input style={addTodoInputStyle} type="text" name="title" placeholder="Thêm việc" onChange={changeTitle}/>
            <input type="submit" className="btn" value="Thêm"/>
        </form>
    )
}

AddTodo.propTypes = {

}

export default AddTodo;