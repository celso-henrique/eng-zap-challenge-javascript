import isInBoundingBox from '../isInBoundingBox'

const filterByMinSaleValue = (
  minValue,
  percentageVariation = 0
) => properties => {
  const processed = properties.filter(property => {
    const { businessType, price } = property.pricingInfos
    const minValueWithVariation = isInBoundingBox(property)
      ? minValue - (minValue / 100) * percentageVariation
      : minValue

    if (businessType !== 'SALE') {
      return true
    }

    return parseFloat(price) >= minValueWithVariation
  })

  return processed
}

export default filterByMinSaleValue
