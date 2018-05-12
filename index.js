// Code your solution here:
function driversWithRevenueOver(drivers, amt) {
  let matchyBois = drivers.filter(function(matches) {
    return matches.revenue > amt;
  });
  return matchyBois;
}

function driverNamesWithRevenueOver(drivers, amt) {
  let matchyBois = drivers.filter(function(matches) {
    return matches.revenue > amt;
  });
//  return matchyBois;
  let namesOnly = matchyBois.map(function (drive) {
  named = drive.name;
  return named;
  });
  return namesOnly;
}

function exactMatch() {
  
}
