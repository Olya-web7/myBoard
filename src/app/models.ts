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
