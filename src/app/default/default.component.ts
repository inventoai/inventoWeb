import { Component, OnInit, OnDestroy } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
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
  userAccess;




  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  menuItems = ['Dashboard'];
  menuItems1 = ['Dashboard', 'App Users', 'Web Users',/* 'Employee',*/ 'Barcode', 'Inventory Count', 'Advance Slotting', 'Analyze Report',
    'Forecast', 'Category', 'Product', 'Business Location'];

  constructor(private breakpointObserver: BreakpointObserver,
    public mediaObserver: MediaObserver,
    private logoutService: LoginService) { }

  ngOnInit() {
    console.log("This is default page.")
    let auth = JSON.parse(localStorage.getItem("credential"));
    console.log(auth);
    if (auth.roles) {
      for (let key in auth.roles) {
        let value = auth.roles[key];
        if (value == true) {
          if (key == "advanceslotting") {
            this.menuItems.push("Advance Slotting");
          }
          else if (key == "analyzereport") {
            this.menuItems.push("Analyze Report");
          }
          else if (key == "barcodescanner") {
            this.menuItems.push("Barcode Scanner");
          }
          else if (key == "inventorycount") {
            this.menuItems.push("Inventory Countt");
          }
          else if (key == "location") {
            this.menuItems.push("Business Location");
          }
          else if (key == "category") {
            this.menuItems.push("Category");
          }
          else if (key == "forecast") {
            this.menuItems.push("Forecast");
          }
          else if (key == "product") {
            this.menuItems.push("Product");
          }
        }
      }
      console.log(this.menuItems);
      this.menuItems1 = this.menuItems;
    }
    console.log(this.menuItems1);
    // try {
    //   // Calling an undefined `item `variable
    //   if (auth.roles.barcodescanner == false) {
    //     console.log("Hello !" + auth.name);
    //     this.router.navigate(['/default/testing']);
    //   }
    // } catch (e) {
    //   if (e instanceof ReferenceError) {
    //     console.log(e, true);
    //     console.log("Hi ! " + auth.name);
    //   } else {
    //     console.log(e, false);
    //     console.log("Hi ! " + auth.name);
    //   }
    // }


    this.mediaSub = this.mediaObserver.media$.subscribe((res: MediaChange) => {
      console.log(res.mqAlias);
      this.deviceXs = res.mqAlias === "xs" ? true : false;
    })
    this.users = 'assets/images/Img1.png';
    this.logo = `assets/images/inventoLogo.jpg`;
    this.userAccess = JSON.parse(localStorage.getItem("credential"));
  }
  ngOnDestroy() {
    this.mediaSub.unsubscribe();
  }

  paletteColour
  change() {
    this.paletteColour = 'warn';
  }

  logout() {
    // localStorage.removeItem(`credential`);
    localStorage.clear();
    let auth = localStorage.getItem('credential');
    console.log(auth);
    this.logoutService.logout();
  }

}
