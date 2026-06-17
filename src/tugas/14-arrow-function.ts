/**
 * TODO:
 * 1. Buat arrow function `kali` dengan dua parameter number dan mengembalikan hasil kali.
 * 2. Buat fungsi `cetakProfil` dengan parameter `nama` (wajib) dan `umur` (opsional, default 0).
 *    Jika umur > 0, kembalikan "Nama: {nama}, Umur: {umur}"; selain itu "Nama: {nama}".
 * 3. Panggil `cetakProfil` dengan nama "Rina" dan tanpa umur, lalu dengan umur 20.
 */

const kali = (a: number, b: number): number => a * b;

function cetakProfil(nama: string, umur: number = 0): string {
    if (umur > 0) {
        return `Nama: ${nama}, Umur: ${umur}`;
    }
    return `Nama: ${nama}`;
}

console.log(kali(4, 5));
console.log(cetakProfil("Rina"));
console.log(cetakProfil("Rina", 20));