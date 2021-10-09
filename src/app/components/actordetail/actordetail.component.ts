import { Component, OnInit } from '@angular/core';
import {Router, Route, ActivatedRoute } from '@angular/router';
import { AppService } from '../../services/app.service';
import { Constants } from '../../constants';

@Component({
  selector: 'app-actordetail',
  templateUrl: './actordetail.component.html',
  styleUrls: ['./actordetail.component.scss']
})
export class ActordetailComponent implements OnInit {
  params: any;
  data: any;
  constants: any;
  castList: any;
  constructor(private AppService: AppService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.constants = Constants;
    this.route.params
    .subscribe((paramObj)=>{
      this.params = {
        type: paramObj.type,
        id: paramObj.id
      };
    });

  this.fetchDetails(this.params.type, this.params.id);
  }
    /**
     * Function to fetch details of content.
     * @param type type of content, such as movie, tv, cast
     * @param id  unique identifier associated with the content
     */
     async fetchDetails(type: string, id: string){
      await this.AppService.fetchDetail(type, id)
              .subscribe((response)=>{
                this.data = response;
                this.castList = this.data.movie_credits.cast;
              });
      }

      navigateToDetails(type: string, id: string){
        this.router.navigate([`/details/${type}/${id}`]);
      }

}
