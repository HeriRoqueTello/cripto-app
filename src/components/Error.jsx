import styled from '@emotion/styled'

const Texto = styled.div`
  background-color: #B7332C;
  color: #FFF;
  padding: 15px;
  font-size: 22px;
  text-transform: uppercase;
  font-family: 'Lato', sans-serif;
  font-size: 24px;
  font-weight: 700;
  text-align: center;
`

export const Error = ({children}) => {
  return (
    <Texto>{children}</Texto>
  )
}
