import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BREAKPOINT, FlexLayoutModule } from '@angular/flex-layout';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { NgMatSearchBarModule } from 'ng-mat-search-bar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { IgxDateRangePickerModule } from 'igniteui-angular';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DateRangePickerModule } from '@syncfusion/ej2-angular-calendars';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRippleModule } from '@angular/material/core';







import 'hammerjs';

import { ContactComponent } from './contact/contact.component';
import { UserService } from './services/user.service';
import { BarcodeComponent } from './components/barcode/barcode.component';
import { AnalyzereportComponent } from './components/analyzereport/analyzereport.component';
import { ForecastComponent } from './components/forecast/forecast.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { LoginComponent } from './components/login/login.component';
import { ItComponent } from './components/it/it.component';
import { BsuComponent } from './components/bsu/bsu.component';
import { HowitworksComponent } from './components/howitworks/howitworks.component';
import { FaqsComponent } from './components/faqs/faqs.component';
import { TermsComponent } from './components/terms/terms.component';
import { NewemployeeComponent } from './components/newemployee/newemployee.component';
import { ScanComponent } from './components/scan/scan.component';
import { AnalyzeComponent } from './components/forms/analyze/analyze.component';
import { InventorycountComponent } from './components/inventorycount/inventorycount.component';
import { AdvanceslottingComponent } from './components/advanceslotting/advanceslotting.component';
import { CategoryformComponent } from './components/forms/categoryform/categoryform.component';
import { CommonproductComponent } from './components/forms/commonproduct/commonproduct.component';
import { ProductrelationComponent } from './components/forms/productrelation/productrelation.component';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { BusinesslocationComponent } from './components/businesslocation/businesslocation.component';
import { CategoryComponent } from './components/category/category.component';
import { Frequent1Component } from './components/forms/frequent1/frequent1.component';
import { Frequent3Component } from './components/forms/frequent3/frequent3.component';
import { Frequent2Component } from './components/forms/frequent2/frequent2.component';
import { ProductwiseComponent } from './components/forms/productwise/productwise.component';
import { CategorywiseComponent } from './components/forms/categorywise/categorywise.component';
import { LocationwiseComponent } from './components/forms/locationwise/locationwise.component';
import { TimewiseComponent } from './components/forms/timewise/timewise.component';
import { TrendsComponent } from './components/forms/trends/trends.component';
import { SalesdataanalysisComponent } from './components/forms/salesdataanalysis/salesdataanalysis.component';
import { StockdataanalysisComponent } from './components/forms/stockdataanalysis/stockdataanalysis.component';
import { CustomerwiseComponent } from './components/forms/customerwise/customerwise.component';
import { TrendscategorywiseComponent } from './components/forms/trendscategorywise/trendscategorywise.component';
import { TlocationwiseformComponent } from './components/forms/trendsform/tlocationwiseform/tlocationwiseform.component';
import { TstockwiseformComponent } from './components/forms/trendsform/tstockwiseform/tstockwiseform.component';
import { TcustomerwiseformComponent } from './components/forms/trendsform/tcustomerwiseform/tcustomerwiseform.component';
import { TsaleswiseformComponent } from './components/forms/trendsform/tsaleswiseform/tsaleswiseform.component';
import { TproductwiseformComponent } from './components/forms/trendsform/tproductwiseform/tproductwiseform.component';
import { NewlocationformComponent } from './components/forms/newlocationform/newlocationform.component';
import { NewproductformComponent } from './components/forms/newproductform/newproductform.component';
import { NewcategoryformComponent } from './components/forms/newcategoryform/newcategoryform.component';
import { SalesformComponent } from './components/forms/salesform/salesform.component';
import { StockformComponent } from './components/forms/stockform/stockform.component';
import { FuturetrendformComponent } from './components/forms/futuretrendform/futuretrendform.component';
import { FproductwiseComponent } from './components/forms/futuretrendforms/fproductwise/fproductwise.component';
import { FcategorywiseComponent } from './components/forms/futuretrendforms/fcategorywise/fcategorywise.component';
import { FlocationwiseComponent } from './components/forms/futuretrendforms/flocationwise/flocationwise.component';
import { FstockwiseComponent } from './components/forms/futuretrendforms/fstockwise/fstockwise.component';
import { FsaleswiseComponent } from './components/forms/futuretrendforms/fsaleswise/fsaleswise.component';
import { FcustomerwiseComponent } from './components/forms/futuretrendforms/fcustomerwise/fcustomerwise.component';
import { BsuheaderComponent } from './bsu/bsuheader/bsuheader.component';
import { PasswordresetformComponent } from './components/forms/passwordresetform/passwordresetform.component';
import { CreateUserComponent } from './testComponents/create-user/create-user.component';
import { UpdateUserComponent } from './testComponents/update-user/update-user.component';
import { UserListComponent } from './testComponents/user-list/user-list.component';
import { UserDetailsComponent } from './testComponents/user-details/user-details.component';
import { CreateEmployeeComponent } from './components/employee/create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './components/employee/employee-details/employee-details.component';
import { EmployeeListComponent } from './components/employee/employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './components/employee/update-employee/update-employee.component';
import { BusinessLocationComponent } from './components/businesslocations/business-location/business-location.component';
import { AddBusinessLocationComponent } from './components/businesslocations/add-business-location/add-business-location.component';
import { UpdateBusinessLocationComponent } from './components/businesslocations/update-business-location/update-business-location.component';
import { UpdateProductComponent } from './components/products/update-product/update-product.component';
import { CreateProductComponent } from './components/products/create-product/create-product.component';
import { ProductListComponent } from './components/products/product-list/product-list.component';
import { CategoryListComponent } from './components/categories/category-list/category-list.component';
import { CreateCategoryComponent } from './components/categories/create-category/create-category.component';
import { UpdateCategoryComponent } from './components/categories/update-category/update-category.component';
import { UserLoginComponent } from './components/logins/user-login/user-login.component';
import { ChartsModule } from 'ng2-charts';


import { ApplicationStateService } from './services/application-state.service';
import { DefaultComponent } from './default/default.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { BsuloginComponent } from './components/logins/bsulogin/bsulogin.component';
import { HighlightDirective } from './shared/highlight.directive';
import { BsudefaultComponent } from './bsu/bsudefault/bsudefault.component';
import { AccessUsersGroupComponent } from './components/usersform/access-users-group/access-users-group.component';
import { AppUsersListComponent } from './components/usersform/app-users-list/app-users-list.component';
import { WebUsersListComponent } from './components/usersform/web-users-list/web-users-list.component';
import { WebaccessComponent } from './components/usersform/webaccess/webaccess.component';
import { TestingComponent } from './components/testing/testing.component';
import { WebuserdetailsComponent } from './components/usersform/webuserdetails/webuserdetails.component';
import { WebUserUpdateComponent } from './components/usersform/web-user-update/web-user-update.component';
import { MLModelComponent } from './testComponents/mlmodel/mlmodel.component';






const CustomBreakpoints = [{
  alias: 'tbl-sm',
  suffix: 'TblSm',
  mediaQuery: '(min-width: 600px) and (max-width: 729.9px)',
  overlapping: false
}, {
  alias: 'tbl',
  suffix: 'Tbl',
  mediaQuery: '(min-width: 730px) and (max-width: 959.9px)',
  overlapping: false
}];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ContactComponent,
    BarcodeComponent,
    AnalyzereportComponent,
    ForecastComponent,
    PrivacyComponent,
    LoginComponent,
    ItComponent,
    BsuComponent,
    HowitworksComponent,
    FaqsComponent,
    TermsComponent,
    NewemployeeComponent,
    ScanComponent,
    AnalyzeComponent,
    InventorycountComponent,
    AdvanceslottingComponent,
    CategoryformComponent,
    CommonproductComponent,
    ProductrelationComponent,
    HomeComponent,
    ProductComponent,
    BusinesslocationComponent,
    CategoryComponent,
    Frequent1Component,
    Frequent3Component,
    Frequent2Component,
    ProductwiseComponent,
    CategorywiseComponent,
    LocationwiseComponent,
    TimewiseComponent,
    TrendsComponent,
    SalesdataanalysisComponent,
    StockdataanalysisComponent,
    CustomerwiseComponent,
    TrendscategorywiseComponent,
    TlocationwiseformComponent,
    TstockwiseformComponent,
    TcustomerwiseformComponent,
    TsaleswiseformComponent,
    TproductwiseformComponent,
    NewlocationformComponent,
    NewproductformComponent,
    NewcategoryformComponent,
    SalesformComponent,
    StockformComponent,
    FuturetrendformComponent,
    FproductwiseComponent,
    FcategorywiseComponent,
    FlocationwiseComponent,
    FstockwiseComponent,
    FsaleswiseComponent,
    FcustomerwiseComponent,
    BsuheaderComponent,
    PasswordresetformComponent,
    CreateUserComponent,
    UpdateUserComponent,
    UserListComponent,
    UserDetailsComponent,
    CreateEmployeeComponent,
    EmployeeDetailsComponent,
    EmployeeListComponent,
    UpdateEmployeeComponent,
    BusinessLocationComponent,
    AddBusinessLocationComponent,
    UpdateBusinessLocationComponent,
    UpdateProductComponent,
    CreateProductComponent,
    ProductListComponent,
    CategoryListComponent,
    CreateCategoryComponent,
    UpdateCategoryComponent,
    UserLoginComponent,
    DefaultComponent,
    BsuloginComponent,
    HighlightDirective,
    BsudefaultComponent,
    AccessUsersGroupComponent,
    AppUsersListComponent,
    WebUsersListComponent,
    WebaccessComponent,
    TestingComponent,
    WebuserdetailsComponent,
    WebUserUpdateComponent,
    MLModelComponent



  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatExpansionModule,
    MatListModule,
    MatSidenavModule,
    MatIconModule,
    NgMatSearchBarModule,
    FontAwesomeModule,
    RouterModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    FormsModule,
    IgxDateRangePickerModule,
    MatDialogModule,
    MatInputModule,
    MatCheckboxModule,
    DateRangePickerModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRippleModule,
    LayoutModule,
    MatDividerModule,
    MatMenuModule,
    ChartsModule

  ],
  entryComponents: [
    PasswordresetformComponent
  ],
  bootstrap: [AppComponent],
  providers: [{
    provide: BREAKPOINT,
    useValue: CustomBreakpoints,
    multi: true
  },
    ApplicationStateService
  ]
})
export class AppModule { }
