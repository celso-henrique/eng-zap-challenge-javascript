const filterByCondominiumMaxValue = maxValuePercentage => properties => {
  const processed = properties.filter(({ pricingInfos }) => {
    const { businessType, price, monthlyCondoFee } = pricingInfos
    const parsedMonthlyCondoFee = parseFloat(monthlyCondoFee)
    const maxCondoFee = (parseFloat(price) / 100) * maxValuePercentage

    if (businessType !== 'RENTAL') {
      return true
    }

    return !isNaN(parsedMonthlyCondoFee) && parsedMonthlyCondoFee < maxCondoFee
  })

  return processed
}

export default filterByCondominiumMaxValue
