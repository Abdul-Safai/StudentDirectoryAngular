import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';   // ✅ Add FormsModule here

@Component({
  selector: 'app-root',
  standalone: true,  // ✅ Using standalone API
  imports: [
    RouterOutlet,
    FormsModule       // ✅ Enables [(ngModel)] everywhere in your app!
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected title = 'stud';  // ✅ Your project title
}
