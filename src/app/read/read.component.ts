import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environment/envirinment';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { MatSnackBar } from '@angular/material/snack-bar';

interface Employee {
  Emp_name: string;
  desk: string;
  monitor: string;
  mouse: string;
  CPU: string;
  key_board: string;
  VOIP_IP_Phone: string;
  Wooden_Pedestral: string;
  Water_Bottle: string;
  Bag: string;
  web_camera: string;
  Head_phone: string;
}

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        right: '0'
      })),
      state('out', style({
        right: '-100%'
      })),
      transition('out => in', [
        animate('0.5s ease-in-out')
      ]),
      transition('in => out', [
        animate('0.5s ease-in-out')
      ])
    ])
  ]
})
export class ReadComponent implements OnInit {

  public apiUrl = environment.INVENTORY_BASEURL;

  deskData: Employee[] = [];
  filteredDeskData: Employee[] = [];
  selectedEmployee: Employee | null = null;
  animationState: string = 'out';
  searchTerm: string = '';
  searchType: 'Emp_name' | 'desk' = 'Emp_name';

  goBack() {
    this.router.navigate(['/additem']);
  }
  goDesk() {
    this.router.navigate(['/readdesk']);
  }

  constructor(private http: HttpClient, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.fetchDeskData();
  }

  fetchDeskData() {
    const url = `${this.apiUrl}/data`;
    this.http.get<Employee[]>(url).subscribe(data => {
      this.deskData = data;
      this.filteredDeskData = data;
    });
  }

  filterEmployees() {
    const url = `${this.apiUrl}/data`;
    const params: any = {};
    if (this.searchTerm) {
      params[this.searchType] = this.searchTerm;
    }
    this.http.get<Employee[]>(url, { params }).subscribe(data => {
      this.filteredDeskData = data;
    });
  }

  downloadCSV(employee: Employee) {
    const csvData = this.convertToCSV([employee]);
    const blob = new Blob([csvData], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('style', 'display: none');
    a.href = url;
    a.download = `${employee.Emp_name}_details.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }

  downloadAllCSV() {
    const csvData = this.convertToCSV(this.filteredDeskData);
    const blob = new Blob([csvData], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('style', 'display: none');
    a.href = url;
    a.download = 'all_employee_details.csv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }

  convertToCSV(data: Employee[]): string {
    const headers = ['Employee Name', 'Desk', 'Monitor', 'Mouse', 'CPU', 'Key Board', 'VOIP IP Phone', 'Wooden Pedestal', 'Water Bottle', 'Bag', 'Web Camera', 'Head Phone'];
    const rows = data.map(item => [
      item.Emp_name,
      item.desk,
      item.monitor,
      item.mouse,
      item.CPU,
      item.key_board,
      item.VOIP_IP_Phone,
      item.Wooden_Pedestral,
      item.Water_Bottle,
      item.Bag,
      item.web_camera,
      item.Head_phone
    ]);

    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.join(','))
    ].join('\n');

    return csvContent;
  }

  editEmployee(index: number) {
    this.selectedEmployee = { ...this.filteredDeskData[index] };
    this.animationState = 'in';
    document.body.classList.add('blur-background');
  }

  closeModal() {
    this.selectedEmployee = null;
    this.animationState = 'out';
    document.body.classList.remove('blur-background');
  }

  saveChanges() {
    if (this.selectedEmployee) {
      const url = `${this.apiUrl}/update`;
      this.http.put(url, this.selectedEmployee).subscribe(response => {
        console.log("Employee details updated successfully!", response);
        this.snackBar.open('Device details updated successfully!', 'Close', {
          duration: 3000,
          verticalPosition: 'bottom',
          horizontalPosition: 'right'
        });
        this.fetchDeskData();
        this.closeModal();
      }, error => {
        console.error("Error updating employee details:", error);
        this.snackBar.open('Failed to update device details.', 'Close', {
          duration: 3000,
          verticalPosition: 'bottom',
          horizontalPosition: 'right'
        });
      });
    }
  }
}
