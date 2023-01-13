import Vue, {createApp} from 'vue'
import axios from "axios"
import VueAxios from "vue-axios"


let students = [
  {
    id: 1,
    name: "Andrii Kurkov",
    isDonePr: true,
    group: "RPZ 19 2/9",
    src: "https://orig00.deviantart.net/ee08/f/2009/073/e/d/free_red_panda_icon_100x100_by_supertuffpinkpuff.png",
  },
  {
    id: 2,
    name: "Serhii Plohij",
    isDonePr: false,
    group: "RPZ 19 1/9",
    src: "https://cdn-learn.adafruit.com/assets/assets/000/012/878/thumb100/led_strips_doge.bmp?1386611464",
  },
  {
    id: 3,
    name: "Yurko Izdryk",
    isDonePr: true,
    group: "RPZ 19 2/9",
    src: "https://vignette.wikia.nocookie.net/adventuretime/images/9/99/AT_Icons_100x100_Jake.jpg/revision/latest?cb=20120919222926&path-prefix=ar",
  },
];


createApp({
  data() {
    return {
      students: [],
      search: "",
      student: { name: "", isDonePr: false, group: "" },
    };
  },
  mounted() {
    axios.get("http://34.82.81.113:3000/students").then((res)=>{
      console.log(res.data);
      this.students = res.data;
    })
  },
  methods: {
    deleteStudent(studId) {
      this.students = this.students.filter((elem) => {
        return elem.id != studId;
      });
    },
    addStudent() {
      this.student.id = this.students.length + 1;
      this.students.push(this.student);
    },
  },
}).mount("#app");
