import { screen, within } from "@testing-library/react";
import { describe , expect,test } from 'vitest';
import { renderWithProviders } from "../../test/utils/utils-for-test";
import AddTodo from "./AddTodo";
import userEvent from '@testing-library/user-event';
import todoSlice,{initialState,addTodo} from "../../redux/slice/todoSlice";




describe("addtodo components",()=>{
    test("input should be empty",()=>{
        renderWithProviders(<AddTodo/>)
        const Input = screen.getByRole('todoInput')
        expect(Input.value).toBe("");
         
        
    });
    test("should be able to write into input",async()=>{
        renderWithProviders(<AddTodo/>)
        
        const inputNotEmpty = screen.getByRole('todoInput')
       await userEvent.type(inputNotEmpty,"first")
       expect(inputNotEmpty).toHaveValue("first")
        
    })
    test('add new todo',async()=>{
        const afterReducerOperation = todoSlice(initialState,addTodo('hello'));
         expect(afterReducerOperation.todoList.at(0).text).toEqual('hello');
     
       
      
    })
})