import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VeganoPage } from './vegano.page';

describe('VeganoPage', () => {
  let component: VeganoPage;
  let fixture: ComponentFixture<VeganoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VeganoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
