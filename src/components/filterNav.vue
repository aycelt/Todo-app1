<template>
    <div class="bad">
      <span class="spad">
        <span>{{ getRemainingProjectsCount() }}</span>
        <span>{{ getRemainingProjectsCount() === 1 ? 'item' : 'items' }} left</span>
      </span>
      <span class="quad">          
        <span @click="updater('all')" :class="{active: current === 'all'}">All</span> 
        <span @click="updater('active')" :class="{active: current === 'active'}">Active</span>
        <span @click="updater('completed')" :class="{active: current === 'completed'}">Completed</span>
      </span>
      
      <span class="red" @click="clearCompleted">Clear Completed</span>
    </div>
  </template>
  
  <script>
  export default {
    props: ['current', 'projects'],
    methods: {
      updater(by) {
        this.$emit('filterer', by);
      },
      getRemainingProjectsCount() {
        return this.projects.filter(project => !project.complete).length;
      },
      clearCompleted() {
      this.$emit('clearCompleted');
    }
    },
  }
  </script>
  
<style>


.bad{
  background: hsl(235, 24%, 19%);
    width: 360px;
    height: 30px;
    cursor: pointer;
    font-size: 8px;
    box-sizing: border-box;
    font-family: 'Josefin Sans', sans-serif;
}

.red:active {
    color: green;
}

.red:hover{
  color: blue;
}



.quad button:hover{
  color:hsl(235, 76%, 37%) ;
}

.quad button{
    margin-right: 5px;
    border: none;
}

.active{
    color: red;
}

.spad span{
    margin-right: 2px;
}
</style>