import React, { useState, useContext, useEffect } from 'react'
import { Table } from '../../styles/components/TableStyle'
import AgreementContext from '../../context/AgreementProvider';
import axios from 'axios'
import { Row, Col} from 'react-bootstrap'


const Index = () => {


  const { agreement, setAgreement } = useContext(AgreementContext);



  useEffect(() => {
    const getAgreements = async () => {
      const url = `http://localhost:1337/api/agreements`;
      const { data } = await axios.get(url);
      setAgreement(data.data)
    }
    getAgreements();
  }, [])

  console.log('sss',agreement)

  return (
    <div>
      <Table>
        {
         
            <Row>
              <Col>
              {
                agreement?.length ?
                agreement.map(agree => (
                <h2>HOla</h2>
                ))
                :
                <Row className='justify-content-center'>
                                <Col xs={10} sm={6}>
                                    <h1 className='text-center'>
                                        No hay vehiculos para mostrar
                                    </h1>
                                </Col>
                            </Row>

              }

              </Col>
            </Row>
        }

      </Table>
    </div>
  )
}


Index.defaultProps = {
  agreement : {
    attributes : {
      clientName : '',
      clientEmail : '',
      clientNumber : '',
      active : '',
      clientAddress : ''
    }
  }
}


export default Index