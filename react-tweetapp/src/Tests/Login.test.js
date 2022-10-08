import { render, screen } from '@testing-library/react';
import Login from '../Components/Login.js';
import { BrowserRouter as Router} from 'react-router-dom'


test('check whether image is visible in login page ', () => {
  render(<Router><Login /></Router>);
  const linkElement = screen.getByTestId('prj_image');
  expect(linkElement).toBeInTheDocument();
});

test('check whether username input is presnt in login page ', () => {
    render(<Router><Login /></Router>);
    const linkElement = screen.getByTestId('usrId');
    expect(linkElement).toBeInTheDocument();
  });
  
  test('check whether password input in login page ', () => {
    render(<Router><Login /></Router>);
    const linkElement = screen.getByTestId('passId');
    expect(linkElement).toBeInTheDocument();
  });

  test('check whether button is present in login page ', () => {
    render(<Router><Login /></Router>);
    const linkElement = screen.getByTestId('buttonId');
    expect(linkElement).toBeInTheDocument();
  });

  test('button should be disabled in login page ', () => {
    render(<Router><Login /></Router>);
    const linkElement = screen.getByTestId('buttonId');
    expect(linkElement).toBeDisabled()
  });

  test('Forgot password link should be present in login page ', () => {
    render(<Router><Login /></Router>);
    const linkElement = screen.getByTestId('forgotLink');
    expect(linkElement).toBeInTheDocument();
  });

  test('Sign Up Link should be present in login page ', () => {
    render(<Router><Login /></Router>);
    const linkElement = screen.getByTestId('signupLink');
    expect(linkElement).toBeInTheDocument();
  });
