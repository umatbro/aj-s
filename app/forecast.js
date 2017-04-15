function Forecast(
  summary,
  icon,
  temperature,
  apparentTemperature,
  date,
  humidity,
  pressure,
  cloudCover,
  apparentTemperatureMin,
  apparentTemperatureMax
) {
  this.summary = summary;
  this.icon = icon;
  this.temperature = temperature;
  this.apparentTemperature = apparentTemperature;
  this.date = date;
  this.humidity = humidity;
  this.pressure = pressure;
  this.cloudCover = cloudCover;
  this.apparentTemperatureMin = apparentTemperatureMin;
  this.apparentTemperatureMax = apparentTemperatureMax;
}


//Getters, setters
Forecast.prototype.getSummary = function(){
  return this.summary;
}

Forecast.prototype.setSummary = function(summary){
  this.summary = summary;
}

Forecast.prototype.getIcon = function(){
  return this.icon;
}

Forecast.prototype.setIcon(icon){
  this.icon = icon;
}
