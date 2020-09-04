import { Component, OnInit, Input } from '@angular/core';
import { SquareEnum } from './SquareEnum';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {
  @Input() public piece: SquareEnum = SquareEnum.EMPTY;
  @Input() public row: number;
  @Input() public col: number;
  constructor() { }

  ngOnInit(): void {
  }

}
