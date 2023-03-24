import { Props as PropsButtonProps} from '../components/ProductButtons'
import { Props as ProductCardProps } from '../components/ProductCard'
import { Props as ProductImageProps } from '../components/ProductImage'
import { Props as ProductNameProps } from '../components/ProductName'

export interface Product {
  id: string
  name: string
  image?: string
}

export interface ProductContextProps {
  product: Product
  counter: number
  increaseBy: (value: number) => void
}

// export interface ProductButtonsProps {
//   counter: number
//   increaseBy: (value: number) => void
// }

export interface ProductCardHOCProps {
  ({ product, children }: ProductCardProps): JSX.Element
  Image: (Props: ProductImageProps) => JSX.Element
  Name: (Props: ProductNameProps) => JSX.Element
  Buttons: (Props: PropsButtonProps) => JSX.Element
}
