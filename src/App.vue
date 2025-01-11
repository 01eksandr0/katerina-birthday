<script setup>
import { onMounted } from "vue";
const aaaa = () => {
  const firstPage = {
    page: document.querySelector(".first-page"),
    pageSecond: document.querySelector(".second-page"),
    btn: document.querySelector(".first-page-btn"),
    opacityPage: () => {
      firstPage.page.classList.add("is-opacity");
      setTimeout(() => {
        firstPage.page.style.display = "none";
      }, 400);
      setTimeout(() => {
        firstPage.pageSecond.classList.toggle("is-opacity");
      }, 500);
    },
  };
  firstPage.btn.addEventListener("click", firstPage.opacityPage);
  // second page
  const secondPage = {
    pageSecond: document.querySelector(".second-page"),
    pageThree: document.querySelector(".four-page"),
    btn: document.querySelector(".second-page-btn"),
    opacityPage: () => {
      secondPage.pageSecond.classList.add("is-opacity");
      setTimeout(() => {
        secondPage.pageSecond.style.display = "none";
      }, 400);
      setTimeout(() => {
        secondPage.pageThree.classList.toggle("is-opacity");
      }, 500);
    },
  };
  secondPage.btn.addEventListener("click", secondPage.opacityPage);
};
onMounted(aaaa);
</script>

<template>
  <header>
    <div class="container">
      <!-- page first -->
      <div class="first-page">
        <p class="first-page-hello">Вітаю, Катеринко!</p>
        <p class="first-page-title">Як вже стукнуло 20 то тисни кнопку</p>
        <div class="first-page-container-btn">
          <button class="first-page-btn" type="button"><span>></span></button>
        </div>
      </div>
      <!-- page second -->
      <div class="second-page is-opacity">
        <p class="second-page-text">
          Вітаю з днем народження. Бажаю щоб всі наступні роки не летіли швидко
          і були наповнені тільки хорошими подіями і позитивом 🫶🏼 Ти прекрасна,
          я хочу щоб ти цього ніколи не забувала ❤️❤️❤️ люблю тебе ❤️❤️❤️
        </p>
        <div class="second-page-container-btn">
          <button class="second-page-btn" type="button">
            <span>></span>
          </button>
        </div>
      </div>

      <!-- page four -->
      <div class="four-page is-opacity">
        <div class="four-page-container-img">
          <img class="four-page-img" src="./img/katerina-birsday.jpg" alt="" />
        </div>

        <p class="four-page-text">
          Залишайся собою, але і не забувай зростати ❤️
        </p>
      </div>
    </div>
  </header>
</template>

<style>
/* basa */
* {
  box-sizing: border-box;
  padding: 0px;
  margin: 0px;
  width: 100%;
  height: 100vh;
}

body {
  border: 5px solid black;
}
header {
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(
    90deg,
    rgba(191, 12, 240, 0.2973783263305322) 0%,
    rgba(14, 207, 226, 1) 35%,
    rgba(200, 228, 32, 1) 100%
  );
}
.container {
  width: 99%;
  height: 99%;
  background-color: black;
  position: relative;
}
/* first page */
.first-page {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 125px;
  transition: all 600ms ease-in-out;
}
.first-page-hello {
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-box-decoration-break: clone;
  background-image: linear-gradient(
    90deg,
    rgba(200, 228, 32, 1) 0%,
    rgba(14, 207, 226, 1) 35%,
    rgba(221, 65, 167, 1) 100%
  );
  font-size: 40px;
  height: auto;
  width: auto;
}
.first-page-title {
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-box-decoration-break: clone;
  background-image: linear-gradient(
    90deg,
    rgba(213, 170, 27, 1) 0%,
    rgba(14, 226, 177, 1) 35%,
    rgba(221, 65, 210, 1) 100%
  );
  font-size: 28px;
  height: auto;
  width: 280px;
}
.first-page-container-btn {
  height: 80px;
  width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
    90deg,
    rgba(191, 12, 240, 0.2973783263305322) 0%,
    rgba(14, 207, 226, 1) 35%,
    rgba(200, 228, 32, 1) 100%
  );
}
.first-page-btn {
  width: 75px;
  height: 75px;
  display: block;
  border: none;
  background-color: black;
}
.first-page-btn > span {
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-box-decoration-break: clone;
  background-image: linear-gradient(
    90deg,
    rgba(200, 228, 32, 1) 0%,
    rgba(14, 207, 226, 1) 35%,
    rgba(221, 65, 167, 1) 100%
  );
  font-size: 50px;
}
/* second page */
.second-page {
  top: 50%;
  left: 50%;
  height: 100vh;
  transform: translate(-50%, -50%);
  gap: 120px;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 600ms ease-in-out;
  padding: 20px;
}
.second-page-text {
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-box-decoration-break: clone;
  background-image: linear-gradient(
    90deg,
    rgba(213, 170, 27, 1) 0%,
    rgba(14, 226, 177, 1) 35%,
    rgba(221, 65, 210, 1) 100%
  );
  font-size: 24px;
  height: auto;
  width: auto;
  margin-bottom: 25px;
}
.second-page-container-btn {
  height: 80px;
  width: 80px;
  display: flex;
  justify-content: center;
  flex-shrink: 0;
  align-items: center;
  background-image: linear-gradient(
    90deg,
    rgba(191, 12, 240, 0.2973783263305322) 0%,
    rgba(14, 207, 226, 1) 35%,
    rgba(200, 228, 32, 1) 100%
  );
}

.second-page-btn {
  width: 75px;
  height: 75px;
  display: block;
  border: none;
  background-color: black;
}

.second-page-btn > span {
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-box-decoration-break: clone;
  background-image: linear-gradient(
    90deg,
    rgba(200, 228, 32, 1) 0%,
    rgba(14, 207, 226, 1) 35%,
    rgba(221, 65, 167, 1) 100%
  );
  font-size: 50px;
}
/* three page */
.three-page {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  transition: all 600ms ease-in-out;
  padding: 50px 20px;
}

.three-page-text {
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-box-decoration-break: clone;
  background-image: linear-gradient(
    90deg,
    rgba(213, 170, 27, 1) 0%,
    rgba(14, 226, 177, 1) 35%,
    rgba(221, 65, 210, 1) 100%
  );
  font-size: 24px;
  height: auto;
  width: auto;
  line-height: 40px;
  margin-bottom: 60px;
}

.three-page-container-btn {
  height: 80px;
  width: 80px;
  display: flex;
  justify-content: center;
  flex-shrink: 0;
  align-items: center;
  background-image: linear-gradient(
    90deg,
    rgba(191, 12, 240, 0.2973783263305322) 0%,
    rgba(14, 207, 226, 1) 35%,
    rgba(200, 228, 32, 1) 100%
  );
}

.three-page-btn {
  width: 75px;
  height: 75px;
  display: block;
  border: none;
  background-color: black;
}

.three-page-btn > span {
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-box-decoration-break: clone;
  background-image: linear-gradient(
    90deg,
    rgba(200, 228, 32, 1) 0%,
    rgba(14, 207, 226, 1) 35%,
    rgba(221, 65, 167, 1) 100%
  );
  font-size: 50px;
}
/* four page */
.four-page {
  top: 50%;
  left: 50%;
  height: 100vh;
  gap: 10px;
  transform: translate(-50%, -50%);
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  padding: 20px;
  padding-top: 100px;
  transition: all 600ms ease-in-out;
}
.four-page-container-img {
  height: 360px;
  width: 280px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(
    90deg,
    rgba(213, 170, 27, 1) 0%,
    rgba(14, 226, 177, 1) 35%,
    rgba(221, 65, 210, 1) 100%
  );
  margin-bottom: 40px;
  margin-top: 20px;
}
.four-page-img {
  height: 99%;
  width: 99%;
}
.four-page-text {
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-box-decoration-break: clone;
  background-image: linear-gradient(
    90deg,
    rgba(213, 170, 27, 1) 0%,
    rgba(14, 226, 177, 1) 35%,
    rgba(221, 65, 210, 1) 100%
  );
  font-size: 30px;
  height: auto;
  width: auto;
  line-height: 40px;
}
/* active */
.is-opacity {
  opacity: 0;
  transform: scale(10%);
}
</style>
