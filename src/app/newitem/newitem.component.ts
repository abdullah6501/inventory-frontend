import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { environment } from 'src/environment/envirinment';

@Component({
  selector: 'app-newitem',
  templateUrl: './newitem.component.html',
  styleUrls: ['./newitem.component.css']
})
export class NewitemComponent {
  newDevice: string = '';

  public apiUrl = environment.INVENTORY_BASEURL;

  constructor(private http: HttpClient, private router: Router, private snackBar: MatSnackBar) { }

  submitDevice() {
    const url = `${this.apiUrl}/add/list`; // Corrected endpoint URL
    this.http.post(url, { device: this.newDevice }).subscribe({
      next: (response: any) => {
        console.log('Device submitted successfully', response);
        this.snackBar.open('Device added successfully!', 'Close', {
          duration: 3000,
          verticalPosition: 'bottom',
          horizontalPosition: 'right'
        });
        this.newDevice = ''; // Reset the input field
      },
      error: (error: any) => {
        console.error('Error submitting device', error);
        this.snackBar.open('Failed to add device.', 'Close', {
          duration: 3000,
          verticalPosition: 'bottom',
          horizontalPosition: 'right'
        });
      }
    });
  }

  goBack() {
    this.router.navigate(['/additem']);
  }

  goDesk() {
    this.router.navigate(['/newdesk'])
  }

  goEmployee() {
    this.router.navigate(['/newname']);
  }
}