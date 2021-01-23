const TOGGLE_CHECKED = "TOGGLE_CHECKED";
const DEL_ELEM = "DEL_ELEM";
const TOGGLE_TEXT_EDIT = "TOGGLE_TEXT_EDIT";
const NEW_TEXT_TASK = "NEW_TEXT_TASK";
const GET_TIME = "GET_TIME";
const NEW_TEXT_ADD_TASK = "NEW_TEXT_ADD_TASK";
const ADD_NEW_TASK = "ADD_NEW_TASK";
const TOGGLE_FILTER = "TOGGLE_FILTER";

const initialState = {
  ToDoData: [
    {
      id: 0,
      text: "Сделать ToDo",
      date: "17.01.2021 19:20:30",
      checked: false,
      textEdit: false,
    },
    {
      id: 1,
      text: "Поесть",
      date: "17.01.2021 20:21:30",
      checked: true,
      textEdit: false,
    },
    {
      id: 2,
      text: "Поспать",
      date: "18.01.2021 12:20:20",
      checked: false,
      textEdit: false,
    },
    {
      id: 3,
      text: "Сделать галерею",
      date: "18.01.2021 15:23:38",
      checked: false,
      textEdit: false,
    },
  ],
  newTextAddTask: "",
  filterTasks: "All",
};

export const ToDoReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_CHECKED:
      return {
        ...state,
        ToDoData: state.ToDoData.map((e) => {
          if (action.id === e.id) {
            e.checked = !e.checked;
          }
          return e;
        }),
      };
    case TOGGLE_FILTER:
      return {
        ...state,
        filterTasks: action.filterTasks,
      };
    case TOGGLE_TEXT_EDIT:
      return {
        ...state,
        ToDoData: state.ToDoData.map((e) => {
          if (action.id === e.id) {
            e.textEdit = !e.textEdit;
          }
          return e;
        }),
      };
    case DEL_ELEM:
      return {
        ...state,
        ToDoData: state.ToDoData.filter((e) => action.id !== e.id),
      };
    case NEW_TEXT_ADD_TASK:
      return {
        ...state,
        newTextAddTask: action.text,
      };
    case ADD_NEW_TASK:
      return {
        ...state,
        ToDoData: [
          ...state.ToDoData,
          {
            id: ++state.ToDoData.length,
            text: state.newTextAddTask,
            date: action.date,
            checked: false,
            textEdit: false,
          },
        ],
        newTextAddTask: "",
      };
    // case GET_TIME:
    //   return {
    //     ...state,
    //   };
    case NEW_TEXT_TASK:
      return {
        ...state,
        ToDoData: state.ToDoData.map((e) => {
          if (action.id === e.id) {
            e.text = action.text;
          }
          return e;
        }),
      };
    default:
      return state;
  }
};

export const toggleChecked = (id) => ({
  type: TOGGLE_CHECKED,
  id,
});
export const toggleTextEdit = (id) => ({
  type: TOGGLE_TEXT_EDIT,
  id,
});
export const delTask = (id) => ({
  type: DEL_ELEM,
  id,
});
export const addNewTask = (date) => ({
  type: ADD_NEW_TASK,
  date,
});
// export const getTime = (time) => ({
//   type: GET_TIME,
//   time,
// });
export const newTextTask = (id, text) => ({
  type: NEW_TEXT_TASK,
  id,
  text,
});
export const newTextAddTask = (text) => ({
  type: NEW_TEXT_ADD_TASK,
  text,
});
export const toggleFilter = (filterTasks) => ({
  type: TOGGLE_FILTER,
  filterTasks,
});
