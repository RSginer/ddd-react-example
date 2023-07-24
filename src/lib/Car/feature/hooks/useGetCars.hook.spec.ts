import nock from 'nock';
import { describe, expect, it } from 'vitest';

import { renderHook } from '@testing-library/react-hooks';

import * as db from '../../../../../server/db.json';
import { useGetCars } from './useGetCars.hook';

const API_URL = 'http://localhost:3000/';
const responseMock = db.cars;

nock(API_URL).get('/cars').reply(200, responseMock);

describe('useGetCars', () => {
  it('Should fetch the cars given searchQuery and sort', () => {
    const { result } = renderHook((searchQuery, sort) => useGetCars());

    expect(result.current.data).toBe([]);
  });
});
