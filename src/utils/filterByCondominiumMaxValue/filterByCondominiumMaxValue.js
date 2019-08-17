import { isNaN } from 'lodash'

const filterByCondominiumMaxValue = maxValuePercentage => properties => {
  const processed = properties.filter(
    ({ pricingInfos: { businessType, price, monthlyCondoFee } }) => {
      const parsedMonthlyCondoFee = parseFloat(monthlyCondoFee)
      const maxCondoFee = (parseFloat(price) / 100) * maxValuePercentage

      if (businessType !== 'RENTAL') {
        return true
      }

      return (
        !isNaN(parsedMonthlyCondoFee) && parsedMonthlyCondoFee <= maxCondoFee
      )
    }
  )

  return processed
}

export default filterByCondominiumMaxValue
