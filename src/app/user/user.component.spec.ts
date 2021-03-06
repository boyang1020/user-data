import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatFormFieldModule, MatInputModule, MatPaginatorModule, MatTableModule } from '@angular/material';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { UserComponent } from './user.component';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserComponent],
      imports: [HttpClientTestingModule, MatFormFieldModule, MatInputModule, MatPaginatorModule, MatTableModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
