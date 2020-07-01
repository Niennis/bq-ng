import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [AuthService],
})
export class HeaderComponent implements OnInit {
  public isLogged = false;
  // public user : any;
  public user: Observable<any> = this.authSvc.afAuth.user

  constructor(private authSvc: AuthService, private router: Router) { }

  async ngOnInit() {
    // console.log('Header');
    // this.user = await this.authSvc.getCurrentUser();
    // if (this.user) {
    //   this.isLogged = true;
    //   console.log('User ->', this.user);
    // }
  }

  async onLogout(){
    try{
      const user = await this.authSvc.logout()
      this.router.navigate(['../'])
    }
    catch(err){
      console.log(err);
    }
  }
}
