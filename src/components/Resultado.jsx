import styled from '@emotion/styled'

const Result = styled.div`
  color: #FFF;
  font-family: 'Lato', sans-serif;
  display:flex;
  align-items: center;
  gap: 2rem;
  margin-top: 25px;
`
const Texto = styled.p`
  font-size: 18px;
  span {
    font-weight: 700;
  }
`
const Precio = styled.p`
  font-size: 22px;
  span {
    font-weight: 700;
  }
`
const Imagen = styled.img`
  display: block;
  width: 120px;
`

export const Resultado = ({ resultado }) => {

  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE, CONVERSIONSYMBOL } = resultado;

  return (
    <Result>
      <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt={`Imagen ${CONVERSIONSYMBOL}`} />
      <div>
        <Precio>El precio es de: <span>{PRICE}</span></Precio>
        <Texto>El precio es de: <span>{PRICE}</span></Texto>
        <Texto>Precio mas alto del dia: <span>{HIGHDAY}</span></Texto>
        <Texto>Precio mas bajo del dia: <span>{LOWDAY}</span></Texto>
        <Texto>Variacion ultimas 24 horas: <span>{CHANGEPCT24HOUR}</span></Texto>
        <Texto>Ultima actualizacion: <span>{LASTUPDATE}</span></Texto>
      </div>
    </Result>
  )
}
