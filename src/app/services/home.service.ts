import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { catFactApiBase } from "../core/constants";
import { CatFact } from "../models/catFact";
import { BaseService } from "./base.service";

@Injectable({
  providedIn: 'root',
})
export class HomeService extends BaseService {
  constructor(private httpClient: HttpClient) {
    super(httpClient, catFactApiBase, 'fact');
  }

  getCatFact(): Observable<CatFact> {
    //see comment on get external
    //If you are reading this you will wanna talk to me before doing your own work
    //chat to me before getting data from your own api
    return this.getExternal<CatFact>();
  }
  
}
