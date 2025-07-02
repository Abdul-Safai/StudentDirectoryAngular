import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NgForm } from '@angular/forms';

import { Student } from './student';
import { StudentService } from './student.service';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'contactmanager';
}