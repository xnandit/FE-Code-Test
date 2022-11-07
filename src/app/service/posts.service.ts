import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private baseUrl="https://jsonplaceholder.typicode.com"
  private baseUrl2="https://dummyjson.com"

  constructor(private http: HttpClient) { }
  
  getAllPosts(): Observable<any> {
		return this.http.get(`${this.baseUrl}/posts`)
	}

  getPostById(id:any): Observable<any> {
    console.log("service", id)
    return this.http.get(`${this.baseUrl}/posts/${id}`)
  }

  getAllComments(postId:any): Observable<any> {
		return this.http.get(`${this.baseUrl}/posts/${postId}/comments`)
  }

  getAllProducts(): Observable<any> {
    return this.http.get(`${this.baseUrl2}/products`)
	}
}
