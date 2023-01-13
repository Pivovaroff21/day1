<template>
  <template v-if="!isEdit">
    <td>{{item.name}}</td>
    <td><input type="checkbox" v-model="item.isDonePr"></td>
    <td>{{item.group}}</td>
    <td><a href = "#" @click="deleteStudent(item._id)">Видалити</a></td>
  </template>
  <StudentInput :student="newStudent" v-else></StudentInput>
  <td v-if="!isEdit"><a href = "#" @click="isEdit = !isEdit,newStudent = item">Редагувати</a></td>
  <td v-else><a href = "#" @click="updateStudent(newStudent)">Редагувати</a></td>

</template>

<script >
import { defineComponent } from 'vue';
import StudentInput from './StudentInput.vue';
export default defineComponent({
  name: "StudentShow",
   components: {
    StudentInput
  },
  props: {
    item: {
      type: Object,
      require: true
    }
  },
   data() {
    return {
      isEdit:false,
      newStudent:{},
    };
  },
   methods:{
    deleteStudent(studId) {
      this.$parent.deleteStudent(studId);
    },
    updateStudent(newStudent) {
      this.isEdit=!this.isEdit;
      this.$parent.updateStudent(newStudent);
    }
  }

});
</script>


