export type TUserRole = 'user' | 'admin';
export type TUser = {
  _id: string;
  name: string;
  email: string;
  password: string;
  role: TUserRole;
  profilePhoto: string;
  phone: string;
  address: string;
  createdAt: string;
  updatedAt: string;
};
