import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductName,
} from '../components'
import '../styles/custom-styles.css'
import { products } from '../data/products'

const product = products[0]

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      <ProductCard
        key={product.id}
        product={product}
        className='bg-dark text-white'
        initialValues={{
          count: 4,
          maxCount: 10,
        }}
      >
        {({ reset, count, increaseBy, isMaxCountReached }) => (
          <>
            <ProductImage
              className='custom-image'
              style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }}
            />
            <ProductName className='text-bold' />
            <ProductButtons className='custom-buttons' />

            <button onClick={reset}>Reset</button>
            <button onClick={() => increaseBy(-2)}>-2</button>

            {!isMaxCountReached && (
              <button onClick={() => increaseBy(2)}>+2</button>
            )}
            <span>{count}</span>
            {/* {JSON.stringify(args, null, 3)} */}
          </>
        )}
      </ProductCard>
    </div>
  )
}
