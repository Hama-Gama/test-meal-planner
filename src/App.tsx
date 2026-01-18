import './App.css'
import { useStore } from './store'
import { ShoppingList } from './features/shopping-list/ShoppingListPage'
import { BottomBar } from './components/BottomBar'


function App() {
	const selectedCategory = useStore(s => s.selectedCategory)
	
  return (
		<div className='pb-20 p-4'>
			<h1 className='text-xl font-bold mb-4'>Меню на неделю</h1>

			{selectedCategory === 'shopping' ? (
				<ShoppingList />
			) : (
				<p className='text-gray-500'>
					Раздел: <b>{selectedCategory}</b>
				</p>
			)}

			<BottomBar />
		</div>
	)
}

export default App
