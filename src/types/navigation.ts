export type ReadingItemData = {
  id?: string;
  type?: string;
  title?: string;
  date?: string;
  descriptionText?: string;
  fileUri?: string;
  fileName?: string;
  fileSize?: string;
  uploadDate?: string;
};

export type RootStackParamList = {
  Auth: undefined;
  MainTabs: undefined;
  Camera: undefined;
  ReadingDetails: {
    item: ReadingItemData;
  };
};

export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
  ForgotPassword: undefined;
  ResetPassword: undefined;
};

export type MainTabParamList = {
  Home: undefined;
  Readings: undefined;
  Settings: undefined;
  Profile: undefined;
};

export type HomeStackParamList = {
  Home: undefined;
  Camera: undefined;
  Gallery: undefined;
};

// IMPORTAR NAS PÁGINAS DE NAVEGAÇÃO O TIPO, USENAVIGATION, StackNavigationProp
