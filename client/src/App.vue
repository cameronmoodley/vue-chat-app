<template>
  <div class="container">
    <router-view />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,500;0,700;0,900;1,400;1,500;1,600&display=swap");

html {
  width: 100%;
}
body {
  background: rgb(54, 209, 220);
  background: radial-gradient(
    circle,
    rgba(54, 209, 220, 1) 23%,
    rgba(91, 134, 229, 1) 100%
  );
  display: flex;
  justify-content: center;
  align-items: center;
  height: 98vh;
  font-family: "Open Sans", sans-serif;
}

.container {
  width: 600px;
  background: rgba(255, 255, 255, 0.35);
  box-shadow: 0 8px 32px 0 rgba(9, 20, 187, 0.37);
  backdrop-filter: blur(10.5px);
  -webkit-backdrop-filter: blur(10.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
}

/* Works on Firefox */
* {
  scrollbar-width: thin;
  scrollbar-color: gray rgba(255, 255, 255, 0.6);
}

/* Works on Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 12px;
}

*::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.6);
}

*::-webkit-scrollbar-thumb {
  background-color: gray;
  border-radius: 20px;
  border: 3px solid rgba(255, 255, 255, 0.6);
}
</style>
