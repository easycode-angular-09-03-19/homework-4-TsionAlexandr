import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
	@Input() todoId: number;
	@Input() todoText: string;
	@Input() todoComplete: boolean;
	
	todoList: Todo[] = [
		{
			id: 1,
			text: 'Проснуться',
			completed: false
		},

		{
			id: 2,
			text: 'Заправить кровать',
			completed: false
		},

		{
			id: 3,
			text: 'Приготвить завтрак',
			completed: false
		},

		{
			id: 4,
			text: 'Позавтракать',
			completed: false
		},

		{
			id: 4,
			text: 'Помыть посуду',
			completed: false
		},

		{
			id: 4,
			text: 'Выехать на работу',
			completed: false
		}
	];

	
	constructor() {}

	deleteTodo(todoId: number) {
		for (let i = 0; i < this.todoList.length; i++)
			if (this.todoList[i].id == todoId) this.todoList.splice(i, 1);
			return;
	}

	Todocomplete() {
		this.todoList.forEach((todo) => {
		  todo.completed = true;
		});
	}

	ngOnInit() {
	}
}