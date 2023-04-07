import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SrcBackupCopy2Component } from './src-backup-copy2.component';

describe('SrcBackupCopy2Component', () => {
  let component: SrcBackupCopy2Component;
  let fixture: ComponentFixture<SrcBackupCopy2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SrcBackupCopy2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SrcBackupCopy2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
