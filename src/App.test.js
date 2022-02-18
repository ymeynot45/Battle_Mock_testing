/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react'
import App from './App.js'
import Ship, { HIT, DAMAGED, MISS, UNDAMAGED } from './Ship.js'

const shipStats = ['sub', 3, 'playerOne', 'A1', 'col']
const shipStatsB = ['sub', 3, 'playerOne', 'A1', 'row']

test('renders learn react link', () => {
  render(<App />)
  const linkElement = screen.getAllByText(/Battleship/i)
  expect(linkElement[0]).toBeInTheDocument()
})

test('A new ship floats', () => {
  const sub = new Ship(...shipStats)
  expect(sub.isSunk()).toBe(false)
})

test('A new ship is undamaged', () => {
  const boat = new Ship(...shipStats)
  expect(boat.body).toEqual([UNDAMAGED, UNDAMAGED, UNDAMAGED])
})

test('The ship establishes its location if a col', () => {
  const ssMinnow = new Ship(...shipStats)
  expect(ssMinnow.location).toEqual(['A1', 'A2', 'A3'])
})

test('The ship establishes its location if a row', () => {
  const ssMinnow = new Ship(...shipStatsB)
  expect(ssMinnow.location).toEqual(['A1', 'B1', 'C1'])
})

test('If I fire at a ship it will return a "Miss"', () => {
  const yamamoto = new Ship(...shipStats)
  expect(yamamoto.hitCheck('C3')).toEqual(MISS)
})

test('If I fire at a ship it will return a "HIT"', () => {
  const yamamoto = new Ship(...shipStatsB)
  expect(yamamoto.hitCheck('C1')).toEqual(HIT)
})

test('If I fire at a ship it will return a damaged ship on a "HIT"', () => {
  const yamamoto = new Ship(...shipStatsB)
  yamamoto.hitCheck('C1')
  expect(yamamoto.body[2]).toEqual(DAMAGED)
})

test('If I damage all of the compartments of a ship it will sink', () => {
  const arizona = new Ship(...shipStatsB)
  arizona.hitCheck('A1')
  arizona.hitCheck('B1')
  arizona.hitCheck('C1')
  expect(arizona.isSunk()).toBe(true)
})
