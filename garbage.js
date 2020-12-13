const smartGarbage = function(trash, bins) {
  switch(trash) {
  case 'waste':
    bins['waste'] += 1;
    break;
  case'recycling':
    bins['recycling'] += 1;
    break;
  case 'compost':
    bins['compost'] += 1;
  }
  return bins;
}

console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));
console.log(smartGarbage('compost', { waste: 2, recycling: 0, compost: 3 }));