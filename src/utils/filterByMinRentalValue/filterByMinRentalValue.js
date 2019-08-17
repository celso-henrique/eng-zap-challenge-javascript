const filterByMinRentalValue = minValue => properties => {
  const processed = properties.filter(
    ({ pricingInfos: { businessType, price } }) => {
      if (businessType !== 'RENTAL') {
        return true
      }

      return parseFloat(price) >= minValue
    }
  )

  return processed
}

export default filterByMinRentalValue
