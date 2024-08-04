ServerEvents.recipes(event => {
  const xpSizes = [
    { size: 'xs', value:   100, craftRatio: 1, candyOutput:  0 },
    { size: 's',  value:   800, craftRatio: 9, candyOutput:  1 },
    { size: 'm',  value:  3000, craftRatio: 3, candyOutput:  4 },
    { size: 'l',  value: 10000, craftRatio: 3, candyOutput: 16 },
    { size: 'xl', value: 30000, craftRatio: 3, candyOutput: 64 }
  ]

  for (let xpSize of xpSizes) {
    if (xpSize.candyOutput <= 0) {
      continue;
    }

    event.shapeless(Item.of('cobblemon:rare_candy', xpSize.candyOutput), [
      'minecraft:paper',
      `2x cobblemon:exp_candy_${xpSize.size}`,
      '2x minecraft:honey_bottle',
      '2x minecraft:sugar'
    ]).replaceIngredient('minecraft:honey_bottle', 'minecraft:glass_bottle')
  }

  let previous = null;
  for (let current of xpSizes) {
    if (previous == null) {
      previous = current;
      continue;
    }

    event.shapeless(Item.of(`cobblemon:exp_candy_${current.size}`, 1), [
      `${current.craftRatio}x cobblemon:exp_candy_${previous.size}`,
    ])

    previous = current;
  }
});