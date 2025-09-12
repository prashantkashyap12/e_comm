import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EhelpComponent } from './ehelp.component';

describe('EhelpComponent', () => {
  let component: EhelpComponent;
  let fixture: ComponentFixture<EhelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EhelpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EhelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
