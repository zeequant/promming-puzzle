export interface Car {
  year: number;
  company: String;
  model: String;
  price: Number;
  power: Number;
};

interface Aggregate extends Car {
  children?: Car[];
};

type Aggregation = Car & { heading?: number }

type AggregationFn = () => number; 

export const aggregateRecords = (
  cars: Car[], 
  groupBys: (keyof Car)[], 
  aggregations: Partial<Record<keyof Car, AggregationFn>>
) : Aggregation[] => {
  return cars;
};
