import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PittieFooterComponent } from './pittie-footer.component';

describe('PittieFooterComponent', () => {
  let component: PittieFooterComponent;
  let fixture: ComponentFixture<PittieFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PittieFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PittieFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
