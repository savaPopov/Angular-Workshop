import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './types/post';
import { Theme } from './types/theme';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getThemes() {


    return this.http.get<Theme[]>(`/api/themes`)
  }

  getPosts(limit?: number) {

    let url = `/api/posts`

    if (limit) {
      url += `?limit=${limit}`;
    }
    return this.http.get<Post[]>(url)
  }

  getSingleTheme(id: string) {
    return this.http.get<Theme>(`/api/themes/${id}`)
  }

  createTheme(themeName: string, postText: string) {

    const payload = { themeName, postText };
    return this.http.post<Theme>(`/api/themes`, payload)
  }


  updateTheme(themeid: string, themeName: string, postText: string) {

    const payload = { themeName, postText };
    return this.http.put<Theme>(`/api/themes/${themeid}`, payload)
  }

  updatePost(themeid: string, postId: string) {

    const payload = {};
    return this.http.put<Theme>(`/api/themes/${themeid}/posts:${postId}`, payload)
  }

  deletePost(themeid: string, postId: string){
    return this.http.delete(`/api/themes/${themeid}/posts/${postId}`)
  }

}
