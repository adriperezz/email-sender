import React from 'react';
import { useState, useEffect } from 'react';

const CreateSub = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [group, setGroup] = useState('');
  const [groups, setGroups] = useState([]); // Suponiendo que obtendrás los grupos de algún lado

  useEffect(() => {
    // Aquí puedes hacer la petición para obtener los grupos
    // Ejemplo: setGroups([{id: 1, name: 'Grupo 1'}, {id: 2, name: 'Grupo 2'}])
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar la persona
    console.log('Nueva persona:', fullName, email, group);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-gray-100 rounded shadow-md">
      <label className="block mb-2 font-bold">Nombre Completo</label>
      <input
        type="text"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        className="border rounded p-2 w-full mb-4"
        placeholder="Nombre Completo"
        required
      />
      <label className="block mb-2 font-bold">Correo Electrónico</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border rounded p-2 w-full mb-4"
        placeholder="Correo Electrónico"
        required
      />
      <label className="block mb-2 font-bold">Grupo</label>
      <select
        value={group}
        onChange={(e) => setGroup(e.target.value)}
        className="border rounded p-2 w-full mb-4"
        required
      >
        <option value="">Selecciona un Grupo</option>
        {groups.map((g) => (
          <option key={g.id} value={g.id}>
            {g.name}
          </option>
        ))}
      </select>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Crear Persona
      </button>
    </form>
  );
};

export default CreateSub;
