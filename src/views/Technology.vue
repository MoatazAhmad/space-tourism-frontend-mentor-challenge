<template>
  <div class="h-screen lg:h-auto overflow-hidden">
    <header>
      <HeaderComponent />
    </header>
    <section class="text-white">
      <h1
        class="uppercase w-full text-center sm:text-left text-preset-6-mobile sm:text-preset-5-tablet lg:text-preset-5 pb-6 sm:pt-6 sm:pl-10 lg:pl-[5%]"
      >
        <p class="text-[#ffffff99] inline pr-5">03</p>
        space launch 101
      </h1>
      <div
        class="flex items-center gap-8 flex-col lg:flex-row-reverse lg:pl-[5%] lg:pt-[5%]"
      >
        <div
          class="img-container max-h-[260px] sm:max-h-[421px] flex w-full md:w-auto lg:w-[608px]"
        >
          <img
            :src="imgSrcsTablet[dataObjNum]"
            class="h-[260px] sm:h-[421px] w-full"
            alt="space ship img"
          />
        </div>
        <div
          class="min-w-[327px] flex items-center gap-10 flex-col lg:flex-row"
        >
          <div
            class="pagination flex justify-center items-center gap-4 lg:justify-start lg:flex-col lg:pt-10"
          >
            <button
              class="w-[40px] h-[40px] sm:w-[56px] sm:h-[56px] lg:w-[80px] lg:h-[80px] rounded-full bg-white text-black text-preset-4-mobile sm:text-preset-4-tablet md:text-preset-4 lg:pl-0 border border-white/50"
              data-value="0"
              @click="handleVecClick"
            >
              1
            </button>
            <button
              class="w-[40px] h-[40px] sm:w-[56px] sm:h-[56px] lg:w-[80px] lg:h-[80px] rounded-full text-preset-4-mobile sm:text-preset-4-tablet md:text-preset-4 lg:pl-0 border border-white/50"
              data-value="1"
              @click="handleVecClick"
            >
              2
            </button>
            <button
              class="w-[40px] h-[40px] sm:w-[56px] sm:h-[56px] lg:w-[80px] lg:h-[80px] rounded-full text-preset-4-mobile sm:text-preset-4-tablet md:text-preset-4 lg:pl-0 border border-white/50"
              data-value="2"
              @click="handleVecClick"
            >
              3
            </button>
          </div>
          <div class="text-center lg:text-left">
            <h2
              class="text-preset-4-mobile sm:text-preset-4-tablet md:text-preset-4 text-[rgb(138,141,159)] pb-4"
            >
              THE TERMINOLOGY…
            </h2>
            <h3
              class="text-preset-3-mobile sm:text-preset-3-tablet md:text-preset-3 pb-4"
            >
              {{ vecName }}
            </h3>
            <p
              class="text-designBlue300 text-preset-9-mobile sm:text-preset-9-tablet md:text-preset-9 w-[327px] sm:w-[512px] lg:w-[491px] lg:h-[160px]"
            >
              {{ vecDesc }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import HeaderComponent from "@/components/HeaderComponent.vue";
import { inject, ref, computed } from "vue";
const techData = inject("technologyData");

const vecName = computed(() => techData[dataObjNum.value]?.name);
const vecDesc = computed(() => techData[dataObjNum.value]?.desc);

// Import images
import vecOneTablet from "@/assets/imgs/Technology Image - A-tablet.png";
import vecTwoTablet from "@/assets/imgs/Technology Image - B-tablet.png";
import vecThreeTablet from "@/assets/imgs/Technology Image - C-tablet.png";

import vecOne from "@/assets/imgs/Technology Image - A.png";
import vecTwo from "@/assets/imgs/Technology Image - B.png";
import vecThree from "@/assets/imgs/Technology Image - C.png";
// mobile = desktop , tablet is deffrent
const dataObjNum = ref(0);

const handleVecClick = (event) => {
  const allButtons = document.querySelectorAll("button");
  allButtons.forEach((btn) => btn.classList.remove("bg-white", "text-black"));

  const clickedBtn = event.target;
  clickedBtn.classList.add("bg-white", "text-black");

  dataObjNum.value = parseInt(clickedBtn.dataset.value);
};

const imgSrcsTablet = [vecOneTablet, vecTwoTablet, vecThreeTablet];
const imgSrcs = [vecOne, vecTwo, vecThree];
</script>

<style scoped></style>
