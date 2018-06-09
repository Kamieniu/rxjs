import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatBoxMessegesComponent } from './chat-box-messeges.component';

describe('ChatBoxMessegesComponent', () => {
  let component: ChatBoxMessegesComponent;
  let fixture: ComponentFixture<ChatBoxMessegesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatBoxMessegesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatBoxMessegesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
