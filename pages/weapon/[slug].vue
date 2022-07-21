<script setup lang="ts">
import { useRoute } from '#app'
import { useStrapiClient } from '#imports'
import { Skin } from '~/types/Skin'
import { ApiResponse } from '~/types/types'
import { Weapon } from '~/types/Weapon'

const name = "WeaponPage"
const route = useRoute()
const { slug } = route.params

const client = useStrapiClient()
const strapi = await client<ApiResponse<Skin>>('/skins', { params: { "filters[weapon][slug][$eq]": slug, populate: 'picture' }})
const skins = strapi.data

const weapons = (await client<ApiResponse<Weapon>>('/weapons')).data
</script>

<template>
	<div class="container-fluid">
		<div class="row">
			<aside class="col col-12 col-lg-2">
				<div class="filters col">
					<nuxt-link
							v-for="weapon of weapons"
							:key="weapon.id"
							:to="{ name: 'weapon-slug', params: {slug: weapon.attributes.slug}}"
							class="nav-link"
					>
						{{ weapon.attributes.name }}
					</nuxt-link>
				</div>
			</aside>
			<section class="col col-12 col-lg-10">
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
	position: fixed;

	border-right: 1px solid #dee2e6;
	.nav-link {
		display: block;
		padding: .5rem 0;
	}
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
