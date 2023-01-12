
import { useState } from 'react';
import styled from '@emotion/styled'

const Label = styled.label`
  color: #FFF;
  display: block;
  font-family: 'Lato', sans-serif;
  font-size: 24px;
  font-weight: 700;
  margin: 15px 0;
`

const Select = styled.select`
  width: 100%;
  font-size: 18px;
  padding: 12px;
  border-radius: 10px;
  margin-bottom: 20px;
`

export const useSelectCurrency = (label, opciones) => {

  const [state, setState] = useState('');

	const SelectCurrency = () => (
    <>
      <Label htmlFor="currency">{label}</Label>
      <Select 
        id="currency"
        value={state}
        onChange={({ target }) => setState(target.value)}
      >
        <option value="">Seleccione</option>

        {
          opciones.map(currency => {
            return(
              <option
                value={currency.id}
                key={currency.id}
              >
                {currency.nombre}
              </option>
            )
          })
        }

      </Select>
    </>
  );

	return [
		SelectCurrency, state,
	];
};
