import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { SearchComponent } from './search.component';
import { AppService } from '../../services/app.service';
import { Observable } from 'rxjs';
import { mockResponse } from '../../mocks/mocks';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
      declarations: [ SearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the fetch content method', () => {
    let appService = TestBed.inject<AppService>(AppService);
    
    expect(appService.fetchQueryResult('rahul')).toBeTruthy();
  });

  it('should call the fetch content method', () => {
    let appService = TestBed.inject<AppService>(AppService);
    
    expect(appService.fetchQueryResult('rahul')).toBeTruthy();
  });

  it('should call the fetch content method', waitForAsync(() => {
    fixture = TestBed.createComponent(SearchComponent);
    let fetchedResult = mockResponse;
    let app = fixture.componentInstance;
    let appService = TestBed.inject<AppService>(AppService);
    let spy = spyOn(appService, 'fetchQueryResult')
              .and.returnValue(new Observable());
    fixture.detectChanges();
    fixture.whenStable().then(()=>{
      expect(app).toBeTruthy();

    })
  }));
  // it('should call the fetch content method', waitForAsync(() => {
  //   fixture = TestBed.createComponent(SearchComponent);
  //   let fetchedResult = mockResponse;
  //   let app = fixture.componentInstance;
  //   let appService = TestBed.inject<AppService>(AppService);
  //   let spy = spyOn(appService, 'fetchQueryResult')
  //             .and.returnValue(new Observable());
  //   fixture.detectChanges();
  //   fixture.whenStable().then(()=>{
  //     expect(app).toBeFalsy();

  //   })
  // }));
});
