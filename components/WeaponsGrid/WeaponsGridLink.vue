<template>
	<nuxt-link class="weapon-link" :to="{name: 'weapon-slug', params: { slug } }">
		<div class="weapon-tile">
			<img
				 class="weapon-image"
				 :alt="name"
				 :title="name"
				 :src="`/default/${slug}.png`"
				 data-loaded="true"
			/>
			<div class="weapon-infos">
				<p class="weapon-name">{{ name }}</p>
				<div class="weapon-cost" v-if="price">
					<credit class="weapon-cost-icon" />
					<span class="weapon-cost-value">{{ price }}</span>
				</div>
			</div>
		</div>
	</nuxt-link>
</template>

<script setup lang="ts">
import credit from '~/assets/credit.svg'
const props = defineProps({
	name: String,
	slug: String,
	price: {type: Number, required: false}
})
</script>

<style scoped>
.weapon-link {
	flex: 1 1 auto;
	margin-bottom: 10px;
	text-decoration: none;
	color: inherit;
	&:hover {
		.weapon-image {filter: contrast(1);}
		.weapon-tile {border: 1px solid rgb(204, 173, 112);box-shadow: rgba(204, 173, 112, .4) 0 0 8px;}
	}
}
.weapon-tile {
	background: rgb(44, 39, 79);
	border: 1px solid rgb(56, 47, 102);
	box-sizing: border-box;
	box-shadow: rgba(21, 11, 37, .5) 0 2px 10px;
	border-radius: 6px;
	padding: 1rem 2rem;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	transition: border .3s ease-out 0s;
	min-height: 110px;
}
.weapon-image {
	display: block;
	width: auto;
	height: auto;
	max-width: 100%;
	max-height: 4rem;
	margin: 0 auto;
	background: transparent;
	opacity: 1;
	filter: contrast(0);
	transition: all .4s ease-in-out;
}
.weapon-infos {
	position: absolute;
	bottom: .5rem;
	left: 1rem;
}
.weapon-name {
	font-weight: 500;
	line-height: 1.2;
	color: rgb(255, 255, 255);
	text-transform: uppercase;
}
.weapon-cost {
	display: flex;
	align-items: center;
	color: rgb(200, 174, 120);
}
.weapon-cost-icon {
	vertical-align: middle;
	margin-right: 5px;
}
.weapon-cost-value {
	vertical-align: middle;
	line-height: 1;
}
</style>
