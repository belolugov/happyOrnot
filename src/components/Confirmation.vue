<template>
 <div id="confirmation">
   <svg class="checkmark mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
     <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
     <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
   </svg>
   <p>Thank You!</p>
 </div>
</template>

<script>
export default {
  name: "Confirmation"
}
</script>

<style scoped>
#confirmation {
  position: relative;
  bottom: 12rem;
  text-align: center;
}
p {
  font-size: xx-large;
  color: #28a745;
}
.checkmark__circle {
  stroke-dasharray: 166;
  stroke-dashoffset: 166;
  stroke-width: 6;
  stroke-miterlimit: 10;
  stroke: #28a745;
  fill: none;
  animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) forwards;
}

.checkmark {
  width: 20rem;
  height: 20rem;
  border-radius: 50%;
  display: block;
  stroke-width: 4;
  stroke: #28a745;
  stroke-miterlimit: 10;
  margin-bottom: 5px;
  box-shadow: inset 0px 0px 0px #7ac142;
  animation: fill .2s ease-in-out .2s forwards, scale .2s ease-in-out .4s both;
}

.checkmark__check {
  transform-origin: 50% 50%;
  stroke-dasharray: 48;
  stroke-dashoffset: 48;
  animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.4s forwards;
}

@keyframes stroke {
  100% {
    stroke-dashoffset: 0;
  }
}
@keyframes scale {
  0%, 100% {
    transform: none;
  }
  50% {
    transform: scale3d(1.1, 1.1, 1);
  }
}
@keyframes fill {
  100% {
    box-shadow: inset 0px 0px 0px 30px #7ac142;
  }
}
</style>