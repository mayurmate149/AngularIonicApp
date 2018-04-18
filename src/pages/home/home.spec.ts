import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { MyApp } from '../../app/app.component';
import { HomePage } from './home';
import { LoginComponent } from '../../components/login';

let comp: HomePage;
let fixture: ComponentFixture<HomePage>;

describe('Page: Home Page', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MyApp, HomePage, LoginComponent],
      providers: [],
      imports: [
        IonicModule.forRoot(MyApp),
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePage);
    comp = fixture.componentInstance;
  });

  afterEach(() => {
    fixture.destroy();
    comp = null;
  });

  it('is created', () => {
    expect(fixture).toBeTruthy();
    expect(comp).toBeTruthy();
  });

  it('initialises with a title of Angular Ionic App', () => {
    expect(comp.title).toEqual('Angular Ionic App');
  });

});
