const filterByMaxSaleValue = maxValue => properties => {
  const processed = properties.filter(
    ({ pricingInfos: { businessType, price } }) => {
      if (businessType !== 'SALE') {
        return true
      }

      return parseFloat(price) <= maxValue
    }
  )

  return processed
}

export default filterByMaxSaleValue
