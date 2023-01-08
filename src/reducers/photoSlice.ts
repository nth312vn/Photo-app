import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPhotoForm } from "components/photoFom/PhotoForm";

const photoSlice = createSlice({
  name: "photo",
  initialState: [
    {
      id: 91176,
      category: 5,
      photo: "https://picsum.photos/id/532/300/300",
      title:
        "Enim laboris dolore consectetur et fugiat do amet eiusmod anim proident do culpa irure consectetur.",
    },
    {
      id: 82605,
      category: 1,
      photo: "https://picsum.photos/id/43/300/300",
      title: "Ad officia magna veniam sunt.",
    },
    {
      id: 74760,
      category: 3,
      photo: "https://picsum.photos/id/722/300/300",
      title:
        "Minim anim in sunt esse nisi sit magna consequat in sit laboris adipisicing.",
    },
    {
      id: 39588,
      category: 5,
      photo: "https://picsum.photos/id/294/300/300",
      title: "Deserunt in tempor est id consectetur cupidatat.",
    },
    {
      id: 72133,
      category: 4,
      photo: "https://picsum.photos/id/229/300/300",
      title:
        "Labore culpa velit sunt sit anim ad do veniam do proident sunt et nisi mollit.",
    },
    {
      id: 95333,
      category: 1,
      photo: "https://picsum.photos/id/862/300/300",
      title:
        "Fugiat fugiat voluptate tempor minim ipsum nisi culpa magna officia ea deserunt tempor.",
    },
    {
      id: 62419,
      category: 3,
      photo: "https://picsum.photos/id/515/300/300",
      title:
        "Excepteur nisi aliquip ex aliqua consectetur id laboris cillum elit dolor dolor anim sint.",
    },
    {
      id: 12569,
      category: 5,
      photo: "https://picsum.photos/id/730/300/300",
      title:
        "Occaecat exercitation Lorem cupidatat adipisicing elit duis consequat esse et tempor eu enim cupidatat.",
    },
    {
      id: 47434,
      category: 3,
      photo: "https://picsum.photos/id/287/300/300",
      title: "Veniam officia est nulla proident labore.",
    },
    {
      id: 52685,
      category: 3,
      photo: "https://picsum.photos/id/859/300/300",
      title:
        "Ut incididunt do magna culpa consectetur id deserunt et enim elit quis.",
    },
    {
      id: 69928,
      category: 5,
      photo: "https://picsum.photos/id/110/300/300",
      title:
        "Nisi velit fugiat voluptate fugiat magna officia qui fugiat ad non.",
    },
    {
      id: 86160,
      category: 5,
      photo: "https://picsum.photos/id/649/300/300",
      title: "Id ex enim non dolore reprehenderit eu ullamco.",
    },
  ] as IPhotoForm[],
  reducers: {
    addPhoto: (state: IPhotoForm[], actions: PayloadAction<IPhotoForm>) => {
      state.push(actions.payload);
    },
    deletePhoto: (state: IPhotoForm[], actions: PayloadAction<number>) => {
      return state.filter((photo: IPhotoForm) => photo.id !== actions.payload);
    },
    editPhoto: (state: IPhotoForm[], actions: PayloadAction<IPhotoForm>) => {
      const index = state.findIndex((photo) => photo.id === actions.payload.id);
      state[index] = actions.payload;
    },
  },
});
const { actions, reducer } = photoSlice;
export const { addPhoto, deletePhoto, editPhoto } = actions;
export default reducer;
