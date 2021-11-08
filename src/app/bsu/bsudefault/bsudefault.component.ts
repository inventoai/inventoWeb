import { Component, OnInit, OnDestroy } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
import { MenuItem } from 'src/app/interfaces/menu-item';
import { LoginService } from 'src/app/components/logins/services/login.service';


@Component({
  selector: 'app-bsudefault',
  templateUrl: './bsudefault.component.html',
  styleUrls: ['./bsudefault.component.scss']
})
export class BsudefaultComponent implements OnInit {

  mediaSub: Subscription;
  deviceXs: boolean;

  users = '';
  searchText;
  query_conversation;
  todayNumber: number = Date.now();
  todayDate: Date = new Date();
  todayString: string = new Date().toDateString();
  todayISOString: string = new Date().toISOString();


  menuItems: MenuItem[] = [
    {
      label: 'Sign Up',
      icon: 'login',
      showOnMobile: true,
      showOnTablet: true,
      showOnDesktop: true
    },
    {
      label: 'About',
      icon: 'help',
      showOnMobile: false,
      showOnTablet: true,
      showOnDesktop: true
    },
    {
      label: 'Pricing',
      icon: 'attach_money',
      showOnMobile: false,
      showOnTablet: false,
      showOnDesktop: true
    },
    {
      label: 'Docs',
      icon: 'notes',
      showOnMobile: false,
      showOnTablet: true,
      showOnDesktop: true
    },
    {
      label: 'Showcase',
      icon: 'slideshow',
      showOnMobile: false,
      showOnTablet: false,
      showOnDesktop: true
    },
    {
      label: 'Blog',
      icon: 'rss_feed',
      showOnMobile: false,
      showOnTablet: false,
      showOnDesktop: false
    },
  ];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  menuItems1 = ['Dashboard', 'Barcode', 'Inventory Count', 'Advance Slotting', 'Analyze Report', 'Forecast'];

  constructor(private breakpointObserver: BreakpointObserver,
    public mediaObserver: MediaObserver,
    private logoutService: LoginService) { }

  ngOnInit() {
    this.mediaSub = this.mediaObserver.media$.subscribe((res: MediaChange) => {
      console.log(res.mqAlias);
      this.deviceXs = res.mqAlias === "xs" ? true : false;
    })
    this.users = '../../assets/images/Img1.png';
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
