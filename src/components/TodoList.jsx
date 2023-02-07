import React from 'react'
import { useRecoilValue } from 'recoil'
import TodoItemCreator from './TodoItemCreator';
import { TodoListFilters } from './TodoListFilters';
import { todoListState } from './todoListState';
import { TodoListStats } from './TodoListStats';
import {TodoItem} from './TodoItem';
export default function TodoList() {
    const todoList = useRecoilValue(todoListState);
  return (
    <>
        <TodoListStats/>
        <TodoListFilters/>
        <TodoItemCreator/>
        {todoList.map((todoItem)=>(
            <TodoItem key={todoItem.id} item={todoItem}/>
        ))}
    </>
  )
}
