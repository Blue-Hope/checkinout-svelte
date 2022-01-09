import App from "./App.svelte";
import { initializeFirebase } from "./configs/firebase";

const firebase = initializeFirebase();
const app = new App({
  target: document.body,
  props: {
    firebase,
  },
});

export default app;
