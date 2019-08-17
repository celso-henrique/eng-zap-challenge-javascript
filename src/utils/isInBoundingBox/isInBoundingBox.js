const grupoZapBoundingBox = {
  minLon: -46.693419,
  minLat: -23.568704,
  maxLon: -46.641146,
  maxLat: -23.546686
}

const isInBoundingBox = ({
  address: {
    geoLocation: {
      location: { lon, lat }
    }
  }
}) => {
  const {
    minLon, minLat, maxLon, maxLat
  } = grupoZapBoundingBox

  return lon >= minLon && lon <= maxLon && lat >= minLat && lat <= maxLat
}

export default isInBoundingBox
