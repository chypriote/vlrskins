import { defineNuxtConfig } from 'nuxt'
import TypedRouter from 'nuxt-typed-router'
import svgLoader from "vite-svg-loader"

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	target: 'static',
	buildModules: [
		TypedRouter,
		'@nuxtjs/strapi',
	],
	modules: [
		'nuxt-lodash',
	],
	vite: {
		plugins: [svgLoader()]
	},
	postcss: {
		plugins: {'postcss-nested': {}},
	},
	css: [
		'normalize.css'
	]
})
