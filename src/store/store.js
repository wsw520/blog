import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state:{//设置属性
		usename:null,
		if_login:false
	},
	getters:{//获取属性状态
		//把state.usename放置usename_
        usename:state=>state.usename,
        if_login:state=>state.if_login,
	},
	mutations:{	//改变属性状态
        //获取用户名放置state.usename
		com_name(state,name){
            if(name){
               state.usename=name;
               state.if_login=true;
            }else{
               state.usename=null;
               state.if_login=false;
            }
		}
	},
	actions:{//应用 mutations
		
	}
})