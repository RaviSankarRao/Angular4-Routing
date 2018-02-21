import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string};

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    const userId = this.route.snapshot.params['id'];
    const userName = this.route.snapshot.params['name'];

    this.user = {
      id: userId,
      name: userName,
    };

    // route.snapshot gives the params only once when the compnent is loaded
    // if the route params are updated, route.params provides us the updated values
    // route.params is an observable which allows to work with asynchoronous tasks
    this.route.params
      .subscribe(
        (params: Params) => {
          this.user.id = params['id'];
          this.user.name = params['name'];
        }
      );
  }
}
