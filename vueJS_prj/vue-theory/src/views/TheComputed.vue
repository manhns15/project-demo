<template>
  <div class="">
    <p>full name: {{ fullName }}</p>
    <p>reverse: {{ reverseMessage }}</p>
  </div>
</template>
<script>
export default {
  name: "TheComputed",
  data() {
    return {
      firsName: "Manh",
      lastName: "NguyenSy",
      message: "this is text",
    };
  },
  computed: {
    fullName: {
      get() {
        return this.firsName + this.lastName;
      },
      set(newValue) {
        [this.firsName, this.lastName] = newValue.split(" ");
      },
    },
    reverseMessage() {
      return this.firsName.split("").reverse().join("");
    },
  },
};
</script>