<script lang="ts">
  import { selectedStudent } from "../../stores/student";
  import { convertName } from "../../utils/convert";
</script>

<wrapper>
  <content>
    <button>
      <img src="icons/enter.png" alt="enter" />
      입실 알림
    </button>
    <between>
      <bridge />
    </between>
    <example>{`${convertName($selectedStudent.name)} 입실했습니다.`}</example>
    <between>
      <bridge />
    </between>
    <send>전송</send>
  </content>
  <content>
    <button>
      <img src="icons/exit.png" alt="exit" />
      퇴실(귀가) 알림
    </button>
    <between>
      <bridge />
    </between>
    <example
      >{`${convertName($selectedStudent.name)} 집으로 출발했습니다.`}</example
    >
    <between>
      <bridge />
    </between>
    <send>전송</send>
  </content>
  <content>
    <button>
      <img src="icons/eat.png" alt="eat" />
      퇴실(식사) 알림
    </button>
    <between>
      <bridge />
    </between>
    <example
      >{`${convertName($selectedStudent.name)} 식사하러 갔습니다.`}</example
    >
    <between>
      <bridge />
    </between>
    <send>전송</send>
  </content>
  <content>
    <button>
      <img src="icons/edu.png" alt="edu" />
      퇴실(학원) 알림
    </button>
    <between>
      <bridge />
    </between>
    <example>{`${convertName($selectedStudent.name)} 학원 갔습니다.`}</example>
    <between>
      <bridge />
    </between>
    <send>전송</send>
  </content>
</wrapper>

<style>
  wrapper {
    display: flex;
    width: 100%;
    padding: 20px;
    flex-wrap: wrap;
  }

  content {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  example {
    display: flex;
    background: rgba(255, 255, 255, 0.87);
    width: 50%;
    height: 60px;
    font-size: 18px;
    font-weight: bold;
    border-radius: 5px;
    color: #333;
    align-items: center;
    justify-content: center;
  }

  button {
    display: flex;
    background: rgba(255, 255, 255, 0.87);
    width: 30%;
    height: 60px;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: bold;
    border-radius: 5px;
    border: none;
  }

  send {
    display: flex;
    background: rgba(255, 255, 255, 0.87);
    width: 20%;
    height: 60px;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: bold;
    border-radius: 5px;
    border: none;
    color: #333;
  }

  img {
    width: 50px;
    margin-right: 3px;
  }

  between {
    display: flex;
    flex-wrap: wrap;
    width: 10px;
    height: 60px;
    align-content: space-around;
  }

  bridge {
    width: 10px;
    height: 6px;
    background: rgba(255, 255, 255, 0.87);
  }
</style>
