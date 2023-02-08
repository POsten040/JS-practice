
class PlanetAgeMETHOD {
  constructor(userAge) {
    this.earthAge = userAge;
    this.expectancy = 80;
    this.ageOn = {
      mercury: null,
      mars: null,
      venus: null,
      jupiter: null
    }
    this.expectancyOn = {
      mercury: null,
      mars: null,
      venus: null,
      jupiter: null
    }
    this.conversions = {
      mercury: .24,
      venus: .62,
      mars: 1.88,
      jupiter: 11.86
    }
  }
  calcAge(planet){
    this.ageOn[planet] = this.conversions[planet] * this.earthAge;
  }
  calcExp(planet){
    if(!this.ageOn[planet]){
      this.calcAge(planet)
    }
    this.expectancyOn[planet] = (this.expectancy * this.conversions[planet]) - this.ageOn[planet];
  }
  addPlanet(planet, conversionRate){
      this.conversions[planet] = conversionRate;
    }
  }
  
  
  class PlanetAgeCON {
    constructor(userAge){
      let conversions = {
        mercury: .24,
        venus: .62,
        mars: 1.88,
        jupiter: 11.86
      }
      this.ageOn = Object.values(conversions).map((con) => {
        return userAge * con;
      })
      this.expectancy = Object.values(conversions).map((con) => {
        let age = userAge * con;
        let exp = (80*con) - age;
        return exp;
      })
    }
    //no methods
  }