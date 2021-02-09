import React from 'react'

interface ToDoFormProps {
    onAdd(title: string): void
}

export const ToDoForm:React.FC<ToDoFormProps> = ({onAdd}) => {

const ref = React.useRef<HTMLInputElement>(null); 

const keyPressHandler = (e: React.KeyboardEvent) => { 
    if (e.key === "Enter" && ref.current!.value  ) {
        onAdd(ref.current!.value);
        ref.current!.value = '';
    }
}

const addTodoHandler = () => {
    if (ref.current!.value) {
        onAdd(ref.current!.value);
        ref.current!.value = '';
    }
}
    return (
        <div className="input-field mt-2">
            <input  
                    ref={ref}
                    onKeyPress={keyPressHandler} id="title" type="text" placeholder="Введите текст" />
                    
            <label className="active" htmlFor="title">Введите текст</label>
            <button onClick={addTodoHandler} className="btn waves-effect waves-light">Добавить
                <i className="material-icons right">send</i>
            </button>
        </div>
       
    )
}
