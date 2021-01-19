<template>
  <div>
    <div>
      <p>Upload an image to Firebase:</p>
      <input type="file" @change="previewImage" accept="image/*" />
    </div>
    <div>
      <p>
        Progress: {{ uploadValue.toFixed() + "%" }}
        <progress id="progress" :value="uploadValue" max="100"></progress>
      </p>
    </div>
    <div v-if="imageData != null">
      <img class="preview" :src="picture" />
      <br />
      <button @click="onUpload">Upload</button>
    </div>
  </div>
</template>
