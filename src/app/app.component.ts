import { Component, OnInit } from '@angular/core';
import { TestService } from './services/test.service';
import { KeycloakService } from './services/keycloak.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'app-test';
  constructor(private userService: TestService,private keycloakService: KeycloakService) {

  }
  msg:String;

  ngOnInit() {
    this.userService.getMessage()
      .subscribe(msg => this.msg = msg)
      this.userInformations = this.keycloakService.getToken;
  }
  userInformations: any;
 
  
  onLogout() {
    this.keycloakService.logout();
  }
  
  

}
