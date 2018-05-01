import { Component } from '@angular/core';

import {Hobby, Stack, User} from '../../models/User';

@Component({
  selector: 'app-myfirstcomponent',
  templateUrl: './myfirstcomponent.component.html',
  styleUrls: ['./myfirstcomponent.component.css'],
})

export class MyFirstComponent {
user: User = {
  first_name: 'Maxim',
  last_name: 'Shevjakov',
  age: 29
};

stack: Stack[];

hobby: Hobby[];

clickMessage = '';

showBlock = false;

  constructor() {

    setTimeout( () => this.showToggle(), 2000);
    this.stack = [{
      label: 'JavaScript'
    }, {
      label: 'HTML5'
    }, {
      label: 'CSS3'
    }];

    this.hobby = [{
      name: 'Sport'
    }, {
      name: 'Music'
    }, {
      name: 'Codding'
    }];
  }

  showToggle() {
    this.showBlock = !this.showBlock;
  }

  onClickMe() {
    this.clickMessage = '../assets/photo.png';
  }
}
