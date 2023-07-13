require('dotenv').config();
const mongoose = require('mongoose');
const { check, validationResult } = require('express-validator');

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

const validateFormData = (data) => {
    const validationChains = [
        check('lastName').isString().withMessage('lastName must be a string'),
        check('firstName').isString().withMessage('firstName must be a string'),
        check('dob').isISO8601().withMessage('dob must be a valid date'),
        check('phone').isMobilePhone().withMessage('phone must be a valid phone number'),
        check('email').isEmail().withMessage('email must be a valid email address'),
        check('gender').isString().withMessage('gender must be a string'),
        check('address').isString().withMessage('address must be a string'),
        check('city').isString().withMessage('city must be a string'),
        check('state').isString().withMessage('state must be a string'),
        check('postalCode').isString().withMessage('postalCode must be a string'),
        check('country').isString().withMessage('country must be a string'),
        check('preferredLanguage').isString().withMessage('preferredLanguage must be a string'),
        check('typeOfVisit').isString().withMessage('typeOfVisit must be a string'),
        check('medicare').isString().withMessage('medicare must be a string'),
        check('ssn').isString().withMessage('ssn must be a string'),
        check('reasonForVisit').isString().withMessage('reasonForVisit must be a string'),
        check('additionalComments').optional().isString().withMessage('additionalComments must be a string'),
        check('preferredFacility').isString().withMessage('preferredFacility must be a string'),
        check('facilityName').isString().withMessage('facilityName must be a string'),
        check('contactPerson').isString().withMessage('contactPerson must be a string'),
        check('contactEmail').isEmail().withMessage('contactEmail must be a valid email address'),
        check('contactPhone').isMobilePhone().withMessage('contactPhone must be a valid phone number'),
        check('supervisingMD').isString().withMessage('supervisingMD must be a string'),
    ];

    const errors = validationResult(data);
    if (!errors.isEmpty()) {
        return errors.array();
    }

    return [];
};

exports.handler = async (event, context) => {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    const data = JSON.parse(event.body);

    // Validate form data
    const errors = validateFormData(data);
    if (errors.length > 0) {
        return { statusCode: 400, body: JSON.stringify({ errors }) };
    }

    // Connect to MongoDB
    await mongoose.connect(process.env.DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    try {
        // Save form data to MongoDB
        const newIntakeForm = new IntakeForm(data);
        const intakeForm = await newIntakeForm.save();

        // Return success response
        return { statusCode: 200, body: JSON.stringify(intakeForm) };
    } catch (error) {
        // Return error response
        return { statusCode: 500, body: JSON.stringify({ error: 'Failed to save form data' }) };
    } finally {
        // Disconnect from MongoDB after operation
        await mongoose.connection.close();
    }
};
