import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  authentocationService: any;
  router: any;
  constructor() { }

  ngOnInit(): void {
  }
  logout(){
    this.authentocationService.logOut();
    this.router.navigate(['login']);
  }
}
