import { Component, OnInit } from '@angular/core';
import { Rwby } from '../rwby';
import { RWBY } from '../mock-rwby';

@Component({
  selector: 'app-rwby',
  templateUrl: './rwby.component.html',
  styleUrls: ['./rwby.component.css']
})
export class RwbyComponent implements OnInit {

  selectedR: Rwby;
  rwby = RWBY;

  constructor() {
  }

  ngOnInit() {
  }

  onSelect(huntsman: Rwby) {
    selectedR = huntsman;
  }

}
