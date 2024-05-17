import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogsAndContactsComponent } from './blogs-and-contacts.component';

describe('BlogsAndContactsComponent', () => {
  let component: BlogsAndContactsComponent;
  let fixture: ComponentFixture<BlogsAndContactsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogsAndContactsComponent]
    });
    fixture = TestBed.createComponent(BlogsAndContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
