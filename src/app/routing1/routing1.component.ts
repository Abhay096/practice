import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-routing1',
  templateUrl: './routing1.component.html',
  styleUrls: ['./routing1.component.css']
})
export class Routing1Component {
  x: string = ""
  constructor(route: ActivatedRoute) {
    route.params.subscribe((response) => {
      this.x = response['id']
    })
  }
}
