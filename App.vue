<template>
  <nb-container v-if="isLoaded">
    <image-background :source="image" class="image-container">
      <nb-container class="custom-container">
        <nb-item class="custom-item">
          <nb-icon active name="search" />
          <nb-input placeholder="Search" v-model="searchContent" class="custom-input" />
        </nb-item>
        <nb-button :onPress="handleSubmit" rounded class="custom-btn">
          <nb-text>Search</nb-text>
        </nb-button>
      </nb-container>
    </image-background>
  </nb-container>
</template>

<script>
import Vue from "vue-native-core";
import { VueNativeBase } from "native-base";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import summer from "./assets/summer.jpg";
import winter from "./assets/winter.jpg";

Vue.use(VueNativeBase);

export default {
  name: "App",
  data: function() {
    return {
      isLoaded: false,
      searchContent: "",
      content: "",
      image: summer
    };
  },
  mounted: async function() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.isLoaded = true;
  },
  methods: {
    handleSubmit() {
      if (this.image === winter) {
        this.image = summer;
      } else {
        this.image = winter;
      }
    }
  }
};
</script>

<style>
.image-container {
  flex: 1;
}
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