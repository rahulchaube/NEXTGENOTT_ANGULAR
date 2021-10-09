import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../services/app.service';
import {Router, Route, ActivatedRoute } from '@angular/router';
import { Constants } from '../../../constants';
@Component({
  selector: 'app-searchdetail',
  templateUrl: './searchdetail.component.html',
  styleUrls: ['./searchdetail.component.scss']
})
export class SearchdetailComponent implements OnInit {
  params: any;
  data: any;
  constants: any;
  credits: any;
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
                   });
      this.credits = this.data.credits;
    }
    
    navigateToPreviousState(){
      this.router.navigate(['/']);
    }
}
