export default {
  name: "Search",
  props: {
    students: Array,
  },
  data() {
    return {
      search: ""
    };
  },
  computed: {
    listStudents() {
      if (!this.search) return this.students;

      return this.students.filter((item) => {
        const name = item.name ? item.name.toLowerCase() : "";
        return name.toLowerCase().includes(this.search.toLowerCase())
      });
    },
  }
};
