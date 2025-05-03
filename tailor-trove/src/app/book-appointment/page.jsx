'use client';

import { useState } from 'react';

export default function BookAppointment() {
  const [form, setForm] = useState({
    prefix: 'Mr.',
    firstName: '',
    middleName: '',
    lastName: '',
    whatsapp: '',
    email: '',
    address: '',
    apartment: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    service: '',
    selectedServices: [],
    date: '',
    hour: '',
    minutes: '',
    ampm: 'AM',
    notes: '',
    file: null,
  });

  const servicesList = [
    'Shilwar Kameez', 'Kurti', 'Sharara Suit', 'Maxi Dress',
    'Lehenga Choli', 'Saree', 'Abaya', 'Co-ord', 'Douple Dress',
    'Two Piece Suit', 'Shirt'
  ];

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === 'checkbox') {
      const updatedServices = checked
        ? [...form.selectedServices, value]
        : form.selectedServices.filter((s) => s !== value);
      setForm({ ...form, selectedServices: updatedServices });
    } else if (type === 'file') {
      setForm({ ...form, file: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    setForm({ ...form, file });
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', form);
    alert('Appointment booked successfully!');
    // Optionally, you can use FormData for backend submission
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-yellow-700">Book Your Appointment</h1>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">

        {/* Personal Info */}
        <div>
          <label className="block font-medium">Prefix</label>
          <select name="prefix" value={form.prefix} onChange={handleChange} className="w-full border p-2 rounded">
            <option>Mr.</option>
            <option>Mrs.</option>
            <option>Miss</option>
          </select>
        </div>

        <div>
          <label className="block font-medium">First Name *</label>
          <input type="text" name="firstName" value={form.firstName} onChange={handleChange} required className="w-full border p-2 rounded" />
        </div>

        <div>
          <label className="block font-medium">Middle Name</label>
          <input type="text" name="middleName" value={form.middleName} onChange={handleChange} className="w-full border p-2 rounded" />
        </div>

        <div>
          <label className="block font-medium">Last Name *</label>
          <input type="text" name="lastName" value={form.lastName} onChange={handleChange} required className="w-full border p-2 rounded" />
        </div>

        <div>
          <label className="block font-medium">WhatsApp Number *</label>
          <input type="text" name="whatsapp" value={form.whatsapp} onChange={handleChange} required className="w-full border p-2 rounded" placeholder="+92 3001234567" />
        </div>

        <div>
          <label className="block font-medium">Email Address *</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full border p-2 rounded" />
        </div>

        {/* Address Section */}
        <div className="md:col-span-2">
          <label className="block font-medium">Street Address *</label>
          <input type="text" name="address" value={form.address} onChange={handleChange} required className="w-full border p-2 rounded" />
        </div>

        <div className="md:col-span-2">
          <label className="block font-medium">Apartment, Suite, etc</label>
          <input type="text" name="apartment" value={form.apartment} onChange={handleChange} className="w-full border p-2 rounded" />
        </div>

        <div>
          <label className="block font-medium">City</label>
          <input type="text" name="city" value={form.city} onChange={handleChange} className="w-full border p-2 rounded" />
        </div>

        <div>
          <label className="block font-medium">State/Province</label>
          <input type="text" name="state" value={form.state} onChange={handleChange} className="w-full border p-2 rounded" />
        </div>

        <div>
          <label className="block font-medium">ZIP / Postal Code</label>
          <input type="text" name="zip" value={form.zip} onChange={handleChange} className="w-full border p-2 rounded" />
        </div>

        <div>
          <label className="block font-medium">Country</label>
          <select name="country" value={form.country} onChange={handleChange} className="w-full border p-2 rounded">
            <option value="">Select country</option>
            <option>Pakistan</option>
            <option>UAE</option>
            <option>Saudi Arabia</option>
            <option>UK</option>
            <option>USA</option>
          </select>
        </div>

        {/* Services Section */}
        <div className="md:col-span-2">
          <label className="block font-medium">Select Service</label>
          <select name="service" value={form.service} onChange={handleChange} className="w-full border p-2 rounded">
            <option value="">Select</option>
            <option value="Stitching">Stitching</option>
            <option value="Alteration">Alteration</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label className="block font-medium">Services *</label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {servicesList.map((service) => (
              <label key={service} className="flex items-center">
                <input
                  type="checkbox"
                  name="selectedServices"
                  value={service}
                  checked={form.selectedServices.includes(service)}
                  onChange={handleChange}
                  className="mr-2"
                />
                {service}
              </label>
            ))}
          </div>
        </div>

        {/* Date and Time */}
        <div className="md:col-span-2">
          <label className="block font-medium">Date</label>
          <input type="date" name="date" value={form.date} onChange={handleChange} className="w-full border p-2 rounded" />
        </div>

        <div>
          <label className="block font-medium">Time (Hour)</label>
          <input type="text" name="hour" value={form.hour} onChange={handleChange} placeholder="E.g. 08" className="w-full border p-2 rounded" />
        </div>

        <div>
          <label className="block font-medium">Minutes</label>
          <input type="text" name="minutes" value={form.minutes} onChange={handleChange} placeholder="E.g. 00" className="w-full border p-2 rounded" />
        </div>

        <div>
          <label className="block font-medium">AM/PM</label>
          <select name="ampm" value={form.ampm} onChange={handleChange} className="w-full border p-2 rounded">
            <option value="AM">AM</option>
            <option value="PM">PM</option>
          </select>
        </div>

        {/* File Upload */}
        <div className="md:col-span-2">
          <label className="block font-medium mb-1">Upload Design (if any)</label>
          <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            className="border-dashed border-2 border-gray-400 p-6 text-center rounded cursor-pointer hover:border-yellow-600"
          >
            <p className="text-gray-600">Drag and drop a file here, or</p>
            <input type="file" name="file" onChange={handleChange} className="mt-2" />
            {form.file && (
              <p className="text-green-600 mt-2">Selected: {form.file.name}</p>
            )}
          </div>
        </div>

        {/* Notes */}
        <div className="md:col-span-2">
          <label className="block font-medium">Additional Notes</label>
          <textarea
            name="notes"
            value={form.notes}
            onChange={handleChange}
            rows="4"
            className="w-full border p-2 rounded"
            placeholder="Any additional instructions or preferences..."
          />
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2 mt-4">
          <button type="submit" className="bg-yellow-700 text-white py-2 px-6 rounded hover:bg-yellow-800">
            Book Appointment
          </button>
        </div>

      </form>
    </div>
  );
}
