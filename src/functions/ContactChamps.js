export default {
  setup() {
    const contactName = ref('John Doe');
    const contactEmail = ref('johndoe@example.com');

    return {
      contactName,
      contactEmail,
    };
  },
};
