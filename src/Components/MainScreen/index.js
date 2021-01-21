import React, { useState } from "react";
import {
  AddButton,
  Body,
  DateWrapper,
  DelButton,
  EditInput,
  Header,
  Text,
  ToDoWrapper,
  NewTask,
  MainWrapper,
  Clock,
  Task,
  CheckBox,
  NewTaskInput,
  FiltersWrapper,
  FilterButton,
} from "./units";
import { connect } from "react-redux";
import {
  toggleChecked,
  delTask,
  toggleTextEdit,
  newTextTask,
  newTextAddTask,
  addNewTask,
  toggleFilter,
} from "../../redux/ToDoReducer";

const MainScreen = ({
  toDoPage,
  toggleChecked,
  delTask,
  toggleTextEdit,
  newTextTask,
  newTextAddTask,
  addNewTask,
  toggleFilter,
}) => {
  const [time, setTime] = useState("");
  let clock = () => {
    let time = new Date(),
      hours = time.getHours() < 10 ? "0" + time.getHours() : time.getHours(),
      minutes =
        time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes(),
      seconds =
        time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds(),
      date = time.getDate() + 1 < 10 ? "0" + time.getDate() : time.getDate(),
      month =
        time.getMonth() < 10
          ? "0" + (time.getMonth() + 1)
          : time.getMonth() + 1,
      year =
        time.getFullYear() < 10 ? "0" + time.getFullYear() : time.getFullYear();
    setTime(
      date +
        "." +
        month +
        "." +
        year +
        " " +
        hours +
        ":" +
        minutes +
        ":" +
        seconds
    );
  };
  setInterval(clock, 1000);

  const myFunc = () => {
    if (1 === 1) return <div>abc</div>;
  };

  const tableHeaders = (
    <tr>
      <td>af</td>
      <td>bf</td>
      <td>cf </td>
    </tr>
  );

  const tableRows = (
    <>
      <tr>
        <td>a</td>
        <td>b</td>
        <td>c</td>
      </tr>
      <tr>
        <td>a</td>
        <td>b</td>
        <td>c</td>
      </tr>
    </>
  );
  return (
    <MainWrapper>
      <Header>My ToDo list</Header>
      <table border={1}>
        <thead>{tableHeaders}</thead>
        <tbody>{tableRows}</tbody>
      </table>
      <Body>
        <ToDoWrapper>
          <div>
            {myFunc()}
            {(toDoPage.filterTasks === "Completed"
              ? toDoPage.ToDoData.filter(({ checked }) => checked)
              : toDoPage.filterTasks === "Uncompleted"
              ? toDoPage.ToDoData.filter(({ checked }) => !checked)
              : toDoPage.ToDoData
            ).map((e) => (
              <Task key={e.id}>
                <CheckBox
                  type={"checkbox"}
                  checked={e.checked}
                  onClick={() => toggleChecked(e.id)}
                />
                {e.textEdit ? (
                  <EditInput
                    autoFocus={true}
                    onBlur={() =>
                      e.text ? toggleTextEdit(e.id) : delTask(e.id)
                    }
                    value={e.text}
                    onChange={(x) => newTextTask(e.id, x.target.value)}
                  />
                ) : (
                  <Text
                    onDoubleClick={() => toggleTextEdit(e.id)}
                    checked={e.checked}
                  >
                    {e.text}
                  </Text>
                )}
                <DateWrapper>{e.date}</DateWrapper>
                <DelButton
                  src={"https://img.icons8.com/cotton/2x/delete-sign.png"}
                  onClick={() => delTask(e.id)}
                />
              </Task>
            ))}
          </div>
          <div>
            <FiltersWrapper>
              <FilterButton
                border={toDoPage.filterTasks === "All" ? true : false}
                onClick={() => toggleFilter("All")}
              >
                All
              </FilterButton>
              <FilterButton
                border={toDoPage.filterTasks === "Completed" ? true : false}
                onClick={() => toggleFilter("Completed")}
              >
                Completed
              </FilterButton>
              <FilterButton
                border={toDoPage.filterTasks === "Uncompleted" ? true : false}
                onClick={() => toggleFilter("Uncompleted")}
              >
                Uncompleted
              </FilterButton>
            </FiltersWrapper>
            <NewTask>
              <NewTaskInput
                onChange={(e) => newTextAddTask(e.target.value)}
                placeholder={"New task"}
                value={toDoPage.newTextAddTask}
              />
              <Clock>
                Date:
                {time}
              </Clock>
            </NewTask>
          </div>
        </ToDoWrapper>
        <AddButton
          onClick={() => {
            !toDoPage.newTextAddTask || addNewTask(time);
          }}
        >
          +
        </AddButton>
      </Body>
    </MainWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    toDoPage: state.toDoPage,
  };
};
export default connect(mapStateToProps, {
  toggleChecked,
  delTask,
  toggleTextEdit,
  newTextTask,
  newTextAddTask,
  addNewTask,
  toggleFilter,
})(MainScreen);
