import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractCheckerComponent } from './contract-checker.component';

describe('ContractCheckerComponent', () => {
  let component: ContractCheckerComponent;
  let fixture: ComponentFixture<ContractCheckerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractCheckerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractCheckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
