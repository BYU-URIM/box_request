export interface iMockUser {
    name: string
    email: string
    username: string
    departments: number[]
}

export const mockUser:iMockUser = {
    name: "Greg Anderson",
    email: "email@gmail.com",
    username: "greggy",
    departments : [5555, 5556, 5557,],
}