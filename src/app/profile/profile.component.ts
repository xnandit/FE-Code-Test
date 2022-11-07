import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:any;

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.user = localStorage.getItem('user');
    this.user = (this.user ? JSON.parse(this.user) : undefined);
    if(!this.user){
      this.router.navigate(['/landing'])
    }
  }

}
