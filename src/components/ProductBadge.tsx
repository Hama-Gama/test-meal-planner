import { Badge } from './ui/badge'
import type { Product } from '../types/types'

type Props = {
	product: Product
}

export const ProductBadge = ({ product }: Props) => {
	return (
		<Badge variant='secondary' className='text-sm'>
			{product.name} — {product.quantity}
		</Badge>
	)
}
