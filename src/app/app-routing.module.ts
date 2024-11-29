import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderStatusComponent } from './order-status/order-status.component';


const routes: Routes = [
  {path:'', redirectTo:'orderStatus', pathMatch: 'full'},
  {path: 'orderStatus', component: OrderStatusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
