export interface Posts {
  id: number
  description: string 
  url: string 
  tag_list?: string[]
  cover_image?: string
}


export interface Post {
  id: number 
  descriptio: string 
  slug: string 
  cover_image: string 
  created_at: string 
  tags: string[]
  body_html?:string
  url: string
}