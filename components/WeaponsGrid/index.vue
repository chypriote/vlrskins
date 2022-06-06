<template>
<div class="weapons-grid-wrapper">
	<div class="weapons-grid">
		<div class="weapons-grid-column">
			<weapons-grid-header :title="'sidearm'" />
			<div class="weapons-grid-cell">
				<weapons-grid-link :name="'Classic'" :slug="'classic'" :price="0" />
				<weapons-grid-link :name="'Shorty'" :slug="'shorty'" :price="150" />
				<weapons-grid-link :name="'Frenzy'" :slug="'frenzy'" :price="450" />
				<weapons-grid-link :name="'Ghost'" :slug="'ghost'" :price="500" />
				<weapons-grid-link :name="'Sheriff'" :slug="'sheriff'" :price="800" />
			</div>
		</div>
	</div>
	<div class="weapons-grid">
		<div class="weapons-grid-column">
			<weapons-grid-header :title="'smg'" />
			<div class="weapons-grid-cell">
				<weapons-grid-link :name="'Stinger'" :slug="'stinger'" :price="950" />
				<weapons-grid-link :name="'Spectre'" :slug="'spectre'" :price="1600" />
			</div>
		</div>
		<div class="weapons-grid-column">
			<weapons-grid-header :title="'shotgun'" />
			<div class="weapons-grid-cell">
				<weapons-grid-link :name="'Bucky'" :slug="'bucky'" :price="850" />
				<weapons-grid-link :name="'Judge'" :slug="'judge'" :price="1850" />
			</div>
		</div>
	</div>
	<div class="weapons-grid">
		<div class="weapons-grid-column">
			<weapons-grid-header :title="'rifles'" />
			<div class="weapons-grid-cell">
				<weapons-grid-link :name="'Bulldog'" :slug="'bulldog'" :price="2050" />
				<weapons-grid-link :name="'Guardian'" :slug="'guardian'" :price="2250" />
				<weapons-grid-link :name="'Phantom'" :slug="'phantom'" :price="2900" />
				<weapons-grid-link :name="'Vandal'" :slug="'vandal'" :price="2900" />
			</div>
		</div>
	</div>
	<div class="weapons-grid">
		<div class="weapons-grid-column">
			<weapons-grid-header :title="'sniper'" />
			<div class="weapons-grid-cell">
				<weapons-grid-link :name="'Marshal'" :slug="'marshal'" :price="950" />
				<weapons-grid-link :name="'Operator'" :slug="'operator'" :price="4700" />
			</div>
		</div>
		<div class="weapons-grid-column">
			<weapons-grid-header :title="'heavy'" />
			<div class="weapons-grid-cell">
				<weapons-grid-link :name="'Ares'" :slug="'ares'" :price="1600" />
				<weapons-grid-link :name="'Odin'" :slug="'odin'" :price="3200" />
			</div>
		</div>
	</div>
	<div class="weapons-grid-footer">
		<div class="weapon-grid-cell">
			<weapons-grid-header :title="'melee'" />
			<div class="weapon-container">
				<weapons-grid-link :name="'Knife'" :slug="'knife'" />
			</div>
		</div>
	</div>
</div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.weapons-grid-wrapper {
	display: flex;
	margin: 0 -10px;
	flex-wrap: wrap;
}
.weapons-grid {
	display: flex;
	flex-direction: column;
	flex: 1 1 0;
	@media (max-width: 992px) {flex: 1 1 50%;}
}
.weapons-grid-column {
	display: flex;
	flex-direction: column;
	margin: 0 10px;
	flex: 1 1 auto;
}
.weapons-grid-cell {
	display: flex;
	flex-direction: column;
	flex: 1 1 auto;
}
.weapons-grid-footer {
	width: 100%;
	display: flex;
	justify-content: center;
	& > .weapons-grid-cell {
		flex-basis: 25%;
		flex-grow: 0;
		@media (max-width: 992px) {flex-basis: 50%;}
	}
}
</style>
