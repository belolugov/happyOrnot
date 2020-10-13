<template>
  <div class="container">
      <router-link
          :to="{ name:'review', params: { text:question.text } }"
          v-for="question in questions" :key="question.index"
      ><button class="btn btn-lg btn-outline-info mb-1">{{ question.text }}</button></router-link>
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
        {text:'Question-3?'},
        {text:'Question-4'},
        {text:'Question-5'},
        {text:'Question-6'},
        {text:'Question-7'},
        {text:'Question-8'},
        {text:'Question-9'},
        {text:'Question-10'},
      ]
    }
  }
}
</script>

<style scoped>
 .btn {
   display: block;
   width: 100%;

 }
 a:hover {
   text-decoration: none;
 }
</style>