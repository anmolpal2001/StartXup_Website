import React from 'react';

const Input = ({ label, type, name, value, onChange, required }) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-gray-700 text-sm font-bold mb-2">
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 bg-gray-100 text-gray-800"
        required={required}
      />
    </div>
  );
};

export default Input;