const filterByMinRentalValue = minValue => properties => {
  const processed = properties.filter(property => {
    const { businessType, price } = property.pricingInfos

    if (businessType !== 'RENTAL') {
      return true
    }

    return parseFloat(price) >= minValue
  })

  return processed
}

export default filterByMinRentalValue
