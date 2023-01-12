
import { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import ImgCrypto from './img/imagen-criptos.png'
import { Form } from './components/Form'
import { Resultado } from './components/Resultado'
import { Loading } from './components/Loading'

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;

  @media(min-width: 992px){
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }

` 

const Img = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`

const Heading = styled.h1`
  font-family: 'Lato', sans-serif;
  color: #fff;
  text-align: center;
  font0-weight: 700;
  margin: 80px 0 50px 0;
  font-size: 34px;

  &::after{
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display: block;
    margin: 10px auto 0 auto;
  }
`

function App() {

  const [monedas, setMonedas] = useState({});
  const [resultado, setResultado] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if(Object.keys(monedas).length > 0){
      const { moneda, cripto } = monedas;
      const cotizarCripto = async() => {
        setLoading(true);
        setResultado({});
        
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cripto}&tsyms=${moneda}`
        const res = await fetch(url);
        const { DISPLAY } = await res.json();
        setResultado(DISPLAY[cripto][moneda]);

        setLoading(false);
      }
      cotizarCripto();
    }
  }, [monedas])

  return (
    <Container>

      <Img src={ImgCrypto} alt='Imagen criptomonedas' />

      <div>
        <Heading>
          Cotiza Criptomonedas en tiempo real
        </Heading>

        <Form 
          setMonedas={setMonedas}  
        />
        { loading && <Loading /> }
        { resultado.PRICE && !(loading) && <Resultado resultado={resultado}/>}
      </div>
    </Container>
  )
}

export default App
