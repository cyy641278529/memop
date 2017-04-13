const tap = require('tap');
const { FixedArray } = require('../dist/memop');

tap.test('FixedArray', t => {
  t.test('push', t => {
    let arr = new FixedArray(100);

    arr.push(1);
    arr.push(2);
    arr.push(3);
    arr.push(4);
    arr.push(5);

    t.equal(arr.length, 5);
    t.equal(arr.data.length, 100);
    t.equal(arr.data[0], 1);
    t.equal(arr.data[1], 2);
    t.equal(arr.data[2], 3);
    t.equal(arr.data[3], 4);
    t.equal(arr.data[4], 5);

    t.end();
  });

  t.test('pop', t => {
    let arr = new FixedArray(100);

    arr.push(1);
    arr.push(2);
    arr.push(3);
    arr.push(4);
    arr.push(5);

    arr.pop(5);

    t.equal(arr.length, 4);
    t.equal(arr.data.length, 100);
    t.equal(arr.data[0], 1);
    t.equal(arr.data[1], 2);
    t.equal(arr.data[2], 3);
    t.equal(arr.data[3], 4);
    t.equal(arr.data[4], undefined);

    t.end();
  });

  t.test('fastRemove', t => {
    let arr = new FixedArray(100);

    arr.push(1);
    arr.push(2);
    arr.push(3);
    arr.push(4);
    arr.push(5);

    arr.fastRemove(2);

    t.equal(arr.length, 4);
    t.equal(arr.data.length, 100);
    t.equal(arr.data[0], 1);
    t.equal(arr.data[1], 2);
    t.equal(arr.data[2], 5);
    t.equal(arr.data[3], 4);
    t.equal(arr.data[4], undefined);

    t.end();
  });

  t.test('reset', t => {
    let arr = new FixedArray(100);

    arr.push(1);
    arr.push(2);
    arr.push(3);
    arr.push(4);
    arr.push(5);

    arr.reset(0);

    t.equal(arr.length, 0);
    t.equal(arr.data.length, 100);
    t.equal(arr.data[0], undefined);
    t.equal(arr.data[1], undefined);
    t.equal(arr.data[2], undefined);
    t.equal(arr.data[3], undefined);
    t.equal(arr.data[4], undefined);

    t.end();
  });

  t.end();
});