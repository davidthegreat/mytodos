import { Component } from '@angular/core';

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
})
export class TodosComponent  { 
	todo;
	newTodo;
	errorMsg;
	successMsg;

	constructor(){
		this.todos = ['Wash Dishes', 'Pickup Kids', 'Sleep'];
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

	removeTodo(todo){
		this.todos.splice(this.todos.indexOf(todo, 1))
	}

	resetTodos(){
		this.todos.length = 0;
		this.successMsg = 'Todos Cleared';
		this.newtodo = '';
	}
}
