import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Container, Row, Col } from 'react-bootstrap'

import NavBar from '../components/NavBar/Index'
import Table from '../components/Table/Index'

import { Contenedor, DivNav, DivTable } from '../styles/pages/IndexStyle'

import { AgreementProvider } from '../context/AgreementProvider'

export default function Home() {
  return (
    <AgreementProvider>
      <Contenedor>
        <Row>
        <DivNav className='col-5'>
          <NavBar />
        </DivNav>
        <DivTable className='col-7'>
          <Table />
        </DivTable>
        </Row>
      </Contenedor>
    </AgreementProvider>

  )
}
