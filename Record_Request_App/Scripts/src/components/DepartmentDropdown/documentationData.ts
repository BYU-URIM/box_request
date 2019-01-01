import { IDepartmentDropdownProps } from "./DepartmentDropdown";
import { UIStore, IDepartment, IOption, IDropdownInfo, FormTypes } from "../../stores";

let selectedDep = {
    id: 45123
}

let form = ""

const departments:IDepartment[] = [
    {
        name: "The Man Department",
        id: 45123,
    },
    {
        name: "The Woman Department",
        id: 12345
    }
]

const handleChanged = (id) => {
    if (departments.find(_dep => _dep.id === id)) {
        selectedDep = id
    }
}

const options: Array<IOption> = [
    {
        key: 45123,
        text: "45123 - The Man Department"
    },
    {
        key: 12345,
        text: "12345 - The Woman Department"
    }
]

function dropdownInfo(): IDropdownInfo {
    const info: IDropdownInfo = {
        title: "",
        key: selectedDep ? selectedDep.id : 0,
        placeHolder: "Departments",
    }
    info.title = selectedDep ? "Your Department:" : "Select a Department"

    return info
}

const boxForm = () => (form = FormTypes.NEW_BOX)

export const ddP = {
    handleChanged: handleChanged,
    options: options,
    dropdownInfo: dropdownInfo,
    initializeBoxForm: boxForm
}

export default ddP