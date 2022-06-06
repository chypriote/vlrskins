<script setup lang="ts">
import { useRoute } from '#app'
import { useStrapiClient } from '#imports'
import { Skin } from '~/types/Skin'
import { ApiResponse } from '~/types/types'

const name = "WeaponPage"
const route = useRoute()
const { slug } = route.params

const client = useStrapiClient()
const strapi: ApiResponse<Skin> = await client<Skin>('/skins', { params: { "filters[weapon][slug][$eq]": slug }})
const skins = strapi.data
</script>

<template>
	<div class="container">
		<div class="row">
			<aside>
				<div class="filters">

				</div>
			</aside>
			<section>
				<div class="main">
					<div class="query">
						<input type="text" placeholder="Type something" />
					</div>
					<div class="skins-list">
						<div class="skin" v-for="skin of skins" :key="skin.id">
							<div class="frame --standard">
								<div class="card-pic">

								</div>
								{{ skin?.attributes?.name }}
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	</div>
</template>

<style scoped>
.container {
	width: 100%;
	margin: 0 auto;
	min-height: 100vh;
}
.row {
	display: flex;
	flex-wrap: wrap;
}
aside {
	position: relative;
	flex: 0 0 25%;
	max-width: 25%;
}
section {
	flex: 0 0 75%;
	max-width: 75%;
}
.filters {
	background-color: red;
	padding: 1rem;
	border-right: 1px solid #dee2e6;
}
.main {
	padding: 0 1rem;
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
.skins-list {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
}
.skin {
	flex: 0 0 25%;
	max-width: 25%;
	padding: .25rem;
}
.frame {
	background-color: #223843;
	min-height: 100%;
	position: relative;
	outline-style: solid;
	outline-offset: 0;
	outline-width: 3px;
	cursor: pointer;
	&.--standard {outline-color: #fff;}
	&.--select {outline-color: #409dd7;}
	&.--deluxe {outline-color: #f79f11;}
	&.--premium {outline-color: #9941b0;}
	&.--ultra {outline-color: red;}
}
</style>
