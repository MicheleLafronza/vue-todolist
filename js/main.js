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
                done: true,
            },
        ]
      }
    },
    methods: {
        removeTask(index) {
            this.toDoList.splice(index, 1);
        }
    }
  }).mount('#app')