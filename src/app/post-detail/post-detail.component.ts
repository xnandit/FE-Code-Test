import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { PostsService } from './../service/posts.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit, OnDestroy {
  id:any;
  user:any;
  private sub:any;
  objPost:any;
  showComment:boolean = false;

  constructor(private postsService:PostsService, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.user = localStorage.getItem('user');
    this.user = (this.user ? JSON.parse(this.user) : undefined);
    if(!this.user){
      this.router.navigate(['/landing'])
    }else{
      this.sub = this.activatedRoute.params.subscribe(params => {
        this.id = +params['id']; // (+) converts string 'id' to a number
        console.log(this.id);
        this.getPostById(this.id);
        // In a real app: dispatch action to load the details here.
      });
    }
  }

  getPostById(id:any){
    this.postsService.getPostById(id).subscribe((post)=>{
      console.log(post);
      this.objPost=post;
      this.postsService.getAllComments(post.id).subscribe((comments)=>{
        console.log(comments);
        this.objPost.comments=comments;
        console.log(this.objPost);
      })
    })
  }

  showAllComments(){
    this.showComment = true;
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
