<script lang="ts">
  import { selectedStudent } from "../../stores/student";
  import { selectedTab } from "../../stores/tab";
  import AlimTabContent from "../molecules/AlimTabContent.svelte";
  import Tabbar from "../molecules/Tabbar.svelte";
</script>

<wrapper>
  {#if $selectedStudent}
    <Tabbar />
    {#if $selectedTab === "알림"}
      <AlimTabContent />
    {/if}
  {/if}
</wrapper>

<style>
  wrapper {
    display: flex;
    width: 70%;
    flex-wrap: wrap;
    align-content: flex-start;
    height: calc(100vh - 190px);
    border: 1px solid rgba(255, 255, 255, 0.87);
    overflow: scroll;
    border-radius: 5px;
  }
</style>
