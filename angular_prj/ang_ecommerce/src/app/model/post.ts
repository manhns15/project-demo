export interface Post {
  id?: string,
  slug?: string,
  title: string,
  image: string,
  body: string,
  description: string,
  createdAt?: Date,
  tagList: string[]
}
