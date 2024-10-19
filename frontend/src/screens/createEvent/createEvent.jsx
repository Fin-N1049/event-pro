import React, { useState } from 'react';
import { Calendar, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CreateEventPage = ({ onCreateEvent }) => {
  const [eventName, setEventName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [teams, setTeams] = useState([{ name: '', captainEmail: '' }]);
  const navigate = useNavigate();

  const addTeam = () => {
    setTeams([...teams, { name: '', captainEmail: '' }]);
  };

  const updateTeam = (index, field, value) => {
    const updatedTeams = [...teams];
    updatedTeams[index][field] = value;
    setTeams(updatedTeams);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEvent = { eventName, startDate, endDate, teams };
    onCreateEvent(newEvent); // Call parent function to handle the new event
    navigate('/'); // Navigate to the home page after creating the event
  };

  const handleCancel = () => {
    navigate('/'); // Navigate to the home page when canceled
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold text-blue-600 mb-6">Create New Event</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="eventName">
            Event Name
          </label>
          <input
            id="eventName"
            type="text"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div className="flex space-x-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="startDate">
              Start Date
            </label>
            <div className="relative">
              <input
                id="startDate"
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
              <Calendar className="absolute right-3 top-2 h-5 w-5 text-gray-400" />
            </div>
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="endDate">
              End Date
            </label>
            <div className="relative">
              <input
                id="endDate"
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
              <Calendar className="absolute right-3 top-2 h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Teams
          </label>
          {teams.map((team, index) => (
            <div key={index} className="space-y-2 mb-4">
              <input
                type="text"
                placeholder={`Team ${index + 1} Name`}
                value={team.name}
                onChange={(e) => updateTeam(index, 'name', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              <input
                type="email"
                placeholder={`Team ${index + 1} Captain Email`}
                value={team.captainEmail}
                onChange={(e) => updateTeam(index, 'captainEmail', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          ))}
          <button
            type="button"
            onClick={addTeam} // Call addTeam when button is clicked
            className="mt-2 flex items-center text-blue-600 hover:text-blue-700"
          >
            <Plus className="h-4 w-4 mr-1" />
            Add Team
          </button>
        </div>

        <div className="flex space-x-4">
          <button
            type="submit"
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-md flex items-center justify-center"
          >
            <Plus className="mr-2 h-5 w-5" />
            Create Event
          </button>
          <button
            type="button"
            onClick={handleCancel} // Correctly call handleCancel
            className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 p-2 rounded-md flex items-center justify-center"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateEventPage;
