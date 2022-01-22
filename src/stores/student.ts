import { writable } from "svelte/store";
import type { Student } from "../apis/student";

export const selectedStudent = writable<Student>(null);
