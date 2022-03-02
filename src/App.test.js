/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react'
import App from './App.js'
import Ship, { HIT, DAMAGED, MISS, UNDAMAGED } from './Ship.js'
import Board, { HEIGHT, PLAYERONE, WIDTH } from './Board.js'
import Fleet from './Fleet.js'

const shipStats = ['sub', 3, 'playerOne', 'A1', 'col']
const shipStatsB = ['sub', 3, 'playerOne', 'B1', 'row']

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
  expect(ssMinnow.location).toEqual(['B1', 'C1', 'D1'])
})

test('If I fire at a ship it will return a "Miss"', () => {
  const yamamoto = new Ship(...shipStats)
  expect(yamamoto.shipHitCheck('C3')).toEqual(MISS)
})

test('If I fire at a ship it will return a "HIT"', () => {
  const yamamoto = new Ship(...shipStatsB)
  expect(yamamoto.shipHitCheck('C1')).toEqual(HIT)
})

test('If I fire at a ship it will return a damaged ship on a "HIT"', () => {
  const yamamoto = new Ship(...shipStatsB)
  yamamoto.shipHitCheck('C1')
  expect(yamamoto.body[1]).toEqual(DAMAGED)
})

test('If I damage all of the compartments of a ship it will sink', () => {
  const arizona = new Ship(...shipStatsB)
  arizona.shipHitCheck('D1')
  arizona.shipHitCheck('B1')
  arizona.shipHitCheck('C1')
  expect(arizona.isSunk()).toBe(true)
})

test('Can I build a board object', () => {
  const testBoard = new Board(HEIGHT, WIDTH, PLAYERONE)
  expect(testBoard.boardHeight).toEqual(10)
  expect(testBoard.boardWidth).toEqual(10)
})

test('The board is correctly labled', () => {
  const testBoard = new Board(HEIGHT, WIDTH)
  render(<App/>)
  const linkElement = screen.getAllByText(/H5/)
  expect(linkElement[0]).toBeInTheDocument()
})

test('Will a fleet dectect a hit', () => {
  const redOctober = new Ship(...shipStats)
  const dallas = new Ship(...shipStatsB)
  const huntFor = new Fleet(PLAYERONE)
  huntFor.addShip(redOctober)
  huntFor.addShip(dallas)
  expect(huntFor.isFleetHit('D4')).toBe(false)
})

test('Will a fleet dectect a hit', () => {
  const redOctober = new Ship(...shipStats)
  const dallas = new Ship(...shipStatsB)
  const huntFor = new Fleet(PLAYERONE)
  huntFor.addShip(redOctober)
  huntFor.addShip(dallas)
  expect(huntFor.isFleetHit('A1')).toBe(true)
})
