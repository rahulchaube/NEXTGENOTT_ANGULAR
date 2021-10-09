import { Component, OnInit } from '@angular/core';
import { setClassMetadata } from '@angular/core/src/r3_symbols';
import { AppService } from 'src/app/services/app.service';
import { Constants } from '../../constants';
import { Media_Type } from '../../models';
import { Router } from '@angular/router';
@Component({
  selector: 'app-searchlist',
  templateUrl: './searchlist.component.html',
  styleUrls: ['./searchlist.component.scss']
})
export class SearchlistComponent implements OnInit {
  result: any;
  constants: any;
  Media_Type: any;
  detail_data: any;
  movieResult: any;
  cacheMovies: any;
  constructor(private AppService: AppService, private router: Router ) {
    this.constants = Constants;
    this.Media_Type = Media_Type;
   }

  ngOnInit(): void {
    this.AppService.fetchMovies()
                   .subscribe((response: any)=>{
                    this.result = response.results;
                   })

    this.AppService._searchServiceSource$
    .subscribe((data)=> {
      this.result = data;
    });
  }

   fetchDetails(type: string, id: string)
  {
    this.router.navigate([`/details/${type}/${id}`]);
  }
}
