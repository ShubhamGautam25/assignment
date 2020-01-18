import { Component, OnInit } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  UpdateProfile(){
this.router.navigate(['/admin/settings']);      

  }
  Logout(){
    this.router.navigate(['/auth/login']);      
    
      }

}
