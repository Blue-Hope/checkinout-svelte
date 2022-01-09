<script lang="ts">
  import { filter } from "../../stores/filter";
</script>

<wrapper>
  <input type="text" placeholder="이름을 입력해주세요" bind:value={$filter} />
</wrapper>

<style>
  wrapper {
    display: flex;
    width: 100%;
    height: 60px;
  }
  input {
    width: 100%;
    background: #121212;
    font-size: 24px;
    font-weight: bold;
    color: rgba(255, 255, 255, 0.87);
    border-radius: 5px;
  }
</style>
