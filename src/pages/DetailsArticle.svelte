<script lang="ts">
  import Spinner from '../components/Spinner.svelte'
  import ArticleInfo from '../components/ArticleInfo.svelte'
  import type { ArticleItem } from '../repositories/article';
  
  import RepositoryFactory, { ARTICLE } from '../repositories/RepositoryFactory';
  import { find, articles } from '../store/article'
  const ArticleRepository = RepositoryFactory[ARTICLE];

  let article: ArticleItem
  let promise: Promise<void>

  type Params = { id: string }
  export let params: Params

  const findById = async (id: string) => {
    const article = await ArticleRepository.find(id)
    articles.add([article])
  }

  article = find(params.id);
  if (!$article) {
    promise = findById(params.id);
  }
</script>

<div>
  {#await promise}
    <div class="flex justify-center">
      <Spinner />
    </div>
  {:then}
    <ArticleInfo article={$article} />
  {:catch e}
    <span class="text-red-600 text-sm">
      {e.message}
    </span>
  {/await}
</div>