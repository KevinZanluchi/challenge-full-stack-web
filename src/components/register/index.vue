<template>
  <v-row no-gutters>
    <v-col cols="12" class="header-dash d-flex align-center justify-center">
      <h3>Cadastro de aluno</h3>
    </v-col>

    <v-col cols="12" class="pa-12">
      <v-form ref="form" lazy-validation>
        <v-text-field v-model="newStudent.name"  :counter="20" :rules="nameRules" label="Name" required></v-text-field>
        <v-text-field v-model="newStudent.email" :rules="emailRules" label="E-mail" required></v-text-field>
        <v-text-field v-model="newStudent.ar"  :counter="12" :rules="arRules" label="RA" required></v-text-field>
        <v-text-field v-model="newStudent.cpf"  :counter="11" :rules="cpfRules" label="CPF" required></v-text-field>
        <div class="mt-16 d-flex align-end justify-end">
          <v-dialog v-model="dialog" width="400">
            <template v-slot:activator="{ attrs }">
              <v-btn class="mr-4"  @click="$emit('changeScreen', 'Search')">Cancelar</v-btn>
              <v-btn   @click="save" v-bind="attrs">Salvar</v-btn>
            </template>
            <v-card>
              <v-card-title class="text-h5 grey lighten-2">
                Cadastro do aluno
              </v-card-title>

              <v-card-text class="mt-5">
                {{textAlert}}
              </v-card-text>

              <v-divider></v-divider>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn v-if="validButtom === true" color="primary" text @click="sendData">
                  Ok
                </v-btn>
                <v-btn v-if="validButtom === false" color="primary" text @click="dialog = false">
                  Ok
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>
      </v-form>
    </v-col>


  </v-row>
</template>

<script type="text/javascript" src="./script.js" />