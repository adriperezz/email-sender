import React from 'react';
import { useState } from 'react';

const CreateGroup = () => {
  const [groupName, setGroupName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar el grupo
    console.log('Nuevo grupo:', groupName);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-gray-100 rounded shadow-md">
      <label className="block mb-2 font-bold">Nombre del Grupo</label>
      <input
        type="text"
        value={groupName}
        onChange={(e) => setGroupName(e.target.value)}
        className="border rounded p-2 w-full mb-4"
        placeholder="Nombre del Grupo"
        required
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Crear Grupo
      </button>
    </form>
  );
};

export default CreateGroup;
