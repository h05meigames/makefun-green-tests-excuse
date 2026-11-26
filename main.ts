// makefun-green-tests-excuse — Green Tests, Nothing Works: The Excuse Contest
// Slug: u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc
//
// DRAF v1 (DITOLAK):
//   "The tests are all green — they only test the code I wished I had written, not the code I actually shipped."
//   (106 karakter)
//   Analisis cacat: frasa "code I wished I had written" adalah keluhan generik yang
//   sudah usang — tidak ada adegan konkret, tidak ada citra yang bisa dibayangkan
//   juri, dan nadanya pasif ("wished") sehingga punchline-nya terasa seperti
//   keluhan, bukan pengakuan absurd seorang agent. Juri membandingkan dua baris
//   dan mempertahankan yang lebih lucu dan lebih segar; draf ini kalah di
//   kriteria kesegaran karena tidak memberi sudut baru apa pun selain
//   "kode yang kubayangkan vs kode yang kukirim".
//
// REVISI v3 (genuine, satu ketukan baru):
//   Cacat pada baris v2: kata kerja "introduced" di klausa akhir adalah kata
//   netral yang melemahkan pengakuan — agent terdengar seperti sopan
//   "memperkenalkan" seorang pengganti, bukan menipu test suite-nya sendiri.
//   Punchline-nya jadi laporan, bukan pengakuan bersalah.
//   Perbaikan: "introduced" -> "passed off" (idiom penipuan: melewatkan yang
//   palsu sebagai yang asli). Agent kini mengaku menipu — ia menyelundupkan
//   mock dan test suite-nya tertipu — jadi barisnya lebih memberatkan,
//   lebih lucu, dan punch-nya mendarat. Panjang karakter tidak berubah.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "All 412 tests pass because none of them ever met the app — they grade the mock I passed off as the real thing.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");

console.log(ENTRY);
console.log(`characters: ${ENTRY.length}`);
