
<template>
  <div class="container" :class="{ 'dark': theme === 'dark', 'light': theme === 'light' }">
    <div class="home">
      <h1>TODO</h1>
      <span class="icon" @click="toggleTheme">
        <img v-if="theme === 'dark'" src="../todo-app-main/todo-app-main/images/icon-sun.svg" alt="">
        <img v-else src="../todo-app-main/todo-app-main/images/icon-moon.svg" alt="">
      </span>
    </div>

    <addtasker /> <br>

    <div v-if="projects.length" class="ope">
      <span v-for="project in filteredProjects" :key="project.id" class="ayinla">
        <singleproject :project="project" @delete="deleteProject" @complete="updateProjectCompletion" />
      </span>
    </div>

    <filterNav :current="currentFilter" :projects="projects" @filterer="handleFilter" @clearCompleted="clearCompleted" />
  </div>
</template>

<script>
import singleproject from '../components/singleproject.vue'
import addtasker from '../views/addtasker.vue'
import filterNav from '../components/filterNav.vue'

export default {
  name: 'HomeView',
  components: { singleproject, addtasker, filterNav },
  data() {
    return {
      projects: [],
      currentFilter: 'all', // Initial filter state
      theme: 'light', // Initial theme state
    }
  },
  mounted() {
    this.fetchProjects();
  },
  methods: {
    fetchProjects() {
      fetch('http://localhost:3000/projects')
        .then(res => res.json())
        .then(data => {
          this.projects = data;
        })
        .catch(error => {
          console.error('Error fetching projects:', error);
        });
    },
    deleteProject(projectId) {
      fetch(`http://localhost:3000/projects/${projectId}`, {
        method: 'DELETE'
      })
        .then(response => {
          if (response.ok) {
            this.projects = this.projects.filter(project => project.id !== projectId);
          } else {
            console.error('Error deleting project:', response.statusText);
          }
        })
        .catch(error => {
          console.error('Error deleting project:', error);
        });
    },
    updateProjectCompletion(projectId, isComplete) {
      const project = this.projects.find(project => project.id === projectId);
      if (project) {
        project.complete = isComplete;
      }
    },
    handleFilter(filterState) {
      this.currentFilter = filterState;
    },
    clearCompleted() {
      this.projects = this.projects.filter(project => !project.complete);
    },
    toggleTheme() {
      this.theme = this.theme === 'light' ? 'dark' : 'light';
    }
  },
  computed: {
    filteredProjects() {
      if (this.currentFilter === 'all') {
        return this.projects; // No filter selected, return all projects
      } else {
        return this.projects.filter(project => {
          if (this.currentFilter === 'completed') {
            return project.complete; // Only include completed projects
          } else if (this.currentFilter === 'active') {
            return !project.complete; // Only include active projects
          }
        });
      }
    },
  },
};
</script>





<style>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');


body {
  background: hsl(235, 21%, 11%);
  margin: 0;
}

.container {
  background-repeat: no-repeat;
  background-position: top;
  background-size: 100% 40vh;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center; /* Add this line */
  padding-top: 60px;
  font-family: 'Josefin Sans', sans-serif;
}

.dark {
  background-color: hsl(235, 21%, 11%);
  background-image: url("../todo-app-main/todo-app-main/images/bg-desktop-dark.jpg");
}

.light {
  background-color: white;
  background-image: url("../todo-app-main/todo-app-main/images/bg-desktop-light.jpg");
}

.home {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  font-weight: 700;
  font-family: 'Josefin Sans', sans-serif;
}

.ope {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.filterNav {
  margin-bottom: 20px;
}
.addtasker {
  margin-bottom: 20px;
}

.home h1 {
  margin-right: 10px;
  color: #fff;
  font-size: 24px;
}

.icon img {
  width: 20px;
  height: 20px;
  cursor: pointer;
}

.round{
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: solid 1px white;
  display: inline-block;
  margin: 0 25px 0 15px;
}

.round:hover{
  border: 1px solid hsl(280, 87%, 65%); 
}


.mum, .bad{
  align-items: center;
  display: flex;
  justify-content: left;
  height: 40px;
  width: 400px;
  background: hsl(235, 24%, 19%);
  box-sizing: border-box;

}

.bad{
  font-size: 8px;
  box-sizing: border-box;
  cursor: pointer;
}
.red:active {
    color: green;
}



.quad span:hover{
  color:hsl(235, 76%, 37%) ;
}

.quad span{
    margin-right: 5px;
}

.container div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 400px; 
  padding: 0 20px; 
  color: white;
  Font: 18px
}

</style>