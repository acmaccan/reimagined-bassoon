import { useState, useEffect, useRef } from 'react'
import { onChangeArgs, Product } from '../interfaces/products.interfaces'

interface useProductArgs {
  product: Product
  onChange?: (args: onChangeArgs) => void
  value?: number
}

export const useProduct = ({
  onChange,
  product,
  value = 0,
}: useProductArgs) => {
  const [counter, setCounter] = useState(value)

  const isControlled = useRef(!!onChange)
  // console.log(isControlled.current)

  const increaseBy = (value: number) => {

    if (isControlled.current) {
      return onChange!({ count: value, product })
    }

    const newValue = Math.max(counter + value, 0)
    setCounter(newValue)
    onChange && onChange({ count: newValue, product })
  }

  useEffect(() => {
    setCounter(value)
  }, [value])

  return {
    counter,
    increaseBy,
  }
}
