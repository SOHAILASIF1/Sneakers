import { createSlice } from "@reduxjs/toolkit";

const initialState = {   // Spelling کو صحیح کر دیا گیا
    user: null
};

export const userSlice = createSlice({
    name: "user",
    initialState,  // یہاں غلطی تھی (intialState → initialState)
    reducers: {
        setUserDetail: (state, action) => {
            state.user = action.payload;
        }
    }
});

export const { setUserDetail } = userSlice.actions;
export default userSlice.reducer;
