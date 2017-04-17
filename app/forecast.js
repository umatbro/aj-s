function Forecast(
  temperature,
  apparentTemperature,
  date,
  humidity,
  pressure,
  cloudCover,
  temperatureMin,
  temperatureMax,
  apparentTemperatureMin,
  apparentTemperatureMax
) {
  this.temperature = temperature;
  this.apparentTemperature = apparentTemperature;
  this.date = date;
  this.humidity = humidity;
  this.pressure = pressure;
  this.cloudCover = cloudCover;
  this.temperatureMin = temperatureMin;
  this.temperatureMax = temperatureMax;
  this.apparentTemperatureMin = apparentTemperatureMin;
  this.apparentTemperatureMax = apparentTemperatureMax;

  //convert date
  var date_ = new Date(this.date);
  this.date = date_.toDateString();
}


//convert F to celsius
function farToCel(far){
  return ((far - 32)*(5.0/9.0)).toFixed(2);
}
