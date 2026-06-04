import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConantComponent } from './conant.component';

describe('ConantComponent', () => {
  let component: ConantComponent;
  let fixture: ComponentFixture<ConantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});