import React, { useState } from 'react';
import { FaCheck, FaTrash, FaPlus } from 'react-icons/fa';

function Tasks() {
  const [note, setNote] = useState('');
  const [notes, setNotes] = useState([]);

  const handleNoteChange = (event) => {
    setNote(event.target.value);
  };

  const addNote = () => {
    if (note.trim() !== '') {
      setNotes([...notes, { content: note, completed: false }]);
      setNote('');
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      addNote();
    }
  };

  const toggleNote = (index) => {
    const updatedNotes = [...notes];
    updatedNotes[index].completed = !updatedNotes[index].completed;
    setNotes(updatedNotes);
  };

  const deleteNote = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
  };

  return (
    <div className="mt-10 bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold mb-4">Tasks</h3>
      <div className="flex items-center mb-4">
        <input
          className="flex-grow mr-4 px-4 py-2 border-2 border-solid rounded-lg focus:outline-none focus:border-green-500"
          type="text"
          placeholder="Add a new task..."
          value={note}
          onChange={handleNoteChange}
          onKeyDown={handleKeyDown}
        />
        <button
          className="bg-green-600 text-white rounded-lg px-4 py-2 hover:bg-green-500 transition-colors duration-300"
          onClick={addNote}
        >
          <span className="hidden md:inline">Add</span> {/* Text shown on larger screens */}
          <FaPlus className="md:hidden" /> {/* Plus icon shown on smaller screens */}
        </button>
      </div>
      <ul className="list-none">
        {notes.map((note, index) => (
          <li
            key={index}
            className={`flex items-center py-2 border-b border-gray-300 ${
              note.completed ? 'text-gray-400 line-through' : ''
            } transition-colors duration-300`}
          >
            <span className="flex-grow">{note.content}</span>
            <button
              className={`text-green-500 hover:text-green-600 focus:outline-none ${
                note.completed ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              onClick={() => toggleNote(index)}
            >
              <FaCheck />
            </button>
            <button
              className="text-red-500 hover:text-red-600 ml-4 focus:outline-none"
              onClick={() => deleteNote(index)}
            >
              <FaTrash />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tasks;
