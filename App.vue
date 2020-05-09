<template>
  <nb-container v-if="isLoaded">
    <image-background :source="image" class="image-container">
      <w-search />
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
import wSearch from "./components/Search/Search";

Vue.use(VueNativeBase);

export default {
  name: "App",
  components: { wSearch },
  data: function() {
    return {
      isLoaded: false,
      image: summer
    };
  },
  mounted: async function() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.isLoaded = true;
  }
};
</script>

<style>
.image-container {
  flex: 1;
}
</style>