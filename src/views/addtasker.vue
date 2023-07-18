      <template>
      
        <div class="padi" @click="linked">
            <span class="round2"></span>   
            <span class="padi2"> add a new TODO</span>
        </div>
      </template>
      
      <script>
      import { useRouter } from 'vue-router'
      
      export default {
        methods: {
            linked(){
                const router = useRouter()

                this.$router.push('/add')
            }
        }
      
      }
      </script>
      
      <style>
.round2{
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: solid 1px white;
  display: inline-block;
  margin: 0 25px 0 15px;
  position: relative;
  right: 20px;
  
}
.padi{
  background: hsl(235, 24%, 19%);
    width: 360px !important;
    height: 30px;
    cursor: pointer;
}
.padi2{
    right: 195px;
  position: relative;
}
      </style>