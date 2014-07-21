var isPangram = require('./pangram');

describe('isPangram', function () {
  it('should return true for "Crazy Fredrick bought many very exquisite opal jewels"', function () {
    expect(isPangram("Crazy Fredrick bought many very exquisite opal jewels")).toBe(true);
  });
 
  it('should return false for "A sentence that probably does not have every character"', function () {
    expect(isPangram("A sentence that probably does not have every character")).toBe(false);
  });
});