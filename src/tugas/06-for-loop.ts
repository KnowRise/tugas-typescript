/**
 * TODO:
 * 1. Buatlah sebuah array `angka` berisi [1,2,3,4,5].
 * 2. Gunakan for loop untuk menjumlahkan semua elemen array tersebut.
 * 3. Simpan hasil penjumlahan dalam variabel `total`.
 * 4. Tampilkan total.
 */

const angka: number[] = [1, 2, 3, 4, 5];
let total: number = 0;

for (let i = 0; i < angka.length; i++) {
    total += angka[i];
}

console.log(total);