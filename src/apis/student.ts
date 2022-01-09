import { getCookie } from "../utils/cookie";

export interface Student {
  name: string;
  phone: string;
  parent: string;
  grade: string;
  school: string;
}

export async function getStudents() {
  const accessToken = getCookie("_u");
  return await fetch(
    `https://fakmanage-default-rtdb.asia-southeast1.firebasedatabase.app/students.json?access_token=${accessToken}`
  );
}
