import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TechService {

  constructor(private http: HttpClient) { }

  getmethod() {
    return this.http.get<any>("https://jsonplaceholder.typicode.com/todos").pipe(map((res: any) => {
      return res
    }))
  }
  // postmethod(){
  //   return this.http.post<any>("https://jsonplaceholder.typicode.com/todos").pipe(map((res:any)=>{
  //     return res
  //   }))
  // }
}
