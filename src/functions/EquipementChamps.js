export default {
  setup() {
    const equipementName = ref('Sample Equipement');
    const quantity = ref(0);

    return {
      equipementName,
      quantity,
    };
  },
};
