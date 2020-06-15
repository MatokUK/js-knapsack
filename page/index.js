console.log('booo');


import Knapsack from '../src/algorithms/sets/knapsack-problem/Knapsack.js';
import KnapsackItem from '../src/algorithms/sets/knapsack-problem/KnapsackItem.js';

function knapsack(maxKnapsackWeight) {
  const possibleKnapsackItems = [
    new KnapsackItem({ value: 994, weight: 994, itemsInStock: 1000000 }),
    new KnapsackItem({ value: 788, weight: 788, itemsInStock: 1000000 }),
    new KnapsackItem({ value: 561, weight: 561, itemsInStock: 1000000 }),
    new KnapsackItem({ value: 493, weight: 493, itemsInStock: 1000000 }),
    new KnapsackItem({ value: 154, weight: 154, itemsInStock: 1000000 }),
  ];

 // const maxKnapsackWeight = document.getElementById("target");
  const knapsack = new Knapsack(possibleKnapsackItems, maxKnapsackWeight);

  knapsack.solveUnboundedKnapsackProblem();
  console.log(knapsack);

 /* const result = {total: max_val};
  for (let i = 0; i < solutions.length; i += 1) {
    item = solutions[i];
    //document.write("(gold: " + item[0] + ", panacea: " + item[1] + ", ichor: " + item[2] + ")<br>");
  }*/

  return null;
}

const res = knapsack(process.argv[2]);
console.log(res);
