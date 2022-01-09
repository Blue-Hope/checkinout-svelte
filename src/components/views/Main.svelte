<script lang="ts">
  import Layout from "../templates/Layout.svelte";
  import Search from "../organisms/Search.svelte";
  import Result from "../organisms/Result.svelte";
  import Login from "../organisms/Login.svelte";
  import { getCookie } from "../../utils/cookie";

  const authenticated = getCookie("_u");
</script>

<wrapper>
  <Layout />
  {#if authenticated}
    <Search />
    <Result />
  {:else}
    <Login />
  {/if}
</wrapper>

<style>
  wrapper {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    align-content: flex-start;
  }
</style>
