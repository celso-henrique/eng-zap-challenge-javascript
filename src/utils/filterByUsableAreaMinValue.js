const filterByUsableAreaMinValue = minValue => properties => {
  const processed = properties.filter(({ pricingInfos, usableAreas }) => {
    const { businessType, price } = pricingInfos
    const priceByUsableArea = parseFloat(price) / usableAreas

    if (businessType !== 'SALE') {
      return true
    }

    return usableAreas !== 0 && priceByUsableArea > minValue
  })

  return processed
}

export default filterByUsableAreaMinValue
