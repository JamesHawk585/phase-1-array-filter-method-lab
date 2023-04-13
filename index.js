const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

function findMatching(drivers, name) {
        return drivers.filter(function(driverName) {
            return driverName.toLowerCase() === name.toLowerCase();
    });
}

function fuzzyMatch (drivers, name) {
    return drivers.filter(function(driver) {
        return driver.startsWith(name);
    })
    
}

function matchName(drivers, name) {
    return drivers.filter(function(driver) {
        return driver.name === name;
    }
    )
}
