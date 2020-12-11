let pets = ['cat', 'dog', 'rat'];
for (let i=pets.length-1; i>=0; i--) {
  // reverse loop
  pets[i] += 's'
}
console.log(pets)