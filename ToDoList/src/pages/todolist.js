import React, {useState} from "react"
import TodoTitle from "../components/todoTitle";
import TodoList from "../components/todoList";
import TodoForm from "../components/todoForm";

const Todos = () => {

    const [state, setState] = useState([
        {
            id:1,
            Todo:"리액트 공부하기",
        },
        {
            id:2,
            Todo:"스위프트 공부하기"
        }
    ])
    
    
    const onClickEvent = (idvalue, Todovalue) => {
            setState([...state, {id:idvalue, Todo:Todovalue}])
            
    }

    
   return (
       <>   
            <TodoTitle count={state.length}/>
            <TodoForm onClickEvent={onClickEvent} stateId={state.length > 0 && state[state.length -1].id}/>
            {state.map((item) => (
                <TodoList id={item.id} Todo={item.Todo} state={state} setState={setState}/>//state와 setState를 props로 전달함으로써 TodoList에서 state변경 가능!
                
            ))}
            
       </>
   )
}

export default Todos;