import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductName,
} from '../components'
import '../styles/custom-styles.css'

const product = {
  id: '1',
  name: 'Coffee Mug - Card',
  image: './coffee-mug.png',
}

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
        {/* Compound Component Appending Component Props*/}
        {/* Componentes agregados al HOC */}
        {/* Componentes basado en propiedades */}
        <ProductCard product={product} className='bg-dark text-white'>
          <ProductCard.Image className='custom-image' />
          <ProductCard.Name className='text-bold' />
          <ProductCard.Buttons className='custom-buttons' />
        </ProductCard>

        {/* Compound Component */}
        {/* Componentes físicamente importados */}
        {/* Componentes basados en componentes hijos */}
        <ProductCard product={product} className='bg-dark text-white'>
          <ProductImage
            className='custom-image'
            style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }}
          />
          <ProductName name={product.name} className='text-bold' />
          <ProductButtons className='custom-buttons' />
        </ProductCard>

        <ProductCard product={product} style={{ backgroundColor: 'lightgray' }}>
          <ProductImage
            style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }}
          />
          <ProductName name={product.name} style={{ fontWeight: 'bold' }} />
          <ProductButtons style={{ justifyContent: 'end' }} />
        </ProductCard>
      </div>
    </div>
  )
}
