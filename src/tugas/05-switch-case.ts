/**
 * TODO:
 * 1. Buatlah sebuah variabel `hari` bertipe number (misal 1 sampai 7).
 * 2. Gunakan switch-case untuk menentukan nama hari:
 *    - 1: "Senin", 2: "Selasa", 3: "Rabu", 4: "Kamis", 5: "Jumat", 6: "Sabtu", 7: "Minggu".
 *    - Selain itu: "Hari tidak valid".
 * 3. Simpan hasil dalam variabel `namaHari` dan tampilkan.
 */

const hari: number = 3; // ganti nilai ini untuk menguji
let namaHari: string;

switch (hari) {
    case 1:
        namaHari = "Senin";
        break;
    case 2:
        namaHari = "Selasa";
        break;
    case 3:
        namaHari = "Rabu";
        break;
    case 4:
        namaHari = "Kamis";
        break;
    case 5:
        namaHari = "Jumat";
        break;
    case 6:
        namaHari = "Sabtu";
        break;
    case 7:
        namaHari = "Minggu";
        break;
    default:
        namaHari = "Hari tidak valid";
        break;
}

console.log(namaHari);