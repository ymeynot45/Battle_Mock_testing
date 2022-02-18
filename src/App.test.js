/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react'
import App from './App.js'
import Ship from './Ship.js'

const shipStats = ['sub', 3, 'playerOne', 'A1', 'col']
const shipStatsB = ['sub', 3, 'playerOne', 'A1', 'row']

test('renders learn react link', () => {
  render(<App />)
  const linkElement = screen.getAllByText(/Battleship/i)
  expect(linkElement[0]).toBeInTheDocument()
})

test('A new ship floats', () => {
  const sub = new Ship(...shipStats)
  expect(sub.isFloating).toBe(true)
})

test('A new ship is undamaged', () => {
  const boat = new Ship(...shipStats)
  expect(boat.body).toEqual(['undamaged', 'undamaged', 'undamaged'])
})

test('The ship will sink if it does not contain an undamaged compartment', () => {
  const dinghy = new Ship(...shipStats)
  dinghy.body = []
  dinghy.isSunk()
  expect(dinghy.isFloating).toBe(false)
})

test('The ship establishes its location if a col', () => {
  const ssMinnow = new Ship(...shipStats)
  ssMinnow.findLocation()
  expect(ssMinnow.location).toEqual(['A1', 'A2', 'A3'])
})

test('The ship establishes its location if a row', () => {
  const ssMinnow = new Ship(...shipStatsB)
  ssMinnow.findLocation()
  expect(ssMinnow.location).toEqual(['A1', 'B1', 'C1'])
})
