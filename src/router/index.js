import { createRouter, createWebHistory } from "vue-router";
import MainLayout from "@/layouts/MainLayout.vue";
import Destination from "@/views/Destination.vue";
import Crew from "@/views/Crew.vue";
import Technology from "@/views/Technology.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: MainLayout,
    },
    {
      path: "/destination",
      name: "destination",
      component: Destination,
    },
    {
      path: "/crew",
      name: "crew",
      component: Crew,
    },
    {
      path: "/technology",
      name: "technology",
      component: Technology,
    },
  ],
});

router.beforeEach((to, from, next) => {
  document.body.className = ""; // Clear previous classes
  document.body.classList.add(
    "bg-cover",
    "bg-no-repeat",
    "bg-center",
    "bg-fixed",
    "g-cover"
  );
  if (to.name === "home") {
    // document.body.classList.add("destination-body");
    // console.log("we are in home ")
    if (
      document.body.classList.contains("bg-destination") ||
      document.body.classList.contains("bg-crew") ||
      document.body.classList.contains("bg-technology")
      // document.body.classList.contains("bg-destination")
    ) {
      document.body.classList.remove("bg-destination") ||
        document.body.classList.remove("bg-crew") ||
        document.body.classList.remove("bg-technology");
      document.body.classList.add("md:bg-home", "bg-homeResponsive");
    } else {
      document.body.classList.add("md:bg-home", "bg-homeResponsive");
    }
  } else if (to.name === "destination") {
    document.body.classList.add("bg-destination");
  } else if (to.name === "crew") {
    document.body.classList.add("bg-crew");
  } else if (to.name === "technology") {
    document.body.classList.add("bg-technology");
  }
  next(); // Continue navigation
});

router.beforeEach((to, from, next) => {
  // Clear previous classes
  // document.body.className = "";
  document.body.classList.remove("min-h-screen");
  document.body.classList.add("overflow-hidden");
  const appDiv = document.getElementById("app");

  if (appDiv) {
    // Clear classes from #app and its descendants
    appDiv.className = "";
    const firstChild = appDiv.firstElementChild;
    if (firstChild) {
      firstChild.className = "";
      const grandChild = firstChild.firstElementChild;
      if (grandChild) {
        grandChild.className = "";
      }
    }
  }

  // Check if the current route is technology.vue
  if (to.name === "technology") {
    // Add classes to body
    document.body.classList.add("h-screen", "lg:h-auto");
    // Add classes to #app and its descendants
    if (appDiv) {
      appDiv.classList.add("h-screen", "lg:h-auto");
      const firstChild = appDiv.firstElementChild;
      if (firstChild) {
        firstChild.classList.add("h-screen", "lg:h-auto");
        const grandChild = firstChild.firstElementChild;
        if (grandChild) {
          grandChild.classList.add("h-screen", "lg:h-auto");
        }
      }
    }
  }

  next(); // Proceed with navigation
});

export default router;
// Add or remove body classes based on the route
