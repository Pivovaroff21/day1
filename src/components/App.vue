<template >
   <div class="main" :class="{ white:isWhite , dark:!isWhite }">
      <h1>Students</h1>
      <button @click="changeTheme"> Змінити тему</button>
      <div class="content">
          <router-view></router-view>
      </div>
   </div>
</template>


<script>
export default {
   name:"App",
   data(){
      return{
         isWhite:"",
      }
   },
   mounted(){
      this.isWhite = this.$store.getters.getTheme;
   },
   methods:{
      changeTheme(){
         this.isWhite = !this.isWhite
         this.$store.commit('changeTheme', this.isWhite);
      }
   }
}
</script>

<style>
.main{
   height:100vh;
}
.dark{
   background-color: #000;
   color:white;
}

.white{
   background-color: #fff;
}




</style>