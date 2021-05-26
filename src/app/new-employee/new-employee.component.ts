import { Component, OnInit,Input,Output, EventEmitter,SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css']
})
export class NewEmployeeComponent implements OnInit {

  @Input() employee:any;
  employeeModel:any;
  @Output()
  saveEmployee: EventEmitter<any>= new EventEmitter();
  positionData=[{
    id:1,
    value:'Project Manger'
  },
  {
    id:2,
    value:'Production Manger'
  },{
    id:3,
    value:'HR Director'
  },{
    id:4,
    value:'Editor'
  }]
  constructor() { }

  ngOnInit() {
    debugger
    if(!this.employee){
      this.employeeModel = {}
    }else{
      this.employeeModel = {...this.employee}
    }
  }
  ngOnChanges(changeRecord: SimpleChanges) {
    console.log('----',changeRecord)
    this.employeeModel = {...changeRecord.employee.currentValue}

  } 
  saveEmployeeData(){
    debugger
    this.employeeModel.position = Number(this.employeeModel.position)
    this.saveEmployee.emit(this.employeeModel)
  }
  addEmployee(){
    this.employeeModel = {}
  }

}
