const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cont = Schema({
  name: {
    type: String,
    required: true,
  },
  mobile: {
    type: Number,
    required: true,
  },
  street: {
    type: String,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
});

const Contact = mongoose.model("Contact", cont);

module.exports = Contact;
