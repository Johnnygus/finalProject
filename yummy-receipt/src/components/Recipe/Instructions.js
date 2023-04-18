import React from 'react';
import './Instruction.css';

const Instructions = ({ analyzedInstructions }) => {
  return (
    <>
      <h3>Instructions</h3>
      {analyzedInstructions &&
        analyzedInstructions.map((instructionGroup, index) => (
          <div key={index}>
            {instructionGroup.name && <h4>{instructionGroup.name}</h4>}
            <ol>
              {instructionGroup.steps.map((step) => (
                <li key={step.number} className="instruction-step">
                  {step.step}
                </li>
              ))}
            </ol>
          </div>
      ))}
    </>
  );
};

export default Instructions;
