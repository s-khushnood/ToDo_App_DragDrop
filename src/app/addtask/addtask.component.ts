import { Component,EventEmitter,OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import { Itask } from '../Itask';
@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.scss']
})
export class AddtaskComponent implements OnInit {
todoform!:FormGroup;
@Output() addtaskinlist= new EventEmitter<Itask>();
constructor(private fb:FormBuilder){

}
ngOnInit(): void {
  this.todoform=this.fb.group({
    item:['',Validators.required],
    time:['',Validators.required]
  })
}
addtask(){
  console.log(this.todoform)
  this.addtaskinlist.emit({
    description:this.todoform.value.item,
    done:false,
    expirytime:this.todoform.value.time,
  })
  this.todoform.reset();
}
}
