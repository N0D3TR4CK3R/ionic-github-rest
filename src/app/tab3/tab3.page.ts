import { Component, OnInit } from '@angular/core';
import { GithubService } from '../services/github.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{

  user: any = {};

  constructor(private gitHubService: GithubService) {}

  ngOnInit(): void {
      this.gitHubService.getUserInfo().subscribe(data => {
        this.user = data;
        console.log("usuario " + this.user);
      }, error => {
        console.error();
      });
  }

}
