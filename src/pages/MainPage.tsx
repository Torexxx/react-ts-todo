import React, {useEffect} from 'react'
import { ToDoForm } from '../components/ToDoForm';
import { ToDoList } from '../components/ToDoList';
import { ITodo } from '../interfaces';


declare var confirm: (question: string) => boolean;


export const MainPage: React.FC = () => {
    const [todos, setTodos] = React.useState<ITodo[]>([]); 

    useEffect(() => {
      let data = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[]
      setTodos(data)
  
    },[])
  
    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos))
    },[todos])
  
    const addHandler = (title: string): void => {
  
      let newTodo: ITodo = {
        title,
        id: Date.now(),
        completed: false,
        
      }
      setTodos(prev => [newTodo, ...prev]);
    }
  
    const removeHandler = (id: number) => {
      const answer = confirm('Вы уверены?')
      if(answer) {
        setTodos(prev => prev.filter( todo => todo.id !== id))
      }
    }
  
    const toggleHandler = (id: number) => {
      setTodos(prev => 
        prev.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
          return todo
      }))
    }

    return (
        <>
            <ToDoForm onAdd={addHandler} />
            <ToDoList todos={todos} onToggle ={ toggleHandler } onRemove={ removeHandler } />
        </>
    )
}
