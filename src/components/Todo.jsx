import React, { useState } from 'react'
import { Button, Card, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addTodoItem } from '../REDUX/todoSlice';


function Todo() {
    const todoList = useSelector(state => state.todoReducer.todoList);

    const [text, setText] = useState('');

    const dispatch = useDispatch();

    const handleAddTodo = () => {
        if (text.trim() !== '') {
            dispatch(addTodoItem({ newContent: text }));
            setText('');
        } else {
            alert('Enter Todo');
        }
    };
    return (
        <>

            <h1 className="mt-5">My Todo List</h1>

            <Form.Group className="mt-5 d-flex" controlId="exampleForm.ControlInput1" style={{ width: '400px' }}>
                <Form.Control type="text" placeholder="Add todo" className="form-control" value={text} onChange={e => setText(e.target.value)} />
                <div className="mt-5 text-center">
                    <button className="btn btn-primary" onClick={handleAddTodo}>Submit</button>
                </div>
            </Form.Group>

            <div className="content mt-5">
                {todoList.map(todo => (
                    <Card key={todo.id} style={{ height: '100%' }}>
                        <Card.Body>
                            <div className="d-flex justify-content-between">
                                <input type="checkbox" />
                                <Card.Title className="text-center">{todo.content}</Card.Title>
                                <button className='btn btn-danger'> DELETE</button>
                            </div>
                        </Card.Body>
                    </Card>
                ))}
            </div>

        </>
    )
}

export default Todo