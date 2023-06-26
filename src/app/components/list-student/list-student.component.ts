import { Component,OnInit } from '@angular/core';
import { StudentsService } from '../../students.service';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {
  constructor(private studentService:StudentsService){}
  students: any = {}
  ngOnInit():void{
    this.studentService.getAllStudents().subscribe((data)=>{
      this.students = data;
      console.log("data",data)
    })
  }
  message:boolean = false;
  deleteStudent(id:any){
    console.log("Delete Hoyce",id);
   if(confirm("Are you sure to delete")) {
    this.studentService.deleteStudentData(id).subscribe((result)=>{
      console.log("result",result);
      this.message = true;
      this.ngOnInit();
    })
   }
  }
  removeMessage(){
    this.message = false;
  }
}
