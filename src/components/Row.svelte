<script lang="ts">
  export let dt: string
</script>

<div>
  <dt>
    {dt}
  </dt>
  <dd>
    <slot />
  </dd>
</div>