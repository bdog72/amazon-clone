//
//
import React from 'react';
import './Subtotal.css';

import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText={(value) => {
          return (
            <>
              <p>
                Subtotal({basket.length} items):{' '}
                <strong>{`${value}.00`}</strong>
              </p>
              <small className='subtotal__gift'>
                <input type='checkbox' />
                This order contains a gift
              </small>
            </>
          );
        }}
        decimalScale={2}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
        value={getBasketTotal(basket)}
      />

      <button>Proceed To Checkout</button>
    </div>
  );
}

export default Subtotal;
