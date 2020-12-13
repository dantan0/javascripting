const judgeVegetables = function(vegetables, metric) {
  let max = 0;
  let maxIndex = 0;
  vegetables.forEach((vegetable, index) => {
    if (vegetable[metric] > max) {
      max = vegetable[metric];
      maxIndex = index;
    }
  });
  return vegetables[maxIndex].submitter;
}

// test
const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
];
const metric = 'redness';
console.log(judgeVegetables(vegetables, metric));