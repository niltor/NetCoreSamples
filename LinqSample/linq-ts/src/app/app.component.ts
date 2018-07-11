import { Component } from '@angular/core';
import { Service } from '../service/service';
import { User, Blog, Comment } from '../models/Models';
import { List } from 'linq.ts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  users: List<User> = new List<User>();
  blogs: List<Blog> = new List<Blog>();
  allblogs: List<Blog> = new List<Blog>();
  constructor(private service: Service) {
    this.initData();
    this.users.ForEach(value => {
      this.allblogs.AddRange(value.blogs.ToArray());
    });
  }

  badBlogs() {
    this.blogs = this.allblogs
      .Where(b => b.comments.Any(c => c.content === '很差'))
      .ToList();
  }

  sortByView() {
    this.blogs = this.allblogs.OrderByDescending(b => b.view).ToList();
  }

  goodSeason() {
    this.blogs = this.allblogs
      .Where(b => b.title.indexOf('夏天') > -1)
      .Where(b => b.comments.Any(c => c.content === '很好'))
      .ToList();
  }
  /**
   * 初始化数据
   */
  initData(): void {
    const xicai = new User('希才');
    const zhimin = new User('志民');
    const yiwen = new User('忆文');

    const blog1 = new Blog('北京的冬天', '太冷');
    const blog2 = new Blog('北京的夏天', '不冷');

    const blog3 = new Blog('上海的冬天', '很冷');
    const blog4 = new Blog('上海的夏天', '很热');

    const blog5 = new Blog('广州的春天', '冷');
    const blog6 = new Blog('广州的秋天', '冷');

    blog1.comments.AddRange([
      new Comment(zhimin.name, '好'),
      new Comment(yiwen.name, '很好')
    ]);
    blog2.comments.AddRange([
      new Comment(zhimin.name, '差'),
      new Comment(yiwen.name, '很好')
    ]);
    blog3.comments.AddRange([
      new Comment(zhimin.name, '好'),
      new Comment(yiwen.name, '很好')
    ]);
    blog4.comments.AddRange([
      new Comment(zhimin.name, '好'),
      new Comment(yiwen.name, '很差')
    ]);
    blog5.comments.AddRange([
      new Comment(zhimin.name, '好'),
      new Comment(yiwen.name, '很好')
    ]);
    blog6.comments.AddRange([
      new Comment(zhimin.name, '好'),
      new Comment(yiwen.name, '很差')
    ]);
    xicai.blogs.AddRange([blog1, blog2]);
    zhimin.blogs.AddRange([blog3, blog4]);
    yiwen.blogs.AddRange([blog5, blog6]);
    this.users.AddRange([xicai, zhimin, yiwen]);

    console.log(this.users);
  }
}
