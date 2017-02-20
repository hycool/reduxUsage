const tapOnTabA = () => {
  return {type: 'TAB_A'};
};

const tapOnTabB = () => {
  return {type: 'TAB_B'};
};

const login = () => {
  return {type: 'LOGIN'};
};

const logout = () => {
  return {type: 'LOGOUT'};
};

export {tapOnTabA, tapOnTabB, login, logout};