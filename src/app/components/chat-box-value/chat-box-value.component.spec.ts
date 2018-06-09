import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatBoxValueComponent } from './chat-box-value.component';

describe('ChatBoxValueComponent', () => {
  let component: ChatBoxValueComponent;
  let fixture: ComponentFixture<ChatBoxValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatBoxValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatBoxValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
