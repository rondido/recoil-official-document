import React, { useState } from 'react'
import { useSetRecoilState } from 'recoil';
import { todoListState } from './todoListState';

export default function TodoItemCreator() {
    const [inputvalue,setInputValue] = useState('');
    const setTodoList = useSetRecoilState(todoListState);
    const addItem = () =>{
        setTodoList((oldtodoList)=>[
            ...oldtodoList,
            {
                id:getId(),
                text:inputvalue,
                isComplete:false,
            }
        ])
        setInputValue('');
    }
    const onChange = ({target:{value}}) =>{
        setInputValue(value);
    }
  return (
    <div>
        <input type="text" value={inputvalue} onChange={onChange}/>
        <button onClick={addItem}>Add</button>
    </div>
  )
 

}
 //고유 생성 id 유틸리티
let id = 0;
function getId(){
  return id++;
}