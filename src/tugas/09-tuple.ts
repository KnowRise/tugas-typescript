/**
 * TODO:
 * 1. Buatlah sebuah tuple dengan tipe [string, number, boolean] yang mewakili data user: nama, umur, status aktif.
 * 2. Isi tuple tersebut dengan nilai "Andi", 22, true.
 * 3. Gunakan destructing assignment untuk mengambil nilai-nilai tersebut ke variabel terpisah.
 * 4. Tampilkan masing-masing variabel.
 */

const user: [string, number, boolean] = ["Andi", 22, true];
const [nama, umur, isActive] = user;

console.log(nama);
console.log(umur);
console.log(isActive);