require('dotenv').config();
const express = require('express');
const { body, validationResult } = require('express-validator');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 5001;

app.use(express.json());

mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Database connected successfully'))
.catch(err => console.log(err));

const intakeFormSchema = new mongoose.Schema({
  
        lastName: String,
        firstName: String,
        dob: Date,
        phone: String,
        email: String,
        gender: String,
        address: String,
        city: String,
        state: String,
        postalCode: String,
        country: String,
        preferredLanguage: String,
        typeOfVisit: String,
        medicare: String,
        ssn: String,
        reasonForVisit: String,
        additionalComments: String,
        preferredFacility: String,
        facilityName: String,
        contactPerson: String,
        contactEmail: String,
        contactPhone: String,
        supervisingMD: String
});
const IntakeForm = mongoose.model('IntakeForm', intakeFormSchema);

app.post('/submit', 
  [
    body('lastName').isString(),
    body('firstName').isString(),
    body('dob').isISO8601(),
    //... additional validators for other fields
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const newIntakeForm = new IntakeForm(req.body);
    newIntakeForm.save((err, intakeForm) => {
      if (err) return res.status(500).send(err);
      return res.status(200).send(intakeForm);
    });
});

app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});