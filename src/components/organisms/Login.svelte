<script lang="ts">
  import * as firebaseauth from "firebase/auth";
  import * as firebaseui from "firebaseui";

  const ui = new firebaseui.auth.AuthUI(firebaseauth.getAuth());

  const signInCallback = function (authResult, _) {
    document.cookie = `_u=${encodeURIComponent(
      authResult.credential.accessToken
    )}; path=/; max-age=86400`;
    window.location.reload();
    return false;
  };

  ui.start("#firebaseui-auth-container", {
    signInOptions: [firebaseauth.GoogleAuthProvider.PROVIDER_ID],
    callbacks: {
      signInSuccessWithAuthResult: signInCallback,
    },
  });
</script>

<wrapper><div id="firebaseui-auth-container" /></wrapper>

<style>
  wrapper {
    display: flex;
    width: 100%;
    height: 400px;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
  }
</style>
