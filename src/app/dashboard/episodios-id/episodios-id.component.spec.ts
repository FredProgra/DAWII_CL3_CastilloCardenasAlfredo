import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodiosIDComponent } from './episodios-id.component';

describe('EpisodiosIDComponent', () => {
  let component: EpisodiosIDComponent;
  let fixture: ComponentFixture<EpisodiosIDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EpisodiosIDComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EpisodiosIDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
