window.NotificationCenter={_observers:{},addObserver:function(_,E,A){cc.assert(null!=_,"key  cant be null"),cc.assert(null!=E,"fun  cant be null"),cc.assert(null!=A,"target  cant be null"),null==this._observers[_]&&(this._observers[_]=[]),this._observers[_].push({fun:E,target:A})},removeObserver:function(_,E){null==E&&cc.assert(!1,"target must not be null"),null!=this._observers[_]&&(this._observers[_]=this._observers[_].filter(function(_){return _.target!=E}))},postNotice:function(_,E){null!=this._observers[_]&&this._observers[_].forEach(function(_){_.fun.call(_.target,E)})},KEY:{COIN_CHANGED:"COIN_CHANGED",CUMULATIVE_COIN_CHANGED:"CUMULATIVE_COIN_CHANGED",DIAMOND_CHANGED:"DIAMOND_CHANGED",LOTTERY_TIME_CHANGED:"LOTTERY_TIME_CHANGED",UNLOCK_MASTER_MAX_LV_CHANGED:"UNLOCK_MAX_LV_CHANGED",CASTLE_LV_CHANGED:"CASTLE_LV_CHANGED",CASTLE_REMAIN_COIN_CHANGED:"CASTLE_REMAIN_COIN_CHANGED",CHECK_BOARD_DATA_CHANGED:"CHECK_BOARD_DATA_CHANGED",CHECK_BOARD_EGG_HATCH:"CHECK_BOARD_DATA_CHANGED",CHECK_BOARD_MASTER_SYNTHETIZE:"CHECK_BOARD_MASTER_SYNTHETIZE",CHECK_BOARD_MASTER_GARBAGE:"CHECK_BOARD_MASTER_GARBAGE",SIGNIN_DATA_CHANGED:"SIGNIN_DATA_CHANGED",INVITED_DATA_CHANGED:"INVITED_DATA_CHANGED",LOCAL_DATA_LOAD:"LOCAL_DATA_LOAD",OFFLINE_REWARD_LAYER_CLOSE:"OFFLINE_REWARD_LAYER_CLOSE",INIVITED_LAYER_CLOSE:"INIVITED_LAYER_CLOSE",GET_ALL_INIVITED_REWARD:"GET_ALL_INIVITED_REWARD",REWARD_TYPE_CHANGED:"REWARD_TYPE_CHANGED",PLUNDER_SHOW_COIN_LABEL:"PLUNDER_SHOW_COIN_LABEL",PLUNDER_SHOW_PARTICLE:"PLUNDER_SHOW_PARTICLE",MASTER_BUY_TIMES_CHANGED:"MASTER_BUY_TIMES_CHANGED",OFF_TECHNOLOGY_CHANGED:"OFF_TECHNOLOGY_CHANGED",COIN_TECHNOLOGY_CHAGED:"COIN_TECHNOLOGY_CHAGED",CHECK_BORAD_SELECTED_ITEM_ESURE:"CHECK_BORAD_SELECTED_ITEM_ESURE",CHECK_BORAD_SELECTED_ITEM_CANCEL:"CHECK_BORAD_SELECTED_ITEM_CANCEL",CAN_PUT_FREE_EGG:"CAN_PUT_FREE_EGG",ON_GAME_SHOW:"ON_GAME_SHOW"}},window.NC=window.NotificationCenter;