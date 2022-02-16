/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react'
import App from './App'
// const Ship = require('./Ship.js')
import Ship from './Ship.js'

test('renders learn react link', () => {
  render(<App />)
  const linkElement = screen.getByText(/Battleship/i)
  expect(linkElement).toBeInTheDocument()
})

test('Does a new ship float', () => {
  const sub = new Ship('sub', 3, 'playerOne')
  expect(sub.isFloating).toBe(true)
})

test('Is a new ship undamaged', () => {
  const sub = new Ship('sub', 3, 'playerOne')
  expect(sub.body).toBe()
})
