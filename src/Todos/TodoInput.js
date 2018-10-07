import React from 'react'

const todoInput = (props) => (
    
    <form className="App" onSubmit={props.submit}>
        <input value={props.term} onChange={props.change} />
        <button>Submit</button>
    </form>
);

export default todoInput;