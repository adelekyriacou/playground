describe('The girl who liked sugar', function () {
  describe('Given she has £20 and an empty bag', function () {
    var sweetPrices = {
      'mint humbug': .50,
      'skittles': .50,
      'marvellous chocolate': 1,
      'picnmix': 2
    };
 
    var girl;
    var herFriend;
 
    beforeEach(function () {
      girl = {'wallet': 20, 'bag': []};
      herFriend = {'wallet': 0, 'bag': []};
    });
 
    describe('Her wallet', function () {
      it('should have £18 when the girl buys 4 bags of skittles', function () {
        buySweets(girl, sweetPrices, 'skittles', 4);
        expect(girl.wallet).toBe(18);
      });
 
      it('should have £15 when the girl buys 4 skittles, 1 marvellous chocolate and 1 picnmix', function () {
        buySweets(girl, sweetPrices, 'skittles', 4);
        buySweets(girl, sweetPrices, 'marvellous chocolate', 1);
        buySweets(girl, sweetPrices, 'picnmix', 1);
        expect(girl.wallet).toBe(15);
      });
 
      it('should have £12 when the girl buys 5 picnmix and is given £2 from her mum', function () {
        buySweets(girl, sweetPrices, 'picnmix', 5);
        takePocketMoney(girl, 2);
        expect(girl.wallet).toBe(12);
      });
    });
 
    describe('Her bag', function () {
      it('should have 2 packs of skittles and 1 picnmix after the girl buys them', function () {
        buySweets(girl, sweetPrices, 'skittles', 2);
        buySweets(girl, sweetPrices, 'picnmix', 1);
 
        expect(girl.bag).toContain('skittles');
        expect(girl.bag).toContain('picnmix');
 
        expect(girl.bag[0]).toBe('skittles');
        expect(girl.bag[1]).toBe('skittles');
        expect(girl.bag[2]).toBe('picnmix');
      });
 
      it('should have 3 marvellous chocolates after the girl buys them', function () {
        buySweets(girl, sweetPrices, 'marvellous chocolate', 1);
        expect(girl.bag).toContain('marvellous chocolate');
      });
 
      it('should have 1 pack of skittles after the girl buys 3 skittles and eats 2', function () {
        buySweets(girl, sweetPrices, 'skittles', 3);
        eatSweets(girl, 'skittles', 2);
 
        expect(girl.bag).toContain('skittles');
        expect(girl.bag.length).toBe(1);
      });
 
      it('should have 1 mint humbug after the girl buys 1 pack of skittles and 3 humbugs and eats the rest', function () {
        buySweets(girl, sweetPrices, 'skittles', 1);
        buySweets(girl, sweetPrices, 'humbug', 3);
        eatSweets(girl, 'skittles', 1);
        eatSweets(girl, 'humbug', 2);
 
        expect(girl.bag).toContain('humbug');
        expect(girl.bag.length).toBe(1);
      });
 
      it('should be empty after the girl buys and eats a marvellous chocolate', function () {
        buySweets(girl, sweetPrices, 'marvellous chocolate', 1);
        eatSweets(girl, 'marvellous chocolate', 1);
        expect(girl.bag.length).toBe(0);
      });
 
      it('should be empty after giving her friend 2 humbugs', function () {
        buySweets(girl, sweetPrices, 'humbug', 2);
        giveSweets(girl, herFriend, 'humbug', 2);
        expect(girl.bag.length).toBe(0);
      });p
    });
 
    describe('Her friends bag', function () {
      it('should contain 2 pack of skittles after the girl gives her friend them', function () {
        buySweets(girl, sweetPrices, 'skittles', 2);
        giveSweets(girl, herFriend, 'skittles', 2);
 
        expect(herFriend.bag).toContain('skittles');
        expect(herFriend.bag.length).toBe(2);
      });
    });
  });
});