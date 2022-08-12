const appElements = {
    data(){
        return {
            title: 'Список заметок',
            placeholderString: 'Введите заметку. Если количество символов больше 10 заметка добавится автоматически',
            inputValue: '',
            notes: []
        }
    },
    methods: {
        inputChangeHendler(event){
            this.inputValue = event.target.value
        },
        addNewNote(){
            if(this.inputValue !== ''){
                this.notes.push(this.inputValue)
                this.inputValue = ''
            }},
        removeNode(index){
            this.notes.splice(index, 1)
        },
        toUpperCase(item){
            return item.toUpperCase()
        },
    },
    computed: { // Свойство модели vue. Отличается от методов тем, что его функции должны возвращать значение + должна быть привязка к элементам из data. Вызывается как обычная переменная т.е. без ()
        doubleCount(){
            return this.notes.length * 2 
        }
    },
    watch: {
        inputValue(value){ // Название должно совпадать с названием переменной из блока data
            if(value.length === 10){
                this.addNewNote()
            }
        }
    }
}

const app = Vue.createApp(appElements)

app.mount('#app')

// Или так Vue.createApp(appElements).mount('#app')