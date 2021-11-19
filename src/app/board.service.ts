import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Comment, Item } from './models';

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

  deleteComment(columnId: number, itemId: number, commentId: number) {
    this.board = this.board.map((column) => {
      if (column.id === columnId) {
        const list = column.list.map((item: Item) => {
          if (item.id === itemId) {
            item.comments = item.comments.filter((comment: Comment) => {
              return comment.id !== commentId
            })
          }
          return item
        })
        column.list = list
      }
      return column
    })
    this.board$.next([...this.board])
  }
}
