<template>
  <div>
    <header>
      <HeaderComponent />
    </header>
    <section
      class="text-white px-11 lg:px-40 lg:min-h-[700px] duration-500 ease-in-out"
    >
      <h1
        class="uppercase w-full text-center sm:text-left text-preset-6-mobile pb-6 sm:pt-6 md:text-preset-5-tablet lg:text-preset-5"
      >
        <p class="text-[#ffffff99] inline pr-5">01</p>
        pick your destination
      </h1>
      <div class="data flex flex-col lg:flex-row gap-8 lg:pt-20 pt-">
        <div class="img-container w-full flex justify-center sm:h-96">
          <img
            :src="imgSrcs[dataObjNum]"
            alt="planet image"
            class="w-[150px] h-[150px] sm:w-[300px] sm:h-[300px] lg:w-[480px] lg:h-[480px] lg:max-h-full"
          />
        </div>
        <div
          class="info flex justify-center items-center flex-col gap-6 lg:gap-10 lg:items-start lg:pl-20 lg:max-w-[530px]"
        >
          <ul class="flex justify-center items-center gap-8 h-10 max-w-full">
            <li>
              <button
                class="text-preset-8-mobile md:text-preset-8 duration-500 ease-in-out border-b-4 pb-4"
                data-value="0"
                @click="handleClick"
              >
                MOON
              </button>
            </li>
            <li>
              <button
                class="text-designBlue300 text-preset-8-mobile md:text-preset-8 duration-500 ease-in-out border-b-4 border-b-transparent hover:border-b-[#ffffff80] pb-4"
                data-value="1"
                @click="handleClick"
              >
                MARS
              </button>
            </li>
            <li>
              <button
                class="text-designBlue300 text-preset-8-mobile md:text-preset-8 duration-500 ease-in-out border-b-4 border-b-transparent hover:border-b-[#ffffff80] pb-4"
                data-value="2"
                @click="handleClick"
              >
                EUROPA
              </button>
            </li>
            <li>
              <button
                class="text-designBlue300 text-preset-8-mobile md:text-preset-8 duration-500 ease-in-out border-b-4 border-b-transparent hover:border-b-[#ffffff80] pb-4"
                data-value="3"
                @click="handleClick"
              >
                TITAN
              </button>
            </li>
          </ul>
          <div
            class="flex justify-normal items-center flex-col gap-4 lg:items-start"
          >
            <h2
              class="text-preset-2-mobile md:text-preset-2-tablet lg:text-preset-2 uppercase duration-500 ease-in-out"
            >
              {{ destName }}
            </h2>
            <p
              class="text-center text-preset-9-mobile md:text-preset-9-tablet lg:text-preset-9 text-designBlue300 lg:text-left"
            >
              {{ destDesc }}
            </p>
          </div>
          <hr class="h-1 w-full border-[#ffffff99] lg:w-[445px]" />
          <div
            class="statistics flex items-center justify-center flex-col sm:flex-row gap-4 w-full"
          >
            <div class="w-full text-center flex flex-col gap-4 lg:text-left">
              <p class="text-preset-7 !text-xs text-designBlue300">
                AVG. DISTANCE
              </p>
              <p class="text-preset-6 !text-3xl uppercase">
                {{ destDistance }}
              </p>
            </div>
            <div class="w-full text-center flex flex-col gap-4 lg:text-left">
              <p class="text-preset-7 !text-xs text-designBlue300">
                Est. travel time
              </p>
              <p class="text-preset-6 !text-3xl uppercase">
                {{ destTravelTime }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import HeaderComponent from "@/components/HeaderComponent.vue";
import { inject, ref, computed } from "vue";

// Import images
import MoonImage from "@/assets/imgs/Destination - A - Moon.png";
import MarsImage from "@/assets/imgs/Destination - B - Mars.png";
import TitanImage from "@/assets/imgs/Destination - D - Titan.png";
import EuropaImage from "@/assets/imgs/Destination - C - Europa.png";

const dataObjNum = ref(0);

const handleClick = (event) => {
  const allButtons = document.querySelectorAll("button");
  allButtons.forEach((btn) =>
    btn.classList.add("border-b-transparent", "hover:border-b-[#ffffff80]")
  );

  const clickedBtn = event.target;
  clickedBtn.classList.remove(
    "border-b-transparent",
    "hover:border-b-[#ffffff80]"
  );

  // Add the 'border-b-4' class to the clicked button

  // Set the dataObjNum value based on the clicked button
  dataObjNum.value = parseInt(clickedBtn.dataset.value);
};

const destinationData = inject("destinationsData");

const destName = computed(() => destinationData[dataObjNum.value]?.name);
const destDesc = computed(() => destinationData[dataObjNum.value]?.desc);
const destDistance = computed(
  () => destinationData[dataObjNum.value]?.distance
);
const destTravelTime = computed(
  () => destinationData[dataObjNum.value]?.travelTime
);

// Image sources
const imgSrcs = [MoonImage, MarsImage, TitanImage, EuropaImage];
</script>

<style scoped></style>
