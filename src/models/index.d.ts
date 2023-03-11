import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";





type EagerResponse = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Response, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userID: string;
  readonly datetime?: string | null;
  readonly text?: string | null;
  readonly promptID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyResponse = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Response, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userID: string;
  readonly datetime?: string | null;
  readonly text?: string | null;
  readonly promptID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Response = LazyLoading extends LazyLoadingDisabled ? EagerResponse : LazyResponse

export declare const Response: (new (init: ModelInit<Response>) => Response) & {
  copyOf(source: Response, mutator: (draft: MutableModel<Response>) => MutableModel<Response> | void): Response;
}

type EagerPrompt = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Prompt, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly adminID: string;
  readonly determines?: (Response | null)[] | null;
  readonly datetim?: string | null;
  readonly text?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPrompt = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Prompt, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly adminID: string;
  readonly determines: AsyncCollection<Response>;
  readonly datetim?: string | null;
  readonly text?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Prompt = LazyLoading extends LazyLoadingDisabled ? EagerPrompt : LazyPrompt

export declare const Prompt: (new (init: ModelInit<Prompt>) => Prompt) & {
  copyOf(source: Prompt, mutator: (draft: MutableModel<Prompt>) => MutableModel<Prompt> | void): Prompt;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly adminID: string;
  readonly writes?: (Response | null)[] | null;
  readonly firstname?: string | null;
  readonly lastname?: string | null;
  readonly storelocation?: string | null;
  readonly email?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly adminID: string;
  readonly writes: AsyncCollection<Response>;
  readonly firstname?: string | null;
  readonly lastname?: string | null;
  readonly storelocation?: string | null;
  readonly email?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

type EagerAdmin = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Admin, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly firstname?: string | null;
  readonly lastname?: string | null;
  readonly email?: string | null;
  readonly storelocation?: string | null;
  readonly username?: string | null;
  readonly password?: string | null;
  readonly isadmin?: string | null;
  readonly manages?: (User | null)[] | null;
  readonly decides?: (Prompt | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAdmin = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Admin, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly firstname?: string | null;
  readonly lastname?: string | null;
  readonly email?: string | null;
  readonly storelocation?: string | null;
  readonly username?: string | null;
  readonly password?: string | null;
  readonly isadmin?: string | null;
  readonly manages: AsyncCollection<User>;
  readonly decides: AsyncCollection<Prompt>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Admin = LazyLoading extends LazyLoadingDisabled ? EagerAdmin : LazyAdmin

export declare const Admin: (new (init: ModelInit<Admin>) => Admin) & {
  copyOf(source: Admin, mutator: (draft: MutableModel<Admin>) => MutableModel<Admin> | void): Admin;
}