import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '../../node_modules/@angular/core';
import { Province } from '../models/Models';

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

  getCitys(): Observable<Province[]> {
    return this.http.get<Province[]>('assets/citys.json');
  }
}
