import React, { useState } from 'react';

interface BookingFormProps {
  onSubmit: (booking: any) => void;
}

const services = [
  { id: 'taglio', name: 'Taglio', duration: 30 },
  { id: 'colore', name: 'Colore', duration: 120 },
  { id: 'trattamento', name: 'Trattamento', duration: 60 },
  { id: 'barba', name: 'Barba', duration: 20 },
];

const timeSlots = Array.from({ length: 13 }, (_, i) => {
  const hour = i + 8; // Inizia dalle 8:00
  return `${hour.toString().padStart(2, '0')}:00`;
});

export const BookingForm: React.FC<BookingFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">Nome</label>
        <input
          type="text"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[rgb(25,24,25)] focus:ring-[rgb(25,24,25)]"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[rgb(25,24,25)] focus:ring-[rgb(25,24,25)]"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Telefono</label>
        <input
          type="tel"
          name="phone"
          required
          value={formData.phone}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[rgb(25,24,25)] focus:ring-[rgb(25,24,25)]"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Servizio</label>
        <select
          name="service"
          required
          value={formData.service}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[rgb(25,24,25)] focus:ring-[rgb(25,24,25)]"
        >
          <option value="">Seleziona un servizio</option>
          {services.map(service => (
            <option key={service.id} value={service.id}>
              {service.name} ({service.duration} min)
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Data</label>
        <input
          type="date"
          name="date"
          required
          min={new Date().toISOString().split('T')[0]}
          value={formData.date}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[rgb(25,24,25)] focus:ring-[rgb(25,24,25)]"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Orario</label>
        <select
          name="time"
          required
          value={formData.time}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[rgb(25,24,25)] focus:ring-[rgb(25,24,25)]"
        >
          <option value="">Seleziona un orario</option>
          {timeSlots.map(time => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Note</label>
        <textarea
          name="notes"
          rows={4}
          value={formData.notes}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[rgb(25,24,25)] focus:ring-[rgb(25,24,25)]"
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-[rgb(25,24,25)] text-white px-6 py-2 rounded-full hover:bg-[rgb(35,34,35)] transition w-full"
      >
        Prenota
      </button>
    </form>
  );
}; 