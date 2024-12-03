<script setup>
import { onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import HeaderComponent from "@/components/HeaderComponent.vue";

const route = useRoute();
// onMounted(() => {
//   console.log(route.path);
// });
// document.body.classList.add(
//   "bg-cover",
//   "bg-no-repeat",
//   "bg-center",
//   "bg-fixed",
//   "g-cover"
// );
// watch(
//   () => route.path, // Use `route.path` instead of `route.name`
//   (path) => {
//     // Clear previous background classes
//     document.body.className = "";

//     // Add background image based on the current path
//     if (path === "/") {
//       document.body.classList.add(
//         "bg-home",
//         "bg-cover",
//         "bg-no-repeat",
//         "bg-center",
//         "bg-fixed",
//         "g-cover"
//       ); // For root path
//     } else if (path === "/destination") {
//       document.body.classList.add(
//         "bg-destination",
//         "bg-cover",
//         "bg-no-repeat",
//         "bg-center",
//         "bg-fixed",
//         "g-cover"
//       ); // For about page
//     } else if (path === "/crew") {
//       document.body.classList.add(
//         "bg-crew",
//         "bg-cover",
//         "bg-no-repeat",
//         "bg-center",
//         "bg-fixed",
//         "g-cover"
//       ); // For contact page
//     } else if (path === "/technology") {
//       document.body.classList.add(
//         "bg-technology",
//         "bg-cover",
//         "bg-no-repeat",
//         "bg-center",
//         "bg-fixed",
//         "g-cover"
//       ); // For contact page
//     }
//     // Add more conditions for other routes if needed
//   },
//   { immediate: true } // Run immediately when the component is mounted
// );
// watch(
//   () => route.path,
//   (newPath, oldPath) => {
//     console.log(`Route changed from ${oldPath} to ${newPath}`);
//     if (newPath === "/destination") {
//       // Perform your action here
//       console.log("Navigated to /destination");
//     }
//   }
// );
</script>
<template>
  <header>
    <HeaderComponent />
  </header>
  <section class="sec w-full h-full flex flex-col">
    <div
      class="content flex flex-col gap-12 lg:gap-0 lg:flex-row items-center justify-between sm:pt-[10%] lg:mt-[8.5%] lg:px-28"
    >
      <div
        class="text flex flex-col gap-6 items-center text-center md:text-left text-white max-w-[90%] sm:max-w-[75%] lg:max-w-[50%]"
      >
        <h1
          class="text-preset-8 sm:text-preset-6 md:text-preset-5 inline text-designBlue300"
        >
          SO, YOU WANT TO TRAVEL TO
        </h1>
        <h2
          class="text-preset-2 sm:text-preset-1 flex items-center max-h-[165px]"
        >
          SPACE
        </h2>
        <P
          class="text-preset-9 inline text-designBlue300 sm:w-[600px] md:w-auto text-center md:text-left"
          >Let’s face it; if you want to go to space, you might as well
          genuinely go to outer space and not hover kind of on the edge of it.
          Well sit back, and relax because we’ll give you a truly out of this
          world experience!</P
        >
      </div>
      <router-link
        to="/destination"
        class="text-black w-[144px] h-[144px] sm:w-[272px] sm:h-[272px] bg-white justify-center items-center flex rounded-full text-preset-4 outline outline-[#ffffff1a] outline-[60px] outline-offset-[-60px] hover:outline-offset-0 uppercase duration-500 !text-base"
      >
        Explore
      </router-link>
    </div>
  </section>
</template>

<style scoped></style>
