export type Image = {
  url: string;
  fileName?: string;
  publicId?: string;
  id?: string;
};
export type Video = {
  url: string;
  fileName?: string;
  publicId?: string;
  id?: string;
};

export enum Location {
  online,
  teacherPlace,
  studentPlace,
}

export interface Faq {
  question: string;
  answer: string;
  id?: string;
}
export interface StudentReviewCardIE {
  name: string;
  image: Image;
  rating: number;
  text: string;
}

export interface Tutor {
  id: string;
  title: string;
  description: string;
  available: boolean;
  createdAt: string;
  experience?: Experience;
  teacherExperience: TeacherExperience[];
  education: Education[];
  languages?: Language[];
  homework?: Homework[];
  notes?: Notes[];
  videos?: Video[];
  skills?: string[];
  images?: Image[];
  testRecord?: Video;
  hourlyRate: number;
  checkMark: boolean;
  background: BGCheck;
  certificates: Certificate[];
  rating?: number;
  reviews?: Review[];
  recommendations?: Recommendation[];
  user: User;
  lessons: Lesson[];
  favBy?: Student[];
  availability?: Availability[];
  educationLevel?: EducationLevel[];
  pets: boolean;
  status: TeacherStatus;
}
export interface Education {
  school: string;
  degree: string;
  field: string;
  grade: string;
  startDate: string;
  endDate: string;
  image: Image;
}
export interface Category {
  name: string;
  id: string;
  status: "ACTIVE" | "INACTIVE";
}
export interface Subject {
  name: string;
  id: string;
  status: "ACTIVE" | "INACTIVE";
}

// Interface for Notes
export interface Notes {
  id: string;
  title: string;
  studentId: string;
  teacherId: string;
  createdAt: Date;
  updatedAt: Date;
  note?: string;
}

export interface Language {
  id?: string;
  name: string;
  proficiency?: Proficiency;
}

interface Homework {
  id: string;
  title: string;
  lessonId: string;
  teacherId: string;
  dueDate: Date;
  createdAt: Date;
  updatedAt: Date;
  note?: string;
  codeExample?: string;
  imageId?: string;
  videoId?: string;
  submissions: Submissions[];
}

export enum Proficiency {
  BEGINNER,
  INTERMEDIATE,
  ADVANCED,
  FLUENT,
}

// Interface for Submissions (details depend on your schema)
export interface Submissions {
  id: string;
  studentId: string;
  homeworkId: string;
  content: string;
  submittedAt: Date;
}

enum Role {
  ADMIN = "ADMIN",
  TEACHER = "TEACHER",
  STUDENT = "STUDENT",
  USER = "USER",
  BLOGADMIN = "BLOGADMIN",
}

enum Gender {
  MALE = "MALE",
  FEMALE = "FEMALE",
  UNSPECIFIED = "UNSPECIFIED",
}

interface Address {
  id: string;
  street?: string;
  city: string;
  state?: string;
  zipCode?: string;
  country: string;
  userId: string;
}

export interface Experience {
  id?: string;
  title: string;
  qualifications: string[];
  certifications: Image[];
  experienceYears: number;
  teacherId?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
export interface TeacherExperience {
  id: string;
  institution: string;
  JobTitle: string;
  location: string;
  employmentType: string;
  startDate: string;
  endDate: string;
  teacherId: string;
  createdAt: string;
  updatedAt: string;
}
export interface Certificate {
  name: string;
  organization: string;
  endDate: string;
  startDate: string;
  credentialId: string;
  credentialUrl: string;
  image: Image;
}
interface User {
  id: string;
  email: string;
  address?: Address;
  name: string;
  lastName: string;
  phone?: string;
  limited?: boolean;
  nationality?: string;
  profileImage: Image;
  role: Role;
  gender: Gender;
  isVerified?: boolean;
}
export interface GeoLocation {
  latitude: number;
  longitude: number;
  address?: string;
}
export interface TeacherStatus {
  PENDING?: string;
  APPROVED?: string;
  REJECTED?: string;
}

export interface EducationLevel {
  id?: string;
  university?: string;
  degree?: string;
  degreeType?: string;
  specialization?: string;
  startDate?: string;
  endDate?: string;
  teacherId?: string;
  teacher?: Teacher;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Student {
  id: string;
  user: User;
  bookings?: Booking[];
  notes?: Notes[];
  reviews?: Review[];
  promoCodes?: PromoCode[];
  inviteCode?: string;
  favLessons?: Lesson[];
  favTeachers?: Teacher[];
  recentlyViewed?: Teacher[];
  notifications?: Notification[];
  submissions?: Submissions[];
  adminBooking?: AdminBooking[];
}
export interface Teacher {
  id?: string;
  title?: string;
  description?: string;
  available?: boolean;
  experience?: Experience;
  skills?: string[];
  languages?: Language[];
  images?: Image[];
  videos?: Video[];
  testRecord?: Video;
  homework?: Homework[];
  notes?: Notes[];
  hourlyRate?: number;
  checkMark?: boolean;
  background?: BGCheck;
  rating: number;
  reviews?: Review[];
  userId?: string;
  user?: User;
  lessons?: Lesson[];
  favBy?: Student[];
  recentlyViewed?: Student[];
  createdAt?: Date;
  updatedAt?: Date;
  availability?: Availability[];
  educationLevel?: EducationLevel[];
  pets?: boolean;
  status?: TeacherStatus;
  notifications?: Notification[];
}

export interface Review {
  id: string;
  rating: number;
  comment: string;
  studentId?: string;
  student: Student;
  teacherId?: string;
  teacher?: Teacher;
  lessonId?: string;
  lesson?: Lesson;
  createdAt?: Date;
  updatedAt?: Date;
  courseId?: string;
}

export enum BookingStatus {
  PENDING = "PENDING",
  PENDINGPAYMENT = "PENDINGPAYMENT",
  ACCEPTED = "ACCEPTED",
  REJECTED = "REJECTED",
  CANCELLED = "CANCELLED",
  COMPLETED = "COMPLETED",
  REASSIGNED = "REASSIGNED",
}

export enum DayOfWeek {
  MONDAY = "MONDAY",
  TUESDAY = "TUESDAY",
  WEDNESDAY = "WEDNESDAY",
  THURSDAY = "THURSDAY",
  FRIDAY = "FRIDAY",
  SATURDAY = "SATURDAY",
  SUNDAY = "SUNDAY",
}
export interface Lesson {
  id: string;
  title: string;
  description: string;
  summary?: string;
  headLine?: string;
  travelDistance?: number;
  travelCharge?: number;
  onlinePrice?: number;
  studentPlacePrice?: number;
  teacherPlacePrice?: number;
  teacherId?: string;
  isGroup?: boolean;
  location?: Location[];
  timeCommitment?: string;
  learningGoals?: string[];
  materialsNeeded?: string[];
  rating?: number;
  level?: Level;
  maxStudents?: number;
  categories?: Category[];
  teacher?: Teacher;
  subjects?: Subject[];
  bookings?: Booking[];
  images?: Image[];
  videos?: Video[];
  adminBookings?: AdminBooking[];
  reviews?: Review[];
  recommendation?: Recommendation[];
  createdAt?: Date;
  updatedAt?: Date;
  favBy?: Student[];
  homeworks?: Homework[];
  fromAge?: number;
  toAge?: number;
  discount?: number;
  discountEndDate?: Date;
}
export type Recommendation = {
  id: string;
  name: string;
  profileImage: Image;
  feedback: string;
  rating: number;
  lastName: string;
  updatedAt: string;
};
export enum Level {
  BEGINNER = "BEGINNER",
  INTERMEDIATE = "INTERMEDIATE",
  ADVANCED = "ADVANCED",
}
export interface AdminBooking {
  id?: string;
  location?: Location;
  status?: BookingStatus;
  packageId?: string;
  studentId?: string;
  type?: BOOKINGTYPE;
  student?: Student;
  lessonId?: string;
  lesson?: Lesson;
  amount?: number;
  createdAt?: Date;
  updatedAt?: Date;
  subscription?: boolean;
  promoCodeId?: string;
}

export interface Booking {
  id?: string;
  location?: Location;
  status?: BookingStatus;
  packageId?: string;
  studentId?: string;
  type?: BOOKINGTYPE;
  student?: Student;
  lessonId?: string;
  lesson?: Lesson;
  classesDone?: number;
  persisted?: boolean;
  code?: string;
  amount?: number;
  createdAt?: Date;
  updatedAt?: Date;
  subscription?: boolean;
  groupLessonAppointmentId?: string;
  rebooked?: boolean;
}
export enum BOOKINGTYPE {
  WEEKLY = "WEEKLY",
  FLEXIBLE = "FLEXIBLE",
}

export enum PromoCodeStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
}

export enum PromoCodeType {
  INVITATION = "INVITATION",
  REGISTRATION = "REGISTRATION",
  GENERAL = "GENERAL",
}
export interface BGCheck {
  id?: string;
  teacherId?: string;
  teacher?: Teacher;
  status?: BackgroundCheckStatus;
  image?: Image;
  imageId?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
export interface Availability {
  id?: string;
  teacherId?: string;
  teacher?: Teacher;
  day?: DayOfWeek;
  times?: AvailabilityTime[];
  createdAt?: Date;
  updatedAt?: Date;
}

export interface AvailabilityTime {
  id?: string;
  availabilityId?: string;
  availability?: Availability;
  startTime?: Date;
  endTime?: Date;
  timeZone?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
export enum BackgroundCheckStatus {
  UNCHECKED = "UNCHECKED",
  CHECKED = "CHECKED",
  REJECTED = "REJECTED",
  ACCEPTED = "ACCEPTED",
}
export interface PromoCode {
  id?: string;
  code?: string;
  title?: string;
  percentage?: number;
  numOfUsers?: number;
  type?: PromoCodeType;
  count?: number;
  status?: PromoCodeStatus;
  maxUsage?: number;
  startDate?: Date;
  endDate?: Date;
  details?: string;
  terms?: string;
  students?: Student[];
  adminBookings?: AdminBooking[];
  createdAt?: Date;
  updatedAt?: Date;
}
