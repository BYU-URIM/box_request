import {utils} from "./sum"
test('adds 1 + 2 to equal 3', () => {
  expect(utils.sum(1, 2)).toBe(3);
});

test('multiples 12 * 3', () => {
    expect(utils.product(12, 3)).toBe(36)
})