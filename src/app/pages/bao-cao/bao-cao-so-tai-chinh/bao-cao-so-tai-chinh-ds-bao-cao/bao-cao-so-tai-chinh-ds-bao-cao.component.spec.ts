import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaoCaoSoTaiChinhDsBaoCaoComponent } from './bao-cao-so-tai-chinh-ds-bao-cao.component';

describe('BaoCaoSoTaiChinhDsBaoCaoComponent', () => {
  let component: BaoCaoSoTaiChinhDsBaoCaoComponent;
  let fixture: ComponentFixture<BaoCaoSoTaiChinhDsBaoCaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaoCaoSoTaiChinhDsBaoCaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaoCaoSoTaiChinhDsBaoCaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
