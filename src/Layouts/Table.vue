<template>
   <div id="app">
		<input type="text" name="search" v-model="search"><br>
		<table class="table table-dark">
			<tr v-for="item in students"  v-bind:key="item._id">
        <StudentShow :item="item"></StudentShow>
			</tr>
		</table>
    <StudentInput :student="student"></StudentInput>
			<button @click="addStudent()">Add student</button>
	</div>
</template>
<script>

import { Api } from '../Api'

import { StudentInput, StudentShow } from '../Components';
export default {
  name: "App",
  components: {
    StudentInput,
    StudentShow
  },
  data() {
    return {
      students: [],
      search: "",
      student: { name: "", isDonePr: false, group: "" },
      isEdit:false,
    };
  },

  mounted() {
    Api.getStudents()
        .then((res)=>{this.students = res.data;})
        .catch(e=>console.error(e))
  },
  methods: {

      addStudent() {
        Api.addStudent({ ...this.student })
            .then(res=>{this.students.push(res.data)})
            .catch(e=>console.error(e))
      },

      deleteStudent(id) {
        Api.deleteStudent(id)
            .then(res=>{this.students = this.students.filter(i => i._id !== id);})
            .catch(e=>console.error(e))
      },

      updateStudent(student) {
        Api.updateStudent(student)
            .then(res=>{console.log(res)})
            .catch(e=>console.error(e))
      }
    }
  }
 </script>

<style scoped>

</style>