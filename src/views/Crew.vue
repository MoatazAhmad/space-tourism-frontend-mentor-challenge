<template>
  <div>
    <header>
      <HeaderComponent />
    </header>
    <section
      class="text-white px-6 lg:px-40 lg:min-h-[700px] duration-500 ease-in-out"
    >
      <h1
        class="uppercase w-full text-center sm:text-left text-preset-6-mobile md:text-preset-5-tablet pb-6 sm:pt-6 lg:text-preset-5"
      >
        <!-- class="uppercase w-full text-center sm:text-left text-preset-6-mobile !text-base pb-6 sm:pt-6 lg:text-preset-5 lg:!text-fs-28" -->
        <p class="text-[#ffffff99] inline pr-5">02</p>
        MEET YOUR CREW
      </h1>
      <div
        class="flex flex-col lg:flex-row lg:h-[734px] gap-8 pt-10 lg:pt-0 items-center"
      >
        <div
          class="flex flex-col gap-6 lg:gap-10 h-[319px] justify-between sm:justify-center text-center sm:max-w-[512px] lg:min-h-[50%] lg:it"
        >
          <div>
            <h1
              class="text-[#ffffff99] text-center lg:text-left uppercase text-preset-4-mobile md:text-preset-4-tablet lg:text-preset-4"
            >
              <!-- class="text-[#ffffff99] text-center lg:text-left uppercase text-preset-4 !text-lg sm:!text-2xl lg:!text-[32px]" -->
              {{ crewJop }}
            </h1>
            <h2
              class="text-center lg:text-left text-preset-3-mobile md:text-preset-3-tablet lg:text-preset-3 uppercase pt-2"
            >
              {{ crewName }}
              <!-- class="text-center lg:text-left text-preset-3 lg:text-preset-3 sm:text-[40px] uppercase pt-2" -->
            </h2>
            <p
              class="text-preset-9-mobile md:text-preset-9-tablet lg:text-preset-9 text-center lg:text-left text-designBlue300 pt-6"
            >
              <!-- class="text-preset-9 !text-base lg:!text-lg text-center lg:text-left text-designBlue300 pt-6" -->
              {{ crewDesc }}
            </p>
          </div>
          <div
            class="pagination flex justify-center items-center gap-4 lg:justify-start lg:pb-12"
          >
            <button
              class="w-[10px] h-[10px] lg:w-[15px] lg:h-[15px] rounded-full bg-white"
              data-value="0"
              @click="handleCrewClick"
            ></button>
            <button
              class="w-[10px] h-[10px] lg:w-[15px] lg:h-[15px] rounded-full bg-[#ffffff99]"
              data-value="1"
              @click="handleCrewClick"
            ></button>
            <button
              class="w-[10px] h-[10px] lg:w-[15px] lg:h-[15px] rounded-full bg-[#ffffff99]"
              data-value="2"
              @click="handleCrewClick"
            ></button>
            <button
              class="w-[10px] h-[10px] lg:w-[15px] lg:h-[15px] rounded-full bg-[#ffffff99]"
              data-value="3"
              @click="handleCrewClick"
            ></button>
          </div>
        </div>
        <div
          class="img-container w-full flex justify-center h-[340px] sm:h[560px] lg:min-h-full"
        >
          <img
            class="w-[271px] h-[340px] sm:h[560px] lg:w-[723px] lg:h-[501px]"
            :src="imgSrcs[crewObjNum]"
            alt=""
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import HeaderComponent from "@/components/HeaderComponent.vue";
import { inject, ref, computed } from "vue";
import crewA from "@/assets/imgs/Crew Image - A.png";
import crewB from "@/assets/imgs/Crew Image - B.png";
import crewC from "@/assets/imgs/Crew Image - C.png";
import crewD from "@/assets/imgs/crew-d.png";

const imgSrcs = [crewA, crewB, crewC, crewD];

const crewData = inject("crewData");

const crewObjNum = ref(0);

const crewJop = computed(() => crewData[crewObjNum.value]?.jop);
const crewName = computed(() => crewData[crewObjNum.value]?.name);
const crewDesc = computed(() => crewData[crewObjNum.value]?.desc);

const handleCrewClick = (event) => {
  const clickedBtn = event.target;
  const allButtons = document.querySelectorAll("button");
  allButtons.forEach((btn) =>
    btn.classList.add("bg-[#ffffff99]", btn.classList.remove("bg-white"))
  );

  clickedBtn.classList.remove("bg-[#ffffff99]");
  clickedBtn.classList.add("bg-white");

  crewObjNum.value = parseInt(clickedBtn.dataset.value);
};
</script>

<style scoped></style>
