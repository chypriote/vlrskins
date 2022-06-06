import { Skin } from './Skin'
import { UploadedPicture } from './types'

export interface Collection {
	id: number
	weapon_skins: Skin[]
	name: string
	added: Date
	slug: string
	picture: UploadedPicture
}
