import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BusineslocationService } from '../services/busineslocation.service';
import { Businesslocation } from '../models/businesslocations';

@Component({
  selector: 'app-update-business-location',
  templateUrl: './update-business-location.component.html',
  styleUrls: ['./update-business-location.component.scss']
})
export class UpdateBusinessLocationComponent implements OnInit {

  _id: string;
  businesslocation: Businesslocation;

  constructor(private route: ActivatedRoute, private router: Router,
    private businessService: BusineslocationService) { }

  ngOnInit() {
    this.businesslocation = new Businesslocation();

    this._id = this.route.snapshot.params['_id'];

    this.businessService.getLocation(this._id)
      .subscribe(data => {
        this.businesslocation = data;
      }, error => console.log(error));
  }

  updateUser() {
    this.businessService.updateLocation(this._id, this.businesslocation)
      .subscribe(data => {
        console.log(data);
        this.businesslocation = new Businesslocation();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateUser();
  }

  gotoList() {
    this.router.navigate(['/default/Business Location']);
  }
}
