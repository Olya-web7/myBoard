import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Board, Column } from './models';

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  private initBoard = [
    {
      id: 1,
      title: 'todo',
      color: 'tomato',
      list: [
        {
          id: 1,
          text: 'text',
          like: 0,
          comments: []
        }
      ]
    },
    {
      id: 1,
      title: 'done',
      color: 'blue',
      list: [
        {
          id: 1,
          text: 'text',
          like: 0,
          comments: []
        }
      ]
    }
  ]
  private board: any[] = this.initBoard
  private board$ = new BehaviorSubject<any[]>(this.initBoard)
  constructor() { }

  getBoard$() {
    return this.board$.asObservable()
  }

  addComment(columnId: number, cardId: number, text: string) {
    this.board = this.board.map((column: Column) => {
      if (column.id === columnId) {
        const list = column.list.map((card) => {
          if (card.id === cardId) {
            const newComment = {
              id: Date.now(),
              text,
            };
            card.comments = [newComment, ...card.comments];
          }
          return card;
        });
        column.list = list;
      }
      return column;
    });
    this.board$.next([...this.board]);
  }

}
