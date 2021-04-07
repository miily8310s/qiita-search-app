<script lang="ts">
	import Header from './components/Header.svelte'
	import Router from 'svelte-spa-router'
	import { routes } from "./router";
</script>

<Header />
<main>
	<div class="container">
    <Router {routes} />
	</div>
</main>

<style>
	main {
		padding-top: 1rem;
	}
	.container {
		margin-left: auto;
		margin-right: auto;
		padding-left: 1.5rem;
		padding-right: 1.5rem;
		margin-top: 1rem;
		margin-bottom: 1rem;
	}
</style>