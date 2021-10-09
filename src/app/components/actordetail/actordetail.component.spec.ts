import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActordetailComponent } from './actordetail.component';

describe('ActordetailComponent', () => {
  let component: ActordetailComponent;
  let fixture: ComponentFixture<ActordetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActordetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActordetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
