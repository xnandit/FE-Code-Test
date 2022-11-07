import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import { UsersService } from './../service/users.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // @ViewChild('loginForm') loginForm: ElementRef;
  signInForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  errorMessage:any;

  constructor(public usersService:UsersService, private fb: FormBuilder, private router: Router ) { }

  ngOnInit(): void {
  }

  login(){
    var objUser=this.signInForm.value;
    this.usersService.getAllUsers().subscribe(data=>{
      var user = data.filter(function(each:any) {
				// console.log(this.signInForm.value.username, this.signInForm.value.password);
				return each.username == objUser.username;
			});
      console.log(user);
      if(user[0]?.username == objUser.password){
        localStorage.setItem('user',JSON.stringify(user[0]));
        this.errorMessage = false;
        this.router.navigate(['/post']);
        // console.log("masuk");
      }else {
        this.errorMessage = "wrong username or password";
      }
    })

  }

}
