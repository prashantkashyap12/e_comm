import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class DbProductService {


  constructor(private _http:HttpClient) {
    this.getCategories();
   }

   private databaseUrl = '../../assets/database.json';

  
  // show Category List - Done

  getCategories():Observable<any>{
    return this._http.get<any>(this.databaseUrl);
  }
  // show Category List - Short

}
