export interface Post {
  slug: string,
  title: string,
  image: string,
  body: string,
  description: string,
  createdAt?: string,
  tagList: string[]
}
