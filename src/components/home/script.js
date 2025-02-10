import Search from '@/components/search';
import Register from '@/components/register';

export default {
  name: "Home",
  components: {
    Search,
    Register,
  },
  data() {
    return {
      selectedItem: 1,
      items: [
        { text: 'Aluno', icon: 'mdi-account' }
      ],
      activeScreen: 'Search', 
      students: [],
    };
  },

  methods: {

    changeScreen(newScreen) {
      this.activeScreen = newScreen;
    },
    addStudent(newStudent) { 
      this.students.push(newStudent);
    },
    deleteStudent(arStudent) {
      this.students = this.students.filter((student) => student.ar  !== arStudent);
    },
  },
};
