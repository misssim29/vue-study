export default {
    SET_NEWS(state, newsdata){
        state.listdata = newsdata;
    },
    SET_JOBS(state, jobsdata){
        state.listdata = jobsdata;
    },
    SET_ASK(state, askdata){
        state.listdata = askdata;
    },
    SET_USER(state, userdata){
        state.user = userdata;
    },
    SET_ITEM(state , itemdata){
        state.items = itemdata;
    }
}