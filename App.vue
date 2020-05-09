<template>
  <nb-container v-if="isLoaded">
    <image-background :source="image" class="image-container">
      <nb-container class="custom-container">
        <view class="text-container" v-if="weather">
          <text class="location" v-if="weather.sys">{{ weather.name }}, {{ weather.sys.country }}</text>
          <text class="temp" v-if="weather.main">{{weather.main.temp}}</text>
        </view>
        <view class="text-container" v-if="weather.message">
          <text class="temp">{{weather.message}}</text>
        </view>
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
import { searchInfoByLocation } from "./services/weather.service";
Vue.use(VueNativeBase);

export default {
  name: "App",
  data: function() {
    return {
      isLoaded: false,
      image: summer,
      searchContent: "",
      weather: {}
    };
  },
  methods: {
    async handleSubmit() {
      this.weather = await searchInfoByLocation(this.searchContent);
    }
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

.custom-container {
  background-color: transparent;
  width: 80%;
  margin: auto;
  left: 10%;
  justify-content: center;
}

.text-container {
    margin-top: 0%;
    margin-bottom: 50%;
  }

  .location {
    text-align: center;
    font-size: 20px;
  }

  .temp {
    text-align: center;
    font-size: 50px;
  }

  .custom-btn {
  width: 50%;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
}
</style>