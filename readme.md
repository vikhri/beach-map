let filter = {
  waves: false,
  sunset: false
}

wavesCheckbox.onchange()
  filter.waves = this.checked
  applyFilter(filter)


//..............

function apllyFilter (filter)


// CALCULATION
poinstDisplay = {}

points.foreach()
  pointsDisplay[point.id] = true;
  
if (filter.waves) {
  points.foreach()
    if point.waves === true
      pointsDisplay[point.id] = false
}

if (filter.sunset)
 // SAME AS WAVES
 
 
 

// PRESENTATION

points.foreach()
  if (pointsDisplay[point.id] === true) 
    markets[point.id].setMap(map)
  else 
    markets[point.id].setMap(null)