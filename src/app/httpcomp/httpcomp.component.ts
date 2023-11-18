import { Component, OnInit } from '@angular/core';
import { HttpserviceService } from '../httpservice.service';

@Component({
  selector: 'app-httpcomp',
  templateUrl: './httpcomp.component.html',
  styleUrls: ['./httpcomp.component.css']
})
export class HttpcompComponent implements OnInit {
  constructor(public p: HttpserviceService) { }
  g: any = []
  postvar: any;
  putvar: any;
  patchvar: any;
  deletevar: any;

  ngOnInit() {
    this.p.getting().subscribe((respone) => {
      this.g = respone;
    }, error => {
      console.log(error);
      alert("There is something wrong")
    })

    this.p.posting().subscribe((response) => {
      this.postvar = response;
    }, error => {
      console.log(error);
      alert("There is something wrong")
    })

    this.p.putting().subscribe((response) => {
      this.putvar = response
    }, error => {
      console.log(error);
      alert("There is something wrong")
    })

    this.p.patching().subscribe((response) => {
      this.patchvar = response;
    }, error => {
      console.log(error);
      alert("There is something wrong")
    })

    this.p.delete().subscribe((response) => {
      this.deletevar = "Deleted successfully";
    }, error => {
      console.log(error);
      alert("There is something wrong")
    })
  }
}
