import { CatFact } from "src/app/models/catFact";

export interface AppState {
    loading: boolean;
    fact: CatFact;
}

export const initialState: AppState = {
    loading: false,
    fact: null
};
