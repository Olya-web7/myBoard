import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Card, Column, Board } from './models';

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
      id: 2,
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

  deleteCard(cardId: number, columnId: number) {
    this.board = this.board.map((column: Column) => {
      if (column.id === columnId) {
        column.list = column.list.filter((card) => card.id !== cardId);
      }
      return column;
    });
    this.board$.next([...this.board]);
  }

  addLike(cardId: number, columnId: number) {
    this.board = this.board.map((column) => {
      if (column.id === columnId) {
        let list = column.list.map((card: Card) => {
          if (card.id === cardId) {
            card.like++
          }
          return card;
        });
        column.list = list;
        return column;
      } else {
        return column;
      }
    });
    this.board$.next([...this.board]);
  }

  addComment(columnId: number, cardId: number, text: string) {
    this.board = this.board.map((column: Column) => {
      if (column.id === columnId) {
        const list = column.list.map((card: Card) => {
          if (card.id === cardId) {
            let newComment = {
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
