<script lang="ts">
	import Header from './components/Header.svelte'
	export let name: string;
</script>

<Header />
<main>
	<div class="container">
    <h1>Hello {name}!</h1>
		<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	</div>
</main>

<style>
	main {
		padding-top: 1rem;
	}
	h1 {
		font-size: 1.2rem;
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