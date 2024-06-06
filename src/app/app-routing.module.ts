import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdditemComponent } from './additem/additem.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ConnectionComponent } from './connection/connection.component';
import { ReadComponent } from './read/read.component';
import { ReaddeskComponent } from './readdesk/readdesk.component';
import { NewitemComponent } from './newitem/newitem.component';
import { NewdeskComponent } from './newdesk/newdesk.component';
import { NewnameComponent } from './newname/newname.component';


const routes: Routes = [
  { path: '', redirectTo: 'additem', pathMatch: 'full' },
  { path: 'additem', component: AdditemComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'connection', component: ConnectionComponent },
  { path: 'read', component: ReadComponent },
  { path: 'readdesk', component: ReaddeskComponent },
  { path: 'newitem', component: NewitemComponent },
  { path: 'newdesk', component: NewdeskComponent },
  { path: 'newname', component: NewnameComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
