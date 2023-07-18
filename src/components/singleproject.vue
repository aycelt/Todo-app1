

<template>
    <div class="boy">
        <li class="mum" @mouseenter="showDeleteIcon" @mouseleave="hideDeleteIcon">
          <span class="jum">
            <span class="round" @click="toggleComplete" :class="{ active: project.complete }">
              <span v-if="project.complete">
                <img src="../todo-app-main/todo-app-main/images/icon-check.svg" alt="">
              </span>
            </span>
            <span :class="{ completed: project.complete }">{{ project.title }}</span> 
          </span>
          <span class="rex" @click="deleteProject" v-show="isHovered">
            <img src="../todo-app-main/todo-app-main/images/icon-cross.svg" alt="">
          </span>
        </li>
    
    </div>
  </template>
  
  <script>
  export default {
    props: ['project'],
    data() {
      return {
        isHovered: false
      };
    },
    methods: {
      toggleComplete() {
        this.project.complete = !this.project.complete;
        this.$emit('complete', this.project.id, this.project.complete);
      },
      deleteProject() {
        this.$emit('delete', this.project.id);
      },
      showDeleteIcon() {
        this.isHovered = true;
      },
      hideDeleteIcon() {
        this.isHovered = false;
      }
    }
  };
  </script>
  
  <style>
  .mum span {
    cursor: pointer;
  }
  
  .mum {
    align-items: center !important;
    display: flex;
    justify-content: space-between !important;
    height: 40px;
    width: 400px;
    background: hsl(235, 24%, 19%);
    box-sizing: border-box;
    padding-right: 15px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }

  .jum :last-child:hover {
    color: brown;
  }
  
  .completed {
    text-decoration: line-through;
  }
  
  .round {
    position: relative;
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    cursor: pointer;
    transition: box-shadow 0.3s;
  }
  
  .round.active {
    background: linear-gradient(to right, hsl(192, 100%, 67%), hsl(280, 87%, 65%));
  }

  .boy{
    font-family: 'Josefin Sans', sans-serif;
  }
  
  .rex {
    display: none;
  }
  
  .mum:hover .rex {
    display: block;
  }
  </style>
  










