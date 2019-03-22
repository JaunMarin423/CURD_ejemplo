document.addEventListener('DOMContentLoaded', function () {
    new Vue({

        el: '#appEstudiante',
        data: {
            nombre: '',
            edad: '',
            formActualizar: false, 
            idActualizar: -1,
            nombreActualizar: '',
            edadActualizar: '',
            estudiantes: []

        },
        methods: {
            crearEstudiante: function (){
                this.estudiantes.push({
                    id: + new Date(),
                    nombre: this.nombre,
                    edad: this.edad
                });
                this.nombre = '';
                this.edad = '';
                localStorage.setItem('colegio-vue', JSON.stringify(this.estudiantes));
            },
            verFormActualizar: function(estudiante_id){
                this.idActualizar = estudiante_id;
                this.nombreActualizar = this.estudiantes[estudiante_id].nombre;
                this.edadActualizar = this.estudiantes[estudiante_id].edad;

                this.formActualizar = true;
                localStorage.setItem('colegio-vue', JSON.stringify(this.estudiantes));
            },
            borrarEstudiante: function (estudiante_id) {

                this.estudiantes.splice(estudiante_id, 1);
                localStorage.setItem('colegio-vue', JSON.stringify(this.estudiantes));
            },
            guardarActualizacion: function (estudiante_id) {
                this.formActualizar = false;

                this.estudiantes[estudiante_id].nombre = this.nombreActualizar;
                this.estudiantes[estudiante_id].edad = this.edadActualizar;
            }
        }
        
    });
});
