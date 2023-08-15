import { Component,Input,Output, EventEmitter } from '@angular/core';
import { Itask } from '../Itask';

@Component({
  selector: 'app-doneitem',
  templateUrl: './doneitem.component.html',
  styleUrls: ['./doneitem.component.scss']
})
export class DoneitemComponent {
@Input() i!:number;
@Input() item!:Itask;
@Output() deletefromdonelist= new EventEmitter();
@Output () incompletetaskinlist =new EventEmitter();
deleteDoneTask(i:number){
  this.deletefromdonelist.emit(i);
}
incompletetask(i:number){
  this.incompletetaskinlist.emit(i);
}
}
