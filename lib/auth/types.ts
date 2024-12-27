export type UserRole = 'super_admin' | 'admin' | 'user';

export interface UserData {
  uid: string;
  email: string;
  role: UserRole;
  displayName?: string;
  createdAt: number;
  fullName?: string;
  address?: string;
  phone?: string;
  state?: string;
  nationality?: string;
  gender?: string;
  age?: string;
  currentSkill?: string;
  experienceLevel?: string;
  linkedinUrl?: string;
  facebookUrl?: string;
}