import { ref, onMounted, watch } from 'vue';

export function useTheme() {
  const theme = ref('dark');

  const toggleTheme = () => {
    theme.value = theme.value === 'dark' ? 'light' : 'dark';
  };

  onMounted(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      theme.value = savedTheme;
    }
  });

  watch(theme, (newTheme) => {
    localStorage.setItem('theme', newTheme);
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, { immediate: true });

  return {
    theme,
    toggleTheme,
  };
}