import React, { useState } from 'react';

// Static team data
const teams = [
  { name: 'Food', captain: 'Alice Johnson', totalMembers: 10 },
  { name: 'Decoration', captain: 'Bob Smith', totalMembers: 8 },
  { name: 'Transportation', captain: 'Charlie Brown', totalMembers: 5 },
  { name: 'Security', captain: 'David Lee', totalMembers: 7 },
  { name: 'Logistics', captain: 'Eva Green', totalMembers: 12 },
  { name: 'Entertainment', captain: 'Frank Miller', totalMembers: 9 },
];

// Team Card Component
const TeamCard = ({ team, showCheckbox, isChecked, onCheckboxChange }) => {
  const handleCardClick = (e) => {
    // Prevent checkbox clicks from triggering the card click event
    if (e.target.type !== 'checkbox') {
      alert(`Team: ${team.name}, Captain: ${team.captain}`);
    }
  };

  return (
    <div
      onClick={handleCardClick}
      className="bg-gray border border-white shadow-lg rounded-lg p-4 w-full flex items-center justify-between cursor-pointer"
    >
      <div>
        <h3 className="text-lg font-semibold mb-2 text-black w-full">{team.name}</h3>
        <p className="text-gray-700">Captain: {team.captain}</p>
        <p className="text-gray-700">Total Members: {team.totalMembers}</p>
      </div>
      {showCheckbox && (
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => onCheckboxChange(team.name)}
          onClick={(e) => e.stopPropagation()} // Prevent parent click event
          className="ml-2 transform scale-150"
        />
      )}
    </div>
  );
};

// Team Listing Component
const TeamListing = () => {
  const [showCheckboxes, setShowCheckboxes] = useState(false);
  const [selectedTeams, setSelectedTeams] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  const today = new Date().toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const handleAlertClick = () => {
    setShowCheckboxes(true);
  };

  const handleCancelClick = () => {
    setShowCheckboxes(false);
    setSelectedTeams([]);
    setInputMessage('');
  };

  const handleCheckboxChange = (teamName) => {
    setSelectedTeams((prevSelectedTeams) =>
      prevSelectedTeams.includes(teamName)
        ? prevSelectedTeams.filter((name) => name !== teamName)
        : [...prevSelectedTeams, teamName]
    );
  };

  return (
    <div className="bg-white">
      <header className="flex items-center justify-between p-4 bg-white shadow-md">
        {/* Sidebar Icon */}
        <div className="flex items-center">
          <div className="mr-4 cursor-pointer">
            <div className="w-6 h-0.5 bg-black mb-1"></div>
            <div className="w-6 h-0.5 bg-black mb-1"></div>
            <div className="w-6 h-0.5 bg-black"></div>
          </div>
        </div>
        {/* Header Title */}
        <h1 className="text-3xl font-bold text-blue-600">Events Pro</h1>
        {/* Today's Date */}
        <div className="text-gray-700">{today}</div>
      </header>

      {/* Combined Event Information Box with Alert and Cancel Button */}
      <div className="mt-4 shadow-md border border-gray-300 rounded-md p-4 flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-semibold text-left">Event name: Make A Ton</h2>
          <h2 className="text-xl font-semibold text-left mt-2">Event Coordinator: John Doe</h2>
        </div>
        {showCheckboxes ? (
          <div className="flex items-center space-x-4">
            {/* Input Message Box */}
            <input
              type="text"
              placeholder="Enter message"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              className="border border-gray-300 rounded-md p-2"
            />
            {/* Cancel Button */}
            <button
              className="bg-green-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-green-600"
              onClick={handleCancelClick}
            >
              Cancel
            </button>
            {/* Alert Button */}
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-600"
              onClick={handleAlertClick}
            >
              Alert
            </button>
          </div>
        ) : (
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-600"
            onClick={handleAlertClick}
          >
            Alert
          </button>
        )}
      </div>

      {/* Subtitle for Organising Teams */}
      <h2 className="text-2xl font-semibold text-left mt-4 mb-2 ml-4">Organising Teams</h2>

      <div className="p-6 w-full">
        <div className="flex flex-col gap-6 justify-center w-full">
          {teams.map((team, index) => (
            <TeamCard
              key={index}
              team={team}
              showCheckbox={showCheckboxes}
              isChecked={selectedTeams.includes(team.name)}
              onCheckboxChange={handleCheckboxChange}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamListing;
