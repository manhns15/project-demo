export interface Post {
  id?: string;
  slug?: string,
  title: string,
  image: string,
  body: string,
  description: string,
  createdAt?: string,
  tagList: string[]
}
