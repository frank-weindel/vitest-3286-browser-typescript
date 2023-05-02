import { describe, it, expect } from 'vitest';
import { add } from './utils.js';

describe('utils', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 2)).toBe(3);
    });
  });
});
