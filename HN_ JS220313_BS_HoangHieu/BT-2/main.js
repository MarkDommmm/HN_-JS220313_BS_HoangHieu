let str = "heLlo riKkei academy";
let slip = str.split(" ")
let sum  = ''
for (let i = 0; i < slip.length; i++) {
  sum += slip[i].charAt(0).toUpperCase() + slip[i].slice(1).toLowerCase()
  sum +=" "
}
console.log(sum);

