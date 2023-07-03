import React, { useState } from 'react';
import { preview } from '../assets';
import { getRandomPrompt } from '../utils';

const FormField = ({ labelName, type, name, placeholder, value, handleChange, isSurpriseMe, handleSurpriseMe }) => {
  const id = `id_${name}`;
  
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="text-[#666e75] text-[14px] font-medium mb-1">{labelName}</label>
      <div className="relative">
        <input
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          className="text-[#222328] bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 w-full p-3 text-sm"
        />
        {isSurpriseMe && (
          <button
            type="button"
            onClick={handleSurpriseMe}
            className="absolute top-2 right-2 text-[#666e75] text-sm font-medium"
          >
            Surprise Me
          </button>
        )}
      </div>
    </div>
  );
};
 export default FormField;