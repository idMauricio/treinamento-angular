import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private api: HttpClient
  ) { }

  getFishSpecies():Observable<any[]> {
    return this.api.get<any>(environment.apiBase + 'species').pipe(map((el) => el.slice(0, 17)));
  }

}
