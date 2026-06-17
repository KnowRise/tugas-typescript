/**
 * TODO:
 * 1. Diberikan array `numbers` = [3, 7, 10, 15, 20].
 * 2. Gunakan .filter() untuk mendapatkan array baru `genap` yang hanya berisi angka genap.
 * 3. Gunakan .map() pada `genap` untuk mengalikan setiap elemen dengan 2, simpan di `dikaliDua`.
 * 4. Tampilkan `dikaliDua`.
 */

const numbers: number[] = [3, 7, 10, 15, 20];

const genap: number[] = numbers.filter((n) => n % 2 === 0);
const dikaliDua: number[] = genap.map((n) => n * 2);

console.log(dikaliDua);