const app = Vue.createApp({
    data () {
        //Always needs to return an object
        return {
            courseGoal: 'Finish the course and learn Vue!'
        }
    }
});

app.mount("#user-goal");
