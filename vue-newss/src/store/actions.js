import { fetchNewsList, fetchJobsList, fetchAskList, fetchUserInfo, fetchItem } from '../api/index.js';
export default {
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
    FETCH_ITEM(res, id){
        fetchItem(id)
        .then(response => res.commit('SET_ITEM', response.data))
        .catch(error => console.log(error));
    }
}