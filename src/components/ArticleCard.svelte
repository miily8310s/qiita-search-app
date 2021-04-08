<script lang="ts">
  import type { ArticleItem } from '../repositories/article'
  export let article: ArticleItem

  $: src = article.user.profile_image_url 
    ? article.user.profile_image_url
    : 'http://placehold.jp/eeeeee/cccccc/160x120.png?text=No%20Image'
  
  $: description = article.rendered_body
    ? `${article.body.slice(0, 100)}...`
    : ''

</script>

<div class="article">
  <div class="article_image" style={`background-image: url('${src}')`}>
  </div>
  <div class="article_body">
    <div class="my-4">
      <div class="text-black font-bold text-xl mb-2">{article.title}</div>
      <p class="text-grey-darker text-sm break-words w-9/12 m-auto">
        {description}
      </p>
    </div>
  </div>
</div>

<style>
  .article {
    width: 100%;
    display: flex;
    flex-direction: row;
  }
  .article_image {
    flex: none;
    height: 24rem;
    background-size: cover;
    overflow: hidden;
  }
  .article_body {
    display: flex;
    flex-direction: column;
  }
</style>