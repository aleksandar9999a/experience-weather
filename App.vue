<template>
  <nb-container v-if="isLoaded">
    <image-background :source="image" class="image-container">
      <nb-container class="custom-container">
        <view class="text-container" v-if="weather">
          <text class="location" v-if="weather.sys">{{ weather.name }}, {{ weather.sys.country }}</text>
          <text class="temp" v-if="weather.main">{{Math.floor(weather.main.temp)}}°C</text>
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
import {
  searchInfoByLocation,
  searchInfoByCurrLocation
} from "./services/weather.service";
Vue.use(VueNativeBase);

export default {
  name: "App",
  data: function() {
    return {
      isLoaded: false,
      image: summer,
      searchContent: "",
      weather: {
        message: "Try to search your city!"
      }
    };
  },
  methods: {
    async handleSubmit() {
      this.weather = await searchInfoByLocation(this.searchContent);
    }
  },
  created: function() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async pos => {
        const latitude = pos.coords.latitude;
        const longitude = pos.coords.longitude;
        
        this.weather = await searchInfoByCurrLocation(latitude, longitude);
      });
    } else {
      this.weather.message = "Access to GPS is denied!";
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