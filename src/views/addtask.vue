<template>
  <form @submit.prevent="submitter">
    <label>Title:</label>
    <input type="text" required v-model="title">
    <button>Add Task</button>
  </form> <br>
  <router-link to="/">Go back to Homepage</router-link>

</template>

<script>
export default {
    data(){
        return{
            title: ''
        }
    },
    methods: {
        submitter(){
            let project = {
                title: this.title,
                complete: false
            }
            fetch('http://localhost:3000/projects', {
                method: 'POST',
                headers: {'content-Type': 'application/json'},
                body: JSON.stringify(project)
            }).then(()=>{
                this.$router.push('/')
            })
        }
    }

}
</script>

<style>
form{
    background: white;
    padding: 20px;
    border-radius: 10px;
    margin-top: 160px;
}
label{
    display: block;
    color: rgb(201, 185, 185);
    text-transform: uppercase;
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 1px;
    margin: 20px 0 10px 0;
}
input{
    padding: 10px;
    border: 2px solid #ddd;
    width: 100%;
    box-sizing: border-box;
    text-transform: initial;
}
textarea{
    padding: 10px;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid whitesmoke;
    height: 100%;
}
form button{
    display: block;
    margin: 20px auto 0;
    background: blue;
    border: 0;
    border-radius: 6px;
    font-size: 16px;
    color: white;
    cursor: pointer;
}
form button:hover{
    color: red;
}
</style>