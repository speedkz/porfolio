import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaoCaoSoTaiChinhBcVuotCapComponent } from './bao-cao-so-tai-chinh-bc-vuot-cap.component';

describe('BaoCaoSoTaiChinhBcVuotCapComponent', () => {
  let component: BaoCaoSoTaiChinhBcVuotCapComponent;
  let fixture: ComponentFixture<BaoCaoSoTaiChinhBcVuotCapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaoCaoSoTaiChinhBcVuotCapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaoCaoSoTaiChinhBcVuotCapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
