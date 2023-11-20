import { Component } from '@angular/core';
import { NormalService } from './normal.service';
import { DiService } from './di.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  a = "A"
  c = true
  d = "red"
  section = "D2101"
  show = true
  visible = false
  day = 3
  isActive = true
  isDisabled = true
  title = 'practice';
  list: any = [1, 2, 3, 4, 5, 6]
  normalobj = new NormalService()

  constructor(public diobj: DiService) {
    console.log(this.normalobj.name);
    console.log(diobj.name);

  }
  f1(temp: any) {
    alert(`Clicked ${temp}`)
  }
  f2() {
    console.log("", this.section);
  }
  f3(t: any) {
    alert(t)
    console.log(t);
    this.show = false
    this.visible = true
  }
  f4(j: any) {
    console.log(j);
  }
}
