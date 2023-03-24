import { ProductCard as ProductCardHOC } from './ProductCard'

import { ProductButtons } from './ProductButtons'
import { ProductImage } from './ProductImage'
import { ProductName } from './ProductName'
import { ProductCardHOCProps } from '../interfaces/products.interfaces'

export { ProductButtons } from './ProductButtons'
export { ProductImage } from './ProductImage'
export { ProductName } from './ProductName'

export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
  Buttons: ProductButtons,
  Image: ProductImage,
  Name: ProductName,
})

export default ProductCard
