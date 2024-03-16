import express from "express";
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send({
    data: [{ name: "angger", nim: 21201087, prodi: "Teknik Informatika" }],
  });
});

app.get("/contact", (req, res) => {
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

  res.render("contacts", {
    title: "Angger Nur Amin",
  });
});

app.listen(port, () =>
  console.log(`Server running on http://localhost:${port}/`)
);
