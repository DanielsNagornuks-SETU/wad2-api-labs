import React from 'react';

function Task(props) {
    return (
        <div className="card" style={{backgroundColor: props.done ? 'lightgrey' : '#5bb4c4'}}>
            <p className="title">{props.title}</p>
            <p>Due: {props.deadline}</p>
            <p className="description">{props.description}</p>
            <p className="priority" style={{backgroundColor: props.priority == 'Low' ? '#008000' : props.priority == 'Medium' ? '#d9a420' : '#ff0000'}}>{props.priority}</p>
            <button className="doneButton" onClick={props.markDone}>Done</button>
            <button className='deleteButton' onClick={props.deleteTask}>Delete</button>
        </div>
    );
}

export default Task;
