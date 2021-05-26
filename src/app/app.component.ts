import { Component, OnInit  } from '@angular/core';
import  * as data from './EmployeeData.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  displayEmployee :any;
  employeeList:any;
  ngOnInit(){
    this.employeeList  = (data  as  any).default
  }
  selectedEmployeeEvent(data){
    if(data.mode == 'add'){
      this.displayEmployee = data.data
    }else{
      this.employeeList.splice(data.data,1)
    }
      
    
  }
  saveEmployeeEvent(data){
    debugger
    if(!data.id){
      data.id = this.employeeList.length+1
      this.employeeList.push(data);
     
    }else{
      var index = this.employeeList.findIndex(i => i.id === data.id);
      debugger
      this.employeeList[index] = data
    }
    this.displayEmployee = {}
  }
}
