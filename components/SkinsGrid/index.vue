<template>
	<div class="skins-list row">
		<skin-box class="col col-3" v-for="skin of skins" :key="skin.id" :skin="skin.attributes" />
	</div>
</template>

<script setup lang="ts">
import SkinBox from '~/components/SkinsGrid/SkinBox.vue'
import { Skin } from '~/types/Skin'
import { ApiItem } from '~/types/types'

defineProps({
	skins: Array as () => ApiItem<Skin>[]
})
</script>

<style scoped>
</style>
