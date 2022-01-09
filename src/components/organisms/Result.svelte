<script lang="ts">
  import SearchResult from "../molecules/SearchResult.svelte";
  import SelectedStudent from "./SelectedStudent.svelte";
</script>

<wrapper>
  <SearchResult />
  <SelectedStudent />
</wrapper>

<style>
  wrapper {
    display: flex;
    width: 100%;
    padding: 20px;
    padding-top: 0px;
    justify-content: space-between;
  }
</style>
