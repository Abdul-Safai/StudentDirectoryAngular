import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { map } from 'rxjs/operators';

import { Student } from './student';

@Injectable({
    providedIn: 'root',
})

export class StudentService {
    baseUrl = 'http://localhost/studentdirectoryangular/studentapi';

    constructor(private http: HttpClient)
    {
        // No statements required
    }

    getAll() {
        return this.http.get(`${this.baseUrl}/list`).pipe(
            map((res: any) => {
                return res['data'];
            })
        );
    }

    add(student: Student) {
        return this.http.post(`${this.baseUrl}/add`, {data: student}).pipe(
            map((res: any) => {
                return res['data'];
            })
        );
    }

    edit(student: Student)
    {
        return this.http.put(`${this.baseUrl}/edit`, {data: student});
    }

    delete(ID: any)
    {
        const params = new HttpParams().set('ID', ID.toString());
        return this.http.delete(`${this.baseUrl}/delete`, {params: params});
    }
}