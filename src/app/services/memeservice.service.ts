import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {  RootObject } from '../index/model/meme';
import { trends } from '../index/model/tranding';
import { translate } from '../index/model/translate';

@Injectable({
  providedIn: 'root'
})
export class MemeserviceService {


  constructor(private http: HttpClient) { }

  getGifs(q:string,l:string):Observable<RootObject>{
   // alert("https://api.giphy.com/v1/gifs/search?api_key=4nOdiB3MFctctCN9EOYfqlwYxnss6T7k&q="+q+"&limit="+l);
    
    //return this.http.get<any>("https://api.giphy.com/v1/gifs/search?api_key=4nOdiB3MFctctCN9EOYfqlwYxnss6T7k&q="+q+"&limit="+l);
    return this.http.get<RootObject>("https://api.giphy.com/v1/gifs/search?api_key=4nOdiB3MFctctCN9EOYfqlwYxnss6T7k&q="+q+"&limit="+l+"&lang=fr");
  }


  translate(s:string,weird:string):Observable<translate>{
    const headers = new HttpHeaders();

   headers.set("Access-Control-Allow-Origin", 'http://localhost:4200');
    //https://api.giphy.com/v1/gifs/translate?api_key=4nOdiB3MFctctCN9EOYfqlwYxnss6T7k&s=ryan%20gosling
   // return this.http.get<RootObject>("https://api.giphy.com/v1/gifs/translate?api_key=4nOdiB3MFctctCN9EOYfqlwYxnss6T7k&s"+s+"&weirdness="+weird);
    return this.http.get<translate>("https://api.giphy.com/v1/gifs/translate?api_key=4nOdiB3MFctctCN9EOYfqlwYxnss6T7k&s=ryan%20gosling",{headers:headers});
  
  }

  tranding(limit:string):Observable<trends>{
    
    return this.http.get<trends>("https://api.giphy.com/v1/gifs/trending?api_key=4nOdiB3MFctctCN9EOYfqlwYxnss6T7k&limit="+limit);
  }
}
