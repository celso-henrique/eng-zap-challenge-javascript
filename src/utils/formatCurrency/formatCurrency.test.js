import formatCurrency from './formatCurrency'

describe('Format currency', () => {
  it('formats a number to BRL currency', () => {
    expect(formatCurrency(400)).toEqual('R$ 400,00')
  })
})
