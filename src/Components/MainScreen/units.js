import styled from "@emotion/styled";

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: darkgrey;
  font-size: 30px;
  padding: 10px;
  text-shadow: 2px 2px 5px black;
  cursor: default;
  font-family: "Comic Sans MS";
`;
export const Body = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: rgba(240, 239, 233, 223);
  flex-grow: 2;
  font-family: "Comic Sans MS";
`;
export const AddButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: none;
  width: 50px;
  height: 50px;
  background-color: rgba(80, 227, 164, 144);
  font-size: 30px;
  outline: none;
  color: rgba(71, 193, 141, 124);
  cursor: pointer;
  position: relative;
  top: -20px;
`;
export const MainWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 1000px;
`;
export const ToDoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 500px;
  min-height: 300px;
  color: rgba(91, 94, 110, 95);
  background-color: white;
  margin-top: 30px;
  box-shadow: 0 0 10px grey;
  padding: 5px;
`;
export const Task = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ghostwhite;
`;
export const NewTask = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Text = styled.div`
  flex-grow: 1;
  text-decoration: ${({ checked }) => (checked ? "line-through" : "none")};
`;
export const EditInput = styled.input`
  flex-grow: 1;
  outline: none;
  border: none;
  font-size: 16px;
  font-family: "Comic Sans MS";
`;
export const NewTaskInput = styled.input`
  font-family: "Comic Sans MS";
  font-size: 14px;
  outline: none;
  border: none;
  border-bottom: 1px solid ghostwhite;
  cursor: pointer;
`;
export const DateWrapper = styled.div`
  font-size: 12px;
  flex-grow: 0;
`;
export const DelButton = styled.img`
  width: 25px;
  height: 25px;
  cursor: pointer;
`;
export const Clock = styled.div`
  cursor: default;
`;
export const FiltersWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export const FilterButton = styled.button`
  background-color: ghostwhite;
  border: 2px solid
    ${({ border }) => (border ? "rgba(71, 193, 141, 124)" : "white")};
  border-radius: 10px;
  cursor: pointer;
  font-family: "Comic Sans MS";
  margin: 0px 3px;
  outline: none;
`;
export const CheckBox = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  display: inline-block;
  width: 22px;
  height: 22px;
  margin: 0 5px 0 0;
  padding: 0;
  vertical-align: top;
  outline: none;
  transition: background 0.3s ease;
  background: url(https://snipp.ru/uploads/contents/checkbox-1.png) 0 0
    no-repeat;
  cursor: pointer;
  &:checked {
    background-image: url(https://snipp.ru/uploads/contents/checkbox-2.png);
  }
  &:focus {
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
  &:hover {
    filter: brightness(110%);
  }
  &:active {
    filter: brightness(80%);
  }
  &:disabled {
    color: #666;
    cursor: default;
    filter: grayscale(100%);
    opacity: 0.6;
  }
`;
