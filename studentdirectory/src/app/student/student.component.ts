import { Component } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';   // ✅ Added for *ngFor, *ngIf, ngClass

@Component({
  standalone: true,
  selector: 'app-students',
  imports: [
    HttpClientModule,   // ✅ For your API calls
    FormsModule,        // ✅ For [(ngModel)]
    CommonModule        // ✅ For *ngFor, *ngIf, ngClass
  ],
  providers: [StudentService],
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  title = 'StudentDirectory';
  students: Student[] = [];
  student: Student = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    program: '',
    imageName: '',
    typeID: 0
  };

  error = '';
  success = '';

  constructor(
    private studentService: StudentService,
    private http: HttpClient,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents(): void {
    this.studentService.getAll().subscribe(
      (data: Student[]) => {
        this.students = data;
        this.success = 'Successful list retrieval';
        console.log('Successful list retrieval');
        console.log(this.students);
        this.cdr.detectChanges();
      },
      (err) => {
        console.error(err);
        this.error = 'Error retrieving students';
      }
    );
  }
  resetAlerts()
  {
    this.error = '';
    this.success = '';
  }
}
