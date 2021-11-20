export interface Comment {
  id: number,
  text: string
}

export interface Card {
  id: number,
  text: string,
  like: number,
  comments: Comment[]
}

export interface Column {
  id: number,
  text: string,
  color: string,
  list: Card[]
}

export interface Item {
  id: number,
  text: string,
  like: number,
  color?: string,
  comments: Comment[]
}

export interface Board {
  id: number,
  title: string,
  color: string,
  list: Card[]
}
