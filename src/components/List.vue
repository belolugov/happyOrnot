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
        {text:'how are you?'},
        {text:'Do you like?'},
        {text:'where is enemy troops?'},
        {text:'Do you like Donald Trump?'},
      ]
    }
  }
}
</script>

<style scoped>
 a {
   display: block;
 }
</style>