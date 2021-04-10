<script lang="ts">
  import Row from './Row.svelte'
  import type { ArticleItem } from "../repositories/article";
  export let article: ArticleItem

  $: description = article.rendered_body
    ? `${article.body.slice(0, 200)}...`
    : ''
  
  $: src = article.url
    ? article.url
    : 'http://placehold.jp/eeeeee/cccccc/160x120.png?text=No%20Image'

  $: tags = article.tags
    ? article.tags.map(article => article.name)
    : ''

</script>

<div>
  <div>
    <h3>
      {article.title}
    </h3>
    <div class="ArticleInfo">
      <dl>
        <Row dt="著者">
          {article.user.name}
        </Row>
        <Row dt="概要">
          {description}
        </Row>
        <Row dt="LGTM数">
          {article.likes_count}
        </Row>  
        <Row dt="更新日">
          {article.updated_at}
        </Row>
        <Row dt="タグ">
          {tags}
        </Row>  
        <Row dt="リンク">
          {src}
        </Row>
      </dl>
    </div>
  </div>
</div>

<style>
  .ArticleInfo {
    border-top-width: 1px;
    --tw-border-opacity: 1;
    border-color: rgba(229, 231, 235, var(--tw-border-opacity));
  }
</style>