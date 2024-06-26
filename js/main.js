// inizializzo Vue 3
const { createApp } = Vue

  createApp({
    data() {
      return {
        toDoList: [
            {
                text: "Lavare i piatti",
                done: false,
            },
            {
                text: "Fare il bucato",
                done: false,
            },
            {
                text: "Stendere i panni",
                done: false,
            },
        ],
        newTask: {
            text: "",
            done: false,
        }
      }
    },
    methods: {
        // funzione per rimuovere una task
        removeTask(index) {
            this.toDoList.splice(index, 1);
        },
        // funzione per aggiungere una task all'inizio dell'array e svuotare il campo dell'input
        addTask() {
            this.toDoList.unshift(this.newTask);
            this.newTask = '';
        }
    }
  }).mount('#app')