import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  userProfile: any;
  repos: any;
  followers: any;
  following: any;
  username!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
