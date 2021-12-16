export enum Screen {
    InitialScreen = 'InitialScreen',
    SignUpScreen = 'SignUpScreen',
    SignInScreen = 'SignInScreen',
    NameScreen = 'NameScreen',
    DateScreen = 'DateScreen',
    WorkoutScreen = 'WorkoutScreen',
    SuccessScreen = 'SuccessScreen',
};

export type NameScreenFormData = {
    name: string;
};

export type RouterStackParamList = {
    InitialScreen: undefined;
    SignUpScreen: undefined;
    SignInScreen: undefined;
    NameScreen: undefined;
    DateScreen: NameScreenFormData;
    WorkoutScreen: undefined;
    SuccessScreen: undefined;
};

