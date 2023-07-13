function countryToLiveIn(language, isIsland, population, country) {
  if(language === 'English' && !isIsland && population < 50000000) {
    console.log(`You should consider living in ${country}`);
  } else {
    console.log(`${country} does not meet your criteria`);
  }
}

console.log(countryToLiveIn('English', false, 2560000, 'theRightCountry'));