import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

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
        },
        {
          id: 2,
          text: 'text',
          like: 0,
          comments: [
            {
              id: 1,
              text: 'comment'
            }
          ]
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
          comments: [
            {
              id: 1,
              text: 'comment'
            },
            {
              id: 1,
              text: 'comment'
            }
          ]
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
}
