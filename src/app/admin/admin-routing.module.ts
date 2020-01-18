import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ContactUsComponent } from "./contact-us/contact-us.component";

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: 'contact-us', component: ContactUsComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

