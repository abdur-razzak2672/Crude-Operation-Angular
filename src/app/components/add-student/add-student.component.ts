import { Component,OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';

import { StudentsService } from '../../students.service';
 
@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  constructor(private student:StudentsService) { }

  addStudent = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    studentId: new FormControl(''),
    department: new FormControl(''),
    semester: new FormControl(''),
});

message:boolean = false;
alert:boolean = false;

AddStudent(){
  console.log("Stusent Add hoyce");
  console.log(this.addStudent.value);

  if(this.addStudent.value.name == "" || this.addStudent.value.email == "" || this.addStudent.value.phone == "" || this.addStudent.value.studentId == "" || this.addStudent.value.department == "" || this.addStudent.value.semester == ""){
    this.alert = true;
  }else{
    this.student.addStudentData(this.addStudent.value).subscribe((result)=>{
      this.message = true;
      this.alert
      this.addStudent.reset({});
  
   
     })
  }

}

removeMessage(){
  this.message = false;
  this.alert = false;
}

  ngOnInit(): void {

  }
}
