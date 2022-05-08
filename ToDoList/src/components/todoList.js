import React,{useState} from "react";


const TodoList = ({id, Todo, state, setState}) => {//state, setState받아와서 state조작(완료 버튼 누르면 e.target 객체 삭제)
    

    const onRemoveEvent = (e) => {
        const removeState = state.filter((item) => item.id !== parseInt(e.target.value));
        setState(removeState);
        
    }
    return (
        <div>{id}.{Todo}<button value={id} onClick={onRemoveEvent}>완료</button></div>
        
        
    )
}
export default TodoList;