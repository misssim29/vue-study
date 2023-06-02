import axios from 'axios';

const config = {
    baseUrl: 'https://api.hnpwa.com/v0/'
}

function fetchList(page){
    return axios.get(config.baseUrl+page+'/1.json');
}
function fetchUserInfo(username){
    return axios.get(config.baseUrl+'user/'+username+'.json');
}
function fetchItem(id){
    return axios.get(config.baseUrl+'item/'+id+'.json');
}
export{
    fetchList,
    fetchUserInfo,
    fetchItem
}