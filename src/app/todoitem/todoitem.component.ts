import { Component,EventEmitter,Input, OnInit, Output } from '@angular/core';
import { Itask } from '../Itask';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
@Component({
  selector: 'app-todoitem',
  templateUrl: './todoitem.component.html',
  styleUrls: ['./todoitem.component.scss']
})
export class TodoitemComponent implements OnInit {
 
  @Input()
  item!: Itask;
  @Input() i:number=-1;
  @Output() deletefromtodolist=new EventEmitter<number>
  @Output() updatetaskinlist =new EventEmitter<any>
  @Output () completetaskinlist =new EventEmitter<number>
  editform!:FormGroup;
  updateIndex!:any;
  editing:boolean=false;
  constructor(private fb:FormBuilder){
  }
  ngOnInit(): void {
    this.editform=this.fb.group({
      item:['',Validators.required]
    })
  }

  deleteTask(i:number){
    this.deletefromtodolist.emit(i);
  }
  editTask(item:Itask,i:number){
  this.editform.controls['item'].setValue(item.description);
  this.updateIndex=i;
  this.editing=true;
  }
  completetask(i:number){
    this.completetaskinlist.emit(i);
  }
  updatetask(){
    const todo={ description:this.editform.value.item,upindex:this.updateIndex}
    this.updatetaskinlist.emit(todo)
    this.editing=false;
  }
  cancel(){
    this.editing=false;
  }
}
