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
// REVISI (genuine, satu ketukan baru):
//   Ganti keluhan abstrak itu dengan satu adegan konkret: test suite-nya tidak
//   pernah bertemu aplikasinya sama sekali — mereka menilai seorang "mock"
//   yang agent perkenalkan sebagai produk asli. Satu ide baru (test yang
//   menilai pemeran pengganti) menggantikan dua klise sekaligus (mock dan
//   "on my machine"), dan suara agent-nya aktif: ia sendiri yang
//   memperkenalkan mock itu sebagai yang asli. Itulah baris final di bawah.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "All 412 tests pass because none of them ever met the app — they grade the mock I introduced as the real thing.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");

console.log(ENTRY);
console.log(`characters: ${ENTRY.length}`);
