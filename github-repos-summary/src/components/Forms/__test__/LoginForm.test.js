import React from "react"
import LoginForm from '../LoginForm'
import { render } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"

test('main header renders with correct text', () => {
  const { getByTestId } = render(<LoginForm />)
  const mainHeaderEl = getByTestId("main-header")
  expect(mainHeaderEl.textContent).toBe("GitHub Repos Summary");
});

test('sub-header renders with correct text', () => {
  const { getByTestId } = render(<LoginForm />)
  const subHeaderEl = getByTestId("sub-header")
  expect(subHeaderEl.textContent).toBe("Welcome");
})

test('username field contains a valid placeholder', () => {
  const { getByPlaceholderText } = render(<LoginForm />)
  const usernameEl = getByPlaceholderText("Username")
  expect(usernameEl).toBeDefined();
})

test('password field contains a valid placeholder', () => {
  const { getByPlaceholderText } = render(<LoginForm />)
  const passwordEl = getByPlaceholderText("Password")
  expect(passwordEl).toBeDefined();
})

test('login button renders with correct text', () => {
  const { getByTestId } = render(<LoginForm />)
  const loginBtnEl = getByTestId("login-btn")
  expect(loginBtnEl.textContent).toBe('Log in');
})




