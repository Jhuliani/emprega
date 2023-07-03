import { HttpClient } from "@angular/common/http";
import { delay, take, tap } from "rxjs";

export class CrudService<T> {

  constructor( protected http: HttpClient,
    private API_URL: any){

    }

    list(){
      return this.http.get<T[]>(this.API_URL)
      .pipe(
        delay(2000),
        tap(console.log)
      );
    }

    loadById(id: T){
      return this.http.get<T>(`${this.API_URL}/${id}`).pipe(take(1));
    }

    private create(record: T){
      return this.http.post(this.API_URL, record).pipe(take(1));
    }

    private update(record:T){
      return this.http.put(`${this.API_URL}/${record.id}`, record).pipe(take(1));
    }

}
