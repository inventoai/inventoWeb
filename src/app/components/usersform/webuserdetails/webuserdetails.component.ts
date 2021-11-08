import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WebUsers } from '../../employee/models/employee';
import { WebuserService } from '../services/webuser.service';

@Component({
  selector: 'app-webuserdetails',
  templateUrl: './webuserdetails.component.html',
  styleUrls: ['./webuserdetails.component.scss']
})
export class WebuserdetailsComponent implements OnInit {
  _id: string;
  webUser: WebUsers;

  constructor(private route: ActivatedRoute,private router: Router,
    private webuserService: WebuserService) { }

  ngOnInit() {
    this.webUser = new WebUsers();

    this._id = this.route.snapshot.params['_id'];
    console.log("gh"+this._id);
    this.webuserService.getWebUser(this._id)
      .subscribe(data => {
        console.log(data)
        this.webUser = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['default/Web Users']);
  }

}
