import { useContext } from 'react';

import AgreementContext from '../context/AgreementProvider'

const useAgreement = () => {

    return useContext(AgreementContext)

}

export default useAgreement