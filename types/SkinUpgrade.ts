import { UploadedPicture } from '~/types/types'
import { Skin } from '~/types/Skin'

export enum UpgradeType {
	VISUALS = 'visuals',
	ANIMATION = 'animation',
	FINITION = 'finition',
	CHROMA = 'chroma',
}

export interface SkinUpgrade {
	id: number
	skin: Skin
	name: string
	cost: number
	type: UpgradeType
	media: UploadedPicture
	level: number
	displayText: string
}
