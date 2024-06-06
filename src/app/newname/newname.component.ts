import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { environment } from 'src/environment/envirinment';
@Component({
  selector: 'app-newname',
  templateUrl: './newname.component.html',
  styleUrls: ['./newname.component.css']
})
export class NewnameComponent {

  newName: string = '';

  public apiUrl = environment.INVENTORY_BASEURL;

  constructor(private http: HttpClient, private router: Router, private snackBar: MatSnackBar) { }

  submitDevice() {
    const url = `${this.apiUrl}/add/name`;
    this.http.post(url, { desk: this.newName }).subscribe({
      next: (response: any) => {
        console.log('Employee Name submitted successfully', response);
        this.snackBar.open('Employee Name added successfully!', 'Close', {
          duration: 3000,
          verticalPosition: 'bottom',
          horizontalPosition: 'right'
        });
        this.newName = '';
      },
      error: (error: any) => {
        console.error('Error submitting Employee Name', error);
        this.snackBar.open('Failed to add Employee Name.', 'Close', {
          duration: 3000,
          verticalPosition: 'bottom',
          horizontalPosition: 'right'
        });
      }
    });
  }
  // submitDevice() {
  //   const url = `${this.apiUrl}/add/name`;
  //   this.http.post(url, { desk: this.newName }).subscribe({
  //     next: (response: any) => {
  //       console.log('Employee Name submitted successfully', response);
  //       this.snackBar.open('Employee Name added successfully!', 'Close', {
  //         duration: 3000,
  //         verticalPosition: 'bottom',
  //         horizontalPosition: 'right'
  //       });
  //       this.newName = '';
  //     },
  //     error: (error: any) => {
  //       console.error('Error submitting Employee Name', error);
  //       this.snackBar.open('Failed to add Employee Name.', 'Close', {
  //         duration: 3000,
  //         verticalPosition: 'bottom',
  //         horizontalPosition: 'right'
  //       });
  //     }
  //   });
  // }

  goDesk() {
    this.router.navigate(['/newdesk']);
  }

  goDevice() {
    this.router.navigate(['/newitem'])
  }

  goHome() {
    this.router.navigate(['/additem'])
  }
}