export type MealType = 'breakfast' | 'lunch' | 'dinner' | 'tea' | 'snacks'

export type Product = {
	id: string
	name: string
	quantity: string
}

export type MenuDay = {
	day: number
	products: Product[]
}
