<script setup lang="ts">
import { useRoute } from '#app'
import { useStrapiClient } from '#imports'
import { Skin } from '~/types/Skin'
import { ApiResponse } from '~/types/types'

const name = "WeaponPage"
const route = useRoute()
const { slug } = route.params

const client = useStrapiClient()
const strapi = await client<ApiResponse<Skin>>('/skins', { params: { "filters[weapon][slug][$eq]": slug, populate: 'picture' }})
const skins = strapi.data
</script>

<template>
	<div class="container-fluid">
		<div class="row">
			<aside class="col col-12 col-lg-3">
				<div class="filters col">

				</div>
			</aside>
			<section class="col col-12 col-lg-9">
				<div class="main row">
					<div class="query col">
						<input type="text" placeholder="Type something" />
					</div>
				</div>
				<skins-grid class="row" :skins="skins" />
			</section>
		</div>
	</div>
</template>

<style scoped>
.filters {
	background-color: red;
	border-right: 1px solid #dee2e6;
}
.main {
	background-color: darkblue;
}
.query {
	padding: 1rem 0;
	background-color: cadetblue;
	display: flex;
	input {
		display: block;
		width: 100%;
		padding: 0.375rem 0.75rem;
		font-size: 1rem;
		font-weight: 400;
		line-height: 1.5;
		color: #495057;
		background-color: #fff;
		background-clip: padding-box;
		border: 1px solid #ced4da;
		border-radius: 0.25rem;
		transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
	}
}
</style>
