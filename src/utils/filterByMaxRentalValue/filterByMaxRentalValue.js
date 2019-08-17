import isInBoundingBox from '../isInBoundingBox'

const filterByMaxRentalValue = (
  maxValue,
  percentageVariation = 0
) => properties => {
  const processed = properties.filter(property => {
    const { businessType, price } = property.pricingInfos
    const maxValueWithVariation = isInBoundingBox(property)
      ? maxValue + (maxValue / 100) * percentageVariation
      : maxValue

    if (businessType !== 'RENTAL') {
      return true
    }

    return parseFloat(price) <= maxValueWithVariation
  })

  return processed
}

export default filterByMaxRentalValue
