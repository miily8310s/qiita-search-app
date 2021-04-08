<script lang="ts">
  import SearchBar from "../components/SearchBar.svelte";
  import Spinner from '../components/Spinner.svelte'
  import ArticleCard from '../components/ArticleCard.svelte'
  
  import RepositoryFactory, { ARTICLE } from '../repositories/RepositoryFactory';
  import { articles } from '../store/article'
  const ArticleRepository = RepositoryFactory[ARTICLE];

  let query = ''
  let empty = false
  let promise: Promise<void>

  const handleSubmit = () => {
    if (!query.trim()) return
    promise = getArticles()
  }

  const getArticles = async () => {
    $articles = []
    empty = false
    const result = await ArticleRepository.get({ query })
    empty = result.length === 0
    $articles = result
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
  <SearchBar bind:value={query} />
</form>

<div class="container">
  <div class="article-row">
    {#if empty}
      <div>検索結果が見つかりませんでした。</div>
    {:else}
      {#each $articles as article (article.id)}
        <ArticleCard {article} />
      {/each}
    {/if}
    {#await promise}
      <div class="contaner_loading">
        <Spinner />
      </div>
      {:catch e}
        <span class="container_error">
          {e.message}
        </span>
    {/await}
  </div>
</div>

<style>
  .container {
    text-align: center;
    margin-top: 1rem;
  }
  .contaner_loading {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .container_error {
    --tw-text-opacity: 1;
    color: rgba(220, 38, 38, var(--tw-text-opacity));
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
  .article-row {
    display: grid;
    grid-template-rows: repeat(5, minmax(0, 1fr));
    grid-auto-flow: column;
  }
</style>
