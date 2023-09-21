export type RootStackParamList = {
  home?: {type: 'home' | 'join' | 'create'};
  join?: {type: 'home' | 'join' | 'create'};
  create?: {type: 'home' | 'join' | 'create'};

  search: undefined;
  signin: undefined;
  signup: undefined;
  user: undefined;

  add?: {type: 'add' | 'detail' | 'edit'};
  detail?: {type: 'add' | 'detail' | 'edit'};
  edit?: {type: 'add' | 'detail' | 'edit'};

  signout: undefined;

  verification: undefined;
};
