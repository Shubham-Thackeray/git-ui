import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitCardsComponent } from './git-cards.component';

describe('GitCardsComponent', () => {
  let component: GitCardsComponent;
  let fixture: ComponentFixture<GitCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
