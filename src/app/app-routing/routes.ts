import { Routes } from '@angular/router';

import { HomeComponent } from '../components/home/home.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ContactComponent } from '../contact/contact.component';
import { BarcodeComponent } from '../components/barcode/barcode.component';
import { InventorycountComponent } from '../components/inventorycount/inventorycount.component';
import { AnalyzereportComponent } from '../components/analyzereport/analyzereport.component';
import { AdvanceslottingComponent } from '../components/advanceslotting/advanceslotting.component';
import { ForecastComponent } from '../components/forecast/forecast.component';
import { PrivacyComponent } from '../components/privacy/privacy.component';
import { LoginComponent } from '../components/login/login.component';
import { HowitworksComponent } from '../components/howitworks/howitworks.component';
import { FaqsComponent } from '../components/faqs/faqs.component';
import { TermsComponent } from '../components/terms/terms.component';
import { NewemployeeComponent } from '../components/newemployee/newemployee.component';
import { ScanComponent } from '../components/scan/scan.component';
import { AnalyzeComponent } from '../components/forms/analyze/analyze.component';
import { from } from 'rxjs';
import { CategoryformComponent } from '../components/forms/categoryform/categoryform.component';
import { CommonproductComponent } from '../components/forms/commonproduct/commonproduct.component';
import { ProductrelationComponent } from '../components/forms/productrelation/productrelation.component';
import { ProductComponent } from '../components/product/product.component';
import { BusinesslocationComponent } from '../components/businesslocation/businesslocation.component';
import { CategoryComponent } from '../components/category/category.component';
import { Frequent1Component } from '../components/forms/frequent1/frequent1.component';
import { Frequent2Component } from '../components/forms/frequent2/frequent2.component';
import { Frequent3Component } from '../components/forms/frequent3/frequent3.component';
import { ProductwiseComponent } from '../components/forms/productwise/productwise.component';
import { CategorywiseComponent } from '../components/forms/categorywise/categorywise.component';
import { LocationwiseComponent } from '../components/forms/locationwise/locationwise.component';
import { TimewiseComponent } from '../components/forms/timewise/timewise.component';
import { TrendsComponent } from '../components/forms/trends/trends.component';
import { SalesdataanalysisComponent } from '../components/forms/salesdataanalysis/salesdataanalysis.component';
import { StockdataanalysisComponent } from '../components/forms/stockdataanalysis/stockdataanalysis.component';
import { CustomerwiseComponent } from '../components/forms/customerwise/customerwise.component';
import { TrendscategorywiseComponent } from '../components/forms/trendscategorywise/trendscategorywise.component';
import { TlocationwiseformComponent } from '../components/forms/trendsform/tlocationwiseform/tlocationwiseform.component';
import { TstockwiseformComponent } from '../components/forms/trendsform/tstockwiseform/tstockwiseform.component';
import { TsaleswiseformComponent } from '../components/forms/trendsform/tsaleswiseform/tsaleswiseform.component';
import { TcustomerwiseformComponent } from '../components/forms/trendsform/tcustomerwiseform/tcustomerwiseform.component';
import { TproductwiseformComponent } from '../components/forms/trendsform/tproductwiseform/tproductwiseform.component';
import { NewlocationformComponent } from '../components/forms/newlocationform/newlocationform.component';
import { NewproductformComponent } from '../components/forms/newproductform/newproductform.component';
import { NewcategoryformComponent } from '../components/forms/newcategoryform/newcategoryform.component';
import { SalesformComponent } from '../components/forms/salesform/salesform.component';
import { StockformComponent } from '../components/forms/stockform/stockform.component';
import { FuturetrendformComponent } from '../components/forms/futuretrendform/futuretrendform.component';
import { FproductwiseComponent } from '../components/forms/futuretrendforms/fproductwise/fproductwise.component';
import { FcategorywiseComponent } from '../components/forms/futuretrendforms/fcategorywise/fcategorywise.component';
import { FlocationwiseComponent } from '../components/forms/futuretrendforms/flocationwise/flocationwise.component';
import { FstockwiseComponent } from '../components/forms/futuretrendforms/fstockwise/fstockwise.component';
import { FsaleswiseComponent } from '../components/forms/futuretrendforms/fsaleswise/fsaleswise.component';
import { FcustomerwiseComponent } from '../components/forms/futuretrendforms/fcustomerwise/fcustomerwise.component';
import { ItComponent } from '../components/it/it.component';
import { BsuComponent } from '../components/bsu/bsu.component';
import { BsuheaderComponent } from '../bsu/bsuheader/bsuheader.component';
import { UserListComponent } from '../testComponents/user-list/user-list.component';
import { CreateUserComponent } from '../testComponents/create-user/create-user.component';
import { UpdateUserComponent } from '../testComponents/update-user/update-user.component';
import { UserDetailsComponent } from '../testComponents/user-details/user-details.component';
import { EmployeeListComponent } from '../components/employee/employee-list/employee-list.component';
import { CreateEmployeeComponent } from '../components/employee/create-employee/create-employee.component';
import { UpdateEmployeeComponent } from '../components/employee/update-employee/update-employee.component';
import { EmployeeDetailsComponent } from '../components/employee/employee-details/employee-details.component';
import { BusinessLocation } from '../shared/userform';
import { BusinessLocationComponent } from '../components/businesslocations/business-location/business-location.component';
import { AddBusinessLocationComponent } from '../components/businesslocations/add-business-location/add-business-location.component';
import { UpdateBusinessLocationComponent } from '../components/businesslocations/update-business-location/update-business-location.component';
import { ProductListComponent } from '../components/products/product-list/product-list.component';
import { CreateProductComponent } from '../components/products/create-product/create-product.component';
import { UpdateProductComponent } from '../components/products/update-product/update-product.component';
import { CategoryListComponent } from '../components/categories/category-list/category-list.component';
import { CreateCategoryComponent } from '../components/categories/create-category/create-category.component';
import { UpdateCategoryComponent } from '../components/categories/update-category/update-category.component';
import { UserLoginComponent } from '../components/logins/user-login/user-login.component';
import { DefaultComponent } from '../default/default.component';
import { BsuloginComponent } from '../components/logins/bsulogin/bsulogin.component';
import { BsudefaultComponent } from '../bsu/bsudefault/bsudefault.component';
import { AccessUsersGroupComponent } from '../components/usersform/access-users-group/access-users-group.component';
import { AppUsersListComponent } from '../components/usersform/app-users-list/app-users-list.component';
import { WebUsersListComponent } from '../components/usersform/web-users-list/web-users-list.component';
import { WebaccessComponent } from '../components/usersform/webaccess/webaccess.component';
import { TestingComponent } from '../components/testing/testing.component';
import { WebuserdetailsComponent } from '../components/usersform/webuserdetails/webuserdetails.component';
import { WebUserUpdateComponent } from '../components/usersform/web-user-update/web-user-update.component';
import { MLModelComponent } from '../testComponents/mlmodel/mlmodel.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'users', component: UserListComponent },
    { path: 'add', component: CreateUserComponent },
    { path: 'update/:_id', component: UpdateUserComponent },
    { path: 'details/:_id', component: UserDetailsComponent },

    //   { path: 'dishdetail/:id', component:DishdetailComponent},
    {
        path: 'login', component: LoginComponent,
        children: [
            { path: '', redirectTo: 'userlogin', pathMatch: 'full' },
            { path: 'userlogin', component: UserLoginComponent },
            { path: 'it', component: ItComponent },
            { path: 'bsu', component: BsuComponent },
            { path: 'bsulogin', component: BsuloginComponent }
        ]
    },
    {
        path: 'default', component: DefaultComponent,
        children: [
            { path: '', redirectTo: 'Dashboard', pathMatch: 'full' },
            { path: 'testing', component: TestingComponent },
            { path: 'Dashboard', component: DashboardComponent },
            { path: 'Employee', component: EmployeeListComponent },

            {
                path: 'Barcode', component: BarcodeComponent,
                children: [
                    { path: '', redirectTo: 'scan', pathMatch: 'full' },
                    { path: 'scan', component: ScanComponent },
                    { path: 'analyze', component: AnalyzeComponent }
                ]
            },

            { path: 'newemployee', component: NewemployeeComponent },
            { path: 'addemployee', component: CreateEmployeeComponent },
            { path: 'updateemployee/:_id', component: UpdateEmployeeComponent },
            { path: 'detailsemployee/:_id', component: EmployeeDetailsComponent },
            { path: 'App Users', component: AppUsersListComponent },
            { path: 'Web Users', component: WebUsersListComponent },
            { path: 'detailswebusers/:_id', component: WebuserdetailsComponent },
            { path: 'updatewebuser/:_id', component: WebUserUpdateComponent },
            { path: 'addappuser', component: AccessUsersGroupComponent },
            { path: 'inventomodel', component: MLModelComponent },
            { path: 'addwebuser', component: WebaccessComponent },


            {
                path: 'Inventory Count', component: InventorycountComponent,
                children: [
                    { path: '', redirectTo: 'scan', pathMatch: 'full' },
                    { path: 'scan', component: ScanComponent },
                    { path: 'analyze', component: AnalyzeComponent }
                ]
            },

            {
                path: 'Advance Slotting', component: AdvanceslottingComponent,
                children: [
                    { path: '', redirectTo: 'categoryform', pathMatch: 'full' },

                    {
                        path: 'categoryform', component: CategoryformComponent,
                        children: [
                            { path: '', redirectTo: 'frequent1', pathMatch: 'full' },
                            { path: 'frequent1', component: Frequent1Component },
                            { path: 'frequent2', component: Frequent2Component },
                            { path: 'frequent3', component: Frequent3Component },
                        ]
                    },

                    { path: 'commonproductform', component: CommonproductComponent },
                    { path: 'productrelationform', component: ProductrelationComponent }
                ]
            },

            {
                path: 'Analyze Report', component: AnalyzereportComponent,
                children: [
                    { path: '', redirectTo: 'productwise', pathMatch: 'full' },
                    { path: 'productwise', component: ProductwiseComponent },
                    { path: 'categorywise', component: CategorywiseComponent },
                    { path: 'locationwise', component: LocationwiseComponent },
                    { path: 'timewise', component: TimewiseComponent },
                    {
                        path: 'trends', component: TrendsComponent,
                        children: [
                            { path: '', redirectTo: 'tproductwise', pathMatch: 'full' },
                            { path: 'tproductwise', component: TproductwiseformComponent },
                            { path: 'trendscategorywise', component: TrendscategorywiseComponent },
                            { path: 'tlocationwise', component: TlocationwiseformComponent },
                            { path: 'tstockwise', component: TstockwiseformComponent },
                            { path: 'tsaleswise', component: TsaleswiseformComponent },
                            { path: 'tcustomerwise', component: TcustomerwiseformComponent }
                        ]
                    },
                    { path: 'salesdataanalysis', component: SalesdataanalysisComponent },
                    { path: 'stockdataanalysis', component: StockdataanalysisComponent },
                    { path: 'customerwise', component: CustomerwiseComponent }
                ]
            },
            {
                path: 'Forecast', component: ForecastComponent,
                children: [
                    { path: '', redirectTo: 'salesform', pathMatch: 'full' },
                    { path: 'salesform', component: SalesformComponent },
                    { path: 'stockform', component: StockformComponent },
                    {
                        path: 'futuretrend', component: FuturetrendformComponent,
                        children: [
                            { path: '', redirectTo: 'fproductwise', pathMatch: 'full' },
                            { path: 'fproductwise', component: FproductwiseComponent },
                            { path: 'fcategorywise', component: FcategorywiseComponent },
                            { path: 'flocationwise', component: FlocationwiseComponent },
                            { path: 'fstockwise', component: FstockwiseComponent },
                            { path: 'fsaleswise', component: FsaleswiseComponent },
                            { path: 'fcustomerwise', component: FcustomerwiseComponent }
                        ]
                    }
                ]
            },

            { path: 'product', component: ProductComponent },
            { path: 'Product', component: ProductListComponent },
            { path: 'createproduct', component: CreateProductComponent },
            { path: 'updateproduct/:_id', component: UpdateProductComponent },
            { path: 'newproduct', component: NewproductformComponent },
            { path: 'businessloaction', component: BusinesslocationComponent },
            { path: 'Business Location', component: BusinessLocationComponent },
            { path: 'newlocation', component: NewlocationformComponent },
            { path: 'addbusinesslocation', component: AddBusinessLocationComponent },
            { path: 'updatelocation/:_id', component: UpdateBusinessLocationComponent },
            { path: 'category', component: CategoryComponent },
            { path: 'Category', component: CategoryListComponent },
            { path: 'createcategory', component: CreateCategoryComponent },
            { path: 'updatecategory/:_id', component: UpdateCategoryComponent },
            { path: 'newcategory', component: NewcategoryformComponent },
            { path: 'howitworks', component: HowitworksComponent },
            { path: 'contactus', component: ContactComponent },
            { path: 'faqs', component: FaqsComponent },
            { path: 'terms', component: TermsComponent },
            { path: 'privacy', component: PrivacyComponent },

        ]
    },
    { path: 'bsuheader', component: BsuheaderComponent },
    {
        path: 'bsudefault', component: BsudefaultComponent,
        children: [
            { path: '', redirectTo: 'Dashboard', pathMatch: 'full' },
            { path: 'Dashboard', component: DashboardComponent },
            {
                path: 'Barcode', component: BarcodeComponent,
                children: [
                    { path: '', redirectTo: 'scan', pathMatch: 'full' },
                    { path: 'scan', component: ScanComponent },
                    { path: 'analyze', component: AnalyzeComponent }
                ]
            },
            {
                path: 'Inventory Count', component: InventorycountComponent,
                children: [
                    { path: '', redirectTo: 'scan', pathMatch: 'full' },
                    { path: 'scan', component: ScanComponent },
                    { path: 'analyze', component: AnalyzeComponent }
                ]
            },
            {
                path: 'Advance Slotting', component: AdvanceslottingComponent,
                children: [
                    { path: '', redirectTo: 'categoryform', pathMatch: 'full' },

                    {
                        path: 'categoryform', component: CategoryformComponent,
                        children: [
                            { path: '', redirectTo: 'frequent1', pathMatch: 'full' },
                            { path: 'frequent1', component: Frequent1Component },
                            { path: 'frequent2', component: Frequent2Component },
                            { path: 'frequent3', component: Frequent3Component },
                        ]
                    },

                    { path: 'commonproductform', component: CommonproductComponent },
                    { path: 'productrelationform', component: ProductrelationComponent }
                ]
            },

            {
                path: 'Analyze Report', component: AnalyzereportComponent,
                children: [
                    { path: '', redirectTo: 'productwise', pathMatch: 'full' },
                    { path: 'productwise', component: ProductwiseComponent },
                    { path: 'categorywise', component: CategorywiseComponent },
                    { path: 'locationwise', component: LocationwiseComponent },
                    { path: 'timewise', component: TimewiseComponent },
                    {
                        path: 'trends', component: TrendsComponent,
                        children: [
                            { path: '', redirectTo: 'tproductwise', pathMatch: 'full' },
                            { path: 'tproductwise', component: TproductwiseformComponent },
                            { path: 'trendscategorywise', component: TrendscategorywiseComponent },
                            { path: 'tlocationwise', component: TlocationwiseformComponent },
                            { path: 'tstockwise', component: TstockwiseformComponent },
                            { path: 'tsaleswise', component: TsaleswiseformComponent },
                            { path: 'tcustomerwise', component: TcustomerwiseformComponent }
                        ]
                    },
                    { path: 'salesdataanalysis', component: SalesdataanalysisComponent },
                    { path: 'stockdataanalysis', component: StockdataanalysisComponent },
                    { path: 'customerwise', component: CustomerwiseComponent }
                ]
            },
            {
                path: 'Forecast', component: ForecastComponent,
                children: [
                    { path: '', redirectTo: 'salesform', pathMatch: 'full' },
                    { path: 'salesform', component: SalesformComponent },
                    { path: 'stockform', component: StockformComponent },
                    {
                        path: 'futuretrend', component: FuturetrendformComponent,
                        children: [
                            { path: '', redirectTo: 'fproductwise', pathMatch: 'full' },
                            { path: 'fproductwise', component: FproductwiseComponent },
                            { path: 'fcategorywise', component: FcategorywiseComponent },
                            { path: 'flocationwise', component: FlocationwiseComponent },
                            { path: 'fstockwise', component: FstockwiseComponent },
                            { path: 'fsaleswise', component: FsaleswiseComponent },
                            { path: 'fcustomerwise', component: FcustomerwiseComponent },

                        ]
                    }
                ]
            },
            { path: 'howitworks', component: HowitworksComponent },
            { path: 'contactus', component: ContactComponent },
            { path: 'faqs', component: FaqsComponent },
            { path: 'terms', component: TermsComponent },
            { path: 'privacy', component: PrivacyComponent },

        ]
    },
];