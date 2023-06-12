import { Component,OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import { StudentsService } from '../../students.service';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  constructor(private student:StudentsService, private router:ActivatedRoute) { }

  updateStudent = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    studentId: new FormControl(''),
    department: new FormControl(''),
    semester: new FormControl(''),
});

message:boolean = false;
alert:boolean = false;

UpdateStudent(){
   console.log(this.router.snapshot.paramMap.get('id'));

  if(this.updateStudent.value.name == "" || this.updateStudent.value.email == "" || this.updateStudent.value.phone == "" || this.updateStudent.value.studentId == "" || this.updateStudent.value.department == "" || this.updateStudent.value.semester == ""){
    this.alert = true;
  }else{
    this.student.updateStudentData(this.updateStudent.value, this.router.snapshot.paramMap.get('id')).subscribe((result:any)=>{
      this.message = true;
      this.alert = false;
      this.ngOnInit();
   
   
     })
  }

}

removeMessage(){
  this.message = false;
  this.alert = false;
}

  ngOnInit(): void {

    console.log(this.router.snapshot.paramMap.get('id'));

    this.student.studentDetail(this.router.snapshot.paramMap.get('id')).subscribe((result:any)=>{
      this.updateStudent = new FormGroup({
        name: new FormControl(result['name']),
        email: new FormControl(result['email']),
        phone: new FormControl(result['phone']),
        studentId: new FormControl(result['studentId']),
        department: new FormControl(result['department']),
        semester: new FormControl(result['semester']),
    });   
   
     })



  }

}
