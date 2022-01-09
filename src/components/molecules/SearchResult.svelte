<script lang="ts">
  import { getStudents, Student } from "../../apis/student";
  import { filter } from "../../stores/filter";
  import { selectedStudent } from "../../stores/student";
  import { selectedTab } from "../../stores/tab";

  let students: Student[] = [];

  async function fetch() {
    const res = await getStudents();
    students = await res.json();
  }

  function handleClick(student: Student) {
    if ($selectedStudent === student) {
      selectedStudent.set(null);
      selectedTab.set("알림");
    } else {
      selectedStudent.set(student);
      selectedTab.set("알림");
    }
  }

  fetch();
</script>

<wrapper>
  {#each students.filter( (student) => student.name.includes($filter) ) as student}
    {#if student === $selectedStudent}
      <name on:click={() => handleClick(student)} class="selected"
        >{student.name}</name
      >
    {:else}
      <name on:click={() => handleClick(student)}>{student.name}</name>
    {/if}
  {/each}
</wrapper>

<style>
  wrapper {
    display: flex;
    width: 30%;
    margin-right: 12px;
    flex-wrap: wrap;
    align-content: flex-start;
    height: calc(100vh - 190px);
    border: 1px solid rgba(255, 255, 255, 0.87);
    overflow: scroll;
    border-radius: 5px;
  }
  name {
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.87);
    width: 100%;
    font-size: 24px;
    font-weight: bold;
    padding-top: 15px;
    padding-bottom: 15px;
  }
  .selected {
    background: rgba(255, 255, 255, 0.87);
    color: #121212;
  }
</style>
