export default {
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
    SET_ITEM(state , itemdata){
        state.items = itemdata;
    }
}