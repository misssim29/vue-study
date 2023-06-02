import { fetchList, fetchUserInfo, fetchItem } from '../api/index.js';
export default {
    FETCH_List(res,page){
        fetchList(page)
        .then(response => res.commit('SET_List', response.data))
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