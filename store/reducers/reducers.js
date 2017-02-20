const currentTab = (state = {tabA: false, tabB: true}, action) => {
  switch (action.type) {
    case 'TAB_A':
      return {tabA: true, tabB: false};
      break;
    case 'TAB_B':
      return {tabA: false, tabB: true};
      break;
    default:
      return state;
      break;
  }
};


const loginStatus=(state={isLogin:false},action)=>{
  switch (action.type){
    case 'LOGIN':
      return {
        isLogin:true,
        name:'Hey, HY'
      };
      break;
    case 'LOGOUT':
      return {
        isLogin:false
      };
    default:
      return state;
      break;
  }
};

export {currentTab,loginStatus};