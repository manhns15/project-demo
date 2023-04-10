export interface Post {
  slug: string,
  title: string,
  image: string,
  body: string,
  description: string,
  createAt?: string,
  tagList: string[]
}
