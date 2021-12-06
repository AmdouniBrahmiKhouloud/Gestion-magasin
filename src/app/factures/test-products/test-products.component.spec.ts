import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestProductsComponent } from './test-products.component';

describe('TestProductsComponent', () => {
  let component: TestProductsComponent;
  let fixture: ComponentFixture<TestProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
