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
        },
        inputError : false,
      }
    },
    methods: {
        // funzione per rimuovere una task
        removeTask(index) {
            this.toDoList.splice(index, 1);
        },
        // funzione per aggiungere una task all'inizio dell'array e svuotare il campo dell'input
        addTask() {
            if (this.newTask.text.length >= 5) {
                this.toDoList.unshift({ text: this.newTask.text, done: false });
                this.newTask.text = "";
                this.inputError = false;
            } else {
                this.inputError = true;
            }
        },
    }
  }).mount('#app')