
const state = {
  todos: [
    {
      "userId": 1,
      "id": 1,
      "title": "10 MEGA",
      "descricao": "Plano número 1 de internet",
      "valor": 25,
      "completed": false
    },
    {
      "userId": 1,
      "id": 2,
      "title": "15 MEGA",
      "descricao": "Plano número 2 de internet",
      "valor": 25,
      "completed": false
    },
    {
      "userId": 1,
      "id": 3,
      "title": "20 MEGA",
      "descricao": "Plano número 3 de internet",
      "valor":35,
      "completed": false
    },
    {
      "userId": 1,
      "id": 4,
      "title": "25 MEGA",
      "descricao": "Plano número 4 de internet",
      "valor":40,
      "completed": false
    },
    {
      "userId": 1,
      "id": 5,
      "title": "30 MEGA",
      "descricao": "Plano número 5 de internet",
      "valor":45,
      "completed": false
    },
    {
      "userId": 1,
      "id": 6,
      "title": "35 MEGA",
      "descricao": "Plano número 6 de internet",
      "valor":50,
      "completed": false
    },  
  ]
};
const getters = {
  allTodos: state => state.todos
};
const actions = {
  fetchTodos({ commit }) {
    const response =[
      {
        "userId": 1,
        "id": 1,
        "title": "10 MEGA",
        "descricao": "Plano número 3 de internet",
        "valor": 25,
        "estoqueDisponivel":1,
        "completed": false
      },
      {
        "userId": 1,
        "id": 2,
        "title": "15 MEGA",
        "descricao": "Plano número 4 de internet",
        "valor": 30,
        "estoqueDisponivel": 1,
        "completed": false
      },
      {
        "userId": 1,
        "id": 3,
        "title": "20 MEGA",
        "descricao": "Plano número 5 de internet",
        "valor":35,
        "estoqueDisponivel":1,
        "completed": false
      }
    ]
      commit("fetchTodos", response.data);
  },

   deleteTodo({ commit }, id) {
    commit("removeTodo", id);
  },
   addTodo({ commit }, title) {
    const new_index =  state.todos.length
    const response =  {
            "userId": 1,
            "id": new_index +1,
            "title":title,  
            "descricao":"Plano número " + (new_index+1)  + " de internet" ,
            "valor":new_index*10,
            "completed": false
          }
    commit("newTodo",response);
  },
   updateTodo({ commit }, updTodo) {
    updTodo.completed = true
    commit("updateTodo",updTodo);
  }

};
const mutations = {
  setTodos: (state, todos) => (state.todos = todos),
  newTodo: (state, todo) => state.todos.push(todo),
  removeTodo: (state, id) =>
    (state.todos = state.todos.filter(t => t.id !== id)),
  updateTodo: (state, updTodo) => {
    const index = state.todos.findIndex(t => t.id === updTodo.id);
    if (index !== -1) {
      state.todos.splice(index, 1, updTodo);
    }
  }
};

export default {
  state,
  actions,
  getters,
  mutations
};
