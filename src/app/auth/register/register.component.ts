import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [AuthService],
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  })
  constructor(private authSvc: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  async onRegister() {
    // console.log('Form => ', this.registerForm.value)
    const {email, password, username} = this.registerForm.value;
    try{
      const user = await this.authSvc.register(email, password, username);
      if(user){
        this.router.navigate(['../login'])
        console.log(user)
      }
    }
    catch(err) {
      console.log(err);
      
    }
  }
}
