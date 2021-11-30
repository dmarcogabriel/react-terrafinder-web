import React, { createContext, useContext, useState } from 'react';

const Context = createContext({});

export const useNewProperty = () => useContext(Context);

export const NewPropertyProvider = ({ children }) => {
  const [property, setProperty] = useState({});
  const [step, setStep] = useState(1);
  const [photos, setPhotos] = useState([]);

  const updateProperty = (data) => setProperty({ ...property, ...data });

  const nextStep = () => setStep(step + 1);

  React.useEffect(() => {
    console.log('STEP', step);
  }, [step]);

  React.useEffect(() => {
    console.log('PROPERTY', property);
  }, [property]);

  return (
    <Context.Provider
      value={{
        property,
        updateProperty,
        nextStep,
        step,
        photos,
        setPhotos,
      }}
    >
      {children}
    </Context.Provider>
  );
};
