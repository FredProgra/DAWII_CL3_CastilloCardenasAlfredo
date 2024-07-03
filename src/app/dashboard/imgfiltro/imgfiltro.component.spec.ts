import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgfiltroComponent } from './imgfiltro.component';

describe('ImgfiltroComponent', () => {
  let component: ImgfiltroComponent;
  let fixture: ComponentFixture<ImgfiltroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImgfiltroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgfiltroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
