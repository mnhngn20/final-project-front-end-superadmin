import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  JSONObject: any;
};

export type Amenity = {
  amenityType: AmenityType;
  amenityTypeId: Scalars['Float'];
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  isActive: Scalars['Boolean'];
  location: Location;
  locationId: Scalars['Float'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type AmenityListResponse = ListResponse & {
  items: Array<Amenity>;
  message?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
  totalPages?: Maybe<Scalars['Float']>;
};

export type AmenityResponse = IResponse & {
  amenity?: Maybe<Amenity>;
  message?: Maybe<Scalars['String']>;
};

export type AmenityType = {
  amenities?: Maybe<Array<Amenity>>;
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isActive: Scalars['Boolean'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type AmenityTypeListResponse = ListResponse & {
  items: Array<AmenityType>;
  message?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
  totalPages?: Maybe<Scalars['Float']>;
};

export type AmenityTypeResponse = IResponse & {
  amenityType?: Maybe<AmenityType>;
  message?: Maybe<Scalars['String']>;
};

export type ChangeLocationReservationStatusInput = {
  locationReservationId: Scalars['Float'];
  status: Scalars['String'];
};

export type ChangePasswordInput = {
  oldPassword: Scalars['String'];
  password: Scalars['String'];
};

export type ChangeUserStatusInput = {
  id: Scalars['Float'];
  isActive: Scalars['Boolean'];
};

export type ContactInformation = {
  address?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  location: Location;
  locationId: Scalars['Float'];
  name?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type CreateInstallationInput = {
  firebaseToken: Scalars['String'];
  userId: Scalars['Float'];
};

export type CreateStripeCheckoutInput = {
  cancelUrl: Scalars['String'];
  paymentId: Scalars['Float'];
  successUrl: Scalars['String'];
};

export type CreateUserInput = {
  address?: InputMaybe<Scalars['String']>;
  avatar?: InputMaybe<Scalars['String']>;
  dateOfBirth?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  identityNumber?: InputMaybe<Scalars['String']>;
  locationId?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  phoneNumber?: InputMaybe<Scalars['String']>;
  roomId?: InputMaybe<Scalars['Float']>;
};

export enum DiscountType {
  FixedCashDiscount = 'FixedCashDiscount',
  PercentageDiscount = 'PercentageDiscount',
}

export type Equipment = {
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  isActive: Scalars['Boolean'];
  location: Location;
  locationId: Scalars['Float'];
  name: Scalars['String'];
  room: Room;
  roomId: Scalars['Float'];
  updatedAt: Scalars['DateTime'];
};

export type EquipmentListResponse = ListResponse & {
  items: Array<Equipment>;
  message?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
  totalPages?: Maybe<Scalars['Float']>;
};

export type EquipmentResponse = IResponse & {
  equipment?: Maybe<Equipment>;
  message?: Maybe<Scalars['String']>;
};

export type GetAccessTokenInput = {
  refreshToken: Scalars['String'];
};

export type GetAmenitiesInput = {
  amenityTypeId?: InputMaybe<Scalars['Float']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Float']>;
  locationId?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
  orderBy?: InputMaybe<OrderBy>;
  page?: InputMaybe<Scalars['Float']>;
};

export type GetAmenityTypesInput = {
  isActive?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
  orderBy?: InputMaybe<OrderBy>;
  page?: InputMaybe<Scalars['Float']>;
};

export type GetEquipmentsInput = {
  isActive?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Float']>;
  locationId?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
  orderBy?: InputMaybe<OrderBy>;
  page?: InputMaybe<Scalars['Float']>;
  roomId?: InputMaybe<Scalars['Float']>;
};

export type GetIncidentCategoriesInput = {
  limit?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
  orderBy?: InputMaybe<OrderBy>;
  page?: InputMaybe<Scalars['Float']>;
};

export type GetIncidentsInput = {
  dueDate?: InputMaybe<Scalars['DateTime']>;
  employeeId?: InputMaybe<Scalars['Float']>;
  fromCustomer?: InputMaybe<Scalars['Boolean']>;
  incidentCategoryId?: InputMaybe<Scalars['Float']>;
  limit?: InputMaybe<Scalars['Float']>;
  locationId?: InputMaybe<Scalars['Float']>;
  orderBy?: InputMaybe<OrderBy>;
  page?: InputMaybe<Scalars['Float']>;
  priority?: InputMaybe<IncidentPriority>;
  reporterId?: InputMaybe<Scalars['Float']>;
  roomId?: InputMaybe<Scalars['Float']>;
  status?: InputMaybe<IncidentStatus>;
  title?: InputMaybe<Scalars['String']>;
};

export type GetLocationReservationsInput = {
  createdById?: InputMaybe<Scalars['Float']>;
  fromDate?: InputMaybe<Scalars['DateTime']>;
  limit?: InputMaybe<Scalars['Float']>;
  locationId?: InputMaybe<Scalars['Float']>;
  orderBy?: InputMaybe<OrderBy>;
  page?: InputMaybe<Scalars['Float']>;
  status?: InputMaybe<LocationReservationStatus>;
  toDate?: InputMaybe<Scalars['DateTime']>;
};

export type GetLocationServicesInput = {
  isActive?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
  orderBy?: InputMaybe<OrderBy>;
  page?: InputMaybe<Scalars['Float']>;
};

export type GetLocationsInput = {
  address?: InputMaybe<Scalars['String']>;
  distance?: InputMaybe<Scalars['Float']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  lat?: InputMaybe<Scalars['Float']>;
  limit?: InputMaybe<Scalars['Float']>;
  locationServiceIds?: InputMaybe<Array<Scalars['Float']>>;
  long?: InputMaybe<Scalars['Float']>;
  maxPrice?: InputMaybe<Scalars['Float']>;
  minPrice?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
  orderBy?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Float']>;
};

export type GetMyNotificationStatusResponse = {
  message: Scalars['String'];
  total: Scalars['Float'];
};

export type GetNotificationsInput = {
  isAdminOnly?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Float']>;
  locationId?: InputMaybe<Scalars['Float']>;
  orderBy?: InputMaybe<OrderBy>;
  page?: InputMaybe<Scalars['Float']>;
  type?: InputMaybe<NotificationType>;
  userId?: InputMaybe<Scalars['Float']>;
};

export type GetPaymentsInput = {
  floor?: InputMaybe<Scalars['Float']>;
  limit?: InputMaybe<Scalars['Float']>;
  locationId?: InputMaybe<Scalars['Float']>;
  locationReservationId?: InputMaybe<Scalars['Float']>;
  orderBy?: InputMaybe<OrderBy>;
  page?: InputMaybe<Scalars['Float']>;
  roomId?: InputMaybe<Scalars['Float']>;
  status?: InputMaybe<PaymentStatus>;
  userIds?: InputMaybe<Array<Scalars['Float']>>;
};

export type GetRoomsInput = {
  capacity?: InputMaybe<Scalars['Float']>;
  floor?: InputMaybe<Scalars['Float']>;
  limit?: InputMaybe<Scalars['Float']>;
  locationId?: InputMaybe<Scalars['Float']>;
  maxBasePrice?: InputMaybe<Scalars['Float']>;
  minBasePrice?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
  orderBy?: InputMaybe<OrderBy>;
  page?: InputMaybe<Scalars['Float']>;
  status?: InputMaybe<RoomStatus>;
};

export type GetUsersInput = {
  email?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Float']>;
  locationId?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
  orderBy?: InputMaybe<OrderBy>;
  page?: InputMaybe<Scalars['Float']>;
  role?: InputMaybe<UserRole>;
  roomId?: InputMaybe<Scalars['Float']>;
};

export enum IncidentPriority {
  High = 'High',
  Low = 'Low',
  Medium = 'Medium',
  Urgent = 'Urgent',
}

export enum IncidentStatus {
  Cancel = 'Cancel',
  Done = 'Done',
  InProgress = 'InProgress',
  Overdue = 'Overdue',
  ToDo = 'ToDo',
}

export type IResponse = {
  message?: Maybe<Scalars['String']>;
};

export type Incident = {
  completedDate?: Maybe<Scalars['DateTime']>;
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  dueDate?: Maybe<Scalars['DateTime']>;
  employee?: Maybe<User>;
  employeeId?: Maybe<Scalars['Float']>;
  fromCustomer?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  images?: Maybe<Scalars['String']>;
  incidentCategory: IncidentCategory;
  incidentCategoryId: Scalars['Float'];
  location: Location;
  locationId: Scalars['Float'];
  priority?: Maybe<IncidentPriority>;
  reportImages?: Maybe<Scalars['String']>;
  reportMessage?: Maybe<Scalars['String']>;
  reporter: User;
  reporterId: Scalars['Float'];
  room: Room;
  roomId: Scalars['Float'];
  status?: Maybe<IncidentStatus>;
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type IncidentCategory = {
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  incidents?: Maybe<Array<Incident>>;
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type IncidentCategoryListResponse = ListResponse & {
  items: Array<IncidentCategory>;
  message?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
  totalPages?: Maybe<Scalars['Float']>;
};

export type IncidentCategoryResponse = IResponse & {
  incidentCategory?: Maybe<IncidentCategory>;
  message?: Maybe<Scalars['String']>;
};

export type IncidentListResponse = ListResponse & {
  items: Array<Incident>;
  message?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
  totalPages?: Maybe<Scalars['Float']>;
};

export type IncidentResponse = IResponse & {
  incident?: Maybe<Incident>;
  message?: Maybe<Scalars['String']>;
};

export enum LocationReservationStatus {
  Completed = 'Completed',
  Draft = 'Draft',
  Published = 'Published',
}

export type ListResponse = {
  message?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
  totalPages?: Maybe<Scalars['Float']>;
};

export type ListUserResponse = ListResponse & {
  items: Array<User>;
  message?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
  totalPages?: Maybe<Scalars['Float']>;
};

export type Location = {
  address: Scalars['String'];
  amenities: Array<Amenity>;
  contactInformations?: Maybe<Array<ContactInformation>>;
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  electricCounterPrice?: Maybe<Scalars['Float']>;
  equipments?: Maybe<Array<Equipment>>;
  geoLocation?: Maybe<Scalars['JSONObject']>;
  id: Scalars['ID'];
  images?: Maybe<Scalars['String']>;
  incidents: Array<Incident>;
  income: Scalars['Float'];
  isActive: Scalars['Boolean'];
  lat?: Maybe<Scalars['Float']>;
  locationReservations?: Maybe<Array<LocationReservation>>;
  locationServices: Array<LocationService>;
  long?: Maybe<Scalars['Float']>;
  minPrice?: Maybe<Scalars['Float']>;
  name: Scalars['String'];
  notification: Array<Notification>;
  numOfFloor?: Maybe<Scalars['Float']>;
  payments?: Maybe<Array<Payment>>;
  rooms?: Maybe<Array<Room>>;
  stripeAccountId?: Maybe<Scalars['String']>;
  thumbnail?: Maybe<Scalars['String']>;
  totalRevenue?: Maybe<Scalars['Float']>;
  updatedAt: Scalars['DateTime'];
  users?: Maybe<Array<User>>;
};

export type LocationContactInformationInput = {
  address?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
};

export type LocationListResponse = ListResponse & {
  items: Array<Location>;
  message?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
  totalPages?: Maybe<Scalars['Float']>;
};

export type LocationReservation = {
  createdAt: Scalars['DateTime'];
  createdBy: User;
  createdById: Scalars['Float'];
  id: Scalars['ID'];
  location: Location;
  locationId: Scalars['Float'];
  payments?: Maybe<Array<Payment>>;
  startDate: Scalars['DateTime'];
  status: Scalars['String'];
  totalCalculatedPrice: Scalars['Float'];
  totalReceivedPrice: Scalars['Float'];
  updatedAt: Scalars['DateTime'];
};

export type LocationReservationListResponse = ListResponse & {
  items: Array<LocationReservation>;
  message?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
  totalPages?: Maybe<Scalars['Float']>;
};

export type LocationReservationResponse = IResponse & {
  locationReservation?: Maybe<LocationReservation>;
  message?: Maybe<Scalars['String']>;
};

export type LocationResponse = IResponse & {
  location?: Maybe<Location>;
  message?: Maybe<Scalars['String']>;
};

export type LocationService = {
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isActive: Scalars['Boolean'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type LocationServiceListResponse = ListResponse & {
  items: Array<LocationService>;
  message?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
  totalPages?: Maybe<Scalars['Float']>;
};

export type LocationServiceResponse = IResponse & {
  locationService?: Maybe<LocationService>;
  message?: Maybe<Scalars['String']>;
};

export type LoginResponse = IResponse & {
  accessToken?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type Mutation = {
  authorizeCode: Scalars['String'];
  changeLocationReservationStatus: LocationReservationResponse;
  changePassword: Scalars['String'];
  changeUserStatus: Scalars['String'];
  createInstallation: Scalars['String'];
  createStripeCheckoutSession: StripeResponse;
  createUser: UserResponse;
  deleteAmenity: Scalars['String'];
  deleteEquipment: Scalars['String'];
  deleteLocationReservation: Scalars['String'];
  deleteRoom: Scalars['String'];
  getAccessToken: LoginResponse;
  login: LoginResponse;
  manuallyPay: PaymentResponse;
  readNotification: Scalars['String'];
  register: UserResponse;
  resetPassword: ResetPasswordResponse;
  resetPasswordConfirm: ResetPasswordResponse;
  updateAmenityStatus: AmenityResponse;
  updateEquipmentStatus: EquipmentResponse;
  updateIncidentForEmployee: IncidentResponse;
  updateLocationStatus: LocationResponse;
  updateMe: UserResponse;
  updatePaymentStatus: PaymentResponse;
  updateUser: UserResponse;
  upsertAmenity: AmenityResponse;
  upsertAmenityType: AmenityTypeResponse;
  upsertEquipment: EquipmentResponse;
  upsertIncident: IncidentResponse;
  upsertIncidentCategory: IncidentCategoryResponse;
  upsertLocation: LocationResponse;
  upsertLocationReservation: LocationReservationResponse;
  upsertLocationService: LocationServiceResponse;
  upsertPayment: PaymentResponse;
  upsertRoom: RoomResponse;
};

export type MutationAuthorizeCodeArgs = {
  code: Scalars['String'];
};

export type MutationChangeLocationReservationStatusArgs = {
  input: ChangeLocationReservationStatusInput;
};

export type MutationChangePasswordArgs = {
  input: ChangePasswordInput;
};

export type MutationChangeUserStatusArgs = {
  input: ChangeUserStatusInput;
};

export type MutationCreateInstallationArgs = {
  input: CreateInstallationInput;
};

export type MutationCreateStripeCheckoutSessionArgs = {
  input: CreateStripeCheckoutInput;
};

export type MutationCreateUserArgs = {
  input: CreateUserInput;
};

export type MutationDeleteAmenityArgs = {
  id: Scalars['Float'];
};

export type MutationDeleteEquipmentArgs = {
  id: Scalars['Float'];
};

export type MutationDeleteLocationReservationArgs = {
  id: Scalars['Float'];
};

export type MutationDeleteRoomArgs = {
  id: Scalars['Float'];
};

export type MutationGetAccessTokenArgs = {
  input: GetAccessTokenInput;
};

export type MutationLoginArgs = {
  input: RegisterLoginInput;
};

export type MutationManuallyPayArgs = {
  id: Scalars['Float'];
};

export type MutationReadNotificationArgs = {
  id: Scalars['Float'];
};

export type MutationRegisterArgs = {
  input: RegisterLoginInput;
};

export type MutationResetPasswordArgs = {
  email: Scalars['String'];
};

export type MutationResetPasswordConfirmArgs = {
  input: ResetPasswordConfirmInput;
};

export type MutationUpdateAmenityStatusArgs = {
  input: UpdateAmenityStatusInput;
};

export type MutationUpdateEquipmentStatusArgs = {
  input: UpdateEquipmentStatusInput;
};

export type MutationUpdateIncidentForEmployeeArgs = {
  input: UpdateIncidentForEmployeeInput;
};

export type MutationUpdateLocationStatusArgs = {
  input: UpdateLocationStatusInput;
};

export type MutationUpdateMeArgs = {
  input: UpdateMeInput;
};

export type MutationUpdatePaymentStatusArgs = {
  input: UpdatePaymentStatusInput;
};

export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};

export type MutationUpsertAmenityArgs = {
  input: UpsertAmenityInput;
};

export type MutationUpsertAmenityTypeArgs = {
  input: UpsertAmenityTypeInput;
};

export type MutationUpsertEquipmentArgs = {
  input: UpsertEquipmentInput;
};

export type MutationUpsertIncidentArgs = {
  input: UpsertIncidentInput;
};

export type MutationUpsertIncidentCategoryArgs = {
  input: UpsertIncidentCategoriesInput;
};

export type MutationUpsertLocationArgs = {
  input: UpsertLocationInput;
};

export type MutationUpsertLocationReservationArgs = {
  input: UpsertLocationReservationInput;
};

export type MutationUpsertLocationServiceArgs = {
  input: UpsertLocationServiceInput;
};

export type MutationUpsertPaymentArgs = {
  input: UpsertPaymentInput;
};

export type MutationUpsertRoomArgs = {
  input: UpsertRoomInput;
};

export enum NotificationType {
  Announcement = 'Announcement',
  Incident = 'Incident',
  Other = 'Other',
  Payment = 'Payment',
}

export type Notification = {
  content?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  dataId?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  isAdminOnly?: Maybe<Scalars['Boolean']>;
  isRead?: Maybe<Scalars['Boolean']>;
  location?: Maybe<Location>;
  locationId?: Maybe<Scalars['Float']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['Float'];
};

export type NotificationListResponse = ListResponse & {
  items: Array<Notification>;
  message?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
  totalPages?: Maybe<Scalars['Float']>;
};

export enum OrderBy {
  Asc = 'ASC',
  Desc = 'DESC',
}

export enum PaymentStatus {
  Canceled = 'Canceled',
  MissingLivingPrice = 'MissingLivingPrice',
  Paid = 'Paid',
  Unpaid = 'Unpaid',
}

export type Payment = {
  createdAt: Scalars['DateTime'];
  discount?: Maybe<Scalars['Float']>;
  discountType?: Maybe<DiscountType>;
  electricCounter?: Maybe<Scalars['Float']>;
  extraFee?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  location: Location;
  locationId: Scalars['Float'];
  locationReservation: LocationReservation;
  locationReservationId: Scalars['Float'];
  prePaidFee?: Maybe<Scalars['Float']>;
  room: Room;
  roomId: Scalars['Float'];
  status: PaymentStatus;
  totalPrice?: Maybe<Scalars['Float']>;
  updatedAt: Scalars['DateTime'];
  users?: Maybe<Array<User>>;
  waterPrice?: Maybe<Scalars['Float']>;
};

export type PaymentListResponse = ListResponse & {
  items: Array<Payment>;
  message?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
  totalPages?: Maybe<Scalars['Float']>;
};

export type PaymentResponse = IResponse & {
  message?: Maybe<Scalars['String']>;
  payment?: Maybe<Payment>;
};

export type Query = {
  getAmenities: AmenityListResponse;
  getAmenity: AmenityResponse;
  getAmenityType: AmenityTypeResponse;
  getAmenityTypes: AmenityTypeListResponse;
  getEquipment: EquipmentResponse;
  getEquipments: EquipmentListResponse;
  getIncident: IncidentResponse;
  getIncidentCategories: IncidentCategoryListResponse;
  getIncidentCategory: IncidentCategoryResponse;
  getIncidents: IncidentListResponse;
  getLocation: LocationResponse;
  getLocationReservation: LocationReservationResponse;
  getLocationReservations: LocationReservationListResponse;
  getLocationService: LocationServiceResponse;
  getLocationServices: LocationServiceListResponse;
  getLocations: LocationListResponse;
  getMyNotificationStatus: GetMyNotificationStatusResponse;
  getNotifications: NotificationListResponse;
  getPayment: PaymentResponse;
  getPayments: PaymentListResponse;
  getRoom: RoomResponse;
  getRooms: RoomListResponse;
  getUser: UserResponse;
  getUsers: ListUserResponse;
  me: UserResponse;
};

export type QueryGetAmenitiesArgs = {
  input: GetAmenitiesInput;
};

export type QueryGetAmenityArgs = {
  id: Scalars['Float'];
};

export type QueryGetAmenityTypeArgs = {
  id: Scalars['Float'];
};

export type QueryGetAmenityTypesArgs = {
  input: GetAmenityTypesInput;
};

export type QueryGetEquipmentArgs = {
  id: Scalars['Float'];
};

export type QueryGetEquipmentsArgs = {
  input: GetEquipmentsInput;
};

export type QueryGetIncidentArgs = {
  id: Scalars['Float'];
};

export type QueryGetIncidentCategoriesArgs = {
  input: GetIncidentCategoriesInput;
};

export type QueryGetIncidentCategoryArgs = {
  id: Scalars['Float'];
};

export type QueryGetIncidentsArgs = {
  input: GetIncidentsInput;
};

export type QueryGetLocationArgs = {
  id: Scalars['Float'];
};

export type QueryGetLocationReservationArgs = {
  id: Scalars['Float'];
};

export type QueryGetLocationReservationsArgs = {
  input: GetLocationReservationsInput;
};

export type QueryGetLocationServiceArgs = {
  id: Scalars['Float'];
};

export type QueryGetLocationServicesArgs = {
  input: GetLocationServicesInput;
};

export type QueryGetLocationsArgs = {
  input: GetLocationsInput;
};

export type QueryGetNotificationsArgs = {
  input: GetNotificationsInput;
};

export type QueryGetPaymentArgs = {
  id: Scalars['Float'];
};

export type QueryGetPaymentsArgs = {
  input: GetPaymentsInput;
};

export type QueryGetRoomArgs = {
  id: Scalars['Float'];
};

export type QueryGetRoomsArgs = {
  input: GetRoomsInput;
};

export type QueryGetUserArgs = {
  id: Scalars['Float'];
};

export type QueryGetUsersArgs = {
  input: GetUsersInput;
};

export enum RoomStatus {
  Available = 'Available',
  NotAvailable = 'NotAvailable',
  Owned = 'Owned',
}

export type RegisterLoginInput = {
  address?: InputMaybe<Scalars['String']>;
  dateOfBirth?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  identityNumber?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
};

export type ResetPasswordConfirmInput = {
  password: Scalars['String'];
  token: Scalars['String'];
};

export type ResetPasswordResponse = {
  message?: Maybe<Scalars['String']>;
};

export type Room = {
  basePrice: Scalars['Float'];
  capacity?: Maybe<Scalars['Float']>;
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  equipments?: Maybe<Array<Equipment>>;
  floor?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  images?: Maybe<Scalars['String']>;
  incidents?: Maybe<Array<Incident>>;
  location?: Maybe<Location>;
  locationId: Scalars['Float'];
  name?: Maybe<Scalars['String']>;
  payments?: Maybe<Array<Payment>>;
  status: RoomStatus;
  thumbnail?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  users?: Maybe<Array<User>>;
};

export type RoomListResponse = ListResponse & {
  items: Array<Room>;
  message?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
  totalPages?: Maybe<Scalars['Float']>;
};

export type RoomResponse = IResponse & {
  message?: Maybe<Scalars['String']>;
  room?: Maybe<Room>;
};

export type StripeResponse = IResponse & {
  message?: Maybe<Scalars['String']>;
  url: Scalars['String'];
};

export enum UserRole {
  Admin = 'Admin',
  Customer = 'Customer',
  SuperAdmin = 'SuperAdmin',
}

export type UpdateAmenityStatusInput = {
  id: Scalars['Float'];
  isActive?: InputMaybe<Scalars['Boolean']>;
};

export type UpdateEquipmentStatusInput = {
  id: Scalars['Float'];
  isActive?: InputMaybe<Scalars['Boolean']>;
};

export type UpdateIncidentForEmployeeInput = {
  employeeId?: InputMaybe<Scalars['Float']>;
  id: Scalars['Float'];
  priority?: InputMaybe<Scalars['String']>;
  reportImages?: InputMaybe<Scalars['String']>;
  reportMessage?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<IncidentStatus>;
};

export type UpdateLocationStatusInput = {
  id: Scalars['Float'];
  isActive: Scalars['Boolean'];
};

export type UpdateMeInput = {
  address?: InputMaybe<Scalars['String']>;
  avatar?: InputMaybe<Scalars['String']>;
  dateOfBirth?: InputMaybe<Scalars['DateTime']>;
  identityNumber?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
};

export type UpdatePaymentStatusInput = {
  id: Scalars['Float'];
  status: PaymentStatus;
};

export type UpdateUserInput = {
  address?: InputMaybe<Scalars['String']>;
  avatar?: InputMaybe<Scalars['String']>;
  dateOfBirth?: InputMaybe<Scalars['DateTime']>;
  id: Scalars['Float'];
  identityNumber?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  roomId?: InputMaybe<Scalars['Float']>;
};

export type UpsertAmenityInput = {
  amenityTypeId: Scalars['Float'];
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Float']>;
  image?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  locationId?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
};

export type UpsertAmenityTypeInput = {
  description?: InputMaybe<Scalars['String']>;
  icon?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Float']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
};

export type UpsertEquipmentInput = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Float']>;
  image?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  roomId: Scalars['Float'];
};

export type UpsertIncidentCategoriesInput = {
  description?: InputMaybe<Scalars['String']>;
  icon?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Float']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
};

export type UpsertIncidentInput = {
  description?: InputMaybe<Scalars['String']>;
  dueDate?: InputMaybe<Scalars['DateTime']>;
  employeeId?: InputMaybe<Scalars['Float']>;
  fromCustomer?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['Float']>;
  images?: InputMaybe<Scalars['String']>;
  incidentCategoryId: Scalars['Float'];
  locationId: Scalars['Float'];
  priority?: InputMaybe<IncidentPriority>;
  reportImages?: InputMaybe<Scalars['String']>;
  reportMessage?: InputMaybe<Scalars['String']>;
  reporterId: Scalars['Float'];
  roomId?: InputMaybe<Scalars['Float']>;
  status?: InputMaybe<IncidentStatus>;
  title?: InputMaybe<Scalars['String']>;
};

export type UpsertLocationInput = {
  address?: InputMaybe<Scalars['String']>;
  contactInformations?: InputMaybe<Array<LocationContactInformationInput>>;
  description?: InputMaybe<Scalars['String']>;
  electricCounterPrice?: InputMaybe<Scalars['Float']>;
  id?: InputMaybe<Scalars['Float']>;
  images?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  lat?: InputMaybe<Scalars['Float']>;
  locationServiceIds?: InputMaybe<Array<Scalars['Float']>>;
  long?: InputMaybe<Scalars['Float']>;
  minPrice?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
  numOfFloor: Scalars['Float'];
  thumbnail?: InputMaybe<Scalars['String']>;
};

export type UpsertLocationReservationInput = {
  createdById: Scalars['Float'];
  id?: InputMaybe<Scalars['Float']>;
  locationId: Scalars['Float'];
  startDate: Scalars['DateTime'];
  status?: InputMaybe<LocationReservationStatus>;
};

export type UpsertLocationServiceInput = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Float']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
};

export type UpsertPaymentInput = {
  discount?: InputMaybe<Scalars['Float']>;
  discountType?: InputMaybe<DiscountType>;
  electricCounter?: InputMaybe<Scalars['Float']>;
  extraFee?: InputMaybe<Scalars['Float']>;
  id?: InputMaybe<Scalars['Float']>;
  locationId: Scalars['Float'];
  locationReservationId: Scalars['Float'];
  prePaidFee?: InputMaybe<Scalars['Float']>;
  roomId: Scalars['Float'];
  status?: InputMaybe<PaymentStatus>;
  userIds?: InputMaybe<Array<Scalars['Float']>>;
  waterPrice?: InputMaybe<Scalars['Float']>;
};

export type UpsertRoomInput = {
  basePrice?: InputMaybe<Scalars['Float']>;
  capacity?: InputMaybe<Scalars['Float']>;
  description?: InputMaybe<Scalars['String']>;
  floor?: InputMaybe<Scalars['Float']>;
  id?: InputMaybe<Scalars['Float']>;
  images?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  thumbnail?: InputMaybe<Scalars['String']>;
};

export type User = {
  address?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  dateOfBirth: Scalars['DateTime'];
  email: Scalars['String'];
  employeeIncidents?: Maybe<Array<Incident>>;
  firebaseToken?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  identityNumber?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  location?: Maybe<Location>;
  locationId?: Maybe<Scalars['Float']>;
  locationReservations?: Maybe<Array<LocationReservation>>;
  name: Scalars['String'];
  notification?: Maybe<Array<Notification>>;
  payments?: Maybe<Array<Payment>>;
  phoneNumber?: Maybe<Scalars['String']>;
  reportIncidents?: Maybe<Array<Incident>>;
  role: UserRole;
  room?: Maybe<Room>;
  roomId?: Maybe<Scalars['Float']>;
  updatedAt: Scalars['DateTime'];
};

export type UserResponse = IResponse & {
  message?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export const ChangePasswordDocument = gql`
  mutation changePassword($input: ChangePasswordInput!) {
    changePassword(input: $input)
  }
`;
export type ChangePasswordMutationFn = Apollo.MutationFunction<
  ChangePasswordMutation,
  ChangePasswordMutationVariables
>;

/**
 * __useChangePasswordMutation__
 *
 * To run a mutation, you first call `useChangePasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangePasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changePasswordMutation, { data, loading, error }] = useChangePasswordMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useChangePasswordMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ChangePasswordMutation,
    ChangePasswordMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    ChangePasswordMutation,
    ChangePasswordMutationVariables
  >(ChangePasswordDocument, options);
}
export type ChangePasswordMutationHookResult = ReturnType<
  typeof useChangePasswordMutation
>;
export type ChangePasswordMutationResult =
  Apollo.MutationResult<ChangePasswordMutation>;
export type ChangePasswordMutationOptions = Apollo.BaseMutationOptions<
  ChangePasswordMutation,
  ChangePasswordMutationVariables
>;
export const CreateUserDocument = gql`
  mutation createUser($input: CreateUserInput!) {
    createUser(input: $input) {
      message
      user {
        id
      }
    }
  }
`;
export type CreateUserMutationFn = Apollo.MutationFunction<
  CreateUserMutation,
  CreateUserMutationVariables
>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateUserMutation,
    CreateUserMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(
    CreateUserDocument,
    options,
  );
}
export type CreateUserMutationHookResult = ReturnType<
  typeof useCreateUserMutation
>;
export type CreateUserMutationResult =
  Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<
  CreateUserMutation,
  CreateUserMutationVariables
>;
export const LoginDocument = gql`
  mutation login($input: RegisterLoginInput!) {
    login(input: $input) {
      message
      accessToken
      refreshToken
      user {
        id
        email
        name
        identityNumber
        dateOfBirth
        avatar
        phoneNumber
        isActive
        role
        locationId
        location {
          id
          name
        }
      }
    }
  }
`;
export type LoginMutationFn = Apollo.MutationFunction<
  LoginMutation,
  LoginMutationVariables
>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LoginMutation,
    LoginMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<LoginMutation, LoginMutationVariables>(
    LoginDocument,
    options,
  );
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<
  LoginMutation,
  LoginMutationVariables
>;
export const UpdateLocationStatusDocument = gql`
  mutation updateLocationStatus($input: UpdateLocationStatusInput!) {
    updateLocationStatus(input: $input) {
      message
      location {
        id
      }
    }
  }
`;
export type UpdateLocationStatusMutationFn = Apollo.MutationFunction<
  UpdateLocationStatusMutation,
  UpdateLocationStatusMutationVariables
>;

/**
 * __useUpdateLocationStatusMutation__
 *
 * To run a mutation, you first call `useUpdateLocationStatusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateLocationStatusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateLocationStatusMutation, { data, loading, error }] = useUpdateLocationStatusMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateLocationStatusMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateLocationStatusMutation,
    UpdateLocationStatusMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateLocationStatusMutation,
    UpdateLocationStatusMutationVariables
  >(UpdateLocationStatusDocument, options);
}
export type UpdateLocationStatusMutationHookResult = ReturnType<
  typeof useUpdateLocationStatusMutation
>;
export type UpdateLocationStatusMutationResult =
  Apollo.MutationResult<UpdateLocationStatusMutation>;
export type UpdateLocationStatusMutationOptions = Apollo.BaseMutationOptions<
  UpdateLocationStatusMutation,
  UpdateLocationStatusMutationVariables
>;
export const UpdateMeDocument = gql`
  mutation updateMe($input: UpdateMeInput!) {
    updateMe(input: $input) {
      message
      user {
        id
      }
    }
  }
`;
export type UpdateMeMutationFn = Apollo.MutationFunction<
  UpdateMeMutation,
  UpdateMeMutationVariables
>;

/**
 * __useUpdateMeMutation__
 *
 * To run a mutation, you first call `useUpdateMeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMeMutation, { data, loading, error }] = useUpdateMeMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateMeMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateMeMutation,
    UpdateMeMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdateMeMutation, UpdateMeMutationVariables>(
    UpdateMeDocument,
    options,
  );
}
export type UpdateMeMutationHookResult = ReturnType<typeof useUpdateMeMutation>;
export type UpdateMeMutationResult = Apollo.MutationResult<UpdateMeMutation>;
export type UpdateMeMutationOptions = Apollo.BaseMutationOptions<
  UpdateMeMutation,
  UpdateMeMutationVariables
>;
export const UpdateUserDocument = gql`
  mutation updateUser($input: UpdateUserInput!) {
    updateUser(input: $input) {
      message
      user {
        id
      }
    }
  }
`;
export type UpdateUserMutationFn = Apollo.MutationFunction<
  UpdateUserMutation,
  UpdateUserMutationVariables
>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateUserMutation,
    UpdateUserMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(
    UpdateUserDocument,
    options,
  );
}
export type UpdateUserMutationHookResult = ReturnType<
  typeof useUpdateUserMutation
>;
export type UpdateUserMutationResult =
  Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<
  UpdateUserMutation,
  UpdateUserMutationVariables
>;
export const UpsertAmenityTypeDocument = gql`
  mutation upsertAmenityType($input: UpsertAmenityTypeInput!) {
    upsertAmenityType(input: $input) {
      message
      amenityType {
        id
      }
    }
  }
`;
export type UpsertAmenityTypeMutationFn = Apollo.MutationFunction<
  UpsertAmenityTypeMutation,
  UpsertAmenityTypeMutationVariables
>;

/**
 * __useUpsertAmenityTypeMutation__
 *
 * To run a mutation, you first call `useUpsertAmenityTypeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpsertAmenityTypeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [upsertAmenityTypeMutation, { data, loading, error }] = useUpsertAmenityTypeMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpsertAmenityTypeMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpsertAmenityTypeMutation,
    UpsertAmenityTypeMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpsertAmenityTypeMutation,
    UpsertAmenityTypeMutationVariables
  >(UpsertAmenityTypeDocument, options);
}
export type UpsertAmenityTypeMutationHookResult = ReturnType<
  typeof useUpsertAmenityTypeMutation
>;
export type UpsertAmenityTypeMutationResult =
  Apollo.MutationResult<UpsertAmenityTypeMutation>;
export type UpsertAmenityTypeMutationOptions = Apollo.BaseMutationOptions<
  UpsertAmenityTypeMutation,
  UpsertAmenityTypeMutationVariables
>;
export const UpsertIncidentCategoryDocument = gql`
  mutation upsertIncidentCategory($input: UpsertIncidentCategoriesInput!) {
    upsertIncidentCategory(input: $input) {
      message
      incidentCategory {
        id
      }
    }
  }
`;
export type UpsertIncidentCategoryMutationFn = Apollo.MutationFunction<
  UpsertIncidentCategoryMutation,
  UpsertIncidentCategoryMutationVariables
>;

/**
 * __useUpsertIncidentCategoryMutation__
 *
 * To run a mutation, you first call `useUpsertIncidentCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpsertIncidentCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [upsertIncidentCategoryMutation, { data, loading, error }] = useUpsertIncidentCategoryMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpsertIncidentCategoryMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpsertIncidentCategoryMutation,
    UpsertIncidentCategoryMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpsertIncidentCategoryMutation,
    UpsertIncidentCategoryMutationVariables
  >(UpsertIncidentCategoryDocument, options);
}
export type UpsertIncidentCategoryMutationHookResult = ReturnType<
  typeof useUpsertIncidentCategoryMutation
>;
export type UpsertIncidentCategoryMutationResult =
  Apollo.MutationResult<UpsertIncidentCategoryMutation>;
export type UpsertIncidentCategoryMutationOptions = Apollo.BaseMutationOptions<
  UpsertIncidentCategoryMutation,
  UpsertIncidentCategoryMutationVariables
>;
export const UpsertLocationDocument = gql`
  mutation upsertLocation($input: UpsertLocationInput!) {
    upsertLocation(input: $input) {
      message
      location {
        id
      }
    }
  }
`;
export type UpsertLocationMutationFn = Apollo.MutationFunction<
  UpsertLocationMutation,
  UpsertLocationMutationVariables
>;

/**
 * __useUpsertLocationMutation__
 *
 * To run a mutation, you first call `useUpsertLocationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpsertLocationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [upsertLocationMutation, { data, loading, error }] = useUpsertLocationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpsertLocationMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpsertLocationMutation,
    UpsertLocationMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpsertLocationMutation,
    UpsertLocationMutationVariables
  >(UpsertLocationDocument, options);
}
export type UpsertLocationMutationHookResult = ReturnType<
  typeof useUpsertLocationMutation
>;
export type UpsertLocationMutationResult =
  Apollo.MutationResult<UpsertLocationMutation>;
export type UpsertLocationMutationOptions = Apollo.BaseMutationOptions<
  UpsertLocationMutation,
  UpsertLocationMutationVariables
>;
export const UpsertLocationServiceDocument = gql`
  mutation upsertLocationService($input: UpsertLocationServiceInput!) {
    upsertLocationService(input: $input) {
      message
      locationService {
        id
      }
    }
  }
`;
export type UpsertLocationServiceMutationFn = Apollo.MutationFunction<
  UpsertLocationServiceMutation,
  UpsertLocationServiceMutationVariables
>;

/**
 * __useUpsertLocationServiceMutation__
 *
 * To run a mutation, you first call `useUpsertLocationServiceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpsertLocationServiceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [upsertLocationServiceMutation, { data, loading, error }] = useUpsertLocationServiceMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpsertLocationServiceMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpsertLocationServiceMutation,
    UpsertLocationServiceMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpsertLocationServiceMutation,
    UpsertLocationServiceMutationVariables
  >(UpsertLocationServiceDocument, options);
}
export type UpsertLocationServiceMutationHookResult = ReturnType<
  typeof useUpsertLocationServiceMutation
>;
export type UpsertLocationServiceMutationResult =
  Apollo.MutationResult<UpsertLocationServiceMutation>;
export type UpsertLocationServiceMutationOptions = Apollo.BaseMutationOptions<
  UpsertLocationServiceMutation,
  UpsertLocationServiceMutationVariables
>;
export const ChangeUserStatusDocument = gql`
  mutation changeUserStatus($input: ChangeUserStatusInput!) {
    changeUserStatus(input: $input)
  }
`;
export type ChangeUserStatusMutationFn = Apollo.MutationFunction<
  ChangeUserStatusMutation,
  ChangeUserStatusMutationVariables
>;

/**
 * __useChangeUserStatusMutation__
 *
 * To run a mutation, you first call `useChangeUserStatusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeUserStatusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeUserStatusMutation, { data, loading, error }] = useChangeUserStatusMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useChangeUserStatusMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ChangeUserStatusMutation,
    ChangeUserStatusMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    ChangeUserStatusMutation,
    ChangeUserStatusMutationVariables
  >(ChangeUserStatusDocument, options);
}
export type ChangeUserStatusMutationHookResult = ReturnType<
  typeof useChangeUserStatusMutation
>;
export type ChangeUserStatusMutationResult =
  Apollo.MutationResult<ChangeUserStatusMutation>;
export type ChangeUserStatusMutationOptions = Apollo.BaseMutationOptions<
  ChangeUserStatusMutation,
  ChangeUserStatusMutationVariables
>;
export const GetAmenityTypeDocument = gql`
  query getAmenityType($id: Float!) {
    getAmenityType(id: $id) {
      message
      amenityType {
        id
        name
        icon
        isActive
        description
        createdAt
        updatedAt
      }
    }
  }
`;

/**
 * __useGetAmenityTypeQuery__
 *
 * To run a query within a React component, call `useGetAmenityTypeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAmenityTypeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAmenityTypeQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetAmenityTypeQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetAmenityTypeQuery,
    GetAmenityTypeQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetAmenityTypeQuery, GetAmenityTypeQueryVariables>(
    GetAmenityTypeDocument,
    options,
  );
}
export function useGetAmenityTypeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAmenityTypeQuery,
    GetAmenityTypeQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetAmenityTypeQuery, GetAmenityTypeQueryVariables>(
    GetAmenityTypeDocument,
    options,
  );
}
export type GetAmenityTypeQueryHookResult = ReturnType<
  typeof useGetAmenityTypeQuery
>;
export type GetAmenityTypeLazyQueryHookResult = ReturnType<
  typeof useGetAmenityTypeLazyQuery
>;
export type GetAmenityTypeQueryResult = Apollo.QueryResult<
  GetAmenityTypeQuery,
  GetAmenityTypeQueryVariables
>;
export function refetchGetAmenityTypeQuery(
  variables: GetAmenityTypeQueryVariables,
) {
  return { query: GetAmenityTypeDocument, variables: variables };
}
export const GetAmenityTypesDocument = gql`
  query getAmenityTypes($input: GetAmenityTypesInput!) {
    getAmenityTypes(input: $input) {
      page
      total
      totalPages
      message
      items {
        id
        name
        icon
        description
        isActive
        createdAt
        updatedAt
      }
    }
  }
`;

/**
 * __useGetAmenityTypesQuery__
 *
 * To run a query within a React component, call `useGetAmenityTypesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAmenityTypesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAmenityTypesQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetAmenityTypesQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetAmenityTypesQuery,
    GetAmenityTypesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetAmenityTypesQuery, GetAmenityTypesQueryVariables>(
    GetAmenityTypesDocument,
    options,
  );
}
export function useGetAmenityTypesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAmenityTypesQuery,
    GetAmenityTypesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetAmenityTypesQuery,
    GetAmenityTypesQueryVariables
  >(GetAmenityTypesDocument, options);
}
export type GetAmenityTypesQueryHookResult = ReturnType<
  typeof useGetAmenityTypesQuery
>;
export type GetAmenityTypesLazyQueryHookResult = ReturnType<
  typeof useGetAmenityTypesLazyQuery
>;
export type GetAmenityTypesQueryResult = Apollo.QueryResult<
  GetAmenityTypesQuery,
  GetAmenityTypesQueryVariables
>;
export function refetchGetAmenityTypesQuery(
  variables: GetAmenityTypesQueryVariables,
) {
  return { query: GetAmenityTypesDocument, variables: variables };
}
export const GetIncidentCategoriesDocument = gql`
  query getIncidentCategories($input: GetIncidentCategoriesInput!) {
    getIncidentCategories(input: $input) {
      page
      total
      totalPages
      message
      items {
        id
        name
        description
        icon
        createdAt
        updatedAt
      }
    }
  }
`;

/**
 * __useGetIncidentCategoriesQuery__
 *
 * To run a query within a React component, call `useGetIncidentCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetIncidentCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetIncidentCategoriesQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetIncidentCategoriesQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetIncidentCategoriesQuery,
    GetIncidentCategoriesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetIncidentCategoriesQuery,
    GetIncidentCategoriesQueryVariables
  >(GetIncidentCategoriesDocument, options);
}
export function useGetIncidentCategoriesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetIncidentCategoriesQuery,
    GetIncidentCategoriesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetIncidentCategoriesQuery,
    GetIncidentCategoriesQueryVariables
  >(GetIncidentCategoriesDocument, options);
}
export type GetIncidentCategoriesQueryHookResult = ReturnType<
  typeof useGetIncidentCategoriesQuery
>;
export type GetIncidentCategoriesLazyQueryHookResult = ReturnType<
  typeof useGetIncidentCategoriesLazyQuery
>;
export type GetIncidentCategoriesQueryResult = Apollo.QueryResult<
  GetIncidentCategoriesQuery,
  GetIncidentCategoriesQueryVariables
>;
export function refetchGetIncidentCategoriesQuery(
  variables: GetIncidentCategoriesQueryVariables,
) {
  return { query: GetIncidentCategoriesDocument, variables: variables };
}
export const GetLocationDocument = gql`
  query getLocation($id: Float!) {
    getLocation(id: $id) {
      message
      location {
        id
        name
        address
        long
        lat
        images
        thumbnail
        description
        numOfFloor
        income
        isActive
        minPrice
        createdAt
        electricCounterPrice
        locationServices {
          id
          name
          description
        }
        contactInformations {
          address
          name
          id
          phoneNumber
          email
        }
      }
    }
  }
`;

/**
 * __useGetLocationQuery__
 *
 * To run a query within a React component, call `useGetLocationQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLocationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLocationQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetLocationQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetLocationQuery,
    GetLocationQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetLocationQuery, GetLocationQueryVariables>(
    GetLocationDocument,
    options,
  );
}
export function useGetLocationLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetLocationQuery,
    GetLocationQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetLocationQuery, GetLocationQueryVariables>(
    GetLocationDocument,
    options,
  );
}
export type GetLocationQueryHookResult = ReturnType<typeof useGetLocationQuery>;
export type GetLocationLazyQueryHookResult = ReturnType<
  typeof useGetLocationLazyQuery
>;
export type GetLocationQueryResult = Apollo.QueryResult<
  GetLocationQuery,
  GetLocationQueryVariables
>;
export function refetchGetLocationQuery(variables: GetLocationQueryVariables) {
  return { query: GetLocationDocument, variables: variables };
}
export const GetLocationReservationsDocument = gql`
  query getLocationReservations($input: GetLocationReservationsInput!) {
    getLocationReservations(input: $input) {
      page
      total
      totalPages
      message
      items {
        id
        totalCalculatedPrice
        status
        totalReceivedPrice
        startDate
        createdById
        createdBy {
          id
          name
          avatar
          email
        }
        locationId
        location {
          name
          images
        }
        createdAt
        updatedAt
      }
    }
  }
`;

/**
 * __useGetLocationReservationsQuery__
 *
 * To run a query within a React component, call `useGetLocationReservationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLocationReservationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLocationReservationsQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetLocationReservationsQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetLocationReservationsQuery,
    GetLocationReservationsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetLocationReservationsQuery,
    GetLocationReservationsQueryVariables
  >(GetLocationReservationsDocument, options);
}
export function useGetLocationReservationsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetLocationReservationsQuery,
    GetLocationReservationsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetLocationReservationsQuery,
    GetLocationReservationsQueryVariables
  >(GetLocationReservationsDocument, options);
}
export type GetLocationReservationsQueryHookResult = ReturnType<
  typeof useGetLocationReservationsQuery
>;
export type GetLocationReservationsLazyQueryHookResult = ReturnType<
  typeof useGetLocationReservationsLazyQuery
>;
export type GetLocationReservationsQueryResult = Apollo.QueryResult<
  GetLocationReservationsQuery,
  GetLocationReservationsQueryVariables
>;
export function refetchGetLocationReservationsQuery(
  variables: GetLocationReservationsQueryVariables,
) {
  return { query: GetLocationReservationsDocument, variables: variables };
}
export const GetLocationServicesDocument = gql`
  query getLocationServices($input: GetLocationServicesInput!) {
    getLocationServices(input: $input) {
      page
      total
      totalPages
      message
      items {
        id
        name
        description
        isActive
        createdAt
        updatedAt
      }
    }
  }
`;

/**
 * __useGetLocationServicesQuery__
 *
 * To run a query within a React component, call `useGetLocationServicesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLocationServicesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLocationServicesQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetLocationServicesQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetLocationServicesQuery,
    GetLocationServicesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetLocationServicesQuery,
    GetLocationServicesQueryVariables
  >(GetLocationServicesDocument, options);
}
export function useGetLocationServicesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetLocationServicesQuery,
    GetLocationServicesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetLocationServicesQuery,
    GetLocationServicesQueryVariables
  >(GetLocationServicesDocument, options);
}
export type GetLocationServicesQueryHookResult = ReturnType<
  typeof useGetLocationServicesQuery
>;
export type GetLocationServicesLazyQueryHookResult = ReturnType<
  typeof useGetLocationServicesLazyQuery
>;
export type GetLocationServicesQueryResult = Apollo.QueryResult<
  GetLocationServicesQuery,
  GetLocationServicesQueryVariables
>;
export function refetchGetLocationServicesQuery(
  variables: GetLocationServicesQueryVariables,
) {
  return { query: GetLocationServicesDocument, variables: variables };
}
export const GetLocationsDocument = gql`
  query getLocations($input: GetLocationsInput!) {
    getLocations(input: $input) {
      page
      total
      totalPages
      message
      items {
        id
        name
        address
        long
        lat
        images
        thumbnail
        description
        numOfFloor
        income
        isActive
        minPrice
        createdAt
        electricCounterPrice
        locationServices {
          id
          name
          description
        }
        contactInformations {
          address
          name
          id
          phoneNumber
          email
        }
        updatedAt
      }
    }
  }
`;

/**
 * __useGetLocationsQuery__
 *
 * To run a query within a React component, call `useGetLocationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLocationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLocationsQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetLocationsQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetLocationsQuery,
    GetLocationsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetLocationsQuery, GetLocationsQueryVariables>(
    GetLocationsDocument,
    options,
  );
}
export function useGetLocationsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetLocationsQuery,
    GetLocationsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetLocationsQuery, GetLocationsQueryVariables>(
    GetLocationsDocument,
    options,
  );
}
export type GetLocationsQueryHookResult = ReturnType<
  typeof useGetLocationsQuery
>;
export type GetLocationsLazyQueryHookResult = ReturnType<
  typeof useGetLocationsLazyQuery
>;
export type GetLocationsQueryResult = Apollo.QueryResult<
  GetLocationsQuery,
  GetLocationsQueryVariables
>;
export function refetchGetLocationsQuery(
  variables: GetLocationsQueryVariables,
) {
  return { query: GetLocationsDocument, variables: variables };
}
export const GetUserDocument = gql`
  query getUser($id: Float!) {
    getUser(id: $id) {
      message
      user {
        id
        name
        email
        address
        phoneNumber
        dateOfBirth
        identityNumber
        avatar
        isActive
        role
        locationId
        location {
          id
        }
        room {
          name
        }
        roomId
        createdAt
      }
    }
  }
`;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUserQuery(
  baseOptions: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(
    GetUserDocument,
    options,
  );
}
export function useGetUserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetUserQuery,
    GetUserQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(
    GetUserDocument,
    options,
  );
}
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserQueryResult = Apollo.QueryResult<
  GetUserQuery,
  GetUserQueryVariables
>;
export function refetchGetUserQuery(variables: GetUserQueryVariables) {
  return { query: GetUserDocument, variables: variables };
}
export const GetUsersDocument = gql`
  query getUsers($input: GetUsersInput!) {
    getUsers(input: $input) {
      page
      total
      totalPages
      message
      items {
        id
        name
        email
        address
        phoneNumber
        dateOfBirth
        identityNumber
        avatar
        isActive
        role
        locationId
        location {
          id
          name
        }
        room {
          name
        }
        roomId
        createdAt
      }
    }
  }
`;

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetUsersQuery(
  baseOptions: Apollo.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetUsersQuery, GetUsersQueryVariables>(
    GetUsersDocument,
    options,
  );
}
export function useGetUsersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetUsersQuery,
    GetUsersQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(
    GetUsersDocument,
    options,
  );
}
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<
  typeof useGetUsersLazyQuery
>;
export type GetUsersQueryResult = Apollo.QueryResult<
  GetUsersQuery,
  GetUsersQueryVariables
>;
export function refetchGetUsersQuery(variables: GetUsersQueryVariables) {
  return { query: GetUsersDocument, variables: variables };
}
export const MeDocument = gql`
  query me {
    me {
      message
      user {
        id
        name
        email
        address
        phoneNumber
        dateOfBirth
        role
        identityNumber
        avatar
        isActive
        locationId
        location {
          name
        }
        roomId
        room {
          name
        }
      }
    }
  }
`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(
  baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
}
export function useMeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
}
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export function refetchMeQuery(variables?: MeQueryVariables) {
  return { query: MeDocument, variables: variables };
}
export type ChangePasswordMutationVariables = Exact<{
  input: ChangePasswordInput;
}>;

export type ChangePasswordMutation = { changePassword: string };

export type CreateUserMutationVariables = Exact<{
  input: CreateUserInput;
}>;

export type CreateUserMutation = {
  createUser: { message?: string | null; user?: { id: string } | null };
};

export type LoginMutationVariables = Exact<{
  input: RegisterLoginInput;
}>;

export type LoginMutation = {
  login: {
    message?: string | null;
    accessToken?: string | null;
    refreshToken?: string | null;
    user?: {
      id: string;
      email: string;
      name: string;
      identityNumber?: string | null;
      dateOfBirth: any;
      avatar?: string | null;
      phoneNumber?: string | null;
      isActive?: boolean | null;
      role: UserRole;
      locationId?: number | null;
      location?: { id: string; name: string } | null;
    } | null;
  };
};

export type UpdateLocationStatusMutationVariables = Exact<{
  input: UpdateLocationStatusInput;
}>;

export type UpdateLocationStatusMutation = {
  updateLocationStatus: {
    message?: string | null;
    location?: { id: string } | null;
  };
};

export type UpdateMeMutationVariables = Exact<{
  input: UpdateMeInput;
}>;

export type UpdateMeMutation = {
  updateMe: { message?: string | null; user?: { id: string } | null };
};

export type UpdateUserMutationVariables = Exact<{
  input: UpdateUserInput;
}>;

export type UpdateUserMutation = {
  updateUser: { message?: string | null; user?: { id: string } | null };
};

export type UpsertAmenityTypeMutationVariables = Exact<{
  input: UpsertAmenityTypeInput;
}>;

export type UpsertAmenityTypeMutation = {
  upsertAmenityType: {
    message?: string | null;
    amenityType?: { id: string } | null;
  };
};

export type UpsertIncidentCategoryMutationVariables = Exact<{
  input: UpsertIncidentCategoriesInput;
}>;

export type UpsertIncidentCategoryMutation = {
  upsertIncidentCategory: {
    message?: string | null;
    incidentCategory?: { id: string } | null;
  };
};

export type UpsertLocationMutationVariables = Exact<{
  input: UpsertLocationInput;
}>;

export type UpsertLocationMutation = {
  upsertLocation: { message?: string | null; location?: { id: string } | null };
};

export type UpsertLocationServiceMutationVariables = Exact<{
  input: UpsertLocationServiceInput;
}>;

export type UpsertLocationServiceMutation = {
  upsertLocationService: {
    message?: string | null;
    locationService?: { id: string } | null;
  };
};

export type ChangeUserStatusMutationVariables = Exact<{
  input: ChangeUserStatusInput;
}>;

export type ChangeUserStatusMutation = { changeUserStatus: string };

export type GetAmenityTypeQueryVariables = Exact<{
  id: Scalars['Float'];
}>;

export type GetAmenityTypeQuery = {
  getAmenityType: {
    message?: string | null;
    amenityType?: {
      id: string;
      name: string;
      icon?: string | null;
      isActive: boolean;
      description?: string | null;
      createdAt: any;
      updatedAt: any;
    } | null;
  };
};

export type GetAmenityTypesQueryVariables = Exact<{
  input: GetAmenityTypesInput;
}>;

export type GetAmenityTypesQuery = {
  getAmenityTypes: {
    page?: number | null;
    total?: number | null;
    totalPages?: number | null;
    message?: string | null;
    items: Array<{
      id: string;
      name: string;
      icon?: string | null;
      description?: string | null;
      isActive: boolean;
      createdAt: any;
      updatedAt: any;
    }>;
  };
};

export type GetIncidentCategoriesQueryVariables = Exact<{
  input: GetIncidentCategoriesInput;
}>;

export type GetIncidentCategoriesQuery = {
  getIncidentCategories: {
    page?: number | null;
    total?: number | null;
    totalPages?: number | null;
    message?: string | null;
    items: Array<{
      id: string;
      name: string;
      description?: string | null;
      icon?: string | null;
      createdAt: any;
      updatedAt: any;
    }>;
  };
};

export type GetLocationQueryVariables = Exact<{
  id: Scalars['Float'];
}>;

export type GetLocationQuery = {
  getLocation: {
    message?: string | null;
    location?: {
      id: string;
      name: string;
      address: string;
      long?: number | null;
      lat?: number | null;
      images?: string | null;
      thumbnail?: string | null;
      description?: string | null;
      numOfFloor?: number | null;
      income: number;
      isActive: boolean;
      minPrice?: number | null;
      createdAt: any;
      electricCounterPrice?: number | null;
      locationServices: Array<{
        id: string;
        name: string;
        description?: string | null;
      }>;
      contactInformations?: Array<{
        address?: string | null;
        name?: string | null;
        id: string;
        phoneNumber?: string | null;
        email?: string | null;
      }> | null;
    } | null;
  };
};

export type GetLocationReservationsQueryVariables = Exact<{
  input: GetLocationReservationsInput;
}>;

export type GetLocationReservationsQuery = {
  getLocationReservations: {
    page?: number | null;
    total?: number | null;
    totalPages?: number | null;
    message?: string | null;
    items: Array<{
      id: string;
      totalCalculatedPrice: number;
      status: string;
      totalReceivedPrice: number;
      startDate: any;
      createdById: number;
      locationId: number;
      createdAt: any;
      updatedAt: any;
      createdBy: {
        id: string;
        name: string;
        avatar?: string | null;
        email: string;
      };
      location: { name: string; images?: string | null };
    }>;
  };
};

export type GetLocationServicesQueryVariables = Exact<{
  input: GetLocationServicesInput;
}>;

export type GetLocationServicesQuery = {
  getLocationServices: {
    page?: number | null;
    total?: number | null;
    totalPages?: number | null;
    message?: string | null;
    items: Array<{
      id: string;
      name: string;
      description?: string | null;
      isActive: boolean;
      createdAt: any;
      updatedAt: any;
    }>;
  };
};

export type GetLocationsQueryVariables = Exact<{
  input: GetLocationsInput;
}>;

export type GetLocationsQuery = {
  getLocations: {
    page?: number | null;
    total?: number | null;
    totalPages?: number | null;
    message?: string | null;
    items: Array<{
      id: string;
      name: string;
      address: string;
      long?: number | null;
      lat?: number | null;
      images?: string | null;
      thumbnail?: string | null;
      description?: string | null;
      numOfFloor?: number | null;
      income: number;
      isActive: boolean;
      minPrice?: number | null;
      createdAt: any;
      electricCounterPrice?: number | null;
      updatedAt: any;
      locationServices: Array<{
        id: string;
        name: string;
        description?: string | null;
      }>;
      contactInformations?: Array<{
        address?: string | null;
        name?: string | null;
        id: string;
        phoneNumber?: string | null;
        email?: string | null;
      }> | null;
    }>;
  };
};

export type GetUserQueryVariables = Exact<{
  id: Scalars['Float'];
}>;

export type GetUserQuery = {
  getUser: {
    message?: string | null;
    user?: {
      id: string;
      name: string;
      email: string;
      address?: string | null;
      phoneNumber?: string | null;
      dateOfBirth: any;
      identityNumber?: string | null;
      avatar?: string | null;
      isActive?: boolean | null;
      role: UserRole;
      locationId?: number | null;
      roomId?: number | null;
      createdAt: any;
      location?: { id: string } | null;
      room?: { name?: string | null } | null;
    } | null;
  };
};

export type GetUsersQueryVariables = Exact<{
  input: GetUsersInput;
}>;

export type GetUsersQuery = {
  getUsers: {
    page?: number | null;
    total?: number | null;
    totalPages?: number | null;
    message?: string | null;
    items: Array<{
      id: string;
      name: string;
      email: string;
      address?: string | null;
      phoneNumber?: string | null;
      dateOfBirth: any;
      identityNumber?: string | null;
      avatar?: string | null;
      isActive?: boolean | null;
      role: UserRole;
      locationId?: number | null;
      roomId?: number | null;
      createdAt: any;
      location?: { id: string; name: string } | null;
      room?: { name?: string | null } | null;
    }>;
  };
};

export type MeQueryVariables = Exact<{ [key: string]: never }>;

export type MeQuery = {
  me: {
    message?: string | null;
    user?: {
      id: string;
      name: string;
      email: string;
      address?: string | null;
      phoneNumber?: string | null;
      dateOfBirth: any;
      role: UserRole;
      identityNumber?: string | null;
      avatar?: string | null;
      isActive?: boolean | null;
      locationId?: number | null;
      roomId?: number | null;
      location?: { name: string } | null;
      room?: { name?: string | null } | null;
    } | null;
  };
};
