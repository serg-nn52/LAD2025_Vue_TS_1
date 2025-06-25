import { computed, onBeforeUnmount, ref } from 'vue';

export const useMedia = () => {
  const screenWidth = ref(0);

  const changeSizeWindow = () => {
    screenWidth.value = window.innerWidth;
  };

  changeSizeWindow();

  window.addEventListener('resize', changeSizeWindow);

  onBeforeUnmount(() => {
    window.removeEventListener('resize', changeSizeWindow);
  });

  const device = computed(() => {
    if (screenWidth.value > 1200) {
      return 'desktop';
    } else if (screenWidth.value > 768) {
      return 'tablet';
    } else {
      return 'mobile';
    }
  });

  return {
    device,
  };
};
