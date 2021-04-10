<script lang="ts">
  export let dt: string
</script>

<div class="Row">
  <dt>
    {dt}
  </dt>
  <dd>
    <slot />
  </dd>
</div>

<style>
  .Row {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
</style>