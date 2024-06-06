import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/envirinment';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  public apiUrl = environment.INVENTORY_BASEURL;

  constructor(private http: HttpClient) { }

  getDevices(): Observable<any[]> {
    const url = `${this.apiUrl}/devices`;
    return this.http.get<any[]>(url);
  }
}
