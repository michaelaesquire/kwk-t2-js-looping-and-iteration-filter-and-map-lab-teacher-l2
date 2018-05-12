// Code your solution here:
function driversWithRevenueOver(drivers, amt) {
  let matchyBois = drivers.filter(function(matches) {
    return matches > amt;
  });
  return matchyBois;
}
