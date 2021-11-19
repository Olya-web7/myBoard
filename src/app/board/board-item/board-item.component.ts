import { Component, OnInit, Input } from '@angular/core';
import { Item } from 'src/app/models';

@Component({
  selector: 'app-board-item',
  templateUrl: './board-item.component.html',
  styleUrls: ['./board-item.component.scss']
})
export class BoardItemComponent implements OnInit {
  @Input() item!: Item;
  commentInput = '';
  open = false;
  constructor() { }

  ngOnInit(): void {
  }

}
