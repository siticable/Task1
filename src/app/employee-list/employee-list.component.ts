import { Component, OnInit, EventEmitter,Output,Input } from '@angular/core';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {


  selectedHero:any;
  @Input() employeeList:any;
  @Output()
  selectedEmployee: EventEmitter<any>= new EventEmitter();
 
  public positionMap = {
    1:'Project Manger',
    2:'Production Manger',
    3:'HR Director',
    4:'Editor'
  }
  constructor() { }

  ngOnInit() {
    console.log('data',this.employeeList);
  }
  onSelect(employee: any): void {
    let mode={
      mode:'add',
      data:employee
    }
   this.selectedEmployee.emit(mode)
  }
  getPositionName(id){
    return this.positionMap[id]
  }
  deleteEvent(index){
    debugger
    let mode={
      mode:'delete',
      data:index
    }
    this.selectedEmployee.emit(mode)
  }
  

}
