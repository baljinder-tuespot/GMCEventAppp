import { configureStore,createSlice } from '@reduxjs/toolkit';

export const store = configureStore({
    reducer:{
        addID :event
    }
})

const event = createSlice({
    name:"Event",
    initialState:{
        eventID:''
    },
    reducers: {
        addEvent:(state,action) => {
            state.eventID = action.payload.id
        },
        removeEvent: (state) => {}
    }
})
export const addEvent = event.actions.addEvent;
export const RemoveEventID = event.actions.removeEvent;
export default event.reducer;