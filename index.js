import express from "express";
const app = express();
const port = 3000;

import { connectDB } from "./utils/db.js";
import Person from "./model/contacts.js";

app.set("view engine", "ejs");
connectDB(); // Jalankan konek ke db

app.get("/", (req, res) => {
  res.send({
    data: [{ name: "angger", nim: 21201087, prodi: "Teknik Informatika" }],
  });
});

app.get("/contact", async (req, res) => {
  const defaultContacts = [
    {
      name: "Angger Nur Amin",
      email: "anggern514@gmail.com",
      nohp: "088989410007",
    },
    {
      name: "John doe",
      email: "johndoe.com",
      nohp: "08827389279832",
    },
    {
      name: "Angger Nur Amin",
      email: "anggern514@gmail.com",
      nohp: "088989410007",
    },
    {
      name: "John doe",
      email: "johndoe.com",
      nohp: "08827389279832",
    },
    {
      name: "Angger Nur Amin",
      email: "anggern514@gmail.com",
      nohp: "088989410007",
    },
    {
      name: "John doe",
      email: "johndoe.com",
      nohp: "08827389279832",
    },
    {
      name: "Angger Nur Amin",
      email: "anggern514@gmail.com",
      nohp: "088989410007",
    },
    {
      name: "John doe",
      email: "johndoe.com",
      nohp: "08827389279832",
    },
  ];
  const person = await Person.find();
  //   cek mengambil isi data dari collection person
  console.log("🚀 ~ app.get ~ person:", person);
  res.send(person);
});

app.listen(port, () =>
  console.log(`Server running on http://localhost:${port}/`)
);
