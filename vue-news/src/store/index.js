import { createStore } from 'vuex';
import { fetchNewsList, fetchJobsList, fetchAskList, fetchUserInfo, fetchAskUserInfo } from '../api/index.js';


// [store 데이터 설정 실시]
const store = createStore ({
  state: { // [변수들의 집합]
    news: [],
    jobs:[],
    ask:[],
    user:'',
    askuser: ''
  },
  getters: { // [state의 변수들을 get 호출]
    fetchedAsk(state){
        return state.ask; 
    }
  },
  mutations: { // [변수들을 조작하는 함수들]
    SET_NEWS(state, newsdata){
        state.news = newsdata;
    },
    SET_JOBS(state, jobsdata){
        state.jobs = jobsdata;
    },
    SET_ASK(state, askdata){
        state.ask = askdata;
    },
    SET_USER(state, userdata){
        state.user = userdata;
    },
    SET_ASKUSER(state , askuserdata){
        state.askuser = askuserdata;
    }
  },
  actions: { // [비동기 처리를 하는 함수들]
    FETCH_NEWS(res){
        fetchNewsList()
        .then(response => res.commit('SET_NEWS', response.data))
        .catch(error => console.log(error));
    },
    FETCH_JOBS(res){
        fetchJobsList()
        .then(response => res.commit('SET_JOBS', response.data))
        .catch(error => console.log(error));
    },
    FETCH_ASK(res){
        fetchAskList()
        .then(response => res.commit('SET_ASK', response.data))
        .catch(error => console.log(error));
    },
    FETCH_USER(res, name){
        fetchUserInfo(name)
        .then(response => res.commit('SET_USER', response.data))
        .catch(error => console.log(error));
    },
    FETCH_ASKUSER(res, name){
        fetchAskUserInfo(name)
        .then(response => res.commit('SET_ASKUSER', response.data))
        .catch(error => console.log(error));
    }
  },
});


export default store;

