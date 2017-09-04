import { Injectable } from '@angular/core';

@Injectable()
export class TodoService{
    todos = ['abc', 'fgh', 'ght'];

    getTodos(){
        return this.todos;
    }

    addTodo(todoitm){
        this.todos.push(todoitm);
    }

    removeTodo(todoItm){
        this.todos.splice( this.todos.indexOf(todoItm),1 );
    }

    resetTodo(){
        this.todos.length=0;
    }
}