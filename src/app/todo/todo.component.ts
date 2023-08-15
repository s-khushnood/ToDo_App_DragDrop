import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { FormGroup} from '@angular/forms'
import { Itask } from '../Itask';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent{
todoform!:FormGroup;
tasks:Itask[]=[];
done:Itask[]=[];
updateIndex!:any;
editing:boolean=false;
localItem:any;
constructor(private toastr: ToastrService){
  this.localItem = localStorage.getItem("tasks");
  if (this.localItem == null) {
    this.tasks = []
  }
  else {
    this.tasks = JSON.parse(this.localItem);
  }
  this.localItem=localStorage.getItem("done");
  if (this.localItem == null) {
    this.done = []
  }
  else {
    this.done = JSON.parse(this.localItem);
  }
}

addtaskinlist(todo:Itask){
  this.tasks.push(todo)
    this.toastr.success('Task Added Successfully!!');
    localStorage.setItem("tasks", JSON.stringify(this.tasks))
    setTimeout(()=>{
      todo.done=false,
      this.done.push(todo),
      this.tasks.splice(this.tasks.indexOf(todo),1)
    },todo.expirytime*1000*60)
}
deletefromtodolist(i:any){
this.tasks.splice(i,1)
this.toastr.warning('Task deleted');
localStorage.setItem("tasks", JSON.stringify(this.tasks))
}
deletefromdonelist(i:number){
  this.done.splice(i,1)
  this.toastr.warning('Task deleted');
  localStorage.setItem("done", JSON.stringify(this.done))
}
updatetaskinlist(todo:any){
this.tasks[todo.upindex].description=todo.description;
this.toastr.info('Task Updated Successfully');
localStorage.setItem("tasks", JSON.stringify(this.tasks))
}
completetaskinlist(i:number){
  this.tasks[i].done=true;
  this.done.push(this.tasks[i]);
  this.tasks.splice(i,1);
  this.toastr.info('Task Completed');
  localStorage.setItem("tasks", JSON.stringify(this.tasks))
  localStorage.setItem("done", JSON.stringify(this.done))
}
incompletetaskinlist(i:number){
  this.tasks.push(this.done[i]);
  this.done[i].done=false;
  this.done.splice(i,1);
  this.toastr.info('Marked as Incomplete');
  localStorage.setItem("tasks", JSON.stringify(this.tasks))
  localStorage.setItem("done", JSON.stringify(this.done))
}
drop(event: CdkDragDrop<Itask[]>) {
  if (event.previousContainer === event.container) {
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    localStorage.setItem("tasks", JSON.stringify(this.tasks))
    localStorage.setItem("done", JSON.stringify(this.done))
  } else {
    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex,
    );
    localStorage.setItem("tasks", JSON.stringify(this.tasks))
    localStorage.setItem("done", JSON.stringify(this.done))
  }
}
}
