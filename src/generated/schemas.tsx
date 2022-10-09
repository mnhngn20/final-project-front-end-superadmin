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
};

export type Amenity = {
  amenityType: AmenityType;
  amenityTypeId: Scalars['Float'];
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
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

export type GetLocationServicesInput = {
  isActive?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
  orderBy?: InputMaybe<OrderBy>;
  page?: InputMaybe<Scalars['Float']>;
};

export type GetLocationsInput = {
  address?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
  orderBy?: InputMaybe<OrderBy>;
  page?: InputMaybe<Scalars['Float']>;
};

export type GetRoomsInput = {
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

export type IResponse = {
  message?: Maybe<Scalars['String']>;
};

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
  equipments?: Maybe<Array<Equipment>>;
  id: Scalars['ID'];
  images?: Maybe<Scalars['String']>;
  income: Scalars['Float'];
  isActive: Scalars['Boolean'];
  lat?: Maybe<Scalars['Float']>;
  locationServices: Array<LocationService>;
  long?: Maybe<Scalars['Float']>;
  name: Scalars['String'];
  numOfFloor?: Maybe<Scalars['Float']>;
  rooms?: Maybe<Array<Room>>;
  thumbnail?: Maybe<Scalars['String']>;
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

export type LocationResponse = IResponse & {
  location?: Maybe<Location>;
  message?: Maybe<Scalars['String']>;
};

export type LocationService = {
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isActive: Scalars['Boolean'];
  location: Array<Location>;
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
  changePassword: Scalars['String'];
  changeUserStatus: Scalars['String'];
  createUser: UserResponse;
  getAccessToken: LoginResponse;
  login: LoginResponse;
  register: UserResponse;
  resetPassword: ResetPasswordResponse;
  resetPasswordConfirm: ResetPasswordResponse;
  updateAmenityStatus: AmenityResponse;
  updateEquipmentStatus: EquipmentResponse;
  updateLocationStatus: LocationResponse;
  updateMe: UserResponse;
  updateUser: UserResponse;
  upsertAmenity: AmenityResponse;
  upsertAmenityType: AmenityTypeResponse;
  upsertEquipment: EquipmentResponse;
  upsertLocation: LocationResponse;
  upsertLocationService: LocationServiceResponse;
  upsertRoom: RoomResponse;
};

export type MutationChangePasswordArgs = {
  input: ChangePasswordInput;
};

export type MutationChangeUserStatusArgs = {
  input: ChangeUserStatusInput;
};

export type MutationCreateUserArgs = {
  input: CreateUserInput;
};

export type MutationGetAccessTokenArgs = {
  input: GetAccessTokenInput;
};

export type MutationLoginArgs = {
  input: RegisterLoginInput;
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

export type MutationUpdateLocationStatusArgs = {
  input: UpdateLocationStatusInput;
};

export type MutationUpdateMeArgs = {
  input: UpdateMeInput;
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

export type MutationUpsertLocationArgs = {
  input: UpsertLocationInput;
};

export type MutationUpsertLocationServiceArgs = {
  input: UpsertLocationServiceInput;
};

export type MutationUpsertRoomArgs = {
  input: UpsertRoomInput;
};

export enum OrderBy {
  Asc = 'ASC',
  Desc = 'DESC',
}

export type Query = {
  getAmenities: AmenityListResponse;
  getAmenity: AmenityResponse;
  getAmenityType: AmenityTypeResponse;
  getAmenityTypes: AmenityTypeListResponse;
  getEquipment: EquipmentResponse;
  getEquipments: EquipmentListResponse;
  getLocation: LocationResponse;
  getLocationService: LocationServiceResponse;
  getLocationServices: LocationServiceListResponse;
  getLocations: LocationListResponse;
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

export type QueryGetLocationArgs = {
  id: Scalars['Float'];
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
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  equipments?: Maybe<Array<Equipment>>;
  floor?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  images?: Maybe<Scalars['String']>;
  location?: Maybe<Location>;
  locationId: Scalars['Float'];
  name?: Maybe<Scalars['String']>;
  status: RoomStatus;
  thumbnail?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  user?: Maybe<User>;
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

export type UpsertLocationInput = {
  address?: InputMaybe<Scalars['String']>;
  contactInformations?: InputMaybe<Array<LocationContactInformationInput>>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Float']>;
  images?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  lat?: InputMaybe<Scalars['Float']>;
  long?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
  numOfFloor: Scalars['Float'];
  thumbnail?: InputMaybe<Scalars['String']>;
};

export type UpsertLocationServiceInput = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Float']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
};

export type UpsertRoomInput = {
  basePrice?: InputMaybe<Scalars['Float']>;
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
  id: Scalars['ID'];
  identityNumber?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  location?: Maybe<Location>;
  locationId?: Maybe<Scalars['Float']>;
  name: Scalars['String'];
  phoneNumber?: Maybe<Scalars['String']>;
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
        createdAt
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
        createdAt
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
      createdAt: any;
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
      createdAt: any;
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
      location?: { id: string } | null;
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
