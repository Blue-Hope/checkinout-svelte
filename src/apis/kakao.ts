const apiUrl = "https://apimsg-dev.wideshot.co.kr/";

interface SendRequest {
  messageType: "AT";
  senderKey: string;
  receiverTelNo: string;
  templateCode: string;
  contents: string;
}

export async function sendKakao(request: SendRequest) {
  const data = await fetch(apiUrl + "api/v3/message/alimtalk");
  console.log(data);
}
