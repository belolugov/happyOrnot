<template>
  <div>
      <router-link
          :to="{ name:'review', params: { text:question.text } }"
          v-for="question in questions" :key="question.index"
      > {{ question.text }} </router-link>
  </div>
</template>

<script>
export default {
  name: "List",
  data() {
    return{
      questions: [
        {text:'Question-1?'},
        {text:'Question-2?'},
        {text:'How are you?'},
        {text:'How do you like?'},
      ]
    }
  }
}
</script>

<style scoped>
 a {
   display: block;
   color: black;
   font-size: x-large;
 }
</style>