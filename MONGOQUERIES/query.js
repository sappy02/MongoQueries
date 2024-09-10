Sample_restaurants: restaurants
db.restaurants.find({
    $and: [
      { "address.borough": "Queens" },
      { "cuisine": "German" }
    ]
  })
Query Results: 1-20 of many

Sample_supplies: sales
db.sales.find({
  $or: [
    { "items.name": "backpack" },
    { "items.name": "notepad" },
    { "storeLocation": "San Diego" },
    { "customer.satisfaction": { $lt: 3 } }
  ]
})
Query Results: 1-20 of many

Sample_mflix: movies
db.movies.find({
  $and: [
    { year: { $not: { $eq: 1903 } } },
    { genres: { $not: { $in: ["Western"] } } }
  ]
})
Query Results: 1-20 of many

Sample_airbnb: listingsAndReviews
db.listingsAndReviews.find({
  $nor: [
    { property_type: "Apartment" },
    { room_type: "Private room" },
    { bed_type: "Real Bed" },
    { minimum_nights: "14" },
    { maximum_nights: "1125" },
    { cancellation_policy: "flexible" }
  ]
})
Query Results: 1-3

Sample_guides: planets
db.planets.find({
  name: { $eq: "Mars" },
  orderFromSun: { $eq: 4 },
  hasRings: { $eq: false },
  mainAtmosphere: { $eq: ["CO2", "Ar", "N"] },
  "surfaceTemperatureC.min": { $eq: -143 },
  "surfaceTemperatureC.max": { $eq: 35 },
  "surfaceTemperatureC.mean": { $eq: -63 }
})
Query Results: 1-1

Sample_geospatial: shipwrecks
db.shipwrecks.find({
  feature_type: { $ne: "Wrecks - Visible" },
  chart: { $ne: "US,U1,graph,DNC H1409860" },
  latdec: { $ne: 9.3547792 },
  londec: { $ne: -79.9081268 },
  depth: { $ne: 0 },
  sounding_type: { $ne: "" }
})
Query Results: 1-20 of many

Sample_training: zips
db.zips.find({
  zip: { $gt: "35042" },
  "loc.y": { $gt: 32.950324 },
  "loc.x": { $gt: 87.11924 },
  pop: { $gt: 4902 }
})
Query Results: 1-20 of many

Sample_training: zips
db.zips.find({
  zip: { $lt: "35442" },
  pop: { $lt: 2000000 }
})
Query Results: 1-20 of many

Sample_supplies: sales
db.sales.find({
  $or: [
    { "items.name": { $in: ["backpack"] } },
    { "storeLocation": { $in: ["San Diego"] } },
    { "customer.satisfaction": { $lt: 3 } }
  ]
})
Query Results: 1-20 of many

Sample_supplies: sales
db.sales.find({
  $and: [
    { "items.name": { $in: ["notepad"] } },
    { "storeLocation": { $nin: ["New York"] } },
    { "customer.satisfaction": { $lt: 3 } }
  ]
})
Query Results: 1-20 of many
