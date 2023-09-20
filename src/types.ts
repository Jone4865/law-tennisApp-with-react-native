export type RootStackParamList = {
  home: undefined;
  search: undefined;
  signin: undefined;
  signup: undefined;
  add?: {type: 'add' | 'detail' | 'edit'};
  user: undefined;
  detail?: {type: 'add' | 'detail' | 'edit'};
  edit?: {type: 'add' | 'detail' | 'edit'};
};
