import { Component } from '@angular/core';

import { TodoService } from '../../services/todo.service'


@Component({
  selector: 'todos',
  template: `
  	<div>
  		<div *ngIf="errorMsg">
  			<div class="alert alert-danger">{{errorMsg}}</div>
  		</div>
 		<div *ngIf="successMsg">
  			<div class="alert alert-success">{{successMsg}}</div>
  		</div>
         <input type="text" class="form-control" [(ngModel)]="newTodo" (keyup.enter)="addTodo()"/>
         <br>
  	</div>
  	<ul class="list-group">
	  	<li *ngFor="let todo of todos" class="list-group-item">
	  		<a href="#" (click)="removeTodo(todo)">{{todo}}</a>

	  	</li>
  	</ul>
  	<button class="btn btn-default" (click)="resetTodos()">Reset</button>
  
  `,
  providers: [TodoService]
})
export class TodosComponent  { 
    todos:any;
	newTodo:any;
	errorMsg:string;
	successMsg:string;

	constructor(private todoService: TodoService){
		this.todos = todoService.getTodos();
	}

	addTodo(){
		if(!this.newTodo || this.newTodo.length < 3){
			this.successMsg = '';
			this.errorMsg = 'Todo must be at least 3 characters';
		} else {			
			this.todos.push(this.newTodo);
			this.errorMsg = '';
			this.successMsg = 'Todo Added';
		}
	}

	  removeTodo(todos){
   		this.todoService.removeTodo(todos);
    }

	resetTodos(){
		this.todos.length = 0;
		this.successMsg = 'Todos Cleared';
		this.newtodo = '';
	}
}
