import React, {useState} from "react";
import styled from "styled-components";


const TodoaddInput = styled.input`
    border-radius : 5px;
    font-size:2rem;
    width:500px;
    position: relative;
    padding-left: 20px;
    
`

const TodoButton = styled.button`
    border-radius: 5px;
    width:53px;
    height: 43px;
    vertical-align: middle;
    position: absolute;
`


const TodoForm = ({onClickEvent, stateId}) => {
    const [name, setName] = useState("");

    const onChangeEvent = (e) => {
        
        
        setName(e.target.value);
       
        
    }

    const onAddState = () =>{
        onClickEvent(stateId+1, name);
    }

    return (
        <div>
            <TodoaddInput type="text" placeholder="할 일을 적어주세요" onChange={onChangeEvent}/>
            <TodoButton onClick={onAddState}>추가</TodoButton>
        </div>
    )
}
export default TodoForm;