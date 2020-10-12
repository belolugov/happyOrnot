<template>
  <div>
    <h1>{{ $route.params.text }}</h1>
    <div class="container mt-5">
        <div class="row icons">
          <div class="col"><b-icon-emoji-smile @click="click" class="emojis bg-success"></b-icon-emoji-smile></div>
          <div class="col"><b-icon-emoji-neutral @click="click" class="emojis bg-warning"></b-icon-emoji-neutral></div>
          <div class="col"><b-icon-emoji-angry @click="click" class="emojis bg-danger"></b-icon-emoji-angry></div>
        </div>
    </div>

    <Confirmation v-if="reviewed==true"/>
  </div>
</template>

<script>
import Confirmation from './Confirmation.vue'
export default {
  name: "reviewPage",
  components: {
    Confirmation
  },
  props:['text'],
  data() {
    return {
      reviewed: false
    }
  },
  methods: {
    click() {
      this.reviewed = true
      setTimeout( () => {
          this.reviewed=false;
      }, 2000);
    },
  }
}
</script>

<style scoped>
/deep/ .m-body {
  text-align: center;
  font-size: x-large;
}
/deep/ .m-footer {
  display: none;
}
 .icons {
   font-size: 7rem;
 }
 .emojis {
   border-radius: 4rem;
 }
 .emojis:hover {
   color: darkblue;
   cursor: pointer;
 }
</style>