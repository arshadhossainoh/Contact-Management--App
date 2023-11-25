// asyncHandler here handle try catch error
const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

//@desc get all contacts
//route GET /api/contacts
//access public
const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find();
  res.status(200).json(contacts);
});

//@desc create new contact
//route POST /api/contacts
//access public
const createContact = asyncHandler(async (req, res) => {
  console.log("The request body is:", req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  const contact = await Contact.create({
    name,
    email,
    phone,
  });
  res.status(201).json(contact);
});

//@desc get contact
//route GET /api/contacts/:id
//access public
const getContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Get contact for '${req.params.id}` });
});

//@desc update contact
//route PUT /api/contacts/:id
//access public
const updateContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `update contact for ${req.params.id}` });
});

//@desc delete contact
//route DELETE /api/contacts/:id
//access public
const deleteContact = asyncHandler(async (req, res) => {
  res.status(201).json({ message: `delete contact for ${req.params.id}` });
});

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};