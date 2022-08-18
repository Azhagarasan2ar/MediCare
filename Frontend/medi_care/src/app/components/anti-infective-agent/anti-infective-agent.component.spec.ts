import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntiInfectiveAgentComponent } from './anti-infective-agent.component';

describe('AntiInfectiveAgentComponent', () => {
  let component: AntiInfectiveAgentComponent;
  let fixture: ComponentFixture<AntiInfectiveAgentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AntiInfectiveAgentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AntiInfectiveAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
