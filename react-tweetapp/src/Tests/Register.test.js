import { render, screen } from '@testing-library/react';
import Register from '../Components/Register.js';
import { BrowserRouter as Router} from 'react-router-dom'


test('check whether image is visible in register page ', () => {
  render(<Router><Register /></Router>);
  const linkElement = screen.getByTestId('prjImage');
  expect(linkElement).toBeInTheDocument();
});

test('check whether username input is presnt in register page ', () => {
    render(<Router><Register /></Router>);
    const linkElement = screen.getByTestId('usrId');
    expect(linkElement).toBeInTheDocument();
  });
  
  test('check whether password input in register page ', () => {
    render(<Router><Register /></Router>);
    const linkElement = screen.getByTestId('passId');
    expect(linkElement).toBeInTheDocument();
  });

  test('check whether name input in register page ', () => {
    render(<Router><Register /></Router>);
    const linkElement = screen.getByTestId('nameId');
    expect(linkElement).toBeInTheDocument();
  });

  test('check whether DOB input in register page ', () => {
    render(<Router><Register /></Router>);
    const linkElement = screen.getByTestId('dobId');
    expect(linkElement).toBeInTheDocument();
  });

  test('check whether button is present in register page ', () => {
    render(<Router><Register /></Router>);
    const linkElement = screen.getByTestId('regButtonId');
    expect(linkElement).toBeInTheDocument();
  });

  test('button should be disabled in login page ', () => {
    render(<Router><Register /></Router>);
    const linkElement = screen.getByTestId('regButtonId');
    expect(linkElement).toBeDisabled()
  });

  test('Login Page link should be present in register page ', () => {
    render(<Router><Register /></Router>);
    const linkElement = screen.getByTestId('loginLink');
    expect(linkElement).toBeInTheDocument();
  });

