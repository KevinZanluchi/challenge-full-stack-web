export default {
  name: "Register",
  props: {
    newStudents: Array,
  },
  data() {
    return {
      newStudent: {
        ar: "",
        name: "",
        cpf: "",
        email: "",
      },
      validButtom: true,
      dialog: false,
      textAlert:"",
    nameRules: [
      v => !!v || 'Name é obrigatorio',
      v => (v && v.length <= 20) || 'Nome precisa ter menos de 20 caracteres',
    ],

    emailRules: [
      v => !!v || 'E-mail é obrigatorio',
      v => /.+@.+\..+/.test(v) || 'E-mail precisar ser valido',
    ],
    arRules: [
      v => !!v || 'RA é obrigatorio',
      v => (v && v.length == 12) || 'Nome precisa ter 12 caracteres',
    ],
    cpfRules: [
      v => !!v || 'CPF é obrigatório',
      v => /^\d{3}\d{3}\d{3}\d{2}$/.test(v) || 'CPF precisa ser válido'
    ]
    };
  },
  methods: {
    validate () {
      return this.$refs.form.validate()
    },
    reset () {
      this.$refs.form.reset();
      this.$refs.form.resetValidation();
    },
    save() {

      if(!this.validate()){       
        return;
      }
      const studentsExist = this.newStudents.some(
        (newStudents) => newStudents.ar === this.newStudent.ar
      );     

      if (studentsExist) {
        this.textAlert = "Essa RA já foi Cadastrado";
        this.validButtom= false;
      }
      else{
        this.textAlert="Salvo com sucesso!"
        this.validButtom= true;
        this.$emit("newStudent", { ...this.newStudent });
      }
      this.dialog = true
    },
    sendData(){
      this.clearData();
      this.chanceScream();
    },
    chanceScream(){
      this.$emit('changeScreen', 'Search');
    },
    clearData(){
      this.dialog = false;
      this.newStudent = { ar: "", name: "", cpf: "", email: "" };
    }
  },
};
