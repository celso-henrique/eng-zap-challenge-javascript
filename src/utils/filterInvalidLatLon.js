const filterInvalidLatLon = properties => {
  const processed = properties.filter(property => {
    const { lon, lat } = property.address.geoLocation.location

    return lon !== 0 && lat !== 0
  })

  return processed
}

export default filterInvalidLatLon
