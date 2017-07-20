import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractSenderComponent } from './contract-sender.component';

describe('ContractSenderComponent', () => {
  let component: ContractSenderComponent;
  let fixture: ComponentFixture<ContractSenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractSenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractSenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
