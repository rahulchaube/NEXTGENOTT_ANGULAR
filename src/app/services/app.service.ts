import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../constants';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { setClassMetadata } from '@angular/core/src/r3_symbols';
import { Media_Type, PARAMS } from '../models';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  requestData: any;
  private _searchServiceSource = new Subject();
  _searchServiceSource$ = this._searchServiceSource.asObservable();
  constructor(private http: HttpClient) { }

  fetchQueryResult(keyword: any)
  {
    const API_URL = `${Constants.BASE_URL}/search/${Constants.SEARCH_TYPE}?api_key=${Constants.API_KEY}&language=en-US&query=${keyword}&page=1&include_adult=false&sort_by=popularity.desc`;
            return this.http.get(API_URL);
  }

  /**
   * 
   * @param id  Used as an identifier to fetch the details from 
   */
  fetchMovies()
  {
    return this.http.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${Constants.API_KEY}`);
  }
    
  /**
   * 
   * @param id  Used as an identifier to fetch the details from 
   */
  fetchDetail(type: string, id: string)
  {
    const relatedData =
    type === Media_Type.CAST ? PARAMS.MOVIE_CREDITS : PARAMS.CREDITS;
    //test purpose
    const API_URL = `${Constants.BASE_URL}/${type.toLowerCase()}/${id}?api_key=${Constants.API_KEY}&language=en-US&append_to_response=${relatedData.toLowerCase()}&sort_by=popularity.desc`;
    return this.http.get(API_URL);
  }

  /**
   * Fetches details based on ID.
   */
  findById(external_id: any)
  {
    const API_URL = `${Constants.BASE_URL}/find/${external_id}?api_key=${Constants.API_KEY}&language=en-US&external_source=imdb_id`;
    return this.http.get(API_URL);
  }
  sendData(message: any)
  {
    this._searchServiceSource.next(message);
  }
}
