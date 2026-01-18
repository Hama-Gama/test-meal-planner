import { useEffect } from 'react'
import { useStore } from '../../store'
import { ProductBadge } from '../../components/ProductBadge'

export const ShoppingList = () => {
	const shoppingList = useStore(s => s.shoppingList)
	const generate = useStore(s => s.generateShoppingList)

	useEffect(() => {
		generate()
	}, [generate])

	return (
		<div className='space-y-2'>
			{shoppingList.length === 0 && (
				<p className='text-gray-400'>Список пуст</p>
			)}

			{shoppingList.map(product => (
				<ProductBadge key={product.id} product={product} />
			))}
		</div>
	)
}
