export const initialState = {
  tasksListData: [
    {
      id: 1,
      todo: "Do something nice for someone I care about",
      completed: true,
      image: "https://robohash.org/pluto",
      username: "Pluto",
    },
    {
      id: 2,
      todo: "Lorem psum sit",
      completed: false,
      image: "https://robohash.org/pippo.png",
      username: "Pippo",
    },
  ],
  isModalVisibile: false,
  tempTodo: {
    username: "",
    todo: "",
    image: "",
    id: null,
  },
};
