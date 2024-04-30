// soal 1
const length = 5
const width = 3

console.log(length*width)

// soal 2
const length2 = 5
const width2 = 3

console.log(2*(length2+width2))

// soal 3
const radius = 5
// diameter
console.log(2*radius)
// circumference
console.log(2*Math.PI*radius)
// area
console.log(Math.PI*radius*radius)

// soal 4
const angles1 = 80
const angles2 = 65

console.log(180-(angles1+angles2))

// soal 5
const date1 = new Date(2022, 1, 20)
const date2 = new Date(2022, 1, 22)

console.log(date2.getDate() - date1.getDate())

// revisi 5
const bedaTanggal = Math.abs(date1-date2);

const bedaHari = Math.round(bedaTanggal/ (1000*3600*24))
console.log(bedaHari)


// soal 6
const hari = 400