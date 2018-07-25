import { sessionStore } from "."

test("Function only pulls departments 101, which the user has.", () => {
    expect(
        sessionStore.userDepartments.map(department => department.id)
    ).toEqual([1, 2])
})
