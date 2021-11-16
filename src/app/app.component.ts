import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  host: {
    "(window:resize)": "onWindowResize($event)"
  }
})
export class AppComponent implements OnInit {

  name = 'Angular';
  isMobile: boolean = false;
  width: number = window.innerWidth;
  height: number = window.innerHeight;
  mobileWidth: number = 760;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.isMobile = this.width < this.mobileWidth;
    console.log("This is Root page.")
    let auth = JSON.parse(localStorage.getItem("credential"));
    // console.log(auth);
    // this.router.navigate(['/default/testing']);
    if (this.isMobile == true) {
      this.router.navigate(['/login/testing']);
    }
  }


  onWindowResize(event) {
    this.width = event.target.innerWidth;
    this.height = event.target.innerHeight;
    this.isMobile = this.width < this.mobileWidth;
  }

}
