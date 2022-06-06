import { Skin } from './Skin'

export type Weapon = {
	id: number
	name: string
	slug: string
	price: number
	created_at: Date
	updated_at: Date
	skins: Skin[]
}
