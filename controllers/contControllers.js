const Contact = require("../db/models/schema");

const index = (req, res) => {
  Contact.find()
    .then((result) => res.render("index.ejs", { Contacts: result }))
    .catch((err) => res.send(err));
};

const create = (req, res) => {
  res.render("create.ejs");
};

const cont_post = (req, res) => {
  const contact = Contact(req.body);

  contact
    .save()
    .then(() => res.redirect("/"))
    .catch((err) => res.send(err));
};

const cont_data = (req, res) => {
  const id = req.params.id;

  Contact.findById(id)
    .then((result) => res.render("contDetails.ejs", { id, Contact: result }))
    .catch((err) => res.send(err));
};

const data_dlt = (req, res) => {
  const id = req.params.id;

  Contact.findByIdAndDelete(id)
    .then(() => res.json({ redirect: "/" }))
    .catch((err) => res.send(err));
};

module.exports = { index, create, cont_post, cont_data, data_dlt };
