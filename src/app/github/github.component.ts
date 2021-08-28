import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github-service/github.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  constructor(private githubService:GithubService) { 
  }

  ngOnInit(): void {
  }

}
