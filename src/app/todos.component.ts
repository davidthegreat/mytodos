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
	  		{{todo}}
	  	</li>
  	</ul>
  	
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


}
