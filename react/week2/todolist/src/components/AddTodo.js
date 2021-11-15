import React from 'react'

function AddTodo(props) {
  
    return (
        <div>
            <label>New todo </label>
            <button onClick={props.addTodo}>Add todo</button>
        </div>
    )

}

export default AddTodo
