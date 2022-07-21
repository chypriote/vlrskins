<template>
	<div class="skin">
		<div class="frame" :class="`--${skin.rarity}`">
			<header>
				<div class="skin-name">{{ skin.name }}</div>
				<div class="skin-rarity hint--top" :aria-label="rarityUC">
					<img v-if="skin.rarity !== Rarity.STANDARD"
							 :src="rarity_icon"
							 :alt="rarityUC"
					/>
				</div>
			</header>
			<div class="skin-picture">
				<img :src="picture.url" :alt="skin.name">
			</div>
			<div class="skin-prices" v-if="skin.price > 0">
				<div class="eur-price">{{ `~${euro_price} €` }}</div>
				<div class="vp-price">
					{{ skin.price }}
					<img src="~/assets/valorantpoints.png" alt="Valorant Points" />
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { Skin } from '~/types/Skin'
import { Rarity } from '~/types/Skin'

const vpPrice = 5.49 / 500 // 500 VP for 549 Euros ct ====> 0,01098ct le VP
const radPrice =  1600 / 20 // 20 RP for 1600 VP ====> 80VP le RadPoint

const { skin } = defineProps({
	skin: Object as () => Skin
})
const picture = skin?.picture?.data?.attributes
const rarity_icon = `/tiers/${skin.rarity}.png`
const rarityUC = skin.rarity.charAt(0).toUpperCase() + skin.rarity.slice(1);
const euro_price = Math.floor(skin.price * vpPrice * 100) / 100
console.log(picture)
</script>

<style scoped>
.skin {
	padding: .125rem;
	display: flex;
}
.frame {
	position: relative;
	flex-grow: 1;
	display: flex;
	flex-direction: column;
	padding: 1rem;
	background-color: #223843;
	cursor: pointer;
}
header {
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.skin-name {
	color: white;
	font-weight: bold;
}
.skin-picture {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 1rem 0;
	height: 10rem;
	img {max-height: 100%;}
}
.skin-rarity {
	img {height: 1.75rem;}
}
.skin-prices {
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.eur-price {
	display: flex;
	align-items: center;
	color: white;
}
.vp-price {
	display: flex;
	align-items: center;
	color: white;
	img {height: 1rem;margin-left: .25rem;}
}
</style>
