import { Props as PropsButtonProps } from '../components/ProductButtons'
import { Props as ProductCardProps } from '../components/ProductCard'
import { Props as ProductImageProps } from '../components/ProductImage'
import { Props as ProductNameProps } from '../components/ProductName'
import { doIncreaseBy } from '../../../../02-reactbases/src/counter-reducer/actions/actions';

export interface Product {
  id: string
  name: string
  image?: string
}

export interface ProductContextProps {
  product: Product
  counter: number
  increaseBy: (value: number) => void
  maxCount?: number
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

export interface onChangeArgs {
  product: Product
  count: number
}

export interface ProductInCart extends Product {
  count: number
}

export interface InitialValues {
  count?: number
  maxCount?: number
}

export interface ProductCardHandlers {
  count: number
  isMaxCountReached: boolean
  maxCount?: number
  product: Product
  increaseBy: (value: number) => void
  reset: () => void
}