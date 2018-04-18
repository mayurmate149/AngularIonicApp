import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';


describe('Component: Login', () => {

  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let de: DebugElement;
  let element: HTMLElement;

  beforeEach(() => {

    // refine the test module by declaring the test component
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [LoginComponent],
    });

    // create component and test fixture
    fixture = TestBed.createComponent(LoginComponent);

    // get test component from the fixture
    component = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('.login'));
    element = de.nativeElement;
  });

  it('should have a defined component', () => {
    expect(component).toBeDefined();
  });

  it('should contain email', () => {
    const email = component.form.controls.email;
    expect(email).toBeDefined();
  });

  it('should contain password', () => {
    const password = component.form.controls.password;
    expect(password).toBeDefined();
  });

  it('should contain login button', () => {
    expect(element.innerHTML).toContain('button');
  });

  it('should contain Remember Me', () => {
    expect(element.innerHTML).toContain('.checkbox');
  });

  it('should contain Forget password', () => {
    const debug = fixture.debugElement.query(By.css('a'));
    const el = de.nativeElement;
    expect(el.innerHTML).toContain('Forget Password');
  });

  it('should contain footer as @2018 LocationGuru Pvt. Ltd.', () => {
    const debug = fixture.debugElement.query(By.css('.footer'));
    const el = de.nativeElement;
    expect(el.innerHTML).toContain('@2018 LocationGuru Pvt. Ltd.');
  });

  it('should check initial input', () => {
    const email = component.form.controls.email;
    fixture.detectChanges();
    expect(email.value).toBe('');
  });

  it('should have input field of type password', () => {
    const debug = fixture.debugElement.query(By.css('input'));
    const el = de.nativeElement;
    expect(el.innerHTML).toContain('type="password"');
  });

  it('should have input field of type email', () => {
    const debug = fixture.debugElement.query(By.css('input'));
    const el = de.nativeElement;
    expect(el.innerHTML).toContain('type="email"');
  });

  it('should have length of input fields between 6 and 20', () => {
    const debug = fixture.debugElement.query(By.css('input'));
    const el = de.nativeElement;
    expect(el.value.length).toBeGreaterThan(6);
    expect(el.value.length).toBeLessThan(20);
  });

  it('should have label as Email and Password', () => {
    const debug = fixture.debugElement.query(By.css('label'));
    const el = de.nativeElement;
    fixture.detectChanges();
    expect(el.textContent).toContain('Email');
    expect(el.textContent).toContain('Password');
  });

});
