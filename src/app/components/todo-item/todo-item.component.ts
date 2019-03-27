import {Component, OnInit, Input, Output, EventEmitter, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
	isTodoCompleted = false;
	@Input() todo: Todo;
	@Output() delTodo: EventEmitter<number> = new EventEmitter<number>();
	@Output() compTodo: EventEmitter<number> = new EventEmitter<number>();

	constructor() {}

	deleteTodo() {
		const answer = confirm('Удалить задачу?');
		if (answer) {
			this.delTodo.emit(this.todo.id);
		}
	}

	completeTodo() {
		this.isTodoCompleted = !this.isTodoCompleted;
		this.compTodo.emit(this.todo.id);
	}

	ngOnInit() {
	}
}