import { Component, OnInit } from '@angular/core';
import { GithubService } from '../services/github.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  repos: any[] = [];

  constructor(private gitHubService: GithubService) {}

  ngOnInit(): void {
      this.gitHubService.getUserRepos().subscribe(data => {
        this.repos = data;
        console.log("repos: " + this.repos);
      }, error => {
        console.error("error: " + error);
      });
  }

}
