import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

import { ServersService } from './servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  private servers: {id: number, name: string, status: string}[] = [];

  constructor(
    private serversService: ServersService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onReload() {

    // absolute path
    // this.router.navigate(['/servers']); 

    // relative path - this works fine without throwing error
    // Unlike routerLink, the navigate method does not know on which route the app currently is on
    // this.router.navigate(['servers']); 

    // to tell the navigate method the current router the app is in, we need to pass additional parameters
    // these are NavigationExtras
    this.router.navigate(['servers'], { relativeTo: this.route }); 


  }
}
