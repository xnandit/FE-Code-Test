import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from './../service/posts.service';
import { UsersService } from './../service/users.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  p: number = 1; 
  user:any;
  users:any;
  posts:any;
  usersPosts:any;
  
  constructor(private usersService:UsersService, private postsService:PostsService, private router:Router) { }

  ngOnInit(): void {
    this.user = localStorage.getItem('user');
    this.user = (this.user ? JSON.parse(this.user) : undefined);
    if(!this.user){
      this.router.navigate(['/landing'])
    }else{
      this.getAllPostsAndUser();
      console.log(this.getAllPostsAndUser);
      
    }
  }

  // getAllPostsAndUser() {
  //   this.usersService.getAllUsers().subscribe((listUser)=>{
  //     this.users = listUser;
  //     console.log(this.users);
  //     if(this.users?.length > 0){
  //       this.postsService.getAllPosts().subscribe((listPost)=>{
  //         this.posts = listPost;
  //         console.log(this.posts);
  //         this.posts.map((eachPost:any)=>{
  //           this.postsService.getAllComments(eachPost.id).subscribe((listComment)=>{
  //             eachPost.comments=listComment;
  //           })
  //           eachPost.user = this.users.filter(function(each:any) {
  //             // console.log(this.signInForm.value.username, this.signInForm.value.password);
  //             return each.id == eachPost.userId;
  //           });
  //         })
  //       })
  //     }
  //   })
  // }
  

  getAllPostsAndUser() {
    this.usersService.getAllUsers().subscribe((listUser)=>{
      this.users = listUser;
      console.log(this.users);
      if(this.users?.length > 0){
        this.postsService.getAllProducts().subscribe((listPost)=>{
          this.posts = listPost.products;
          console.log(this.posts);
          return this.posts
        })
      }
    })
  }

}
