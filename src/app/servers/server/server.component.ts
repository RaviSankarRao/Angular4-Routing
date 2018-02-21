import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe((params) => {

      // By default params are parsed and send as string.
      // In order to convert a string to a number, just add '+' before extracting the value from params
      let serverId = +params['id'];

      serverId = serverId || 1;
      this.server = this.serversService.getServer(serverId);
    });

  }
}
