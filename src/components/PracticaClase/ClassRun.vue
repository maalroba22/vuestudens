<template>
    <div>
        <section>
            <h1>Plataforma Educativa</h1>
            <div>
                <label for="Nombre">Nombre Docente</label>
                <input type="text" name="nombre" id="nombre" v-model="docente.tecaherName">
            </div>
            <div>
                <label for="Apellido">Apellido</label>
                <input type="text" name="Apellido" id="Apellido" v-model="docente.surName">
            </div>
            <div>
                <label for="DNI">DNI / NIF </label>
                <input type="text" name="DNI" id="DNI" v-model="docente.dni">

            </div>
            <div>
                <label for="materia">Materia </label>
                <input type="text" name="materia" id="materia" v-model="subjects">
                <button @click="handleSubject()"> Guradar</button>
                <div>
                    <ul>
                        <li v-for="(el, index) in docente.subjet" :key="index">{{ el }}</li>
                    </ul>
                </div>
            </div>
            <div>
                <input type="checkbox" v-model="docente.doc">Documentacion Agregada
                <button @click="handleAddDocente()">Agregar</button>

            </div>
        </section>
        <section>
            <h2>Listado de Profesores</h2>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>DNI / NIT</th>
                        <th>Materias</th>
                        <th>Documento</th>
                    </tr>
                </thead>

                <tbody>
                    <tr v-for="ele in docentes" :key="ele.dni">
                        <td>{{ ele.tecaherName }}</td>
                        <td>{{ ele.surName }}</td>
                        <td>{{ ele.dni }}</td>
                        <td>
                            <ul>
                                <li v-for="(materia, index) in ele.subjet" :key="index">{{ materia }}</li>
                            </ul>
                        </td>
                        <td v-if="ele.doc">Entregada</td>
                        <td v-else> No Entregada</td>
                    </tr>
                </tbody>
            </table>
        </section>


    </div>
</template>

<script lang="ts" setup>
import { ref, Ref } from 'vue'

/* interfaz para tipar los datos del array */
interface ITeachesr {
    tecaherName: string,
    surName: string,
    dni: string,
    subjet: Array<string>
    doc: boolean
}

let docente: Ref<ITeachesr> = ref({
    tecaherName: '',
    surName: '',
    dni: '',
    subjet: [],
    doc: false
})

let docentes: Ref<Array<ITeachesr>> = ref([])

let subjects: Ref<string> = ref('')

/* funcion para agregar las Matrias */

const handleSubject = () => {
    docente.value.subjet.push(subjects.value)
    subjects.value = ""
}

/* Agregar Docente */

const handleAddDocente = () => {
    docentes.value.push({
        /* tecaherName: docente.value.tecaherName,
        surName: docente.value.surName,
        dni: docente.value.dni,
        subjet: docente.value.subjet,
        doc:  docente.value.doc */
        ...docente.value

    })
    docente.value.tecaherName = ""
    docente.value.surName = ""
    docente.value.dni = ""
    docente.value.subjet = []
    docente.value.doc = false
}


</script>

<style>

</style>