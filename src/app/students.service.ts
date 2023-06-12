import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http:HttpClient) {}
    url = 'http://localhost:3000/studentList';
    getAllStudents(){
     return this.http.get(this.url);
   }

    addStudentData(data:any){
      return this.http.post(this.url,data);
    }

    deleteStudentData(id:any){
      return this.http.delete(`${this.url}/${id}`);
    }


    updateStudentData(data:any,id:any){
      return this.http.put(`${this.url}/${id}/`,data);
    }

    studentDetail(id:any){
      return this.http.get(`${this.url}/${id}`);
    }


}
