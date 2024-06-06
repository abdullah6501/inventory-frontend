import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';
import { AdditemComponent } from './additem/additem.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DeviceService } from './services/device.service';
import { ConnectionComponent } from './connection/connection.component';
import { NewitemComponent } from './newitem/newitem.component';
import { ReadComponent } from './read/read.component';
import { ReaddeskComponent } from './readdesk/readdesk.component';
import { EditComponent } from './edit/edit.component';
// import { DataService } from './services/data.service';
import { ToastrModule } from 'ngx-toastr';
import { NewdeskComponent } from './newdesk/newdesk.component';
import { NewnameComponent } from './newname/newname.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    AdditemComponent,
    PortfolioComponent,
    ConnectionComponent,
    NewitemComponent,
    ReadComponent,
    ReaddeskComponent,
    EditComponent,
    NewdeskComponent,
    NewnameComponent
  ],
  imports: [
    BrowserModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      timeOut: 3000
    }),
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DeviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
