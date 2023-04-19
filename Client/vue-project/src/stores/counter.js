import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})
// ---------------------------------------------
// import { defineStore } from 'pinia'
// import { ref, computed } from 'vue'

 


// // export const useCounterStore = defineStore('counter', () => {
// //     // estado
// //     state: ()=>({
// //       count: 0,
// //       name: "Joseph"
// //     })
  
// // })


// export const useCounterStore = defineStore('counter', () => {
//   // estado
//     const count = ref(0)
//     const name = ref('Joseph')

//     function increment(){
//       count.value ++
//     }

  
    
//     function reverseName(){
//         const reverse = name.value.split('').reverse().join('')
//         name.value = reverse

//     }

//     return{count, name, increment, reverseName}

// })
