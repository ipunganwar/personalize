<template>
  <div class="header">
    <img
      class="header--img"
      src="~/assets/img/ipunganwar.jpeg"
      alt="ipunganwar"
    />
    <ul class="header__nav">
      <li><a>About</a></li>
      <li><a>Articles</a></li>
    </ul>
  </div>
</template>
<style scoped>
.header {
  width: 50vh;
  height: 20vh;
  margin: 0 auto;
}
.header--img {
  margin-left: 50%;
  height: 80px;
  width: 80px;
  border-radius: 50%;
}
.header__nav {
  display: flex;
  flex-direction: row;
  height: 5vh;
  align-items: center;
  justify-content: space-evenly;
  margin-left: 20%;
}
</style>
