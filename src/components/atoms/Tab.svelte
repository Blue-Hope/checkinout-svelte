<script lang="ts">
  import { selectedTab } from "../../stores/tab";

  export let tabName;

  function handleClick() {
    selectedTab.set(tabName);
  }
</script>

{#if $selectedTab === tabName}
  <wrapper class="selected">
    {tabName}
  </wrapper>
{:else}
  <wrapper on:click={handleClick}>
    {tabName}
  </wrapper>
{/if}

<style>
  wrapper {
    display: flex;
    width: 120px;
    height: 60px;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    border-right: 1px solid rgba(255, 255, 255, 0.87);
  }
  .selected {
    background: rgba(255, 255, 255, 0.87);
    color: #121212;
  }
</style>
