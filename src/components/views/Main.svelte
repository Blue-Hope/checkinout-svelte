<script lang="ts">
  import Layout from "../templates/Layout.svelte";
  import Search from "../organisms/Search.svelte";
</script>

<wrapper>
  <Layout />
  <Search />
</wrapper>

<style>
  wrapper {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    align-content: flex-start;
  }
</style>
