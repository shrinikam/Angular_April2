import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SrcBackupComponent } from './src-backup.component';

describe('SrcBackupComponent', () => {
  let component: SrcBackupComponent;
  let fixture: ComponentFixture<SrcBackupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SrcBackupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SrcBackupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
