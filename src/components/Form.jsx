import { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { useSelectCurrency } from '../hooks/useSelectCurrency'
import { currency } from '../data/currency'
import { Error } from './Error'

const InputSubmit = styled.input`
  background-color: #9497FF;
  border: none;
  width: 100%;
  padding: 10px;
  color: #FFF;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 5px;
  transition: background-color .3s ease;
  margin-bottom: 20px;

  &:hover{
    background-color: #7A7DFE;
    cursor: pointer;
  }
`

export const Form = ({setMonedas}) => {

  const [cryptos, setCryptos] = useState([]);
  const [error, setError] = useState(false);
  const [ SelectCurrency, moneda ] = useSelectCurrency( 'Elije tu moneda',currency);
  const [ SelectCripto, cripto ] = useSelectCurrency( 'Elije tu Cripto', cryptos);

  useEffect(() => {
    const consultarAPI = async () => {
      const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';

      const respuesta = await fetch(url);
      const { Data } = await respuesta.json();

      const arrayCrypto = Data.map( crypto => {
        const { Name, FullName} = crypto.CoinInfo;
        const obj = {
          id: Name,
          nombre: FullName,
        }
        return (obj);
      })
      setCryptos(arrayCrypto);
    }
    consultarAPI()
  }, [])
  
  const handleSubmit = (e) => {
    e.preventDefault();

    if([moneda, cripto].includes('')){
      setError(true);
      return;
    }
    setError(false);
    setMonedas({
      moneda,
      cripto
    })
  }


  return (
    <>
      {error && <Error>Todos los campos son obligatorios</Error>}

      <form onSubmit={handleSubmit}>
        <SelectCurrency />
        <SelectCripto />
        <InputSubmit type="submit" value="Cotizar" />
      </form>
    </>
  )
}
