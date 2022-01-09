<script lang="ts">
  import Tab from "../atoms/Tab.svelte";
</script>

<wrapper>
  <Tab tabName="알림" />
  <Tab tabName="히스토리" />
  <Tab tabName="정보" />
</wrapper>

<style>
  wrapper {
    display: flex;
    width: 100%;
    height: 60px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.87);
  }
</style>
