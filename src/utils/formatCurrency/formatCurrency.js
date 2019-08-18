const formatCurrency = value => parseFloat(value).toLocaleString('pt-br', {
  style: 'currency',
  currency: 'BRL'
})

export default formatCurrency
