<template>
	<div class="skins-list">
		<div class="skin" v-for="skin of skins" :key="skin.id">
			<div class="frame --standard">
				<div class="card-pic">

				</div>
				{{ skin?.attributes?.name }}
				{{ skin?.attributes }}
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
defineProps({
	skins: Array
})
</script>

<style scoped>
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
