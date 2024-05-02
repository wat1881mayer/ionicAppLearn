import { expect, test } from 'vitest';
import { calculateBiorhythms } from './biorhythms';

test('calculates the physical biorhthm', () => {
  const biorhym = calculateBiorhythms('1999-12-31', '2022-12-31');
  expect(biorhym.physical).toBeCloseTo(0.9977);
});

test('calculates the emotional biorhthm', () => {
  const biorhym = calculateBiorhythms('1999-12-31', '2022-12-31');
  expect(biorhym.emotional).toBeCloseTo(0.2225);
});

test('calculates the intellectual biorhthm', () => {
  const biorhym = calculateBiorhythms('1999-12-31', '2022-12-31');
  expect(biorhym.intellectual).toBeCloseTo(-0.4542);
});
