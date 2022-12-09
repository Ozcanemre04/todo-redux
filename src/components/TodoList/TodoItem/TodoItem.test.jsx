import { screen } from "@testing-library/react";
import { describe , expect,test, vitest } from 'vitest';
import { renderWithProviders } from "../../../test/utils/utils-for-test";
import TodoItem from "./TodoItem";
import userEvent from '@testing-library/user-event';
import todoSlice,{initialState,addTodo,toggleTodo,deleteTodo} from "../../../redux/slice/todoSlice";




describe('todoItem component',()=>{

    test('todo initial value null',()=>{
        expect(initialState.todoList).toEqual([])
    })
    test('delete Todo',()=>{
        
         const add  = todoSlice(initialState,addTodo('hi'))
         console.log(add.todoList);
         expect(add.todoList.length).toEqual(1);
        
        const sup = todoSlice(initialState,deleteTodo(add.todoList.at(0).id));
         console.log(sup.todoList);
        expect(sup.todoList).toStrictEqual([])
    })
   
})