import { createStore } from 'vuex';
import mutations from './mutations.js';
import actions from './actions.js';

// [store 데이터 설정 실시]
const store = createStore ({
  state: { // [변수들의 집합]
    listdata: [],
    user:'',
    items: '',
  },
  getters: { // [state의 변수들을 get 호출]
    fetchedAsk(state){
        return state.ask; 
    }
  },
  mutations: mutations,
  actions: actions,
});


export default store;

