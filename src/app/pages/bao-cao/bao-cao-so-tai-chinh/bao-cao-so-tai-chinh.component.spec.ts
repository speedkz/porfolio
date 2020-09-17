import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaoCaoSoTaiChinhComponent } from './bao-cao-so-tai-chinh.component';

describe('BaoCaoSoTaiChinhComponent', () => {
  let component: BaoCaoSoTaiChinhComponent;
  let fixture: ComponentFixture<BaoCaoSoTaiChinhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaoCaoSoTaiChinhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaoCaoSoTaiChinhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
