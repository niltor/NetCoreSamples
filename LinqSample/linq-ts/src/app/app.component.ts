import { Component } from '@angular/core';
import { Service } from '../service/service';
import { User, Blog, Comment, Province } from '../models/Models';

import { List } from 'typescript-dotnet-es6/System/Collections/List';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  province: List<Province>;

  constructor(private service: Service) {
    service.getCitys().subscribe(res => {
      this.province = new List(res);

      console.log(this.province.linq.count());
      this.province.linq.sum(p => p.city.linq.count());
    });
  }
}
