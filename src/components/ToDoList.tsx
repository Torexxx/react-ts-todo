import React from 'react';
import { ITodo } from '../interfaces';

type ToDoListProps = {
    todos: ITodo[]
    onToggle: (id: number) => void
    onRemove(id: number): void
}

export const ToDoList: React.FC<ToDoListProps> = ({ todos, onToggle, onRemove }) => {

    const removeHanler = (e: React.MouseEvent<HTMLElement>, id:number) => {
        e.preventDefault();
        onRemove(id);
    }
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement> , id: number) => {
        onToggle(id);
    }

    if(todos.length === 0) {
        return <p className="center">Todo нет</p>
    }

    return (
        <ul>
            { todos.map(todo => {

            let classes = ['todo'];
            if (todo.completed) {
                classes.push('completed');
            }
                return (
                    <li className={classes.join(' ')} key={todo.id}>
                        <label>
                            <input type='checkbox' checked={todo.completed} onChange={(e) => changeHandler(e, todo.id)} />
                            <span>{todo.title}</span>
                            <i className='material-icons red-text'
                             onClick={ (e) => removeHanler(e, todo.id) }>delete</i>
                        </label>
                    </li>
                )
            })}

        </ul>
    )
}
