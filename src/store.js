import { createStore } from "redux";
import rootReducer from "./redux/reducer";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
    key : "Docter",
    storage
}

const persistreducer = persistReducer(persistConfig, rootReducer)
const store = createStore(persistreducer)
const persistor = persistStore(store)

export default store
export { persistor }