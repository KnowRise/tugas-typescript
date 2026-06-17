/**
 * TODO:
 * 1. Buatlah sebuah object dictionary menggunakan `Record<string, number>`.
 *    Key adalah nama buah (string), value adalah harga (number).
 * 2. Isi dengan: "apel" = 5000, "mangga" = 7000, "jeruk" = 4000.
 * 3. Tambahkan satu entry baru: "pisang" = 3000.
 * 4. Tampilkan semua key dan value menggunakan for...in loop.
 */

const hargaBuah: Record<string, number> = {
    apel: 5000,
    mangga: 7000,
    jeruk: 4000,
};

hargaBuah["pisang"] = 3000;

for (const buah in hargaBuah) {
    console.log(`${buah}: ${hargaBuah[buah]}`);
}