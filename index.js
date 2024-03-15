import express from "express";
const app = express();
const port = 3000;
app.get("/", (req, res) => {
  res.send({
    data: [{ name: "angger", nim: 21201087, prodi: "Teknik Informatika" }],
  });
});

app.listen(port, () =>
  console.log(`Server running on http://localhost:${port}/`)
);
