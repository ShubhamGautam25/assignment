import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
// import { ExtraComponentModule } from '../extra-component/extra-component.module';
import { MatSidenavModule}  from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import {MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule,
  MatGridListModule,
  MatAutocompleteModule,
  MatIconModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatChipsModule, 
  MatMenuModule} from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ValidationService } from '../shared/services/validation.service';
import { AdminComponent } from './admin.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HeaderComponent } from '../extra-component/header/header.component';
import { SideBarComponent } from '../extra-component/side-bar/side-bar.component';

@NgModule({
  declarations: [
    AdminComponent,
    ContactUsComponent,
    HeaderComponent, SideBarComponent
  ],

  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // ExtraComponentModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,

    MatGridListModule,
    MatAutocompleteModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatChipsModule,
    MatMenuModule,
  ],
  providers:[ValidationService]
})
export class AdminModule { }
