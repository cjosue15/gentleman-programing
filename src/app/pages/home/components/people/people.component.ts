import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss'],
})
export class PeopleComponent implements OnInit {
  @Input() isLeft: boolean;
  constructor() {
    this.isLeft = false;
  }

  ngOnInit(): void {}
}
