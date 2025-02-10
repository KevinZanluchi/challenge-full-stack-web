<template>
  <v-row no-gutters >
    <v-col cols="12" class="header-dash d-flex align-center justify-center">
      <h3>Consulta de Alunos</h3>
    </v-col>
    <v-col cols="12">  

      <v-row no-gutters class="ma-5 align-center">
        <v-col cols="6" sm="8" md="7" justify-center >
          <v-text-field v-model = "search" label="Digite sua busca" solo dense hide-details append-icon='mdi-magnify'></v-text-field>
        </v-col>
        <v-col cols="6" sm="4" md="5" class="d-flex justify-end">
          <v-btn dark color="grey" @click="$emit('changeScreen', 'Register')">Cadastrar Aluno</v-btn>
        </v-col>
      </v-row>

    </v-col>
    <v-col cols="12">

      <v-row no-gutters class="w-100 text-center card header-card">
       <v-col cols="3">Registro Acadêmico</v-col>
       <v-col cols="3">Nome</v-col>
       <v-col cols="3">CPF</v-col>
       <v-col cols="3">Ações</v-col>
      </v-row>

      <v-row no-gutters class="w-100 text-center card" v-for="item in listStudents" :key="item.ar">
        <v-col cols="3" class=" d-flex align-center justify-center">{{item.ar}}</v-col>
        <v-col cols="3" class=" d-flex align-center justify-center">{{item.name}}</v-col>
        <v-col cols="3" class=" d-flex align-center justify-center">{{item.cpf}}</v-col>
        <v-col cols="3">
          <v-btn text small disabled>Editar</v-btn>
          <v-btn text small @click="$emit('deleteStudent', item.ar)">Excluir</v-btn>
        </v-col>
      </v-row>
    </v-col>
  </v-row>

</template>

<script type="text/javascript" src="./script.js"/>

<style scoped lang="scss" src="./style.scss"/>