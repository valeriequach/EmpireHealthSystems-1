import React, { useState } from "react";

export const Intake = () => {
    const [formData, setFormData] = useState({
        name: "",
        dob: "",
        phone: "",
        email: "",
        gender: "",
        patientState: "",
        address: "",
        city: "",
        state: "",
        postalCode: "",
        country: "",
        preferredLanguage: "",
        typeOfVisit: "",
        insuranceInfo: "",
        medicare: "",
        ssn: "",
        reasonForVisit: "",
        additionalComments: "",
        preferredFacility: "",
        facilityName: "",
        contactPerson: "",
        contactEmail: "",
        contactPhone: "",
        facilityAddress: "",
        facilityCity: "",
        facilityState: "",
        facilityPostalCode: "",
        facilityCountry: "",
        supervisingMD: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    }

    return (
        <div className="bg-gray-200 flex justify-center py-24 font-Poppins">
            <div className="container w-10/12 h-auto bg-white flex flex-col sm:p-2 md:p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-row gap-4 p-5">
            <div className="w-1/3">
                <label htmlFor="name" className="block">Patient Name *</label>
                <input type="text" id="name" name="name" onChange={handleChange} className=" w-full px-3 py-2 placeholder-gray-300 border border-gray-300 border-l-0 border-r-0 border-t-0  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:focus:ring-offset-gray-900" required />
            </div>
            <div className="w-1/3">
                <label htmlFor="dob" className="block">Date of Birth *</label>
                <input type="date" id="dob" name="dob" onChange={handleChange} className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 border-l-0 border-r-0 border-t-0  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:focus:ring-offset-gray-900" required />
            </div>
            <div className="w-1/3">
    <label htmlFor="contactEmail" className="block">Email Address *</label>
    <input type="email" id="contactEmail" name="contactEmail" onChange={handleChange} className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 border-l-0 border-r-0 border-t-0  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:focus:ring-offset-gray-900" required />
</div>
            </div>
<div className="flex flex-row gap-4 p-5">
<div className="w-1/2">
    <label htmlFor="contactPhone" className="block">Phone *</label>
    <input type="tel" id="contactPhone" name="contactPhone" onChange={handleChange} className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 border-l-0 border-r-0 border-t-0  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:focus:ring-offset-gray-900" required />
</div>

<div className="w-2/3">
    <label htmlFor="facilityAddress" className="block">Street Address *</label>
    <input type="text" id="facilityAddress" name="facilityAddress" onChange={handleChange} className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 border-l-0 border-r-0 border-t-0  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:focus:ring-offset-gray-900" required />
</div>

<div className="w-1/3">
    <label htmlFor="facilityCity" className="block">City *</label>
    <input type="text" id="facilityCity" name="facilityCity" onChange={handleChange} className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 border-l-0 border-r-0 border-t-0  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:focus:ring-offset-gray-900" required />
</div>

<div className="w-1/3">
    <label htmlFor="facilityState" className="block">State/Province *</label>
    <input type="text" id="facilityState" name="facilityState" onChange={handleChange} className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 border-l-0 border-r-0 border-t-0  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:focus:ring-offset-gray-900" required />
</div>
</div>
<div className="flex flex-row gap-4 p-5">
<div className="w-1/3">
    <label htmlFor="facilityPostalCode" className="block">ZIP / Postal Code *</label>
    <input type="text" id="facilityPostalCode" name="facilityPostalCode" onChange={handleChange} className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 border-l-0 border-r-0 border-t-0  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:focus:ring-offset-gray-900" required />
</div>
<div className="w-1/3">
    <label htmlFor="facilityCountry" className="block">Country *</label>
    <input type="text" id="facilityCountry" name="facilityCountry" onChange={handleChange} className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 border-l-0 border-r-0 border-t-0  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:focus:ring-offset-gray-900" required />
</div>
<div className="w-1/3">
    <label htmlFor="preferredLanguage" className="block">Preferred Language *</label>
    <input type="text" id="preferredLanguage" name="preferredLanguage" onChange={handleChange} className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 border-l-0 border-r-0 border-t-0  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:focus:ring-offset-gray-900" required />
</div>
</div>

            <div>
                <label htmlFor="typeOfVisit" className="block">Referred Supervising MD - Type of Visit *</label>
                <select id="typeOfVisit" name="typeOfVisit" onChange={handleChange} className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:focus:ring-offset-gray-900" required >
                    <option value="">--Please choose an option--</option>
                    <option value="md1">Home Visit</option>
                    <option value="md2">Telehealth</option>
                    <option value="md2">Either</option>
                </select>
            </div>

<div>
    <label htmlFor="insuranceInfo" className="block">Insurance Information *</label>
    <input type="text" id="insuranceInfo" name="insuranceInfo" onChange={handleChange} className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 border-l-0 border-r-0 border-t-0  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:focus:ring-offset-gray-900" required />
</div>

<div>
    <label htmlFor="medicare" className="block">Medicare # *</label>
    <input type="text" id="medicare" name="medicare" onChange={handleChange} className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 border-l-0 border-r-0 border-t-0  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:focus:ring-offset-gray-900" required />
</div>

<div>
    <label htmlFor="ssn" className="block">SSN (If MBI, Member Beneficiary Identifier, is not available)</label>
    <input type="text" id="ssn" name="ssn" onChange={handleChange} className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 border-l-0 border-r-0 border-t-0  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:focus:ring-offset-gray-900" />
</div>
<div>
    <label htmlFor="reasonForVisit" className="block">Reason for Visit *</label>
    <textarea id="reasonForVisit" name="reasonForVisit" onChange={handleChange} className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:focus:ring-offset-gray-900" required />
</div>

<div>
    <label htmlFor="additionalComments" className="block">Additional Comments</label>
    <textarea id="additionalComments" name="additionalComments" onChange={handleChange} className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:focus:ring-offset-gray-900" />
</div>

<div>
    <label htmlFor="facilityName" className="block">Preferred Facility / Home Health Care - Name of Facility *</label>
    <input type="text" id="facilityName" name="facilityName" onChange={handleChange} className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 border-l-0 border-r-0 border-t-0  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:focus:ring-offset-gray-900" required />
</div>
<div>
    <label htmlFor="contactPerson" className="block">Contact Person *</label>
    <input type="text" id="contactPerson" name="contactPerson" onChange={handleChange} className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 border-l-0 border-r-0 border-t-0  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:focus:ring-offset-gray-900" required />
</div>

<div>
    <label htmlFor="supervisingMD" className="block">Referred Supervising MD - Select an MD *</label>
    <select id="supervisingMD" name="supervisingMD" onChange={handleChange} className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 border-l-0 border-r-0 border-t-0  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:focus:ring-offset-gray-900" required >
        <option value="">--Please choose an option--</option>
        <option value="md1">MD1</option>
        <option value="md2">MD2</option>
        //... add other MD options here ...
    </select>
</div>

            <div>
                <button type="submit" className="w-full px-4 py-2 text-lg font-semibold text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">Submit</button>
            </div>
        </form>
            </div>
        </div>
    );
};