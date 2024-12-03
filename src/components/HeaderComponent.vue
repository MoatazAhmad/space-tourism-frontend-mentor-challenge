<script setup>
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";

const route = useRoute();
const currentPath = route.path;
const ifHerf = `http://localhost:5173${currentPath}`;
let routerLinks = ref([]);
onMounted(() => {
  // Loop through all the router links after the component has mounted
  routerLinks.value = Array.from(document.querySelectorAll("a:not(.no)"));
  routerLinks.value.forEach((link) => {
    // console.log(link.href)
    // console.log(routerLinks.value)
    if (link.href === ifHerf) {
      link.classList.add("border-r-4", "sm:border-b-4", "sm:border-r-0");
      link.classList.remove(
        "border-r-transparent",
        "sm:border-b-transparent",
        "sm:hover:border-b-[#ffffff80]"
      );
      //add this to the correct <a> border-b-4
      //add this to the not correct <a> border-b-transparent hover:border-b-[#ffffff80]
    } else {
      // Remove the special class from links that don't match the current path
      link.classList.add(
        "border-r-4",
        "border-r-transparent",
        "sm:border-r-0",
        "sm:border-b-4",
        "sm:border-b-transparent",
        "sm:hover:border-b-[#ffffff80]"
      );
    }
  });
});
const showNav = () => {
  document.querySelector(".links").classList.remove("invisible");
  document.querySelector(".links").classList.add("visible", "right-0");
  document.querySelector(".header-content").classList.remove("overflow-hidden");
};
const hideNav = () => {
  document.querySelector(".links").classList.add("invisible");
  document.querySelector(".links").classList.remove("visible", "right-0");
  document.querySelector(".header-content").classList.add("overflow-hidden");
};
</script>

<template>
  <div
    class="header-content bg-transparent relative overflow-hidden text-white flex items-center justify-between lg:mt-12 h-24 sm:pl-6"
  >
    <div
      class="logo lg:w-1/2 pl-6 sm:pl-10 lg:pl-16 flex items-center justify-between relative"
    >
      <router-link class="no" to="/">
        <img
          class="w-12 h-12"
          src="../assets/imgs/Subtract.png"
          alt="compony logo"
        />
      </router-link>
      <hr class="absolute w-[70%] ml-28 opacity-25 hidden lg:block" />
    </div>
    <button
      class="navButton w-[24px] h-[21px] bg-transparent flex flex-col justify-center items-center gap-1 md:hidden mr-6"
      @click="showNav()"
    >
      <div class="w-full h-1 bg-white"></div>
      <div class="w-full h-1 bg-white"></div>
      <div class="w-full h-1 bg-white"></div>
    </button>
    <nav
      class="links bg-[#ffffff0d] invisible md:visible flex w-3/4 md:w-3/4 lg:w-1/2 backdrop-blur-[100px] min-h-screen absolute top-0 -right-full md:-right-0 sm:flex sm:items-center items-start flex-col sm:flex-row gap-12 sm:gap-0 duration-500 md:relative"
    >
      <div
        @click="hideNav()"
        class="sm:hidden flex w-full justify-end pt-8 pr-6"
      >
        <img class="w-[19px] h-[19pxs]" src="../assets/imgs/X.png" alt="" />
      </div>
      <ul
        class="flex items-center flex-1 sm:flex-none md:justify-center gap-8 sm:gap-[1%] sm:pr-10 h-full flex-col sm:flex-row w-full pl-8 sm:pl-0"
      >
        <!--  , justifycontent-center  -->
        <li
          class="flex justify-start sm:justify-center items-center uppercase pr-4 text-preset-8 sm:min-h-full w-full sm:w-auto"
        >
          <router-link
            class="duration-500 ease-in-out sm:h-[96px] flex w-full sm:w-auto justify-start sm:justify-center items-center"
            to="/"
            >00 home</router-link
          >
        </li>
        <li
          class="flex justify-start sm:justify-center items-center uppercase pr-4 text-preset-8 w-full sm:w-auto"
        >
          <router-link
            class="duration-500 ease-in-out sm:h-[96px] flex w-full sm:w-auto justify-start sm:justify-center items-center"
            to="/destination"
            >01 destination</router-link
          >
        </li>
        <li
          class="flex justify-start sm:justify-center items-center uppercase pr-4 text-preset-8 w-full sm:w-auto"
        >
          <router-link
            class="duration-500 ease-in-out sm:h-[96px] flex w-full sm:w-auto justify-start sm:justify-center items-center"
            to="/crew"
            >02 crew</router-link
          >
        </li>
        <li
          class="flex justify-start sm:justify-center items-center uppercase text-preset-8 w-full sm:w-auto"
        >
          <router-link
            class="duration-500 ease-in-out sm:h-[96px] flex w-full sm:w-auto justify-start sm:justify-center items-center"
            to="/technology"
            >03 technology</router-link
          >
        </li>
      </ul>
    </nav>
  </div>
  <!-- <nav class="links w-1/2 px-16 backdrop-blur-[1px]"> -->
</template>

<style scoped>
/*catching router links with  special attributes from the paths in giving them the special hover effect 
,then choose the path of current page if it equal to the path of one of the router links then give it special effects and 
remove the special effects from other router links and give the router links hover effects , and */
/*
1- 
 */
</style>
