/**
 * TODO:
 * 1. Buat sebuah Map `inventaris` dengan key string dan value number.
 *    Masukkan: "Laptop" = 10, "Mouse" = 50.
 * 2. Gunakan .set() untuk menambah "Keyboard" = 20.
 * 3. Buat sebuah Set `idUnik` dengan nilai string: "ID001", "ID002", "ID001" (duplikat akan diabaikan).
 * 4. Tampilkan ukuran Set dan semua item Set menggunakan Array.from().
 */

const inventaris: Map<string, number> = new Map([
    ["Laptop", 10],
    ["Mouse", 50],
]);

inventaris.set("Keyboard", 20);

const idUnik: Set<string> = new Set(["ID001", "ID002", "ID001"]);

console.log("Ukuran Set:", idUnik.size);
console.log("Item Set:", Array.from(idUnik));