export interface ApiPost {
  userId: number,
  id: number,
  title: string,
  body: string
}

export interface ApiUser {
  username: string,
  email: string
}

export interface FullPostInfo extends ApiUser {
  id: number,
  title: string,
  body: string,
}