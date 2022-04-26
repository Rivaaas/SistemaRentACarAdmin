import React, { createContext, useState } from 'react';

const AgreementContext = createContext({});

export const AgreementProvider = ({ children }) => {
  const [agreement, setAgreement] = useState([{}]);


  return (
    <AgreementContext.Provider
      value={{agreement,setAgreement}}
    >
      {children}
    </AgreementContext.Provider>
  );
};


export default AgreementContext;