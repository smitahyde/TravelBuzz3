import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HotelsUpdateComponent } from './hotels-update.component';

describe('HotelsUpdateComponent', () => {
  let component: HotelsUpdateComponent;
  let fixture: ComponentFixture<HotelsUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelsUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
