import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlatformsService {

  api_key = "key=9322182838084ca58ecc7563738a5046";
  link = "https://api.rawg.io/api/platforms";

  constructor(private obj:HttpClient) { }

  getAll(){
    return this.obj.get(this.link + "?" + this.api_key);
  }

  getByName(name){
    return this.obj.get(this.link + "/" + name + "?" + this.api_key);
  }
  getById(id){
    return this.obj.get(this.link + "/" + id + "?" + this.api_key);
  }
}
