import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InventorycountComponent } from './inventorycount.component';

describe('InventorycountComponent', () => {
  let component: InventorycountComponent;
  let fixture: ComponentFixture<InventorycountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventorycountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InventorycountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
