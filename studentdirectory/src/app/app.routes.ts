import { Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { StudentComponent } from './student/student.component';

export const routes: Routes = [
  { path: "about", component: AboutComponent },
  { path: "students", component: StudentComponent },
  { path: "**", redirectTo: "/students", pathMatch: "full" }
];
