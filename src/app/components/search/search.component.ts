import { Component, OnInit, Output, ElementRef, Renderer2 } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppService } from 'src/app/services/app.service';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchText: string = '';
  @Output() public dataReceivedEvent = new EventEmitter();
  fetchedResult: any;

  constructor(private http: HttpClient, private AppService: AppService, private element: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    const element = this.renderer.selectRootElement('#input');
    setTimeout(() => element.focus(), 0);
  }

   fetchContent(searchText: string)
   {

    if (this.searchText == null || this.searchText == '') return;
     this.AppService.fetchQueryResult(searchText)
                                .subscribe((response: any)=> {
                                  this.fetchedResult = (<any>response).results;
                                });

    if (this.fetchedResult != null && this.fetchedResult != undefined) 
    {
      this.AppService.sendData(this.fetchedResult);
    }
   }
   
   updateState(event: any)
   {
   if (event.keyCode == 98) this.fetchContent(event.target.value);
    else return;
  }

}
