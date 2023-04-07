import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SrcComponentComponent } from './src-component.component';

describe('SrcComponentComponent', () => {
  let component: SrcComponentComponent;
  let fixture: ComponentFixture<SrcComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SrcComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SrcComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
