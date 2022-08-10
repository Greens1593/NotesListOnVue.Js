const appElements = {
    data(){
        return {
            title: 'Список заметок',
            placeholderString: 'Введите заметку',
            inputValue: '',
            notes: []
        }
    },
    methods: {
        inputChangeHendler(event){
            this.inputValue = event.target.value
        },
        addNewNote(){
            this.notes.push(this.inputValue)
            this.inputValue = ''
        },
        removeNode(e){
            const note = e.target.previousSibling.textContent.split(' ')[0];
            const index = this.notes.indexOf(note);
            this.notes.splice(index, 1)
        }
    }
}

const app = Vue.createApp(appElements)

app.mount('#app')

// Или так Vue.createApp(appElements).mount('#app')