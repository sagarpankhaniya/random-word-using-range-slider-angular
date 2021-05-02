import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordgeneratorComponent } from './wordgenerator.component';

describe('WordgeneratorComponent', () => {
  let component: WordgeneratorComponent;
  let fixture: ComponentFixture<WordgeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordgeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordgeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
