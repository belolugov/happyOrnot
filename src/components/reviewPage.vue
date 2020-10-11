<template>
  <div>
    <h1>{{ $route.params.text }}</h1>
    <div class="container mt-5">
        <div class="row icons">
          <div class="col"><b-icon-emoji-smile @click="click" v-b-modal.confirmation class="emojis bg-success"></b-icon-emoji-smile></div>
          <div class="col"><b-icon-emoji-neutral @click="click" v-b-modal.confirmation class="emojis bg-warning"></b-icon-emoji-neutral></div>
          <div class="col"><b-icon-emoji-angry @click="click" v-b-modal.confirmation class="emojis bg-danger"></b-icon-emoji-angry></div>
        </div>
    </div>
<!--     Confirmation modal-->
    <div>
      <b-modal id="confirmation" footer-class="m-footer" body-class="m-body">
        <b-icon icon="check-2" font-scale="13" variant="success"></b-icon>
        <p class="my-4">Thanks for reviewing!</p>
      </b-modal>
    </div>

  </div>
</template>

<script>
export default {
  name: "reviewPage",
  props:['text'],
  data() {
    return {
    }
  },
  methods: {
    click() {
      setTimeout( () => {
          this.$bvModal.hide('confirmation');
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
</style>