import { watch } from "vue"; 
import { useRoute } from "vue-router";

export function useBodyBackground() {
  const route = useRoute();

  watch(
    () => route.name,
    (routeName) => {
      // Update the body background based on the current route
      document.body.className = ""; // Clear previous classes
      if (routeName === "About") {
        document.body.classList.add("bg-about");
      } else if (routeName === "Home") {
        document.body.classList.add("bg-home");
      }
    },
    { immediate: true } // Trigger immediately on load
  );
}
