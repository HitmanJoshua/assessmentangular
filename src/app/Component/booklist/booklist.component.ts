import { Component, OnInit } from '@angular/core';
import { BookserviceService } from 'src/app/Services/bookservice.service';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {
  bookList;
  getBooks(){
    // console.log('hello');
    this.bookservice.getbooks().subscribe(
      data=>{
        const data2 = JSON.parse(JSON.stringify(data));
        console.log(data);
      }
      
     
    );
  }
  constructor(private bookservice:BookserviceService) { }

  ngOnInit() {
    this.bookList=null;
  }

}
