import { List } from 'typescript-dotnet-es6/System/Collections/List';

export interface ComponentModel {
  package?: string;
  selected_categories?: string;
  category_id?: number;
  norm_no?: string;
  origin?: string;
  name?: string;
  specification_model_no?: string;
  pid?: number;
  datasheet_id?: number;
  id?: string;
  manufacturer_name?: string;
  quality?: string;
  picture_url?: string;
}

/**
 * 用户
 */
export class User {
  name: string;
  blogs: List<Blog>;
  constructor(name: string) {
    this.name = name;
    this.blogs = new List<Blog>();
  }
}

/**
 * 博客
 */
export class Blog {
  title: string;
  content: string;
  comments: List<Comment>;
  view: number;

  constructor(title: string, content: string) {
    this.title = title;
    this.content = content;
    this.view = Math.round(Math.random() * 1000);
    this.comments = new List<Comment>();
  }
}

/**
 * 评论
 */
export class Comment {
  name: string;
  content: string;
  blog: Blog;
  constructor(name: string, content: string) {
    this.name = name;
    this.content = content;
  }
}

export class Province {
  name: string;
  city: List<City>;
}

export class City {
  name: string;
  area: List<string>;
}
