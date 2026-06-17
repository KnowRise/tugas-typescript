/**
 * TODO:
 * 1. Buat fungsi `sapa` yang menerima parameter `nama` (string) dan tidak mengembalikan nilai (void).
 *    Fungsi ini mencetak "Halo, {nama}!".
 * 2. Buat fungsi `tambah` yang menerima dua number dan mengembalikan hasil penjumlahannya.
 * 3. Panggil kedua fungsi.
 */

function sapa(nama: string): void {
    console.log(`Halo, ${nama}!`);
}

function tambah(a: number, b: number): number {
    return a + b;
}

sapa("Budi");
console.log(tambah(5, 7));