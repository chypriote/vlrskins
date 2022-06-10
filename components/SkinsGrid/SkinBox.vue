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
			<div class="card-pic">
				<img :src="picture?.url" :alt="skin.name">
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { Skin } from '~/types/Skin'
import { Rarity } from '~/types/Skin'

const { skin } = defineProps({
	skin: Object as () => Skin
})
const picture = skin?.picture?.data?.attributes
const rarity_icon = `/tiers/${skin.rarity}.png`
const rarityUC = skin.rarity.charAt(0).toUpperCase() + skin.rarity.slice(1);
</script>

<style scoped>
.skin {
	padding: .125rem;
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
.card-pic {
	display: flex;
	align-items: center;
	height: 15vh;
}
.frame {
	padding: .5rem;
	background-color: #223843;
	min-height: 100%;
	position: relative;
	cursor: pointer;
	&.--standard {border-color: #fff;}
	&.--select {border-color: #409dd7;}
	&.--deluxe {border-color: #f79f11;}
	&.--premium {border-color: #9941b0;}
	&.--ultra {border-color: red;}
}
.skin-rarity {
	img {height: 1.75rem;}
}
</style>
