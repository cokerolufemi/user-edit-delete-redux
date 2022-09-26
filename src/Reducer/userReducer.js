import { v4 as uuid } from "uuid";
const initialState = {
  notes: [
    {
      note: "gtfbbyybybuyyunyuun",
      title: "hy7hh7yh7hy7h77y",
      date: "34556566ff",
      id: uuid(),
    },
  ],
};
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NOTE":
      return { ...state, notes: [...state.notes, action.payload] };

    case "DELETE_NOTE":
      const realNote = state.notes.filter((note) => note.id !== action.payload);

      return { ...state, notes: realNote };
    case "EDIT_NOTE":
      const newUpdate = state.notes.map((notes) => {
        if (notes.id === action.payload.edit.id) {
          return action.payload.edit;
        } else return notes;
      });
      return { ...state, notes: newUpdate };
    default:
      return state;
  }
};
