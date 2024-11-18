import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Post } from '../types/post';
import { LoaderComponent } from '../shared/loader/loader.component';

@Component({
  selector: 'app-posts-list',
  standalone: true,
  imports: [LoaderComponent],
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.css'
})
export class PostsListComponent implements OnInit {
  posts:Post[] = [];
  isLoading = true;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getPosts(5).subscribe((p) => {
      console.log('posts:');
      console.log(p);
      this.posts = p;
      setTimeout(() => {
        this.isLoading = false;
      }, 2000);
      
    });
  }
}
