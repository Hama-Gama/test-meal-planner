import { create } from 'zustand'
import type { MealType, Product } from './types/types'

type Store = {
	selectedCategory: MealType | 'shopping'
	menu: Record<MealType, Product[][]> // 7 дней
	shoppingList: Product[]

	setCategory: (category: MealType | 'shopping') => void
	generateShoppingList: () => void
}

export const useStore = create<Store>((set, get) => ({
	selectedCategory: 'breakfast',

	menu: {
		breakfast: [[], [], [], [], [], [], []],
		lunch: [[], [], [], [], [], [], []],
		dinner: [[], [], [], [], [], [], []],
		tea: [[], [], [], [], [], [], []],
		snacks: [[], [], [], [], [], [], []],
	},

	shoppingList: [],

	setCategory: category => set({ selectedCategory: category }),

	generateShoppingList: () => {
		const menu = get().menu
		const products = Object.values(menu).flat(2)
		set({ shoppingList: products })
	},
}))
