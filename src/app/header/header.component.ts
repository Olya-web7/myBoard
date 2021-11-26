import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BoardService } from '../board.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    public boardService: BoardService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  addColumn(event: string) {
    if (event) {
      this.boardService.addColumn(event)
    }
  }

}
