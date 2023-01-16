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
import axios from 'axios'
import StudentInput from './StudentInput.vue';
import StudentShow from './StudentShow.vue';
export default {
  name:"App",
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
    axios.get("http://34.82.81.113:3000/students").then((res)=>{
      this.students = res.data;
    })
  },
  methods: {

    addStudent() {
      axios.post("http://34.82.81.113:3000/students",{ ...this.student }).then(
        (response)=>{
          this.students.push(response.data);
        }
      );

    },
    deleteStudent(studId) {
      axios.delete(`http://34.82.81.113:3000/students/${studId}`).then(()=>{
        this.students = this.students.filter((item)=>item._id !== studId);
      });
    },
    updateStudent(newStudent) {
      axios.put(`http://34.82.81.113:3000/students/${newStudent._id}`,
      {
        name:newStudent.name,
        isDonePr:newStudent.isDonePr,
        group:newStudent.group
      }).then(
        (response)=>{
          console.log(response);
        }
      );

    },
  },
  }
 </script>

<style scoped>

</style>