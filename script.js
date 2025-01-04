let a = ['non', 'banan', 'mashina', 'asal', 'olma', 'aziza', 'Gul'];
const c = [];
const d = [];
for (let b of a) {
  if (b.includes('n')) {
    c.push(b);
  } else {
    d.push(b);
  }
}
console.log(c, "'n' harfi ishtirok etgan so'zlar");
console.log(d, "'n' harfi ishtirok etmagan so'zlar");