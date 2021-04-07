<script lang="ts">
  import SearchBar from "../components/SearchBar.svelte";
  
  import type { ArticleItem } from '../repositories/article';
  import RepositoryFactory, { ARTICLE } from '../repositories/RepositoryFactory';
  const ArticleRepository = RepositoryFactory[ARTICLE];

  let query = ''
  let empty = false
  let promise: Promise<void>
  let articles: ArticleItem[] = []

  const handleSubmit = () => {
    if (!query.trim()) return
    promise = getArticles()
  }

  const getArticles = async () => {
    articles = []
    empty = false
    const result = await ArticleRepository.get({ query })
    empty = result.length === 0
    articles = result
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
  <SearchBar bind:value={query} />
</form>

<div class="text-center mt-4">
  {#if empty}
    <div>検索結果が見つかりませんでした。</div>
  {:else}
    {#each articles as article (article.id)}
      <div>{article.title}</div>
    {/each}
  {/if}
  {#await promise}
    <div class="flex justify-center">
      <!-- <Spinner /> -->
    </div>
    {:catch e}
      <span class="text-red-600 text-sm">
        {e.message}
      </span>
  {/await}
</div>
