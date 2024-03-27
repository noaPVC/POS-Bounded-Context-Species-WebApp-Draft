export interface DiverDto {
  id: number;
  username: string;
  profile_picture: string;
  description: string;
  rating: number;
  email: string;
  firstName: string;
  lastName: string;
  birthday: Date;
}

export interface loginRequest {
  userName: string;
  password: string;
}
