require_relative './calculator'

describe Calculator do
  let(:calc) { Calculator.new }

  context '#sum' do
    it 'should return 2 given 1 and 1' do
      expect(calc.sum(1, 1)).to eq(2)
    end

    it 'should return 5 given 2 and 3' do
      expect(calc.sum(2, 3)).to eq(5)
    end
  end

  context '#diff' do
    it 'should return 3 given 8 and 5' do
      expect(calc.diff(8, 5)).to eq(3)
    end
  end

  context '#product' do
    it 'should return 4 given 2 and 2' do
      expect(calc.product(2, 2)).to eq(4)
    end
  end

  context '#quotient' do
    it 'should return 4 given 20 and 5' do
      expect(calc.quotient(20, 5)).to eq(4)
    end
  end
end
