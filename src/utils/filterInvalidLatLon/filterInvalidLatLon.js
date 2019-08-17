const filterInvalidLatLon = properties => {
  const processed = properties.filter(
    ({
      address: {
        geoLocation: {
          location: { lon, lat }
        }
      }
    }) => lon !== 0 && lat !== 0
  )

  return processed
}

export default filterInvalidLatLon
