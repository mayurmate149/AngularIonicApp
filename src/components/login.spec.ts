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
    de = fixture.debugElement.query(By.css('form'));
    element = de.nativeElement;
  });

  // to test whether LoginComponent is defined or not
  it('should have a defined component', () => {
    expect(component).toBeDefined();
  });

  // to test whether username is defined or not
  it('should contain username', () => {
    const username = component.form.controls.username;
    expect(username).toBeDefined();
  });

  // to test whether password is defined or not
  it('should contain password', () => {
    const password = component.form.controls.password;
    expect(password).toBeDefined();
  });

  // to test whether button is present or not
  it('should contain login button', () => {
    expect(element.innerHTML).toContain('button');
  });

  // to test whether checkbox is present or not
  it('should contain Remember Me checkbox', () => {
    expect(element.innerHTML).toContain('ion-checkbox');
  });

  // to test whether Forgot password is present or not
  it('should contain Forgot password', () => {
    const debug = fixture.debugElement.query(By.css('a'));
    const el = de.nativeElement;
    expect(el.innerHTML).toContain('Forgot Password');
  });

  // to test whether copyrights text is present or not
  // TODO : we have to move this test cases into footer component
  it('should contain footer of copyrights text', () => {
    const debug = fixture.debugElement.query(By.css('.footer'));
    const el = de.nativeElement;
    expect(el.innerHTML).toContain('&copy; 2018 LocationGuru Ltd.');
  });

  // to test whether username input field is empty initially or not
  it('should check initial input to be empty', () => {
    const username = component.form.controls.username;
    expect(username.value.trim()).toBe('');
  });

  // to test whether type of input field is password or not
  it('should have input field of type password', () => {
    const debug = fixture.debugElement.query(By.css('input'));
    const el = de.nativeElement;
    expect(el.innerHTML).toContain('type="password"');
  });

  // to test whether type of input field is text or not
  it('should have username input field of type text', () => {
    const debug = fixture.debugElement.query(By.css('input'));
    const el = de.nativeElement;
    expect(el.innerHTML).toContain('type="text"');
  });

  // to test whether length of username is between 6 and 20 or not
  it('should have length of username input field between 6 and 20', () => {
    component.form.controls.username.setValue('waffwaff');
    const username = component.form.controls.username;
    expect(username.value.length).toBeGreaterThan(6);
    expect(username.value.length).toBeLessThan(20);
  });

  // to test whether length of password is between 6 and 20 or not
  it('should have length of password input field between 6 and 20', () => {
    component.form.controls.password.setValue('waffwaff');
    const password = component.form.controls.password;
    expect(password.value.length).toBeGreaterThan(6);
    expect(password.value.length).toBeLessThan(20);
  });

  // to test whether label is Username or not
  it('should have label as Username', () => {
    const debug = fixture.debugElement.query(By.css('label'));
    const el = de.nativeElement;
    expect(el.textContent).toContain('Username');
  });

  // to test whether label is Password or not
  it('should have label as Password', () => {
    const debug = fixture.debugElement.query(By.css('label'));
    const el = de.nativeElement;
    expect(el.textContent).toContain('Password');
  });

});
