import { useStore } from '../store'
import { Badge } from './ui/badge'

const categories = [
	{ key: 'breakfast', label: 'Завтрак' },
	{ key: 'lunch', label: 'Обед' },
	{ key: 'dinner', label: 'Ужин' },
	{ key: 'tea', label: 'Чай' },
	{ key: 'snacks', label: 'Перекусы' },
	{ key: 'shopping', label: 'Список' },
] as const

export const BottomBar = () => {
	const setCategory = useStore(s => s.setCategory)
	const selected = useStore(s => s.selectedCategory)

	return (
		<div className='fixed bottom-0 left-0 right-0 flex justify-around border-t bg-white py-2'>
			{categories.map(c => {
				const isActive = selected === c.key

				return (
					<button
						key={c.key}
						onClick={() => setCategory(c.key)}
						className='text-sm p-1'
					>
						{isActive ? (
							<Badge className='bg-black text-white hover:bg-black p-2'>
								{c.label}
							</Badge>
						) : (
							<span className='text-gray-800'>{c.label}</span>
						)}
					</button>
				)
			})}
		</div>
	)
}
