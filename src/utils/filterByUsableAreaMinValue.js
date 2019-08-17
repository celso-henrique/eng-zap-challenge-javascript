const filterByUsableAreaMinValue = minValue => properties => {
  const processed = properties.filter(({ pricingInfos, usableAreas }) => {
    const { businessType, price } = pricingInfos
    const priceByUsableArea = parseFloat(price) / usableAreas

    if (businessType !== 'SALE') {
      return true
    }

    if (usableAreas === 0 || priceByUsableArea < minValue) {
      return false
    }

    return true
  })

  return processed
}

export default filterByUsableAreaMinValue
