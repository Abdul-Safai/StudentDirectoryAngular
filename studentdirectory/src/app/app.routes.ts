import { Routes } from '@angular/router';

import { About } from './about/about';
import { Student } from './student/student';

export const routes: Routes = [
    { path: "students", component: Student},
    { path: "about", component: About},
    { path: "**", redirectTo: "/students"}
];