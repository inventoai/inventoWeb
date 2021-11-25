import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryStoreComponent } from './inventory-store.component';

describe('InventoryStoreComponent', () => {
  let component: InventoryStoreComponent;
  let fixture: ComponentFixture<InventoryStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryStoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
