 import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-tab',
    templateUrl: 'home.component.html'
  })
  export class HomeComponent implements OnInit {
    myContext = {$implicit: 'World', localSk: 'Svet'};
    value: Number = 1;
    time: String;
    hour: Number = 0;
    min: Number = 0;
    sec: Number = 0;

ngOnInit() {
//  const offset = new Date().getTimezoneOffset();

// console.log(Intl.DateTimeFormat().resolvedOptions().timeZone);

  setInterval(() => {
    this.time = new Date().toLocaleTimeString();
   }, 1000);

}

  switch(svalue, event) {

    switch (svalue) {
      case 1: this.value = 1;
               break;
      case 2: this.value = 2;
               break;
      case 3: this.value = 3;
               break;
    }
  }

  counter(h, m, s) {

    console.log(h, m, s);

  }

  stopwatch() {

  }
  }
