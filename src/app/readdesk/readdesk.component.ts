import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environment/envirinment';

@Component({
  selector: 'app-readdesk',
  templateUrl: './readdesk.component.html',
  styleUrls: ['./readdesk.component.css']
})
export class ReaddeskComponent implements OnInit {
  public apiUrl = environment.INVENTORY_BASEURL;

  deskempData: any[] = [];

  goBack() {
    // Navigate to the dashboard component
    this.router.navigate(['/readdesk']);
  }

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.fetchDeskData();
  }

  fetchDeskData() {
    const url = `${this.apiUrl}/data`;
    this.http.get<any[]>(url).subscribe(data => {
      this.deskempData = data;
    });
  }
}
