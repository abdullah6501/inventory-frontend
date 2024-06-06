// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class DataService {

//   constructor() { }
// }

// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { environment } from 'src/environment/envirinment';

// @Injectable({
//   providedIn: 'root'
// })
// export class DataService {
//   private apiUrl = environment.INVENTORY_BASEURL;

//   constructor(private http: HttpClient) {}

//   saveData(data: any): Observable<any> {
//     return this.http.post(`${this.apiUrl}/saveData`, data);
//   }
// } 