import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students!: any;

  constructor(private studentService: StudentService,
    private _router: Router) { }

  ngOnInit(): void {

    this.studentService.getAll().subscribe({

      next: response => {
        this.students = response;
      },
      error: err => {
        this._router.navigate(["error"])
      },
      complete: () => {
        console.log("complete")
        this._router.navigate(["students"])
      }
    })
  }

}
