const myCountry = {
  country: "New Zealand",
  capital: "Wellington",
  language: "English",
  population: 5223680,
  neighbours: [],
  describe: function () {
    return `${this.country} has ${
      this.population
    } people, their mother tongue is ${
      this.language
    }, they have ${(this.neighbors = 0)} neighboring countries and a capital called ${
      this.capital
    }.`;
  },
  checkIsland: function () {
    this.isIsland = !this.neighbors.length;
    console.log(this.isIsland);
  },
};

console.log(myCountry.describe());
myCountry.checkIsland();
