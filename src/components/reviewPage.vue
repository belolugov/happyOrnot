<template>
  <div>
    <router-link class="hidden-button btn-lg" to="/">Back to list</router-link>
    <h1>{{ $route.params.text }}</h1>
    <b-container class="mt-5">
        <b-row class="icons">
              <b-col class="col" v-for="icon in icons" :key="icon.icon">
                <b-icon
                    :icon="icon.icon"
                    :class="icon.class"
                    :disabled="reviewed"
                    @click="click"></b-icon>
              </b-col>
        </b-row>
    </b-container>
    <Confirmation v-if="reviewed"/>
  </div>
</template>

<script>
import Confirmation from './Confirmation.vue'
export default {
  name: "reviewPage",
  components: {
    Confirmation
  },
  data() {
    return {
      reviewed: false,
      icons: [
        {icon:'emoji-smile', class:'emojis bg-success'},
        {icon:'emoji-neutral', class:'emojis bg-warning'},
        {icon:'emoji-angry', class:'emojis bg-danger'}
      ]
    }
  },
  methods: {
    click() {
      this.reviewed = true
      setTimeout( () => {
          this.reviewed=false;
      }, 1500);
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
 .hidden-button{
   position: absolute;
   left: 0;
   top: 0;
   color: white;
   background: white;
   border: none;
 }
</style>