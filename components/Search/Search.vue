<template>
  <nb-container class="custom-container">
    <nb-item class="custom-item">
      <nb-icon active name="search" />
      <nb-input placeholder="Search" v-model="searchContent" class="custom-input" />
    </nb-item>
    <nb-button :onPress="handleSubmit" rounded class="custom-btn">
      <nb-text>Search</nb-text>
    </nb-button>
  </nb-container>
</template>

<script>
export default {
  name: "wSearch",
  data: function() {
    return {
      searchContent: ""
    };
  },
  methods: {
    handleSubmit() {}
  }
};
</script>

<style>
.custom-container {
  background-color: transparent;
  width: 80%;
  margin: auto;
  left: 10%;
  justify-content: center;
}

.custom-btn {
  width: 50%;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
}
</style>