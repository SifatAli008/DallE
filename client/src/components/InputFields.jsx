import React, { useState } from 'react';
 const InputFields = () => {
  const [name, setName] = useState('');
  const [prompt, setPrompt] = useState('');
   const handleNameChange = (event) => {
    setName(event.target.value);
  };
   const handlePromptChange = (event) => {
    setPrompt(event.target.value);
  };
   return (
    <div>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" value={name} onChange={handleNameChange} />
       <label htmlFor="prompt">Prompt:</label>
      <input type="text" id="prompt" value={prompt} onChange={handlePromptChange} />
    </div>
  );
};
 export default InputFields;