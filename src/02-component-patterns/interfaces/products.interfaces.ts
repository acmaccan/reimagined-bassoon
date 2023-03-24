import { ReactElement } from 'react'

export interface ProductCardProps {
  product: Product
  children?: ReactElement | ReactElement[]
}

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
  Image: ({ image }: { image?: string }) => JSX.Element
  Name: ({ name }: { name?: string }) => JSX.Element
  Buttons: () => JSX.Element
}
