import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-order-status',
  templateUrl: './order-status.component.html',
  styleUrls: ['./order-status.component.css'],
})
export class OrderStatusComponent implements OnInit {
  orderStatus: any;  //     variable to hold the value and display it to UI
  data: Observable<any>;  // through variable'data' we will bind the subscribed value of observable 
  constructor() {}
  ngOnInit(): void {

    // Method -1
    // new Observable((observer) => {
    //   setTimeout(() => {
    //     observer.next('PENDING');        // next() method will make the transition in upcoming status
    //   }, 1000);
    //   setTimeout(() => {
    //     observer.next('IN-PROGRESS');
    //   }, 2000);
    //   setTimeout(() => {
    //     observer.next('COMPLETED');
    //   }, 3000);
    //   setTimeout(() => {
    //     observer.complete();   // complete() method wiil ensure that the observable status has completed
    //   }, 4000);
    // }).subscribe((value) => {      // subscribe() method is used to process thye observable data
    //   this.orderStatus = value;      // finally, we are transfering subscribed data to our normal variable 
    // });

    //  METHOD -2
    this.data = new Observable((observer) => {
      setTimeout(() => {
        observer.next('PENDING');        // next() method will make the transition in upcoming status
      }, 1000);
      setTimeout(() => {
        observer.next('IN-PROGRESS');
      }, 2000);
      setTimeout(() => {
        observer.next('COMPLETED');
      }, 3000);
      setTimeout(() => {
        observer.error();   // error() method wiil ensure that the observable doesn't have any error
      }, 4000);
      setTimeout(() => {
        observer.complete();   // complete() method wiil ensure that the observable status has completed
      }, 4000);
    })

    this.data.subscribe((value) => {      // subscribe() method is used to process thye observable data
      this.orderStatus = value;      // finally, we are transfering subscribed data to our normal variable 
    });
  }
}
