import { Weapon } from './Weapon'
import { ApiItem, UploadedPicture } from './types'
import { SkinUpgrade } from './SkinUpgrade'
import { Collection } from './Collection'

export enum Rarity {
	STANDARD = 'standard',
	SELECT = 'select',
	DELUXE = 'deluxe',
	PREMIUM = 'premium',
	ULTRA = 'ultra',
	EXCLUSIVE = 'exclusive',
}
export enum Unlocks {
	BATTLEPASS = 'battlepass',
	OTHER = 'other'
}

export interface Skin {
	id: number
	name: string
	slug: string
	weapon: Weapon
	price: number
	rarity: Rarity
	unlockable: boolean
	available: boolean
	picture: ApiItem<UploadedPicture>
	skin_upgrades: SkinUpgrade[]
	collection: Collection
}
