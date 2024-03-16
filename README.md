# Catatan Penting Mengenai Penggunaan Express dengan Vercel

Vercel hanya mendukung respons API dari Express dan tidak mendukung merender halaman HTML menggunakan template engine.

## Respons API 

- **Respons API**: Respons yang dikirimkan dari server ke klien dalam format data, seperti JSON atau XML. Digunakan saat ingin mengembalikan data dari server untuk digunakan dalam aplikasi klien.

## Keterbatasan Vercel

1. vercel hanya support jika expres mengirimkan response berupa data api. Artinya jika expres mengirimkan response berupa render sebuah html (seperti tempalte engine menggunakan js) Maka tidak support .Akan mendapatkan response dari vercel Internal Server Error
2. Vercel hanya mendukung pengiriman respons API dari aplikasi Express yang dihosting. Jika Express Anda dikonfigurasi untuk merender halaman HTML, Anda mungkin akan mengalami kesalahan saat menggunakan Vercel pesan error yaitu **Internal server error**.

## Solusi

Jika ingin menggunakan Express untuk merender halaman HTML, Anda perlu mempertimbangkan menggunakan platform deployment yang mendukung pengiriman halaman HTML, atau memisahkan API dari frontend dan menggunakan platform yang berbeda untuk masing-masing bagian.

## Connect Mongo DB Menggunakan Library Mongoose
1. Login ke mongodb atlas (https://cloud.mongodb.com/v2#/org/65e0fb34c0d2c40a6b74bd97/projects)https://cloud.mongodb.com/v2#/org/65e0fb34c0d2c40a6b74bd97/projects).
2. klik new project
3. lengkapi form create project seperti: name project ,tags (optional)
4. form Add Members and Set Permissions (optional)
5. klik **tab Database** -> Built a Database
6. Klik yang Free (Sesuaikan kebutuhan)
7. Lengkapi form sperti: Name (**isi dengan nama database** yang akan dibuat),provider (secara default aws), region (lokasi pilih yang terdekat).
8. Jika form sudah lengkap maka klik create Deployment
9. Maka akan muncul modal box dengan title **Connect to namaDatabase** pilih Drivers copy bagian **mongodb+srv://anggern514:<password>@cluster0.oxxob67.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0** 
10. Jika modal box diatas tidak muncul maka pergi ke **tab Database lalu klik Connect** maka akan muncul modal box lakukan copy seperti diatas.
11. Pastikan ubah **pasword**, cara mengetahui pasword pergi tab Quick Start copy bagian password. maka hasil link kurang lebih seperti ini **(mongodb+srv://anggern514:AfHzOBQ6q3hQ5YM5@cluster0.clidgo6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0)**
12. Pada tab Network Acces klik **ADD IP ADRESS** isi input **Access List Entry:** masukkan 0.0.0.0/0 -> klik confirm untuk menyimpan.
13. Buka file githuh diatas lakukan connect seperti di file **utils/db.js** untuk memastikan project sudah connect ke mongodb atlas
14. Pergi ke file **modal/contacts.js** untuk membuat model (sesuaikan dengan kebutuhan) dan coba tambahkan data ke mongodb
15. **Running project** menggunakan node js atau nodemon.
16. Cek ke web mongodb atlas pada **tab Database** klik Browse Collection untuk memastikan data yang telah dimasukkan berhasil tersimpan
17. secara default data didmpan di **test** dengan nama collection yang telah dbibuat di file **modal/contacts.js** pada file diatas nama collection adalah **person**
18. Selamat anda berhasil connect mongodb dengan project node js menggunakan express


