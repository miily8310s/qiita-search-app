<script>
  export let value = ''
</script>

<div class="SearchBar">
  <input bind:value type="text" placeholder="Search...">
  <button>
    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6">
      <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
    </svg>
  </button>
</div>

<style>
  .SearchBar {
    display: flex;
  }
  input {
    width: 100%;
    padding: 1rem;
  }
  button {
    width: auto;
    display: flex;
    justify-items: flex-end;
    align-items: center;
    padding: 1rem;
  }
</style>