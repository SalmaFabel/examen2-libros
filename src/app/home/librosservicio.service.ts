import { Injectable } from '@angular/core';
import {Libro} from './libros.model';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LibrosservicioService {

  librodetail={
  title:'',
  author:'',
  content:'',
  thumbnail:'',
  }
  constructor(public http:HttpClient) { }
  

  public getLibro(results:string){
    
    this.http.get(results).subscribe((data)=>{
      this.librodetail.title=data['title'];
      this.librodetail.author=data['author'];
      this.librodetail.content=data['content_short'];
      this.librodetail.thumbnail=data['thumbnail']
      
    })
    return this.librodetail;
  }
}
