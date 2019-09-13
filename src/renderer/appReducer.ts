import { User } from "./models/user";

export interface AppState {
    user: User;
}

const defaultState: AppState = {
    user: null
};
