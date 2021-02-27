import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppheaderComponent } from './appheader/appheader.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ForgotpasswordComponent } from './auth/forgotpassword/forgotpassword.component';
import { CustomersComponent } from './master/customers/customers.component';
import { ProductsComponent } from './master/products/products.component';
import { CategoryComponent } from './master/category/category.component';
import { RolesComponent } from './master/roles/roles.component';
import { PrivilageComponent } from './master/privilage/privilage.component';
import { SalesComponent } from './report/sales/sales.component';
import { ImpressionComponent } from './report/impression/impression.component';
import { ProductSalesComponent } from './report/product-sales/product-sales.component';

@NgModule({
  declarations: [
    AppComponent,
    AppheaderComponent,
    FooterComponent,
    DashboardComponent,
    MenuComponent,
    LoginComponent,
    RegisterComponent,
    ForgotpasswordComponent,
    CustomersComponent,
    ProductsComponent,
    CategoryComponent,
    RolesComponent,
    PrivilageComponent,
    SalesComponent,
    ImpressionComponent,
    ProductSalesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
