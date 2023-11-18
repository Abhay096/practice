import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

interface PostResponse {
  userId: number,
  id: number,
  title: string,
  body: string
}

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  constructor(public h: HttpClient) { }

  getting(): Observable<PostResponse[]> {
    return this.h.get<PostResponse[]>('https://jsonplaceholder.typicode.com/posts')
  }
  posting(): Observable<PostResponse[]> {
    return this.h.post<PostResponse[]>('https://jsonplaceholder.typicode.com/posts', { title: 'foo', body: 'bar', userId: 1, })
  }
  putting(): Observable<PostResponse[]> {
    return this.h.put<PostResponse[]>('https://jsonplaceholder.typicode.com/posts/1', { id: 1, title: 'foo', body: 'bar', userId: 1, })
  }
  patching(): Observable<PostResponse[]> {
    return this.h.patch<PostResponse[]>('https://jsonplaceholder.typicode.com/posts/1', { title: 'foo' })
  }
  delete(): Observable<PostResponse[]> {
    return this.h.delete<PostResponse[]>('https://jsonplaceholder.typicode.com/posts/1')
  }
}
