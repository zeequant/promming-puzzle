import { aggregateRecords, Car } from './index';

const cars: Car[] = [
  { company: 'tata', year: 2025, model: 'punch', price: 100, power: 50 },
  { company: 'tata', year: 2025, model: 'nexon', price: 300, power: 70 },
  { company: 'tata', year: 2025, model: 'harer', price: 500, power: 90 },
  { company: 'hona', year: 2025, model: 'cityy', price: 200, power: 110 },
  { company: 'hona', year: 2025, model: 'civic', price: 400, power: 130 },
];

test('single aggregation', () => {
  const aggregations = {
    // TODO: Build Aggregation functions the way you want. Price should be sum, power should be average.
    price: () => 0,
    power: () => 0,
  }
  expect(aggregateRecords(cars, ['year', 'company'], aggregations)).toEqual ([
    { company: 'tata', year: '*', model: '*', price: 900, power: 70, heading: 1 },
    cars[0], 
    cars[1], 
    cars[2],
    { company: 'hona', year: '*', model: '*', price: 600, power: 120, heading: 1 },
    cars[4], 
    cars[5]
  ]);
});


test('multiple aggregation', () => {
  const aggregations = {
    // TODO: Build Aggregation functions the way you want. Price should be sum, power should be average.
    price: () => 0,
    power: () => 0,
  }
  expect(aggregateRecords(cars, ['year', 'company'], aggregations)).toEqual([
    { year: 2025, company: '*', model: '*', price: 1500, power: 90, heading: 1 },
    { year: 2025, company: 'tata', model: '*', price: 900, power: 70, heading: 2 },
    cars[0], 
    cars[1], 
    cars[2],
    { year: 2025, company: 'hona', model: '*', price: 900, power: 70, heading: 2 },
    cars[3], 
    cars[4]
  ]);
});
