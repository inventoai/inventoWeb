import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewproductformComponent } from './newproductform.component';

describe('NewproductformComponent', () => {
  let component: NewproductformComponent;
  let fixture: ComponentFixture<NewproductformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewproductformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewproductformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
