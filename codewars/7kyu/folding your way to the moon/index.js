const foldTo = distance => distance < 0 ? null : Math.max(0, Math.ceil(Math.log2(distance / 0.0001)));

console.log(foldTo(0.00002026251405333367))
console.log((0.00002026251405333367).toFixed())

