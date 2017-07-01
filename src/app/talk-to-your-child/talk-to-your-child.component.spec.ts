import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TalkToYourChildComponent } from './talk-to-your-child.component';

describe('TalkToYourChildComponent', () => {
  let component: TalkToYourChildComponent;
  let fixture: ComponentFixture<TalkToYourChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TalkToYourChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TalkToYourChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
