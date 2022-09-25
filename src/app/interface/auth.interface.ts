export interface ILoginRequest {
    userId: string,
    schoolId: string,
    password: string,
}

export interface IUserData {
    firstName: string,
    lastName: string,
    birthDate: string,
    phoneNumber: number,
    email: string,
    classId: string,
    profilePicture: string,
    jwtToken: string
}