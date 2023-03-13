const { createApp } = Vue;

createApp({
    data() {
        return {
            message: "Clicka sul bottone per vedere la foto!",
            image: 'https://www.coid.it/wp-content/uploads/2018/01/test-image-300x300-copy.jpeg',
            myClasses: "",
        };
    },
    methods: {
        //aggiunge classe show a myClasses
        displayer() {
            this.myClasses = 'show';
        },
    }
}).mount("#app");
