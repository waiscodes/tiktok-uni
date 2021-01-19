<template>
  <div class="home">
    <VideoJSRecord />
    <Upload />
  </div>
</template>

<script>
// @ is an alias to /src
import Upload from "../components/Upload";
import VideoJSRecord from "../components/VideoJSRecord.vue";

export default {
  name: "Home",
  components: {
    Upload,
    VideoJSRecord,
  },
};
</script>

<style>
#myVideo {
  background-color: #95ddf5;
  margin: auto;
}
</style>
