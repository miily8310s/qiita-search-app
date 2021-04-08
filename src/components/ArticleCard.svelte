<script lang="ts">
  import type { ArticleItem } from '../repositories/article'
  import { link } from "svelte-spa-router";
  export let article: ArticleItem

  $: src = article.user.profile_image_url 
    ? article.user.profile_image_url
    : 'http://placehold.jp/eeeeee/cccccc/160x120.png?text=No%20Image'
  
  $: description = article.rendered_body
    ? `${article.body.slice(0, 200)}...`
    : ''

</script>

<div class="article">
  <div class="article_body">
    <a href={`/articles/${article.id}`} use:link>
      <div class="article_body_title">{article.title}</div>
    </a>
    <p class="text-grey-darker">
      {description}
    </p>
  </div>
</div>

<style>
  .article {
    width: 100%;
    display: flex;
    flex-direction: row;
    height: 16rem;
    margin-top: 3rem;
    padding: 1rem;
    border-width: 2px;
    --tw-border-opacity: 1;
    border-color: rgba(249, 250, 251, var(--tw-border-opacity));
  }
  .article_body {
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
    text-align: left;
    width: 100%;
  }

  .article_body_title {
    font-size: 1.25rem;
    line-height: 1.75rem;
    font-weight: 700;
  }
</style>