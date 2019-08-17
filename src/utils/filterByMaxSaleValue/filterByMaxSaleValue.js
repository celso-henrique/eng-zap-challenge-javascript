const filterByMaxSaleValue = maxValue => properties => {
  const processed = properties.filter(property => {
    const { businessType, price } = property.pricingInfos

    if (businessType !== 'SALE') {
      return true
    }

    return parseFloat(price) <= maxValue
  })

  return processed
}

export default filterByMaxSaleValue
