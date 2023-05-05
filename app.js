const app = Vue.createApp({
    data () {
        //Always needs to return an object
        return {
            courseGoalA: 'Finish the course and learn Vue!',
            courseGoalB: 'Master Vue and build amazing apps!',
            courseGoal: 'Finish the course and learn Vue!',
            vueLink: 'https://vuejs.org/',
        }
    },
    methods: {
        outputGoal () {

            const randomNumber = Math.random ;
            return randomNumber < 0.5  ? this.courseGoalA: this.courseGoalB;
        }
    }
});

//Only one Vue app can be connected to one html element via a CSS selector
app.mount("#user-goal");
