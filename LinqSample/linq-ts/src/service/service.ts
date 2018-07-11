import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '../../node_modules/@angular/core';

@Injectable()
export class Service {
  constructor(private http: HttpClient) {}

  /**
   * 获取元器件数据
   */
  getComponent(): Observable<any> {
    return this.http.get(
      'https://www.cissdata.com/navigation/searchfilters?category_id=1002'
    );
  }
}
