import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Subject } from 'rxjs';
import { Card, Column } from './models';

@Injectable({providedIn: 'root'})
export class BoardService {

  private initBoard = [
    {id: 1, title: 'Went well', color: '#009785', list: []}
  ]
  private board: Column[] = this.initBoard

  private board$ = new BehaviorSubject<Column[]>(this.initBoard)

  constructor(private http: HttpClient ) {
  }

  getBoard() {
    this.http.get<{message: string, board: Column[]}>('http://localhost:3000/api/board')
      .subscribe((boardData) => {
        this.board = boardData.board;
        this.board$.next([...this.board]);
      });
  }

  getBoard$() {
    return this.board$.asObservable()
  }

  changeColumnColor(color: string, columnId: number) {
    this.board = this.board.map((column: Column) => {
      if (column.id === columnId) {
        column.color = color;
      }
      return column;
    });
    this.board$.next([...this.board]);
  }

  addColumn(title: string) {
    const newColumn: Column = {
      id: Date.now(),
      title: title,
      color: '#009785',
      list: [],
    };
    // this.board = [...this.board, newColumn];
    this.http.post<{ message: string }>('http://localhost:3000/api/board', newColumn)
      .subscribe((responseData) => {
        console.log(responseData.message);
        this.board.push(newColumn);
        this.board$.next([...this.board]);
      });
  }

  addCard(text: string, columnId: number) {
    const newCard: Card = {
      id: Date.now(),
      text,
      like: 0,
      comments: [],
    };
    this.board = this.board.map((column: Column) => {
      if (column.id === columnId) {
        column.list = [...column.list, newCard];
      }
      return column;
    });
    this.board$.next([...this.board]);
  }

  deleteCard(cardId: number, columnId: number) {
    this.board = this.board.map((column: Column) => {
      if (column.id === columnId) {
        column.list = column.list.filter((card: Card) => card.id !== cardId);
      }
      return column;
    });
    this.board$.next([...this.board]);
  }

  addLike(cardId: number, columnId: number) {
    this.board = this.board.map((column: Column) => {
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
