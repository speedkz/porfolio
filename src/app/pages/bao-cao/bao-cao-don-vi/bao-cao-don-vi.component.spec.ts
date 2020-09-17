import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaoCaoDonViComponent } from './bao-cao-don-vi.component';

describe('BaoCaoDonViComponent', () => {
  let component: BaoCaoDonViComponent;
  let fixture: ComponentFixture<BaoCaoDonViComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaoCaoDonViComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaoCaoDonViComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
