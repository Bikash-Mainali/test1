import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { StudentService } from 'src/app/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  student!: any
  constructor(private studentService: StudentService,
    //private _router: Route,
    private route: ActivatedRoute) { }

  ngOnInit(): void {

    const studentId = this.route.snapshot.params["studentId"];
    this.studentService.getOne(studentId).subscribe({

      next: response => {
        console.log(response)
        this.student = response;
      },
      error: err => {
        //this._router.navigate(["error"])
      },
      complete: () => {
        console.log("complete")
      }
    })

  }

  onDelete(studentId: string) {
    this.studentService.deleteOne(studentId).subscribe({

      next: response => {

      },
      error: err => {

      },
      complete: () => {

      }
    })
  }

}
