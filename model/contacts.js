import mongoose from "mongoose";
const Person = mongoose.model("person", {
  name: String,
});

export default Person;

// Cara insert data ke collection person dengan cara manual
// const contact1 = Person({
//   name: "Angger nur amin",
// });
// // simpan contact/masukkankan contact 1 ke collection contact pada database
// contact1
//   .save()
//   .then(() => console.log(contact1))
//   .catch((err) => console.log(err.message));
