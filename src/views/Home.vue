<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Upload />
  </div>
</template>

<script>
// @ is an alias to /src
import Upload from "../components/Upload";

export default {
  name: "Home",
  components: {
    Upload,
  },
};
</script>
