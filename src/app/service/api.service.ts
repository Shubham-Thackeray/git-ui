import { Injectable } from '@angular/core';
import { ApiBaseService } from './api-base.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private api: ApiBaseService) { }
  getProfile(name) {
    return this.api.get(name, {}, {});
  }
  getRepos(name) {
    return this.api.get(name+'/repos', {}, {});
  }
}
