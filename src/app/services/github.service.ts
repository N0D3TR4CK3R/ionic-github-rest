import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  /**
   * obtain the repos of the logged usr
   * we`ll be expectig to be returned an observable
   */
  getUserRepos(): Observable<any> {
    return this.http.get(this.apiUrl + "/user/repos");
  }

  /**
   * make a call for usr info
   */
  getUserInfo(): Observable<any> {
    return this.http.get(this.apiUrl + "/user");
  }

}
