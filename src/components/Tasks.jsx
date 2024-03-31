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
    <div className="mt-10">
      <h3 className='text-xl mr-16'>Tasks</h3>
      <div className="flex items-center">
        <input
          className="lg:w-[300px] lg:mr-4 mr-4 lg:mt-4 mt-4 lg:ml-0   p-[8px] border-2 border-solid rounded-xl"
          type="text"
          value={note}
          onChange={handleNoteChange}
          onKeyDown={handleKeyDown}
        />
        <button className="bg-green-600 text-white rounded-xl lg:px-4 lg:mt-4 mt-4 cursor-pointer hover:bg-green-500">
          <span className="hidden sm:inline">Add</span> {/* Text shown on larger screens */}
          <FaPlus className="sm:hidden" /> {/* Plus icon shown on smaller screens */}
        </button>
      </div>
      <ul className="flex flex-col justify-start list-none pt-4">
        {notes.map((note, index) => (
          <li key={index} className={`flex items-center ${note.completed ? 'line-through' : ''} ${index > 0 ? 'mt-2' : ''}`}>
            <span className="flex-grow">{note.content}</span>
            <button className="bg-transparent border-none text-blue-500 cursor-pointer" onClick={() => toggleNote(index)}>
              {note.completed ? (
                <FaCheck />
              ) : (
                <FaCheck style={{ color: 'green' }} />
              )}
            </button>
            <button className="bg-transparent border-none text-blue-500 cursor-pointer" onClick={() => deleteNote(index)}>
              <FaTrash />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
