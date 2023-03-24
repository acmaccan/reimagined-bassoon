import { ProductButtons, ProductCard, ProductImage, ProductName } from '../components'

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
        <ProductCard product={product}>
          <ProductImage />
          <ProductName name={product.name} />
          <ProductButtons />
        </ProductCard>

        <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Name />
          <ProductCard.Buttons />
        </ProductCard>
      </div>
    </div>
  )
}
