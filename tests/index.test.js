const {
  times,
  flatMap,
  clone,
  get,
  random,
  first,
  last,
  isObject,
  isNumber,
  isArray,
  isFalsy,
  size
} = require('../index.js')

const assert = require('assert')

describe('betterDash', () => {
  describe('last()', () => {
    it('should return the last item in the array', () => {
      const base = [
        [1, 5, 7, 9],
        [5, 8, 9, 1],
        ['test', 'data', 'lol', 'face'],
        [1, 're', 3, '76']
      ]
      const calc = base.map(last)
      const expected = [9, 1, 'face', '76']
      assert.deepEqual(calc, expected)
    })
    it('should return undefined if empty', () => {
      const base = [null, undefined, [], []]
      const calc = base.map(last)
      const expected = [undefined, null, undefined, undefined]
      assert.deepEqual(calc, expected)
    })
    it('should return last char of string', () => {
      const base = ['long string', 'test', 'props', '532']
      const calc = base.map(last)
      const expected = ['g', 't', 's', '2']
      assert.deepEqual(calc, expected)
    })
    it('should return last char of int', () => {
      const base = [124, 555, 765, 10935]
      const calc = base.map(last)
      const expected = [4, 5, 5, 5]
      assert.deepEqual(calc, expected)
    })
  })
  describe('first()', () => {
    it('should return the first item in the array', () => {
      const base = [
        [1, 5, 7, 9],
        [5, 8, 9, 1],
        ['test', 'data', 'lol', 'face'],
        [1, 're', 3, '76']
      ]
      const calc = base.map(first)
      const expected = [1, 5, 'test', 1]
      assert.deepEqual(calc, expected)
    })
    it('should return undefined if empty', () => {
      const base = [[], [], [], []]
      const calc = base.map(first)
      const expected = [undefined, undefined, undefined, undefined]
      assert.deepEqual(calc, expected)
    })
    it('should return last char of int', () => {
      const base = ['long string', 'test', 'props', '532']
      const calc = base.map(first)
      const expected = ['l', 't', 'p', '5']
      assert.deepEqual(calc, expected)
    })
    it('should return last char of int', () => {
      const base = [124, 555, 765, 10935]
      const calc = base.map(first)
      const expected = [1, 5, 7, 1]
      assert.deepEqual(calc, expected)
    })
  })
  describe('isObject()', () => {
    it('should return true if object', () => {
      const base = [{ test: 'data' }, { 123: 123 }, {}, { data: {}, more: {} }]
      const calc = base.map(isObject)
      const expected = [true, true, true, true]
      assert.deepEqual(calc, expected)
    })
    it('should return false if not object', () => {
      const base = [[], null, undefined, 123]
      const calc = base.map(isObject)
      const expected = [false, false, false, false]
      assert.deepEqual(calc, expected)
    })
  })
  describe('isNumber()', () => {
    it('should return true if number', () => {
      const base = [123, 555, 777, 00]
      const calc = base.map(isNumber)
      const expected = [true, true, true, true]
      assert.deepEqual(calc, expected)
    })
    it('should return false if not number', () => {
      const base = [[], null, undefined, '123']
      const calc = base.map(isNumber)
      const expected = [false, false, false, false]
      assert.deepEqual(calc, expected)
    })
  })
  describe('isArray()', () => {
    it('should return true if array', () => {
      const base = [[], [123], [{}, {}], [[]]]
      const calc = base.map(isArray)
      const expected = [true, true, true, true]
      assert.deepEqual(calc, expected)
    })
    it('should return false if not array', () => {
      const base = [{}, null, undefined, '123']
      const calc = base.map(isArray)
      const expected = [false, false, false, false]
      assert.deepEqual(calc, expected)
    })
  })
  describe('isFalsy()', () => {
    it('should return true if false', () => {
      const base = [false, null, 0, '']
      const calc = base.map(isFalsy)
      const expected = [true, true, true, true]
      assert.deepEqual(calc, expected)
    })
    it('should return false if not false', () => {
      const base = [123, '123', {}, []]
      const calc = base.map(isFalsy)
      const expected = [false, false, false, false]
      assert.deepEqual(calc, expected)
    })
  })
  describe('size()', () => {
    it('should return size of array', () => {
      const base = [[1, 2, 3, 4], [], [[]], [{}, {}]]
      const calc = base.map(size)
      const expected = [4, 0, 1, 2]
      assert.deepEqual(calc, expected)
    })
    it('should return undefined if no size', () => {
      const base = [undefined, null, {}, '']
      const calc = base.map(size)
      const expected = [undefined, undefined, undefined, undefined]
      assert.deepEqual(calc, expected)
    })
  })
})
