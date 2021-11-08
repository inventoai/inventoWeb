import { Component, OnInit, OnDestroy } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MenuItem } from '../interfaces/menu-item';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
import { LoginService } from '../components/logins/services/login.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit, OnDestroy {

  mediaSub: Subscription;
  deviceXs: boolean;

  users = '';
  logo = '';
  searchText;
  query_conversation;
  todayNumber: number = Date.now();
  todayDate: Date = new Date();
  todayString: string = new Date().toDateString();
  todayISOString: string = new Date().toISOString();


  

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  menuItems1 = ['Dashboard','App Users','Web Users',/* 'Employee',*/ 'Barcode', 'Inventory Count', 'Advance Slotting', 'Analyze Report',
    'Forecast', 'Category', 'Product', 'Business Location'];

  constructor(private breakpointObserver: BreakpointObserver,
              public mediaObserver: MediaObserver,
              private logoutService: LoginService) { }

  ngOnInit() {
    this.mediaSub = this.mediaObserver.media$.subscribe((res: MediaChange) => {
      console.log(res.mqAlias);
      this.deviceXs = res.mqAlias === "xs" ? true : false;
    })
    this.users = 'assets/images/Img1.png';
    this.logo = `assets/images/inventoLogo.jpg`;
  }
  ngOnDestroy() {
    this.mediaSub.unsubscribe();
  }

  paletteColour
  change() {
    this.paletteColour = 'warn';
  }

  logout() {
    this.logoutService.logout();
}

}
