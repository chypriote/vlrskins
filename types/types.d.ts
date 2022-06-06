
export type UploadedPicture = {
	id: number
	name: string
	alternativeText: string
	caption: string
	width: number
	height: number
	url: string
}

export interface ApiResponse<T> {
	data: ApiItem<T>[]
	meta: {
		pagination: {
			page: number
			pageSize: number
			pageCount: number
			total: number
		}
	}
}
export interface ApiItem<T> {
	id: number
	attributes: T
}
