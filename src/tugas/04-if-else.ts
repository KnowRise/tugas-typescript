/**
 * TODO:
 * 1. Buatlah sebuah fungsi bernama `nilaiGrade` yang menerima satu parameter `nilai` (number).
 * 2. Fungsi ini harus mengembalikan string grade berdasarkan aturan:
 *    - 90 ke atas: "A"
 *    - 80 - 89: "B"
 *    - 70 - 79: "C"
 *    - 60 - 69: "D"
 *    - di bawah 60: "E"
 * 3. Panggil fungsi dengan nilai 85, lalu simpan hasilnya di variabel `gradeBudi`.
 */

function nilaiGrade(nilai: number): string {
    if (nilai >= 90) {
        return "A";
    } else if (nilai >= 80) {
        return "B";
    } else if (nilai >= 70) {
        return "C";
    } else if (nilai >= 60) {
        return "D";
    }

    return "E";
}

const gradeBudi = nilaiGrade(85);
console.log(gradeBudi);