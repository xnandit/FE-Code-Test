import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class UsersService {
	private baseUrl="https://jsonplaceholder.typicode.com"
	
	constructor(private http: HttpClient) {}

	getAllUsers(): Observable<any> {
		return this.http.get(`${this.baseUrl}/users`)
	}
  
}
