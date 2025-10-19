
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Household
 * 
 */
export type Household = $Result.DefaultSelection<Prisma.$HouseholdPayload>
/**
 * Model Chore
 * 
 */
export type Chore = $Result.DefaultSelection<Prisma.$ChorePayload>
/**
 * Model Avatar
 * 
 */
export type Avatar = $Result.DefaultSelection<Prisma.$AvatarPayload>
/**
 * Model UserAvatarProps
 * 
 */
export type UserAvatarProps = $Result.DefaultSelection<Prisma.$UserAvatarPropsPayload>
/**
 * Model AvatarProp
 * 
 */
export type AvatarProp = $Result.DefaultSelection<Prisma.$AvatarPropPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  member: 'member',
  leader: 'leader'
};

export type Role = (typeof Role)[keyof typeof Role]


export const PropType: {
  hat: 'hat',
  hair: 'hair',
  shirt: 'shirt',
  background: 'background',
  handProp: 'handProp'
};

export type PropType = (typeof PropType)[keyof typeof PropType]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type PropType = $Enums.PropType

export const PropType: typeof $Enums.PropType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.household`: Exposes CRUD operations for the **Household** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Households
    * const households = await prisma.household.findMany()
    * ```
    */
  get household(): Prisma.HouseholdDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chore`: Exposes CRUD operations for the **Chore** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chores
    * const chores = await prisma.chore.findMany()
    * ```
    */
  get chore(): Prisma.ChoreDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.avatar`: Exposes CRUD operations for the **Avatar** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Avatars
    * const avatars = await prisma.avatar.findMany()
    * ```
    */
  get avatar(): Prisma.AvatarDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userAvatarProps`: Exposes CRUD operations for the **UserAvatarProps** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserAvatarProps
    * const userAvatarProps = await prisma.userAvatarProps.findMany()
    * ```
    */
  get userAvatarProps(): Prisma.UserAvatarPropsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.avatarProp`: Exposes CRUD operations for the **AvatarProp** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AvatarProps
    * const avatarProps = await prisma.avatarProp.findMany()
    * ```
    */
  get avatarProp(): Prisma.AvatarPropDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.17.0
   * Query Engine version: c0aafc03b8ef6cdced8654b9a817999e02457d6a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Household: 'Household',
    Chore: 'Chore',
    Avatar: 'Avatar',
    UserAvatarProps: 'UserAvatarProps',
    AvatarProp: 'AvatarProp'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "household" | "chore" | "avatar" | "userAvatarProps" | "avatarProp"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Household: {
        payload: Prisma.$HouseholdPayload<ExtArgs>
        fields: Prisma.HouseholdFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HouseholdFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseholdPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HouseholdFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseholdPayload>
          }
          findFirst: {
            args: Prisma.HouseholdFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseholdPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HouseholdFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseholdPayload>
          }
          findMany: {
            args: Prisma.HouseholdFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseholdPayload>[]
          }
          create: {
            args: Prisma.HouseholdCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseholdPayload>
          }
          createMany: {
            args: Prisma.HouseholdCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HouseholdCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseholdPayload>[]
          }
          delete: {
            args: Prisma.HouseholdDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseholdPayload>
          }
          update: {
            args: Prisma.HouseholdUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseholdPayload>
          }
          deleteMany: {
            args: Prisma.HouseholdDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HouseholdUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HouseholdUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseholdPayload>[]
          }
          upsert: {
            args: Prisma.HouseholdUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseholdPayload>
          }
          aggregate: {
            args: Prisma.HouseholdAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHousehold>
          }
          groupBy: {
            args: Prisma.HouseholdGroupByArgs<ExtArgs>
            result: $Utils.Optional<HouseholdGroupByOutputType>[]
          }
          count: {
            args: Prisma.HouseholdCountArgs<ExtArgs>
            result: $Utils.Optional<HouseholdCountAggregateOutputType> | number
          }
        }
      }
      Chore: {
        payload: Prisma.$ChorePayload<ExtArgs>
        fields: Prisma.ChoreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChoreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChorePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChoreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChorePayload>
          }
          findFirst: {
            args: Prisma.ChoreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChorePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChoreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChorePayload>
          }
          findMany: {
            args: Prisma.ChoreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChorePayload>[]
          }
          create: {
            args: Prisma.ChoreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChorePayload>
          }
          createMany: {
            args: Prisma.ChoreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChoreCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChorePayload>[]
          }
          delete: {
            args: Prisma.ChoreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChorePayload>
          }
          update: {
            args: Prisma.ChoreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChorePayload>
          }
          deleteMany: {
            args: Prisma.ChoreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChoreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChoreUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChorePayload>[]
          }
          upsert: {
            args: Prisma.ChoreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChorePayload>
          }
          aggregate: {
            args: Prisma.ChoreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChore>
          }
          groupBy: {
            args: Prisma.ChoreGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChoreGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChoreCountArgs<ExtArgs>
            result: $Utils.Optional<ChoreCountAggregateOutputType> | number
          }
        }
      }
      Avatar: {
        payload: Prisma.$AvatarPayload<ExtArgs>
        fields: Prisma.AvatarFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AvatarFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvatarPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AvatarFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvatarPayload>
          }
          findFirst: {
            args: Prisma.AvatarFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvatarPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AvatarFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvatarPayload>
          }
          findMany: {
            args: Prisma.AvatarFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvatarPayload>[]
          }
          create: {
            args: Prisma.AvatarCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvatarPayload>
          }
          createMany: {
            args: Prisma.AvatarCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AvatarCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvatarPayload>[]
          }
          delete: {
            args: Prisma.AvatarDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvatarPayload>
          }
          update: {
            args: Prisma.AvatarUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvatarPayload>
          }
          deleteMany: {
            args: Prisma.AvatarDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AvatarUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AvatarUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvatarPayload>[]
          }
          upsert: {
            args: Prisma.AvatarUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvatarPayload>
          }
          aggregate: {
            args: Prisma.AvatarAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAvatar>
          }
          groupBy: {
            args: Prisma.AvatarGroupByArgs<ExtArgs>
            result: $Utils.Optional<AvatarGroupByOutputType>[]
          }
          count: {
            args: Prisma.AvatarCountArgs<ExtArgs>
            result: $Utils.Optional<AvatarCountAggregateOutputType> | number
          }
        }
      }
      UserAvatarProps: {
        payload: Prisma.$UserAvatarPropsPayload<ExtArgs>
        fields: Prisma.UserAvatarPropsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserAvatarPropsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAvatarPropsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserAvatarPropsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAvatarPropsPayload>
          }
          findFirst: {
            args: Prisma.UserAvatarPropsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAvatarPropsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserAvatarPropsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAvatarPropsPayload>
          }
          findMany: {
            args: Prisma.UserAvatarPropsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAvatarPropsPayload>[]
          }
          create: {
            args: Prisma.UserAvatarPropsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAvatarPropsPayload>
          }
          createMany: {
            args: Prisma.UserAvatarPropsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserAvatarPropsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAvatarPropsPayload>[]
          }
          delete: {
            args: Prisma.UserAvatarPropsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAvatarPropsPayload>
          }
          update: {
            args: Prisma.UserAvatarPropsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAvatarPropsPayload>
          }
          deleteMany: {
            args: Prisma.UserAvatarPropsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserAvatarPropsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserAvatarPropsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAvatarPropsPayload>[]
          }
          upsert: {
            args: Prisma.UserAvatarPropsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAvatarPropsPayload>
          }
          aggregate: {
            args: Prisma.UserAvatarPropsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserAvatarProps>
          }
          groupBy: {
            args: Prisma.UserAvatarPropsGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserAvatarPropsGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserAvatarPropsCountArgs<ExtArgs>
            result: $Utils.Optional<UserAvatarPropsCountAggregateOutputType> | number
          }
        }
      }
      AvatarProp: {
        payload: Prisma.$AvatarPropPayload<ExtArgs>
        fields: Prisma.AvatarPropFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AvatarPropFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvatarPropPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AvatarPropFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvatarPropPayload>
          }
          findFirst: {
            args: Prisma.AvatarPropFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvatarPropPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AvatarPropFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvatarPropPayload>
          }
          findMany: {
            args: Prisma.AvatarPropFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvatarPropPayload>[]
          }
          create: {
            args: Prisma.AvatarPropCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvatarPropPayload>
          }
          createMany: {
            args: Prisma.AvatarPropCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AvatarPropCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvatarPropPayload>[]
          }
          delete: {
            args: Prisma.AvatarPropDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvatarPropPayload>
          }
          update: {
            args: Prisma.AvatarPropUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvatarPropPayload>
          }
          deleteMany: {
            args: Prisma.AvatarPropDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AvatarPropUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AvatarPropUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvatarPropPayload>[]
          }
          upsert: {
            args: Prisma.AvatarPropUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvatarPropPayload>
          }
          aggregate: {
            args: Prisma.AvatarPropAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAvatarProp>
          }
          groupBy: {
            args: Prisma.AvatarPropGroupByArgs<ExtArgs>
            result: $Utils.Optional<AvatarPropGroupByOutputType>[]
          }
          count: {
            args: Prisma.AvatarPropCountArgs<ExtArgs>
            result: $Utils.Optional<AvatarPropCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    household?: HouseholdOmit
    chore?: ChoreOmit
    avatar?: AvatarOmit
    userAvatarProps?: UserAvatarPropsOmit
    avatarProp?: AvatarPropOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    assignedChores: number
    userAvatarProps: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignedChores?: boolean | UserCountOutputTypeCountAssignedChoresArgs
    userAvatarProps?: boolean | UserCountOutputTypeCountUserAvatarPropsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAssignedChoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChoreWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserAvatarPropsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserAvatarPropsWhereInput
  }


  /**
   * Count Type HouseholdCountOutputType
   */

  export type HouseholdCountOutputType = {
    users: number
    chores: number
  }

  export type HouseholdCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | HouseholdCountOutputTypeCountUsersArgs
    chores?: boolean | HouseholdCountOutputTypeCountChoresArgs
  }

  // Custom InputTypes
  /**
   * HouseholdCountOutputType without action
   */
  export type HouseholdCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HouseholdCountOutputType
     */
    select?: HouseholdCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HouseholdCountOutputType without action
   */
  export type HouseholdCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * HouseholdCountOutputType without action
   */
  export type HouseholdCountOutputTypeCountChoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChoreWhereInput
  }


  /**
   * Count Type AvatarPropCountOutputType
   */

  export type AvatarPropCountOutputType = {
    hatInAvatars: number
    hairInAvatars: number
    shirtInAvatars: number
    backgroundInAvatars: number
    handPropInAvatars: number
    userAvatarProps: number
  }

  export type AvatarPropCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hatInAvatars?: boolean | AvatarPropCountOutputTypeCountHatInAvatarsArgs
    hairInAvatars?: boolean | AvatarPropCountOutputTypeCountHairInAvatarsArgs
    shirtInAvatars?: boolean | AvatarPropCountOutputTypeCountShirtInAvatarsArgs
    backgroundInAvatars?: boolean | AvatarPropCountOutputTypeCountBackgroundInAvatarsArgs
    handPropInAvatars?: boolean | AvatarPropCountOutputTypeCountHandPropInAvatarsArgs
    userAvatarProps?: boolean | AvatarPropCountOutputTypeCountUserAvatarPropsArgs
  }

  // Custom InputTypes
  /**
   * AvatarPropCountOutputType without action
   */
  export type AvatarPropCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvatarPropCountOutputType
     */
    select?: AvatarPropCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AvatarPropCountOutputType without action
   */
  export type AvatarPropCountOutputTypeCountHatInAvatarsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvatarWhereInput
  }

  /**
   * AvatarPropCountOutputType without action
   */
  export type AvatarPropCountOutputTypeCountHairInAvatarsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvatarWhereInput
  }

  /**
   * AvatarPropCountOutputType without action
   */
  export type AvatarPropCountOutputTypeCountShirtInAvatarsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvatarWhereInput
  }

  /**
   * AvatarPropCountOutputType without action
   */
  export type AvatarPropCountOutputTypeCountBackgroundInAvatarsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvatarWhereInput
  }

  /**
   * AvatarPropCountOutputType without action
   */
  export type AvatarPropCountOutputTypeCountHandPropInAvatarsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvatarWhereInput
  }

  /**
   * AvatarPropCountOutputType without action
   */
  export type AvatarPropCountOutputTypeCountUserAvatarPropsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserAvatarPropsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    householdId: number | null
    difficulty: number | null
    totalPoints: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    householdId: number | null
    difficulty: number | null
    totalPoints: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    email: string | null
    name: string | null
    password_hash: string | null
    salt: string | null
    householdId: number | null
    role: $Enums.Role | null
    difficulty: number | null
    totalPoints: number | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    email: string | null
    name: string | null
    password_hash: string | null
    salt: string | null
    householdId: number | null
    role: $Enums.Role | null
    difficulty: number | null
    totalPoints: number | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    createdAt: number
    email: number
    name: number
    password_hash: number
    salt: number
    householdId: number
    role: number
    difficulty: number
    totalPoints: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    householdId?: true
    difficulty?: true
    totalPoints?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    householdId?: true
    difficulty?: true
    totalPoints?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    createdAt?: true
    email?: true
    name?: true
    password_hash?: true
    salt?: true
    householdId?: true
    role?: true
    difficulty?: true
    totalPoints?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    createdAt?: true
    email?: true
    name?: true
    password_hash?: true
    salt?: true
    householdId?: true
    role?: true
    difficulty?: true
    totalPoints?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    createdAt?: true
    email?: true
    name?: true
    password_hash?: true
    salt?: true
    householdId?: true
    role?: true
    difficulty?: true
    totalPoints?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    createdAt: Date
    email: string
    name: string
    password_hash: string
    salt: string | null
    householdId: number | null
    role: $Enums.Role | null
    difficulty: number | null
    totalPoints: number | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    email?: boolean
    name?: boolean
    password_hash?: boolean
    salt?: boolean
    householdId?: boolean
    role?: boolean
    difficulty?: boolean
    totalPoints?: boolean
    household?: boolean | User$householdArgs<ExtArgs>
    assignedChores?: boolean | User$assignedChoresArgs<ExtArgs>
    avatar?: boolean | User$avatarArgs<ExtArgs>
    userAvatarProps?: boolean | User$userAvatarPropsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    email?: boolean
    name?: boolean
    password_hash?: boolean
    salt?: boolean
    householdId?: boolean
    role?: boolean
    difficulty?: boolean
    totalPoints?: boolean
    household?: boolean | User$householdArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    email?: boolean
    name?: boolean
    password_hash?: boolean
    salt?: boolean
    householdId?: boolean
    role?: boolean
    difficulty?: boolean
    totalPoints?: boolean
    household?: boolean | User$householdArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    createdAt?: boolean
    email?: boolean
    name?: boolean
    password_hash?: boolean
    salt?: boolean
    householdId?: boolean
    role?: boolean
    difficulty?: boolean
    totalPoints?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "email" | "name" | "password_hash" | "salt" | "householdId" | "role" | "difficulty" | "totalPoints", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    household?: boolean | User$householdArgs<ExtArgs>
    assignedChores?: boolean | User$assignedChoresArgs<ExtArgs>
    avatar?: boolean | User$avatarArgs<ExtArgs>
    userAvatarProps?: boolean | User$userAvatarPropsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    household?: boolean | User$householdArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    household?: boolean | User$householdArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      household: Prisma.$HouseholdPayload<ExtArgs> | null
      assignedChores: Prisma.$ChorePayload<ExtArgs>[]
      avatar: Prisma.$AvatarPayload<ExtArgs> | null
      userAvatarProps: Prisma.$UserAvatarPropsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      email: string
      name: string
      password_hash: string
      salt: string | null
      householdId: number | null
      role: $Enums.Role | null
      difficulty: number | null
      totalPoints: number | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    household<T extends User$householdArgs<ExtArgs> = {}>(args?: Subset<T, User$householdArgs<ExtArgs>>): Prisma__HouseholdClient<$Result.GetResult<Prisma.$HouseholdPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    assignedChores<T extends User$assignedChoresArgs<ExtArgs> = {}>(args?: Subset<T, User$assignedChoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    avatar<T extends User$avatarArgs<ExtArgs> = {}>(args?: Subset<T, User$avatarArgs<ExtArgs>>): Prisma__AvatarClient<$Result.GetResult<Prisma.$AvatarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    userAvatarProps<T extends User$userAvatarPropsArgs<ExtArgs> = {}>(args?: Subset<T, User$userAvatarPropsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAvatarPropsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly password_hash: FieldRef<"User", 'String'>
    readonly salt: FieldRef<"User", 'String'>
    readonly householdId: FieldRef<"User", 'Int'>
    readonly role: FieldRef<"User", 'Role'>
    readonly difficulty: FieldRef<"User", 'Int'>
    readonly totalPoints: FieldRef<"User", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.household
   */
  export type User$householdArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Household
     */
    select?: HouseholdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Household
     */
    omit?: HouseholdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdInclude<ExtArgs> | null
    where?: HouseholdWhereInput
  }

  /**
   * User.assignedChores
   */
  export type User$assignedChoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chore
     */
    select?: ChoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chore
     */
    omit?: ChoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoreInclude<ExtArgs> | null
    where?: ChoreWhereInput
    orderBy?: ChoreOrderByWithRelationInput | ChoreOrderByWithRelationInput[]
    cursor?: ChoreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChoreScalarFieldEnum | ChoreScalarFieldEnum[]
  }

  /**
   * User.avatar
   */
  export type User$avatarArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avatar
     */
    omit?: AvatarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarInclude<ExtArgs> | null
    where?: AvatarWhereInput
  }

  /**
   * User.userAvatarProps
   */
  export type User$userAvatarPropsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAvatarProps
     */
    select?: UserAvatarPropsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAvatarProps
     */
    omit?: UserAvatarPropsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAvatarPropsInclude<ExtArgs> | null
    where?: UserAvatarPropsWhereInput
    orderBy?: UserAvatarPropsOrderByWithRelationInput | UserAvatarPropsOrderByWithRelationInput[]
    cursor?: UserAvatarPropsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserAvatarPropsScalarFieldEnum | UserAvatarPropsScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Household
   */

  export type AggregateHousehold = {
    _count: HouseholdCountAggregateOutputType | null
    _avg: HouseholdAvgAggregateOutputType | null
    _sum: HouseholdSumAggregateOutputType | null
    _min: HouseholdMinAggregateOutputType | null
    _max: HouseholdMaxAggregateOutputType | null
  }

  export type HouseholdAvgAggregateOutputType = {
    id: number | null
  }

  export type HouseholdSumAggregateOutputType = {
    id: number | null
  }

  export type HouseholdMinAggregateOutputType = {
    id: number | null
    name: string | null
    joinCode: string | null
  }

  export type HouseholdMaxAggregateOutputType = {
    id: number | null
    name: string | null
    joinCode: string | null
  }

  export type HouseholdCountAggregateOutputType = {
    id: number
    name: number
    joinCode: number
    _all: number
  }


  export type HouseholdAvgAggregateInputType = {
    id?: true
  }

  export type HouseholdSumAggregateInputType = {
    id?: true
  }

  export type HouseholdMinAggregateInputType = {
    id?: true
    name?: true
    joinCode?: true
  }

  export type HouseholdMaxAggregateInputType = {
    id?: true
    name?: true
    joinCode?: true
  }

  export type HouseholdCountAggregateInputType = {
    id?: true
    name?: true
    joinCode?: true
    _all?: true
  }

  export type HouseholdAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Household to aggregate.
     */
    where?: HouseholdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Households to fetch.
     */
    orderBy?: HouseholdOrderByWithRelationInput | HouseholdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HouseholdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Households from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Households.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Households
    **/
    _count?: true | HouseholdCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HouseholdAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HouseholdSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HouseholdMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HouseholdMaxAggregateInputType
  }

  export type GetHouseholdAggregateType<T extends HouseholdAggregateArgs> = {
        [P in keyof T & keyof AggregateHousehold]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHousehold[P]>
      : GetScalarType<T[P], AggregateHousehold[P]>
  }




  export type HouseholdGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HouseholdWhereInput
    orderBy?: HouseholdOrderByWithAggregationInput | HouseholdOrderByWithAggregationInput[]
    by: HouseholdScalarFieldEnum[] | HouseholdScalarFieldEnum
    having?: HouseholdScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HouseholdCountAggregateInputType | true
    _avg?: HouseholdAvgAggregateInputType
    _sum?: HouseholdSumAggregateInputType
    _min?: HouseholdMinAggregateInputType
    _max?: HouseholdMaxAggregateInputType
  }

  export type HouseholdGroupByOutputType = {
    id: number
    name: string
    joinCode: string
    _count: HouseholdCountAggregateOutputType | null
    _avg: HouseholdAvgAggregateOutputType | null
    _sum: HouseholdSumAggregateOutputType | null
    _min: HouseholdMinAggregateOutputType | null
    _max: HouseholdMaxAggregateOutputType | null
  }

  type GetHouseholdGroupByPayload<T extends HouseholdGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HouseholdGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HouseholdGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HouseholdGroupByOutputType[P]>
            : GetScalarType<T[P], HouseholdGroupByOutputType[P]>
        }
      >
    >


  export type HouseholdSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    joinCode?: boolean
    users?: boolean | Household$usersArgs<ExtArgs>
    chores?: boolean | Household$choresArgs<ExtArgs>
    _count?: boolean | HouseholdCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["household"]>

  export type HouseholdSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    joinCode?: boolean
  }, ExtArgs["result"]["household"]>

  export type HouseholdSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    joinCode?: boolean
  }, ExtArgs["result"]["household"]>

  export type HouseholdSelectScalar = {
    id?: boolean
    name?: boolean
    joinCode?: boolean
  }

  export type HouseholdOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "joinCode", ExtArgs["result"]["household"]>
  export type HouseholdInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Household$usersArgs<ExtArgs>
    chores?: boolean | Household$choresArgs<ExtArgs>
    _count?: boolean | HouseholdCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type HouseholdIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type HouseholdIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $HouseholdPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Household"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
      chores: Prisma.$ChorePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      joinCode: string
    }, ExtArgs["result"]["household"]>
    composites: {}
  }

  type HouseholdGetPayload<S extends boolean | null | undefined | HouseholdDefaultArgs> = $Result.GetResult<Prisma.$HouseholdPayload, S>

  type HouseholdCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HouseholdFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HouseholdCountAggregateInputType | true
    }

  export interface HouseholdDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Household'], meta: { name: 'Household' } }
    /**
     * Find zero or one Household that matches the filter.
     * @param {HouseholdFindUniqueArgs} args - Arguments to find a Household
     * @example
     * // Get one Household
     * const household = await prisma.household.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HouseholdFindUniqueArgs>(args: SelectSubset<T, HouseholdFindUniqueArgs<ExtArgs>>): Prisma__HouseholdClient<$Result.GetResult<Prisma.$HouseholdPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Household that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HouseholdFindUniqueOrThrowArgs} args - Arguments to find a Household
     * @example
     * // Get one Household
     * const household = await prisma.household.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HouseholdFindUniqueOrThrowArgs>(args: SelectSubset<T, HouseholdFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HouseholdClient<$Result.GetResult<Prisma.$HouseholdPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Household that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseholdFindFirstArgs} args - Arguments to find a Household
     * @example
     * // Get one Household
     * const household = await prisma.household.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HouseholdFindFirstArgs>(args?: SelectSubset<T, HouseholdFindFirstArgs<ExtArgs>>): Prisma__HouseholdClient<$Result.GetResult<Prisma.$HouseholdPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Household that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseholdFindFirstOrThrowArgs} args - Arguments to find a Household
     * @example
     * // Get one Household
     * const household = await prisma.household.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HouseholdFindFirstOrThrowArgs>(args?: SelectSubset<T, HouseholdFindFirstOrThrowArgs<ExtArgs>>): Prisma__HouseholdClient<$Result.GetResult<Prisma.$HouseholdPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Households that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseholdFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Households
     * const households = await prisma.household.findMany()
     * 
     * // Get first 10 Households
     * const households = await prisma.household.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const householdWithIdOnly = await prisma.household.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HouseholdFindManyArgs>(args?: SelectSubset<T, HouseholdFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HouseholdPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Household.
     * @param {HouseholdCreateArgs} args - Arguments to create a Household.
     * @example
     * // Create one Household
     * const Household = await prisma.household.create({
     *   data: {
     *     // ... data to create a Household
     *   }
     * })
     * 
     */
    create<T extends HouseholdCreateArgs>(args: SelectSubset<T, HouseholdCreateArgs<ExtArgs>>): Prisma__HouseholdClient<$Result.GetResult<Prisma.$HouseholdPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Households.
     * @param {HouseholdCreateManyArgs} args - Arguments to create many Households.
     * @example
     * // Create many Households
     * const household = await prisma.household.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HouseholdCreateManyArgs>(args?: SelectSubset<T, HouseholdCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Households and returns the data saved in the database.
     * @param {HouseholdCreateManyAndReturnArgs} args - Arguments to create many Households.
     * @example
     * // Create many Households
     * const household = await prisma.household.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Households and only return the `id`
     * const householdWithIdOnly = await prisma.household.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HouseholdCreateManyAndReturnArgs>(args?: SelectSubset<T, HouseholdCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HouseholdPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Household.
     * @param {HouseholdDeleteArgs} args - Arguments to delete one Household.
     * @example
     * // Delete one Household
     * const Household = await prisma.household.delete({
     *   where: {
     *     // ... filter to delete one Household
     *   }
     * })
     * 
     */
    delete<T extends HouseholdDeleteArgs>(args: SelectSubset<T, HouseholdDeleteArgs<ExtArgs>>): Prisma__HouseholdClient<$Result.GetResult<Prisma.$HouseholdPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Household.
     * @param {HouseholdUpdateArgs} args - Arguments to update one Household.
     * @example
     * // Update one Household
     * const household = await prisma.household.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HouseholdUpdateArgs>(args: SelectSubset<T, HouseholdUpdateArgs<ExtArgs>>): Prisma__HouseholdClient<$Result.GetResult<Prisma.$HouseholdPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Households.
     * @param {HouseholdDeleteManyArgs} args - Arguments to filter Households to delete.
     * @example
     * // Delete a few Households
     * const { count } = await prisma.household.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HouseholdDeleteManyArgs>(args?: SelectSubset<T, HouseholdDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Households.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseholdUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Households
     * const household = await prisma.household.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HouseholdUpdateManyArgs>(args: SelectSubset<T, HouseholdUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Households and returns the data updated in the database.
     * @param {HouseholdUpdateManyAndReturnArgs} args - Arguments to update many Households.
     * @example
     * // Update many Households
     * const household = await prisma.household.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Households and only return the `id`
     * const householdWithIdOnly = await prisma.household.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HouseholdUpdateManyAndReturnArgs>(args: SelectSubset<T, HouseholdUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HouseholdPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Household.
     * @param {HouseholdUpsertArgs} args - Arguments to update or create a Household.
     * @example
     * // Update or create a Household
     * const household = await prisma.household.upsert({
     *   create: {
     *     // ... data to create a Household
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Household we want to update
     *   }
     * })
     */
    upsert<T extends HouseholdUpsertArgs>(args: SelectSubset<T, HouseholdUpsertArgs<ExtArgs>>): Prisma__HouseholdClient<$Result.GetResult<Prisma.$HouseholdPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Households.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseholdCountArgs} args - Arguments to filter Households to count.
     * @example
     * // Count the number of Households
     * const count = await prisma.household.count({
     *   where: {
     *     // ... the filter for the Households we want to count
     *   }
     * })
    **/
    count<T extends HouseholdCountArgs>(
      args?: Subset<T, HouseholdCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HouseholdCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Household.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseholdAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HouseholdAggregateArgs>(args: Subset<T, HouseholdAggregateArgs>): Prisma.PrismaPromise<GetHouseholdAggregateType<T>>

    /**
     * Group by Household.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseholdGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HouseholdGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HouseholdGroupByArgs['orderBy'] }
        : { orderBy?: HouseholdGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HouseholdGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHouseholdGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Household model
   */
  readonly fields: HouseholdFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Household.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HouseholdClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Household$usersArgs<ExtArgs> = {}>(args?: Subset<T, Household$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    chores<T extends Household$choresArgs<ExtArgs> = {}>(args?: Subset<T, Household$choresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Household model
   */
  interface HouseholdFieldRefs {
    readonly id: FieldRef<"Household", 'Int'>
    readonly name: FieldRef<"Household", 'String'>
    readonly joinCode: FieldRef<"Household", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Household findUnique
   */
  export type HouseholdFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Household
     */
    select?: HouseholdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Household
     */
    omit?: HouseholdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdInclude<ExtArgs> | null
    /**
     * Filter, which Household to fetch.
     */
    where: HouseholdWhereUniqueInput
  }

  /**
   * Household findUniqueOrThrow
   */
  export type HouseholdFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Household
     */
    select?: HouseholdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Household
     */
    omit?: HouseholdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdInclude<ExtArgs> | null
    /**
     * Filter, which Household to fetch.
     */
    where: HouseholdWhereUniqueInput
  }

  /**
   * Household findFirst
   */
  export type HouseholdFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Household
     */
    select?: HouseholdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Household
     */
    omit?: HouseholdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdInclude<ExtArgs> | null
    /**
     * Filter, which Household to fetch.
     */
    where?: HouseholdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Households to fetch.
     */
    orderBy?: HouseholdOrderByWithRelationInput | HouseholdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Households.
     */
    cursor?: HouseholdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Households from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Households.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Households.
     */
    distinct?: HouseholdScalarFieldEnum | HouseholdScalarFieldEnum[]
  }

  /**
   * Household findFirstOrThrow
   */
  export type HouseholdFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Household
     */
    select?: HouseholdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Household
     */
    omit?: HouseholdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdInclude<ExtArgs> | null
    /**
     * Filter, which Household to fetch.
     */
    where?: HouseholdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Households to fetch.
     */
    orderBy?: HouseholdOrderByWithRelationInput | HouseholdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Households.
     */
    cursor?: HouseholdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Households from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Households.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Households.
     */
    distinct?: HouseholdScalarFieldEnum | HouseholdScalarFieldEnum[]
  }

  /**
   * Household findMany
   */
  export type HouseholdFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Household
     */
    select?: HouseholdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Household
     */
    omit?: HouseholdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdInclude<ExtArgs> | null
    /**
     * Filter, which Households to fetch.
     */
    where?: HouseholdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Households to fetch.
     */
    orderBy?: HouseholdOrderByWithRelationInput | HouseholdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Households.
     */
    cursor?: HouseholdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Households from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Households.
     */
    skip?: number
    distinct?: HouseholdScalarFieldEnum | HouseholdScalarFieldEnum[]
  }

  /**
   * Household create
   */
  export type HouseholdCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Household
     */
    select?: HouseholdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Household
     */
    omit?: HouseholdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdInclude<ExtArgs> | null
    /**
     * The data needed to create a Household.
     */
    data: XOR<HouseholdCreateInput, HouseholdUncheckedCreateInput>
  }

  /**
   * Household createMany
   */
  export type HouseholdCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Households.
     */
    data: HouseholdCreateManyInput | HouseholdCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Household createManyAndReturn
   */
  export type HouseholdCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Household
     */
    select?: HouseholdSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Household
     */
    omit?: HouseholdOmit<ExtArgs> | null
    /**
     * The data used to create many Households.
     */
    data: HouseholdCreateManyInput | HouseholdCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Household update
   */
  export type HouseholdUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Household
     */
    select?: HouseholdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Household
     */
    omit?: HouseholdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdInclude<ExtArgs> | null
    /**
     * The data needed to update a Household.
     */
    data: XOR<HouseholdUpdateInput, HouseholdUncheckedUpdateInput>
    /**
     * Choose, which Household to update.
     */
    where: HouseholdWhereUniqueInput
  }

  /**
   * Household updateMany
   */
  export type HouseholdUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Households.
     */
    data: XOR<HouseholdUpdateManyMutationInput, HouseholdUncheckedUpdateManyInput>
    /**
     * Filter which Households to update
     */
    where?: HouseholdWhereInput
    /**
     * Limit how many Households to update.
     */
    limit?: number
  }

  /**
   * Household updateManyAndReturn
   */
  export type HouseholdUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Household
     */
    select?: HouseholdSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Household
     */
    omit?: HouseholdOmit<ExtArgs> | null
    /**
     * The data used to update Households.
     */
    data: XOR<HouseholdUpdateManyMutationInput, HouseholdUncheckedUpdateManyInput>
    /**
     * Filter which Households to update
     */
    where?: HouseholdWhereInput
    /**
     * Limit how many Households to update.
     */
    limit?: number
  }

  /**
   * Household upsert
   */
  export type HouseholdUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Household
     */
    select?: HouseholdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Household
     */
    omit?: HouseholdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdInclude<ExtArgs> | null
    /**
     * The filter to search for the Household to update in case it exists.
     */
    where: HouseholdWhereUniqueInput
    /**
     * In case the Household found by the `where` argument doesn't exist, create a new Household with this data.
     */
    create: XOR<HouseholdCreateInput, HouseholdUncheckedCreateInput>
    /**
     * In case the Household was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HouseholdUpdateInput, HouseholdUncheckedUpdateInput>
  }

  /**
   * Household delete
   */
  export type HouseholdDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Household
     */
    select?: HouseholdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Household
     */
    omit?: HouseholdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdInclude<ExtArgs> | null
    /**
     * Filter which Household to delete.
     */
    where: HouseholdWhereUniqueInput
  }

  /**
   * Household deleteMany
   */
  export type HouseholdDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Households to delete
     */
    where?: HouseholdWhereInput
    /**
     * Limit how many Households to delete.
     */
    limit?: number
  }

  /**
   * Household.users
   */
  export type Household$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Household.chores
   */
  export type Household$choresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chore
     */
    select?: ChoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chore
     */
    omit?: ChoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoreInclude<ExtArgs> | null
    where?: ChoreWhereInput
    orderBy?: ChoreOrderByWithRelationInput | ChoreOrderByWithRelationInput[]
    cursor?: ChoreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChoreScalarFieldEnum | ChoreScalarFieldEnum[]
  }

  /**
   * Household without action
   */
  export type HouseholdDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Household
     */
    select?: HouseholdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Household
     */
    omit?: HouseholdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdInclude<ExtArgs> | null
  }


  /**
   * Model Chore
   */

  export type AggregateChore = {
    _count: ChoreCountAggregateOutputType | null
    _avg: ChoreAvgAggregateOutputType | null
    _sum: ChoreSumAggregateOutputType | null
    _min: ChoreMinAggregateOutputType | null
    _max: ChoreMaxAggregateOutputType | null
  }

  export type ChoreAvgAggregateOutputType = {
    id: number | null
    difficulty: number | null
    estimatedTime: number | null
    householdId: number | null
    assigneeId: number | null
  }

  export type ChoreSumAggregateOutputType = {
    id: number | null
    difficulty: number | null
    estimatedTime: number | null
    householdId: number | null
    assigneeId: number | null
  }

  export type ChoreMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    difficulty: number | null
    location: string | null
    estimatedTime: number | null
    dueDate: Date | null
    repeat: boolean | null
    householdId: number | null
    assigneeId: number | null
  }

  export type ChoreMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    difficulty: number | null
    location: string | null
    estimatedTime: number | null
    dueDate: Date | null
    repeat: boolean | null
    householdId: number | null
    assigneeId: number | null
  }

  export type ChoreCountAggregateOutputType = {
    id: number
    name: number
    description: number
    difficulty: number
    location: number
    estimatedTime: number
    dueDate: number
    repeat: number
    householdId: number
    assigneeId: number
    _all: number
  }


  export type ChoreAvgAggregateInputType = {
    id?: true
    difficulty?: true
    estimatedTime?: true
    householdId?: true
    assigneeId?: true
  }

  export type ChoreSumAggregateInputType = {
    id?: true
    difficulty?: true
    estimatedTime?: true
    householdId?: true
    assigneeId?: true
  }

  export type ChoreMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    difficulty?: true
    location?: true
    estimatedTime?: true
    dueDate?: true
    repeat?: true
    householdId?: true
    assigneeId?: true
  }

  export type ChoreMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    difficulty?: true
    location?: true
    estimatedTime?: true
    dueDate?: true
    repeat?: true
    householdId?: true
    assigneeId?: true
  }

  export type ChoreCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    difficulty?: true
    location?: true
    estimatedTime?: true
    dueDate?: true
    repeat?: true
    householdId?: true
    assigneeId?: true
    _all?: true
  }

  export type ChoreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chore to aggregate.
     */
    where?: ChoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chores to fetch.
     */
    orderBy?: ChoreOrderByWithRelationInput | ChoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Chores
    **/
    _count?: true | ChoreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChoreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChoreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChoreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChoreMaxAggregateInputType
  }

  export type GetChoreAggregateType<T extends ChoreAggregateArgs> = {
        [P in keyof T & keyof AggregateChore]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChore[P]>
      : GetScalarType<T[P], AggregateChore[P]>
  }




  export type ChoreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChoreWhereInput
    orderBy?: ChoreOrderByWithAggregationInput | ChoreOrderByWithAggregationInput[]
    by: ChoreScalarFieldEnum[] | ChoreScalarFieldEnum
    having?: ChoreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChoreCountAggregateInputType | true
    _avg?: ChoreAvgAggregateInputType
    _sum?: ChoreSumAggregateInputType
    _min?: ChoreMinAggregateInputType
    _max?: ChoreMaxAggregateInputType
  }

  export type ChoreGroupByOutputType = {
    id: number
    name: string
    description: string
    difficulty: number
    location: string
    estimatedTime: number
    dueDate: Date
    repeat: boolean
    householdId: number
    assigneeId: number | null
    _count: ChoreCountAggregateOutputType | null
    _avg: ChoreAvgAggregateOutputType | null
    _sum: ChoreSumAggregateOutputType | null
    _min: ChoreMinAggregateOutputType | null
    _max: ChoreMaxAggregateOutputType | null
  }

  type GetChoreGroupByPayload<T extends ChoreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChoreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChoreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChoreGroupByOutputType[P]>
            : GetScalarType<T[P], ChoreGroupByOutputType[P]>
        }
      >
    >


  export type ChoreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    difficulty?: boolean
    location?: boolean
    estimatedTime?: boolean
    dueDate?: boolean
    repeat?: boolean
    householdId?: boolean
    assigneeId?: boolean
    household?: boolean | HouseholdDefaultArgs<ExtArgs>
    assignee?: boolean | Chore$assigneeArgs<ExtArgs>
  }, ExtArgs["result"]["chore"]>

  export type ChoreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    difficulty?: boolean
    location?: boolean
    estimatedTime?: boolean
    dueDate?: boolean
    repeat?: boolean
    householdId?: boolean
    assigneeId?: boolean
    household?: boolean | HouseholdDefaultArgs<ExtArgs>
    assignee?: boolean | Chore$assigneeArgs<ExtArgs>
  }, ExtArgs["result"]["chore"]>

  export type ChoreSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    difficulty?: boolean
    location?: boolean
    estimatedTime?: boolean
    dueDate?: boolean
    repeat?: boolean
    householdId?: boolean
    assigneeId?: boolean
    household?: boolean | HouseholdDefaultArgs<ExtArgs>
    assignee?: boolean | Chore$assigneeArgs<ExtArgs>
  }, ExtArgs["result"]["chore"]>

  export type ChoreSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    difficulty?: boolean
    location?: boolean
    estimatedTime?: boolean
    dueDate?: boolean
    repeat?: boolean
    householdId?: boolean
    assigneeId?: boolean
  }

  export type ChoreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "difficulty" | "location" | "estimatedTime" | "dueDate" | "repeat" | "householdId" | "assigneeId", ExtArgs["result"]["chore"]>
  export type ChoreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    household?: boolean | HouseholdDefaultArgs<ExtArgs>
    assignee?: boolean | Chore$assigneeArgs<ExtArgs>
  }
  export type ChoreIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    household?: boolean | HouseholdDefaultArgs<ExtArgs>
    assignee?: boolean | Chore$assigneeArgs<ExtArgs>
  }
  export type ChoreIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    household?: boolean | HouseholdDefaultArgs<ExtArgs>
    assignee?: boolean | Chore$assigneeArgs<ExtArgs>
  }

  export type $ChorePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Chore"
    objects: {
      household: Prisma.$HouseholdPayload<ExtArgs>
      assignee: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
      difficulty: number
      location: string
      estimatedTime: number
      dueDate: Date
      repeat: boolean
      householdId: number
      assigneeId: number | null
    }, ExtArgs["result"]["chore"]>
    composites: {}
  }

  type ChoreGetPayload<S extends boolean | null | undefined | ChoreDefaultArgs> = $Result.GetResult<Prisma.$ChorePayload, S>

  type ChoreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChoreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChoreCountAggregateInputType | true
    }

  export interface ChoreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Chore'], meta: { name: 'Chore' } }
    /**
     * Find zero or one Chore that matches the filter.
     * @param {ChoreFindUniqueArgs} args - Arguments to find a Chore
     * @example
     * // Get one Chore
     * const chore = await prisma.chore.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChoreFindUniqueArgs>(args: SelectSubset<T, ChoreFindUniqueArgs<ExtArgs>>): Prisma__ChoreClient<$Result.GetResult<Prisma.$ChorePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Chore that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChoreFindUniqueOrThrowArgs} args - Arguments to find a Chore
     * @example
     * // Get one Chore
     * const chore = await prisma.chore.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChoreFindUniqueOrThrowArgs>(args: SelectSubset<T, ChoreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChoreClient<$Result.GetResult<Prisma.$ChorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chore that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoreFindFirstArgs} args - Arguments to find a Chore
     * @example
     * // Get one Chore
     * const chore = await prisma.chore.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChoreFindFirstArgs>(args?: SelectSubset<T, ChoreFindFirstArgs<ExtArgs>>): Prisma__ChoreClient<$Result.GetResult<Prisma.$ChorePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chore that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoreFindFirstOrThrowArgs} args - Arguments to find a Chore
     * @example
     * // Get one Chore
     * const chore = await prisma.chore.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChoreFindFirstOrThrowArgs>(args?: SelectSubset<T, ChoreFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChoreClient<$Result.GetResult<Prisma.$ChorePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Chores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chores
     * const chores = await prisma.chore.findMany()
     * 
     * // Get first 10 Chores
     * const chores = await prisma.chore.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const choreWithIdOnly = await prisma.chore.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChoreFindManyArgs>(args?: SelectSubset<T, ChoreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Chore.
     * @param {ChoreCreateArgs} args - Arguments to create a Chore.
     * @example
     * // Create one Chore
     * const Chore = await prisma.chore.create({
     *   data: {
     *     // ... data to create a Chore
     *   }
     * })
     * 
     */
    create<T extends ChoreCreateArgs>(args: SelectSubset<T, ChoreCreateArgs<ExtArgs>>): Prisma__ChoreClient<$Result.GetResult<Prisma.$ChorePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Chores.
     * @param {ChoreCreateManyArgs} args - Arguments to create many Chores.
     * @example
     * // Create many Chores
     * const chore = await prisma.chore.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChoreCreateManyArgs>(args?: SelectSubset<T, ChoreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Chores and returns the data saved in the database.
     * @param {ChoreCreateManyAndReturnArgs} args - Arguments to create many Chores.
     * @example
     * // Create many Chores
     * const chore = await prisma.chore.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Chores and only return the `id`
     * const choreWithIdOnly = await prisma.chore.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChoreCreateManyAndReturnArgs>(args?: SelectSubset<T, ChoreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChorePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Chore.
     * @param {ChoreDeleteArgs} args - Arguments to delete one Chore.
     * @example
     * // Delete one Chore
     * const Chore = await prisma.chore.delete({
     *   where: {
     *     // ... filter to delete one Chore
     *   }
     * })
     * 
     */
    delete<T extends ChoreDeleteArgs>(args: SelectSubset<T, ChoreDeleteArgs<ExtArgs>>): Prisma__ChoreClient<$Result.GetResult<Prisma.$ChorePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Chore.
     * @param {ChoreUpdateArgs} args - Arguments to update one Chore.
     * @example
     * // Update one Chore
     * const chore = await prisma.chore.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChoreUpdateArgs>(args: SelectSubset<T, ChoreUpdateArgs<ExtArgs>>): Prisma__ChoreClient<$Result.GetResult<Prisma.$ChorePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Chores.
     * @param {ChoreDeleteManyArgs} args - Arguments to filter Chores to delete.
     * @example
     * // Delete a few Chores
     * const { count } = await prisma.chore.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChoreDeleteManyArgs>(args?: SelectSubset<T, ChoreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chores
     * const chore = await prisma.chore.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChoreUpdateManyArgs>(args: SelectSubset<T, ChoreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chores and returns the data updated in the database.
     * @param {ChoreUpdateManyAndReturnArgs} args - Arguments to update many Chores.
     * @example
     * // Update many Chores
     * const chore = await prisma.chore.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Chores and only return the `id`
     * const choreWithIdOnly = await prisma.chore.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChoreUpdateManyAndReturnArgs>(args: SelectSubset<T, ChoreUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChorePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Chore.
     * @param {ChoreUpsertArgs} args - Arguments to update or create a Chore.
     * @example
     * // Update or create a Chore
     * const chore = await prisma.chore.upsert({
     *   create: {
     *     // ... data to create a Chore
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chore we want to update
     *   }
     * })
     */
    upsert<T extends ChoreUpsertArgs>(args: SelectSubset<T, ChoreUpsertArgs<ExtArgs>>): Prisma__ChoreClient<$Result.GetResult<Prisma.$ChorePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Chores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoreCountArgs} args - Arguments to filter Chores to count.
     * @example
     * // Count the number of Chores
     * const count = await prisma.chore.count({
     *   where: {
     *     // ... the filter for the Chores we want to count
     *   }
     * })
    **/
    count<T extends ChoreCountArgs>(
      args?: Subset<T, ChoreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChoreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chore.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChoreAggregateArgs>(args: Subset<T, ChoreAggregateArgs>): Prisma.PrismaPromise<GetChoreAggregateType<T>>

    /**
     * Group by Chore.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoreGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChoreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChoreGroupByArgs['orderBy'] }
        : { orderBy?: ChoreGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChoreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChoreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Chore model
   */
  readonly fields: ChoreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Chore.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChoreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    household<T extends HouseholdDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HouseholdDefaultArgs<ExtArgs>>): Prisma__HouseholdClient<$Result.GetResult<Prisma.$HouseholdPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    assignee<T extends Chore$assigneeArgs<ExtArgs> = {}>(args?: Subset<T, Chore$assigneeArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Chore model
   */
  interface ChoreFieldRefs {
    readonly id: FieldRef<"Chore", 'Int'>
    readonly name: FieldRef<"Chore", 'String'>
    readonly description: FieldRef<"Chore", 'String'>
    readonly difficulty: FieldRef<"Chore", 'Int'>
    readonly location: FieldRef<"Chore", 'String'>
    readonly estimatedTime: FieldRef<"Chore", 'Int'>
    readonly dueDate: FieldRef<"Chore", 'DateTime'>
    readonly repeat: FieldRef<"Chore", 'Boolean'>
    readonly householdId: FieldRef<"Chore", 'Int'>
    readonly assigneeId: FieldRef<"Chore", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Chore findUnique
   */
  export type ChoreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chore
     */
    select?: ChoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chore
     */
    omit?: ChoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoreInclude<ExtArgs> | null
    /**
     * Filter, which Chore to fetch.
     */
    where: ChoreWhereUniqueInput
  }

  /**
   * Chore findUniqueOrThrow
   */
  export type ChoreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chore
     */
    select?: ChoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chore
     */
    omit?: ChoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoreInclude<ExtArgs> | null
    /**
     * Filter, which Chore to fetch.
     */
    where: ChoreWhereUniqueInput
  }

  /**
   * Chore findFirst
   */
  export type ChoreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chore
     */
    select?: ChoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chore
     */
    omit?: ChoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoreInclude<ExtArgs> | null
    /**
     * Filter, which Chore to fetch.
     */
    where?: ChoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chores to fetch.
     */
    orderBy?: ChoreOrderByWithRelationInput | ChoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chores.
     */
    cursor?: ChoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chores.
     */
    distinct?: ChoreScalarFieldEnum | ChoreScalarFieldEnum[]
  }

  /**
   * Chore findFirstOrThrow
   */
  export type ChoreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chore
     */
    select?: ChoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chore
     */
    omit?: ChoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoreInclude<ExtArgs> | null
    /**
     * Filter, which Chore to fetch.
     */
    where?: ChoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chores to fetch.
     */
    orderBy?: ChoreOrderByWithRelationInput | ChoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chores.
     */
    cursor?: ChoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chores.
     */
    distinct?: ChoreScalarFieldEnum | ChoreScalarFieldEnum[]
  }

  /**
   * Chore findMany
   */
  export type ChoreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chore
     */
    select?: ChoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chore
     */
    omit?: ChoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoreInclude<ExtArgs> | null
    /**
     * Filter, which Chores to fetch.
     */
    where?: ChoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chores to fetch.
     */
    orderBy?: ChoreOrderByWithRelationInput | ChoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Chores.
     */
    cursor?: ChoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chores.
     */
    skip?: number
    distinct?: ChoreScalarFieldEnum | ChoreScalarFieldEnum[]
  }

  /**
   * Chore create
   */
  export type ChoreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chore
     */
    select?: ChoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chore
     */
    omit?: ChoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoreInclude<ExtArgs> | null
    /**
     * The data needed to create a Chore.
     */
    data: XOR<ChoreCreateInput, ChoreUncheckedCreateInput>
  }

  /**
   * Chore createMany
   */
  export type ChoreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Chores.
     */
    data: ChoreCreateManyInput | ChoreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Chore createManyAndReturn
   */
  export type ChoreCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chore
     */
    select?: ChoreSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chore
     */
    omit?: ChoreOmit<ExtArgs> | null
    /**
     * The data used to create many Chores.
     */
    data: ChoreCreateManyInput | ChoreCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoreIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Chore update
   */
  export type ChoreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chore
     */
    select?: ChoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chore
     */
    omit?: ChoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoreInclude<ExtArgs> | null
    /**
     * The data needed to update a Chore.
     */
    data: XOR<ChoreUpdateInput, ChoreUncheckedUpdateInput>
    /**
     * Choose, which Chore to update.
     */
    where: ChoreWhereUniqueInput
  }

  /**
   * Chore updateMany
   */
  export type ChoreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Chores.
     */
    data: XOR<ChoreUpdateManyMutationInput, ChoreUncheckedUpdateManyInput>
    /**
     * Filter which Chores to update
     */
    where?: ChoreWhereInput
    /**
     * Limit how many Chores to update.
     */
    limit?: number
  }

  /**
   * Chore updateManyAndReturn
   */
  export type ChoreUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chore
     */
    select?: ChoreSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chore
     */
    omit?: ChoreOmit<ExtArgs> | null
    /**
     * The data used to update Chores.
     */
    data: XOR<ChoreUpdateManyMutationInput, ChoreUncheckedUpdateManyInput>
    /**
     * Filter which Chores to update
     */
    where?: ChoreWhereInput
    /**
     * Limit how many Chores to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoreIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Chore upsert
   */
  export type ChoreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chore
     */
    select?: ChoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chore
     */
    omit?: ChoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoreInclude<ExtArgs> | null
    /**
     * The filter to search for the Chore to update in case it exists.
     */
    where: ChoreWhereUniqueInput
    /**
     * In case the Chore found by the `where` argument doesn't exist, create a new Chore with this data.
     */
    create: XOR<ChoreCreateInput, ChoreUncheckedCreateInput>
    /**
     * In case the Chore was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChoreUpdateInput, ChoreUncheckedUpdateInput>
  }

  /**
   * Chore delete
   */
  export type ChoreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chore
     */
    select?: ChoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chore
     */
    omit?: ChoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoreInclude<ExtArgs> | null
    /**
     * Filter which Chore to delete.
     */
    where: ChoreWhereUniqueInput
  }

  /**
   * Chore deleteMany
   */
  export type ChoreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chores to delete
     */
    where?: ChoreWhereInput
    /**
     * Limit how many Chores to delete.
     */
    limit?: number
  }

  /**
   * Chore.assignee
   */
  export type Chore$assigneeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Chore without action
   */
  export type ChoreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chore
     */
    select?: ChoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chore
     */
    omit?: ChoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoreInclude<ExtArgs> | null
  }


  /**
   * Model Avatar
   */

  export type AggregateAvatar = {
    _count: AvatarCountAggregateOutputType | null
    _avg: AvatarAvgAggregateOutputType | null
    _sum: AvatarSumAggregateOutputType | null
    _min: AvatarMinAggregateOutputType | null
    _max: AvatarMaxAggregateOutputType | null
  }

  export type AvatarAvgAggregateOutputType = {
    ownerId: number | null
    hatId: number | null
    hairId: number | null
    shirtId: number | null
    backgroundId: number | null
    handPropId: number | null
  }

  export type AvatarSumAggregateOutputType = {
    ownerId: number | null
    hatId: number | null
    hairId: number | null
    shirtId: number | null
    backgroundId: number | null
    handPropId: number | null
  }

  export type AvatarMinAggregateOutputType = {
    ownerId: number | null
    hatId: number | null
    hairId: number | null
    shirtId: number | null
    backgroundId: number | null
    handPropId: number | null
  }

  export type AvatarMaxAggregateOutputType = {
    ownerId: number | null
    hatId: number | null
    hairId: number | null
    shirtId: number | null
    backgroundId: number | null
    handPropId: number | null
  }

  export type AvatarCountAggregateOutputType = {
    ownerId: number
    hatId: number
    hairId: number
    shirtId: number
    backgroundId: number
    handPropId: number
    _all: number
  }


  export type AvatarAvgAggregateInputType = {
    ownerId?: true
    hatId?: true
    hairId?: true
    shirtId?: true
    backgroundId?: true
    handPropId?: true
  }

  export type AvatarSumAggregateInputType = {
    ownerId?: true
    hatId?: true
    hairId?: true
    shirtId?: true
    backgroundId?: true
    handPropId?: true
  }

  export type AvatarMinAggregateInputType = {
    ownerId?: true
    hatId?: true
    hairId?: true
    shirtId?: true
    backgroundId?: true
    handPropId?: true
  }

  export type AvatarMaxAggregateInputType = {
    ownerId?: true
    hatId?: true
    hairId?: true
    shirtId?: true
    backgroundId?: true
    handPropId?: true
  }

  export type AvatarCountAggregateInputType = {
    ownerId?: true
    hatId?: true
    hairId?: true
    shirtId?: true
    backgroundId?: true
    handPropId?: true
    _all?: true
  }

  export type AvatarAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Avatar to aggregate.
     */
    where?: AvatarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avatars to fetch.
     */
    orderBy?: AvatarOrderByWithRelationInput | AvatarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AvatarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avatars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avatars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Avatars
    **/
    _count?: true | AvatarCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AvatarAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AvatarSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AvatarMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AvatarMaxAggregateInputType
  }

  export type GetAvatarAggregateType<T extends AvatarAggregateArgs> = {
        [P in keyof T & keyof AggregateAvatar]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAvatar[P]>
      : GetScalarType<T[P], AggregateAvatar[P]>
  }




  export type AvatarGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvatarWhereInput
    orderBy?: AvatarOrderByWithAggregationInput | AvatarOrderByWithAggregationInput[]
    by: AvatarScalarFieldEnum[] | AvatarScalarFieldEnum
    having?: AvatarScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AvatarCountAggregateInputType | true
    _avg?: AvatarAvgAggregateInputType
    _sum?: AvatarSumAggregateInputType
    _min?: AvatarMinAggregateInputType
    _max?: AvatarMaxAggregateInputType
  }

  export type AvatarGroupByOutputType = {
    ownerId: number
    hatId: number
    hairId: number
    shirtId: number
    backgroundId: number
    handPropId: number
    _count: AvatarCountAggregateOutputType | null
    _avg: AvatarAvgAggregateOutputType | null
    _sum: AvatarSumAggregateOutputType | null
    _min: AvatarMinAggregateOutputType | null
    _max: AvatarMaxAggregateOutputType | null
  }

  type GetAvatarGroupByPayload<T extends AvatarGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AvatarGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AvatarGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AvatarGroupByOutputType[P]>
            : GetScalarType<T[P], AvatarGroupByOutputType[P]>
        }
      >
    >


  export type AvatarSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ownerId?: boolean
    hatId?: boolean
    hairId?: boolean
    shirtId?: boolean
    backgroundId?: boolean
    handPropId?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    hat?: boolean | AvatarPropDefaultArgs<ExtArgs>
    hair?: boolean | AvatarPropDefaultArgs<ExtArgs>
    shirt?: boolean | AvatarPropDefaultArgs<ExtArgs>
    background?: boolean | AvatarPropDefaultArgs<ExtArgs>
    handProp?: boolean | AvatarPropDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["avatar"]>

  export type AvatarSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ownerId?: boolean
    hatId?: boolean
    hairId?: boolean
    shirtId?: boolean
    backgroundId?: boolean
    handPropId?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    hat?: boolean | AvatarPropDefaultArgs<ExtArgs>
    hair?: boolean | AvatarPropDefaultArgs<ExtArgs>
    shirt?: boolean | AvatarPropDefaultArgs<ExtArgs>
    background?: boolean | AvatarPropDefaultArgs<ExtArgs>
    handProp?: boolean | AvatarPropDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["avatar"]>

  export type AvatarSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ownerId?: boolean
    hatId?: boolean
    hairId?: boolean
    shirtId?: boolean
    backgroundId?: boolean
    handPropId?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    hat?: boolean | AvatarPropDefaultArgs<ExtArgs>
    hair?: boolean | AvatarPropDefaultArgs<ExtArgs>
    shirt?: boolean | AvatarPropDefaultArgs<ExtArgs>
    background?: boolean | AvatarPropDefaultArgs<ExtArgs>
    handProp?: boolean | AvatarPropDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["avatar"]>

  export type AvatarSelectScalar = {
    ownerId?: boolean
    hatId?: boolean
    hairId?: boolean
    shirtId?: boolean
    backgroundId?: boolean
    handPropId?: boolean
  }

  export type AvatarOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ownerId" | "hatId" | "hairId" | "shirtId" | "backgroundId" | "handPropId", ExtArgs["result"]["avatar"]>
  export type AvatarInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    hat?: boolean | AvatarPropDefaultArgs<ExtArgs>
    hair?: boolean | AvatarPropDefaultArgs<ExtArgs>
    shirt?: boolean | AvatarPropDefaultArgs<ExtArgs>
    background?: boolean | AvatarPropDefaultArgs<ExtArgs>
    handProp?: boolean | AvatarPropDefaultArgs<ExtArgs>
  }
  export type AvatarIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    hat?: boolean | AvatarPropDefaultArgs<ExtArgs>
    hair?: boolean | AvatarPropDefaultArgs<ExtArgs>
    shirt?: boolean | AvatarPropDefaultArgs<ExtArgs>
    background?: boolean | AvatarPropDefaultArgs<ExtArgs>
    handProp?: boolean | AvatarPropDefaultArgs<ExtArgs>
  }
  export type AvatarIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    hat?: boolean | AvatarPropDefaultArgs<ExtArgs>
    hair?: boolean | AvatarPropDefaultArgs<ExtArgs>
    shirt?: boolean | AvatarPropDefaultArgs<ExtArgs>
    background?: boolean | AvatarPropDefaultArgs<ExtArgs>
    handProp?: boolean | AvatarPropDefaultArgs<ExtArgs>
  }

  export type $AvatarPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Avatar"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      hat: Prisma.$AvatarPropPayload<ExtArgs>
      hair: Prisma.$AvatarPropPayload<ExtArgs>
      shirt: Prisma.$AvatarPropPayload<ExtArgs>
      background: Prisma.$AvatarPropPayload<ExtArgs>
      handProp: Prisma.$AvatarPropPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      ownerId: number
      hatId: number
      hairId: number
      shirtId: number
      backgroundId: number
      handPropId: number
    }, ExtArgs["result"]["avatar"]>
    composites: {}
  }

  type AvatarGetPayload<S extends boolean | null | undefined | AvatarDefaultArgs> = $Result.GetResult<Prisma.$AvatarPayload, S>

  type AvatarCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AvatarFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AvatarCountAggregateInputType | true
    }

  export interface AvatarDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Avatar'], meta: { name: 'Avatar' } }
    /**
     * Find zero or one Avatar that matches the filter.
     * @param {AvatarFindUniqueArgs} args - Arguments to find a Avatar
     * @example
     * // Get one Avatar
     * const avatar = await prisma.avatar.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AvatarFindUniqueArgs>(args: SelectSubset<T, AvatarFindUniqueArgs<ExtArgs>>): Prisma__AvatarClient<$Result.GetResult<Prisma.$AvatarPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Avatar that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AvatarFindUniqueOrThrowArgs} args - Arguments to find a Avatar
     * @example
     * // Get one Avatar
     * const avatar = await prisma.avatar.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AvatarFindUniqueOrThrowArgs>(args: SelectSubset<T, AvatarFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AvatarClient<$Result.GetResult<Prisma.$AvatarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Avatar that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvatarFindFirstArgs} args - Arguments to find a Avatar
     * @example
     * // Get one Avatar
     * const avatar = await prisma.avatar.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AvatarFindFirstArgs>(args?: SelectSubset<T, AvatarFindFirstArgs<ExtArgs>>): Prisma__AvatarClient<$Result.GetResult<Prisma.$AvatarPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Avatar that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvatarFindFirstOrThrowArgs} args - Arguments to find a Avatar
     * @example
     * // Get one Avatar
     * const avatar = await prisma.avatar.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AvatarFindFirstOrThrowArgs>(args?: SelectSubset<T, AvatarFindFirstOrThrowArgs<ExtArgs>>): Prisma__AvatarClient<$Result.GetResult<Prisma.$AvatarPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Avatars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvatarFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Avatars
     * const avatars = await prisma.avatar.findMany()
     * 
     * // Get first 10 Avatars
     * const avatars = await prisma.avatar.findMany({ take: 10 })
     * 
     * // Only select the `ownerId`
     * const avatarWithOwnerIdOnly = await prisma.avatar.findMany({ select: { ownerId: true } })
     * 
     */
    findMany<T extends AvatarFindManyArgs>(args?: SelectSubset<T, AvatarFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvatarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Avatar.
     * @param {AvatarCreateArgs} args - Arguments to create a Avatar.
     * @example
     * // Create one Avatar
     * const Avatar = await prisma.avatar.create({
     *   data: {
     *     // ... data to create a Avatar
     *   }
     * })
     * 
     */
    create<T extends AvatarCreateArgs>(args: SelectSubset<T, AvatarCreateArgs<ExtArgs>>): Prisma__AvatarClient<$Result.GetResult<Prisma.$AvatarPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Avatars.
     * @param {AvatarCreateManyArgs} args - Arguments to create many Avatars.
     * @example
     * // Create many Avatars
     * const avatar = await prisma.avatar.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AvatarCreateManyArgs>(args?: SelectSubset<T, AvatarCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Avatars and returns the data saved in the database.
     * @param {AvatarCreateManyAndReturnArgs} args - Arguments to create many Avatars.
     * @example
     * // Create many Avatars
     * const avatar = await prisma.avatar.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Avatars and only return the `ownerId`
     * const avatarWithOwnerIdOnly = await prisma.avatar.createManyAndReturn({
     *   select: { ownerId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AvatarCreateManyAndReturnArgs>(args?: SelectSubset<T, AvatarCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvatarPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Avatar.
     * @param {AvatarDeleteArgs} args - Arguments to delete one Avatar.
     * @example
     * // Delete one Avatar
     * const Avatar = await prisma.avatar.delete({
     *   where: {
     *     // ... filter to delete one Avatar
     *   }
     * })
     * 
     */
    delete<T extends AvatarDeleteArgs>(args: SelectSubset<T, AvatarDeleteArgs<ExtArgs>>): Prisma__AvatarClient<$Result.GetResult<Prisma.$AvatarPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Avatar.
     * @param {AvatarUpdateArgs} args - Arguments to update one Avatar.
     * @example
     * // Update one Avatar
     * const avatar = await prisma.avatar.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AvatarUpdateArgs>(args: SelectSubset<T, AvatarUpdateArgs<ExtArgs>>): Prisma__AvatarClient<$Result.GetResult<Prisma.$AvatarPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Avatars.
     * @param {AvatarDeleteManyArgs} args - Arguments to filter Avatars to delete.
     * @example
     * // Delete a few Avatars
     * const { count } = await prisma.avatar.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AvatarDeleteManyArgs>(args?: SelectSubset<T, AvatarDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Avatars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvatarUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Avatars
     * const avatar = await prisma.avatar.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AvatarUpdateManyArgs>(args: SelectSubset<T, AvatarUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Avatars and returns the data updated in the database.
     * @param {AvatarUpdateManyAndReturnArgs} args - Arguments to update many Avatars.
     * @example
     * // Update many Avatars
     * const avatar = await prisma.avatar.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Avatars and only return the `ownerId`
     * const avatarWithOwnerIdOnly = await prisma.avatar.updateManyAndReturn({
     *   select: { ownerId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AvatarUpdateManyAndReturnArgs>(args: SelectSubset<T, AvatarUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvatarPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Avatar.
     * @param {AvatarUpsertArgs} args - Arguments to update or create a Avatar.
     * @example
     * // Update or create a Avatar
     * const avatar = await prisma.avatar.upsert({
     *   create: {
     *     // ... data to create a Avatar
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Avatar we want to update
     *   }
     * })
     */
    upsert<T extends AvatarUpsertArgs>(args: SelectSubset<T, AvatarUpsertArgs<ExtArgs>>): Prisma__AvatarClient<$Result.GetResult<Prisma.$AvatarPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Avatars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvatarCountArgs} args - Arguments to filter Avatars to count.
     * @example
     * // Count the number of Avatars
     * const count = await prisma.avatar.count({
     *   where: {
     *     // ... the filter for the Avatars we want to count
     *   }
     * })
    **/
    count<T extends AvatarCountArgs>(
      args?: Subset<T, AvatarCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AvatarCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Avatar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvatarAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AvatarAggregateArgs>(args: Subset<T, AvatarAggregateArgs>): Prisma.PrismaPromise<GetAvatarAggregateType<T>>

    /**
     * Group by Avatar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvatarGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AvatarGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AvatarGroupByArgs['orderBy'] }
        : { orderBy?: AvatarGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AvatarGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAvatarGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Avatar model
   */
  readonly fields: AvatarFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Avatar.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AvatarClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    hat<T extends AvatarPropDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AvatarPropDefaultArgs<ExtArgs>>): Prisma__AvatarPropClient<$Result.GetResult<Prisma.$AvatarPropPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    hair<T extends AvatarPropDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AvatarPropDefaultArgs<ExtArgs>>): Prisma__AvatarPropClient<$Result.GetResult<Prisma.$AvatarPropPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    shirt<T extends AvatarPropDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AvatarPropDefaultArgs<ExtArgs>>): Prisma__AvatarPropClient<$Result.GetResult<Prisma.$AvatarPropPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    background<T extends AvatarPropDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AvatarPropDefaultArgs<ExtArgs>>): Prisma__AvatarPropClient<$Result.GetResult<Prisma.$AvatarPropPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    handProp<T extends AvatarPropDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AvatarPropDefaultArgs<ExtArgs>>): Prisma__AvatarPropClient<$Result.GetResult<Prisma.$AvatarPropPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Avatar model
   */
  interface AvatarFieldRefs {
    readonly ownerId: FieldRef<"Avatar", 'Int'>
    readonly hatId: FieldRef<"Avatar", 'Int'>
    readonly hairId: FieldRef<"Avatar", 'Int'>
    readonly shirtId: FieldRef<"Avatar", 'Int'>
    readonly backgroundId: FieldRef<"Avatar", 'Int'>
    readonly handPropId: FieldRef<"Avatar", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Avatar findUnique
   */
  export type AvatarFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avatar
     */
    omit?: AvatarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarInclude<ExtArgs> | null
    /**
     * Filter, which Avatar to fetch.
     */
    where: AvatarWhereUniqueInput
  }

  /**
   * Avatar findUniqueOrThrow
   */
  export type AvatarFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avatar
     */
    omit?: AvatarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarInclude<ExtArgs> | null
    /**
     * Filter, which Avatar to fetch.
     */
    where: AvatarWhereUniqueInput
  }

  /**
   * Avatar findFirst
   */
  export type AvatarFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avatar
     */
    omit?: AvatarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarInclude<ExtArgs> | null
    /**
     * Filter, which Avatar to fetch.
     */
    where?: AvatarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avatars to fetch.
     */
    orderBy?: AvatarOrderByWithRelationInput | AvatarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Avatars.
     */
    cursor?: AvatarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avatars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avatars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Avatars.
     */
    distinct?: AvatarScalarFieldEnum | AvatarScalarFieldEnum[]
  }

  /**
   * Avatar findFirstOrThrow
   */
  export type AvatarFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avatar
     */
    omit?: AvatarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarInclude<ExtArgs> | null
    /**
     * Filter, which Avatar to fetch.
     */
    where?: AvatarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avatars to fetch.
     */
    orderBy?: AvatarOrderByWithRelationInput | AvatarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Avatars.
     */
    cursor?: AvatarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avatars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avatars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Avatars.
     */
    distinct?: AvatarScalarFieldEnum | AvatarScalarFieldEnum[]
  }

  /**
   * Avatar findMany
   */
  export type AvatarFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avatar
     */
    omit?: AvatarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarInclude<ExtArgs> | null
    /**
     * Filter, which Avatars to fetch.
     */
    where?: AvatarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avatars to fetch.
     */
    orderBy?: AvatarOrderByWithRelationInput | AvatarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Avatars.
     */
    cursor?: AvatarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avatars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avatars.
     */
    skip?: number
    distinct?: AvatarScalarFieldEnum | AvatarScalarFieldEnum[]
  }

  /**
   * Avatar create
   */
  export type AvatarCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avatar
     */
    omit?: AvatarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarInclude<ExtArgs> | null
    /**
     * The data needed to create a Avatar.
     */
    data: XOR<AvatarCreateInput, AvatarUncheckedCreateInput>
  }

  /**
   * Avatar createMany
   */
  export type AvatarCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Avatars.
     */
    data: AvatarCreateManyInput | AvatarCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Avatar createManyAndReturn
   */
  export type AvatarCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Avatar
     */
    omit?: AvatarOmit<ExtArgs> | null
    /**
     * The data used to create many Avatars.
     */
    data: AvatarCreateManyInput | AvatarCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Avatar update
   */
  export type AvatarUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avatar
     */
    omit?: AvatarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarInclude<ExtArgs> | null
    /**
     * The data needed to update a Avatar.
     */
    data: XOR<AvatarUpdateInput, AvatarUncheckedUpdateInput>
    /**
     * Choose, which Avatar to update.
     */
    where: AvatarWhereUniqueInput
  }

  /**
   * Avatar updateMany
   */
  export type AvatarUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Avatars.
     */
    data: XOR<AvatarUpdateManyMutationInput, AvatarUncheckedUpdateManyInput>
    /**
     * Filter which Avatars to update
     */
    where?: AvatarWhereInput
    /**
     * Limit how many Avatars to update.
     */
    limit?: number
  }

  /**
   * Avatar updateManyAndReturn
   */
  export type AvatarUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Avatar
     */
    omit?: AvatarOmit<ExtArgs> | null
    /**
     * The data used to update Avatars.
     */
    data: XOR<AvatarUpdateManyMutationInput, AvatarUncheckedUpdateManyInput>
    /**
     * Filter which Avatars to update
     */
    where?: AvatarWhereInput
    /**
     * Limit how many Avatars to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Avatar upsert
   */
  export type AvatarUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avatar
     */
    omit?: AvatarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarInclude<ExtArgs> | null
    /**
     * The filter to search for the Avatar to update in case it exists.
     */
    where: AvatarWhereUniqueInput
    /**
     * In case the Avatar found by the `where` argument doesn't exist, create a new Avatar with this data.
     */
    create: XOR<AvatarCreateInput, AvatarUncheckedCreateInput>
    /**
     * In case the Avatar was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AvatarUpdateInput, AvatarUncheckedUpdateInput>
  }

  /**
   * Avatar delete
   */
  export type AvatarDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avatar
     */
    omit?: AvatarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarInclude<ExtArgs> | null
    /**
     * Filter which Avatar to delete.
     */
    where: AvatarWhereUniqueInput
  }

  /**
   * Avatar deleteMany
   */
  export type AvatarDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Avatars to delete
     */
    where?: AvatarWhereInput
    /**
     * Limit how many Avatars to delete.
     */
    limit?: number
  }

  /**
   * Avatar without action
   */
  export type AvatarDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avatar
     */
    omit?: AvatarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarInclude<ExtArgs> | null
  }


  /**
   * Model UserAvatarProps
   */

  export type AggregateUserAvatarProps = {
    _count: UserAvatarPropsCountAggregateOutputType | null
    _avg: UserAvatarPropsAvgAggregateOutputType | null
    _sum: UserAvatarPropsSumAggregateOutputType | null
    _min: UserAvatarPropsMinAggregateOutputType | null
    _max: UserAvatarPropsMaxAggregateOutputType | null
  }

  export type UserAvatarPropsAvgAggregateOutputType = {
    userId: number | null
    propId: number | null
  }

  export type UserAvatarPropsSumAggregateOutputType = {
    userId: number | null
    propId: number | null
  }

  export type UserAvatarPropsMinAggregateOutputType = {
    userId: number | null
    propId: number | null
  }

  export type UserAvatarPropsMaxAggregateOutputType = {
    userId: number | null
    propId: number | null
  }

  export type UserAvatarPropsCountAggregateOutputType = {
    userId: number
    propId: number
    _all: number
  }


  export type UserAvatarPropsAvgAggregateInputType = {
    userId?: true
    propId?: true
  }

  export type UserAvatarPropsSumAggregateInputType = {
    userId?: true
    propId?: true
  }

  export type UserAvatarPropsMinAggregateInputType = {
    userId?: true
    propId?: true
  }

  export type UserAvatarPropsMaxAggregateInputType = {
    userId?: true
    propId?: true
  }

  export type UserAvatarPropsCountAggregateInputType = {
    userId?: true
    propId?: true
    _all?: true
  }

  export type UserAvatarPropsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserAvatarProps to aggregate.
     */
    where?: UserAvatarPropsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAvatarProps to fetch.
     */
    orderBy?: UserAvatarPropsOrderByWithRelationInput | UserAvatarPropsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserAvatarPropsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAvatarProps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAvatarProps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserAvatarProps
    **/
    _count?: true | UserAvatarPropsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvatarPropsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserAvatarPropsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserAvatarPropsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserAvatarPropsMaxAggregateInputType
  }

  export type GetUserAvatarPropsAggregateType<T extends UserAvatarPropsAggregateArgs> = {
        [P in keyof T & keyof AggregateUserAvatarProps]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserAvatarProps[P]>
      : GetScalarType<T[P], AggregateUserAvatarProps[P]>
  }




  export type UserAvatarPropsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserAvatarPropsWhereInput
    orderBy?: UserAvatarPropsOrderByWithAggregationInput | UserAvatarPropsOrderByWithAggregationInput[]
    by: UserAvatarPropsScalarFieldEnum[] | UserAvatarPropsScalarFieldEnum
    having?: UserAvatarPropsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserAvatarPropsCountAggregateInputType | true
    _avg?: UserAvatarPropsAvgAggregateInputType
    _sum?: UserAvatarPropsSumAggregateInputType
    _min?: UserAvatarPropsMinAggregateInputType
    _max?: UserAvatarPropsMaxAggregateInputType
  }

  export type UserAvatarPropsGroupByOutputType = {
    userId: number
    propId: number
    _count: UserAvatarPropsCountAggregateOutputType | null
    _avg: UserAvatarPropsAvgAggregateOutputType | null
    _sum: UserAvatarPropsSumAggregateOutputType | null
    _min: UserAvatarPropsMinAggregateOutputType | null
    _max: UserAvatarPropsMaxAggregateOutputType | null
  }

  type GetUserAvatarPropsGroupByPayload<T extends UserAvatarPropsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserAvatarPropsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserAvatarPropsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserAvatarPropsGroupByOutputType[P]>
            : GetScalarType<T[P], UserAvatarPropsGroupByOutputType[P]>
        }
      >
    >


  export type UserAvatarPropsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    propId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    prop?: boolean | AvatarPropDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userAvatarProps"]>

  export type UserAvatarPropsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    propId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    prop?: boolean | AvatarPropDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userAvatarProps"]>

  export type UserAvatarPropsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    propId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    prop?: boolean | AvatarPropDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userAvatarProps"]>

  export type UserAvatarPropsSelectScalar = {
    userId?: boolean
    propId?: boolean
  }

  export type UserAvatarPropsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "propId", ExtArgs["result"]["userAvatarProps"]>
  export type UserAvatarPropsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    prop?: boolean | AvatarPropDefaultArgs<ExtArgs>
  }
  export type UserAvatarPropsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    prop?: boolean | AvatarPropDefaultArgs<ExtArgs>
  }
  export type UserAvatarPropsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    prop?: boolean | AvatarPropDefaultArgs<ExtArgs>
  }

  export type $UserAvatarPropsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserAvatarProps"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      prop: Prisma.$AvatarPropPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: number
      propId: number
    }, ExtArgs["result"]["userAvatarProps"]>
    composites: {}
  }

  type UserAvatarPropsGetPayload<S extends boolean | null | undefined | UserAvatarPropsDefaultArgs> = $Result.GetResult<Prisma.$UserAvatarPropsPayload, S>

  type UserAvatarPropsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserAvatarPropsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserAvatarPropsCountAggregateInputType | true
    }

  export interface UserAvatarPropsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserAvatarProps'], meta: { name: 'UserAvatarProps' } }
    /**
     * Find zero or one UserAvatarProps that matches the filter.
     * @param {UserAvatarPropsFindUniqueArgs} args - Arguments to find a UserAvatarProps
     * @example
     * // Get one UserAvatarProps
     * const userAvatarProps = await prisma.userAvatarProps.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserAvatarPropsFindUniqueArgs>(args: SelectSubset<T, UserAvatarPropsFindUniqueArgs<ExtArgs>>): Prisma__UserAvatarPropsClient<$Result.GetResult<Prisma.$UserAvatarPropsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserAvatarProps that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserAvatarPropsFindUniqueOrThrowArgs} args - Arguments to find a UserAvatarProps
     * @example
     * // Get one UserAvatarProps
     * const userAvatarProps = await prisma.userAvatarProps.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserAvatarPropsFindUniqueOrThrowArgs>(args: SelectSubset<T, UserAvatarPropsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserAvatarPropsClient<$Result.GetResult<Prisma.$UserAvatarPropsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserAvatarProps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAvatarPropsFindFirstArgs} args - Arguments to find a UserAvatarProps
     * @example
     * // Get one UserAvatarProps
     * const userAvatarProps = await prisma.userAvatarProps.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserAvatarPropsFindFirstArgs>(args?: SelectSubset<T, UserAvatarPropsFindFirstArgs<ExtArgs>>): Prisma__UserAvatarPropsClient<$Result.GetResult<Prisma.$UserAvatarPropsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserAvatarProps that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAvatarPropsFindFirstOrThrowArgs} args - Arguments to find a UserAvatarProps
     * @example
     * // Get one UserAvatarProps
     * const userAvatarProps = await prisma.userAvatarProps.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserAvatarPropsFindFirstOrThrowArgs>(args?: SelectSubset<T, UserAvatarPropsFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserAvatarPropsClient<$Result.GetResult<Prisma.$UserAvatarPropsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserAvatarProps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAvatarPropsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserAvatarProps
     * const userAvatarProps = await prisma.userAvatarProps.findMany()
     * 
     * // Get first 10 UserAvatarProps
     * const userAvatarProps = await prisma.userAvatarProps.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userAvatarPropsWithUserIdOnly = await prisma.userAvatarProps.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends UserAvatarPropsFindManyArgs>(args?: SelectSubset<T, UserAvatarPropsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAvatarPropsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserAvatarProps.
     * @param {UserAvatarPropsCreateArgs} args - Arguments to create a UserAvatarProps.
     * @example
     * // Create one UserAvatarProps
     * const UserAvatarProps = await prisma.userAvatarProps.create({
     *   data: {
     *     // ... data to create a UserAvatarProps
     *   }
     * })
     * 
     */
    create<T extends UserAvatarPropsCreateArgs>(args: SelectSubset<T, UserAvatarPropsCreateArgs<ExtArgs>>): Prisma__UserAvatarPropsClient<$Result.GetResult<Prisma.$UserAvatarPropsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserAvatarProps.
     * @param {UserAvatarPropsCreateManyArgs} args - Arguments to create many UserAvatarProps.
     * @example
     * // Create many UserAvatarProps
     * const userAvatarProps = await prisma.userAvatarProps.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserAvatarPropsCreateManyArgs>(args?: SelectSubset<T, UserAvatarPropsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserAvatarProps and returns the data saved in the database.
     * @param {UserAvatarPropsCreateManyAndReturnArgs} args - Arguments to create many UserAvatarProps.
     * @example
     * // Create many UserAvatarProps
     * const userAvatarProps = await prisma.userAvatarProps.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserAvatarProps and only return the `userId`
     * const userAvatarPropsWithUserIdOnly = await prisma.userAvatarProps.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserAvatarPropsCreateManyAndReturnArgs>(args?: SelectSubset<T, UserAvatarPropsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAvatarPropsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserAvatarProps.
     * @param {UserAvatarPropsDeleteArgs} args - Arguments to delete one UserAvatarProps.
     * @example
     * // Delete one UserAvatarProps
     * const UserAvatarProps = await prisma.userAvatarProps.delete({
     *   where: {
     *     // ... filter to delete one UserAvatarProps
     *   }
     * })
     * 
     */
    delete<T extends UserAvatarPropsDeleteArgs>(args: SelectSubset<T, UserAvatarPropsDeleteArgs<ExtArgs>>): Prisma__UserAvatarPropsClient<$Result.GetResult<Prisma.$UserAvatarPropsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserAvatarProps.
     * @param {UserAvatarPropsUpdateArgs} args - Arguments to update one UserAvatarProps.
     * @example
     * // Update one UserAvatarProps
     * const userAvatarProps = await prisma.userAvatarProps.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserAvatarPropsUpdateArgs>(args: SelectSubset<T, UserAvatarPropsUpdateArgs<ExtArgs>>): Prisma__UserAvatarPropsClient<$Result.GetResult<Prisma.$UserAvatarPropsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserAvatarProps.
     * @param {UserAvatarPropsDeleteManyArgs} args - Arguments to filter UserAvatarProps to delete.
     * @example
     * // Delete a few UserAvatarProps
     * const { count } = await prisma.userAvatarProps.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserAvatarPropsDeleteManyArgs>(args?: SelectSubset<T, UserAvatarPropsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserAvatarProps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAvatarPropsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserAvatarProps
     * const userAvatarProps = await prisma.userAvatarProps.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserAvatarPropsUpdateManyArgs>(args: SelectSubset<T, UserAvatarPropsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserAvatarProps and returns the data updated in the database.
     * @param {UserAvatarPropsUpdateManyAndReturnArgs} args - Arguments to update many UserAvatarProps.
     * @example
     * // Update many UserAvatarProps
     * const userAvatarProps = await prisma.userAvatarProps.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserAvatarProps and only return the `userId`
     * const userAvatarPropsWithUserIdOnly = await prisma.userAvatarProps.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserAvatarPropsUpdateManyAndReturnArgs>(args: SelectSubset<T, UserAvatarPropsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAvatarPropsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserAvatarProps.
     * @param {UserAvatarPropsUpsertArgs} args - Arguments to update or create a UserAvatarProps.
     * @example
     * // Update or create a UserAvatarProps
     * const userAvatarProps = await prisma.userAvatarProps.upsert({
     *   create: {
     *     // ... data to create a UserAvatarProps
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserAvatarProps we want to update
     *   }
     * })
     */
    upsert<T extends UserAvatarPropsUpsertArgs>(args: SelectSubset<T, UserAvatarPropsUpsertArgs<ExtArgs>>): Prisma__UserAvatarPropsClient<$Result.GetResult<Prisma.$UserAvatarPropsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserAvatarProps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAvatarPropsCountArgs} args - Arguments to filter UserAvatarProps to count.
     * @example
     * // Count the number of UserAvatarProps
     * const count = await prisma.userAvatarProps.count({
     *   where: {
     *     // ... the filter for the UserAvatarProps we want to count
     *   }
     * })
    **/
    count<T extends UserAvatarPropsCountArgs>(
      args?: Subset<T, UserAvatarPropsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserAvatarPropsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserAvatarProps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAvatarPropsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAvatarPropsAggregateArgs>(args: Subset<T, UserAvatarPropsAggregateArgs>): Prisma.PrismaPromise<GetUserAvatarPropsAggregateType<T>>

    /**
     * Group by UserAvatarProps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAvatarPropsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserAvatarPropsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserAvatarPropsGroupByArgs['orderBy'] }
        : { orderBy?: UserAvatarPropsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserAvatarPropsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserAvatarPropsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserAvatarProps model
   */
  readonly fields: UserAvatarPropsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserAvatarProps.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserAvatarPropsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    prop<T extends AvatarPropDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AvatarPropDefaultArgs<ExtArgs>>): Prisma__AvatarPropClient<$Result.GetResult<Prisma.$AvatarPropPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserAvatarProps model
   */
  interface UserAvatarPropsFieldRefs {
    readonly userId: FieldRef<"UserAvatarProps", 'Int'>
    readonly propId: FieldRef<"UserAvatarProps", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * UserAvatarProps findUnique
   */
  export type UserAvatarPropsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAvatarProps
     */
    select?: UserAvatarPropsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAvatarProps
     */
    omit?: UserAvatarPropsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAvatarPropsInclude<ExtArgs> | null
    /**
     * Filter, which UserAvatarProps to fetch.
     */
    where: UserAvatarPropsWhereUniqueInput
  }

  /**
   * UserAvatarProps findUniqueOrThrow
   */
  export type UserAvatarPropsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAvatarProps
     */
    select?: UserAvatarPropsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAvatarProps
     */
    omit?: UserAvatarPropsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAvatarPropsInclude<ExtArgs> | null
    /**
     * Filter, which UserAvatarProps to fetch.
     */
    where: UserAvatarPropsWhereUniqueInput
  }

  /**
   * UserAvatarProps findFirst
   */
  export type UserAvatarPropsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAvatarProps
     */
    select?: UserAvatarPropsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAvatarProps
     */
    omit?: UserAvatarPropsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAvatarPropsInclude<ExtArgs> | null
    /**
     * Filter, which UserAvatarProps to fetch.
     */
    where?: UserAvatarPropsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAvatarProps to fetch.
     */
    orderBy?: UserAvatarPropsOrderByWithRelationInput | UserAvatarPropsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserAvatarProps.
     */
    cursor?: UserAvatarPropsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAvatarProps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAvatarProps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAvatarProps.
     */
    distinct?: UserAvatarPropsScalarFieldEnum | UserAvatarPropsScalarFieldEnum[]
  }

  /**
   * UserAvatarProps findFirstOrThrow
   */
  export type UserAvatarPropsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAvatarProps
     */
    select?: UserAvatarPropsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAvatarProps
     */
    omit?: UserAvatarPropsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAvatarPropsInclude<ExtArgs> | null
    /**
     * Filter, which UserAvatarProps to fetch.
     */
    where?: UserAvatarPropsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAvatarProps to fetch.
     */
    orderBy?: UserAvatarPropsOrderByWithRelationInput | UserAvatarPropsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserAvatarProps.
     */
    cursor?: UserAvatarPropsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAvatarProps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAvatarProps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAvatarProps.
     */
    distinct?: UserAvatarPropsScalarFieldEnum | UserAvatarPropsScalarFieldEnum[]
  }

  /**
   * UserAvatarProps findMany
   */
  export type UserAvatarPropsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAvatarProps
     */
    select?: UserAvatarPropsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAvatarProps
     */
    omit?: UserAvatarPropsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAvatarPropsInclude<ExtArgs> | null
    /**
     * Filter, which UserAvatarProps to fetch.
     */
    where?: UserAvatarPropsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAvatarProps to fetch.
     */
    orderBy?: UserAvatarPropsOrderByWithRelationInput | UserAvatarPropsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserAvatarProps.
     */
    cursor?: UserAvatarPropsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAvatarProps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAvatarProps.
     */
    skip?: number
    distinct?: UserAvatarPropsScalarFieldEnum | UserAvatarPropsScalarFieldEnum[]
  }

  /**
   * UserAvatarProps create
   */
  export type UserAvatarPropsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAvatarProps
     */
    select?: UserAvatarPropsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAvatarProps
     */
    omit?: UserAvatarPropsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAvatarPropsInclude<ExtArgs> | null
    /**
     * The data needed to create a UserAvatarProps.
     */
    data: XOR<UserAvatarPropsCreateInput, UserAvatarPropsUncheckedCreateInput>
  }

  /**
   * UserAvatarProps createMany
   */
  export type UserAvatarPropsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserAvatarProps.
     */
    data: UserAvatarPropsCreateManyInput | UserAvatarPropsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserAvatarProps createManyAndReturn
   */
  export type UserAvatarPropsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAvatarProps
     */
    select?: UserAvatarPropsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserAvatarProps
     */
    omit?: UserAvatarPropsOmit<ExtArgs> | null
    /**
     * The data used to create many UserAvatarProps.
     */
    data: UserAvatarPropsCreateManyInput | UserAvatarPropsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAvatarPropsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserAvatarProps update
   */
  export type UserAvatarPropsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAvatarProps
     */
    select?: UserAvatarPropsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAvatarProps
     */
    omit?: UserAvatarPropsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAvatarPropsInclude<ExtArgs> | null
    /**
     * The data needed to update a UserAvatarProps.
     */
    data: XOR<UserAvatarPropsUpdateInput, UserAvatarPropsUncheckedUpdateInput>
    /**
     * Choose, which UserAvatarProps to update.
     */
    where: UserAvatarPropsWhereUniqueInput
  }

  /**
   * UserAvatarProps updateMany
   */
  export type UserAvatarPropsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserAvatarProps.
     */
    data: XOR<UserAvatarPropsUpdateManyMutationInput, UserAvatarPropsUncheckedUpdateManyInput>
    /**
     * Filter which UserAvatarProps to update
     */
    where?: UserAvatarPropsWhereInput
    /**
     * Limit how many UserAvatarProps to update.
     */
    limit?: number
  }

  /**
   * UserAvatarProps updateManyAndReturn
   */
  export type UserAvatarPropsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAvatarProps
     */
    select?: UserAvatarPropsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserAvatarProps
     */
    omit?: UserAvatarPropsOmit<ExtArgs> | null
    /**
     * The data used to update UserAvatarProps.
     */
    data: XOR<UserAvatarPropsUpdateManyMutationInput, UserAvatarPropsUncheckedUpdateManyInput>
    /**
     * Filter which UserAvatarProps to update
     */
    where?: UserAvatarPropsWhereInput
    /**
     * Limit how many UserAvatarProps to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAvatarPropsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserAvatarProps upsert
   */
  export type UserAvatarPropsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAvatarProps
     */
    select?: UserAvatarPropsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAvatarProps
     */
    omit?: UserAvatarPropsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAvatarPropsInclude<ExtArgs> | null
    /**
     * The filter to search for the UserAvatarProps to update in case it exists.
     */
    where: UserAvatarPropsWhereUniqueInput
    /**
     * In case the UserAvatarProps found by the `where` argument doesn't exist, create a new UserAvatarProps with this data.
     */
    create: XOR<UserAvatarPropsCreateInput, UserAvatarPropsUncheckedCreateInput>
    /**
     * In case the UserAvatarProps was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserAvatarPropsUpdateInput, UserAvatarPropsUncheckedUpdateInput>
  }

  /**
   * UserAvatarProps delete
   */
  export type UserAvatarPropsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAvatarProps
     */
    select?: UserAvatarPropsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAvatarProps
     */
    omit?: UserAvatarPropsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAvatarPropsInclude<ExtArgs> | null
    /**
     * Filter which UserAvatarProps to delete.
     */
    where: UserAvatarPropsWhereUniqueInput
  }

  /**
   * UserAvatarProps deleteMany
   */
  export type UserAvatarPropsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserAvatarProps to delete
     */
    where?: UserAvatarPropsWhereInput
    /**
     * Limit how many UserAvatarProps to delete.
     */
    limit?: number
  }

  /**
   * UserAvatarProps without action
   */
  export type UserAvatarPropsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAvatarProps
     */
    select?: UserAvatarPropsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAvatarProps
     */
    omit?: UserAvatarPropsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAvatarPropsInclude<ExtArgs> | null
  }


  /**
   * Model AvatarProp
   */

  export type AggregateAvatarProp = {
    _count: AvatarPropCountAggregateOutputType | null
    _avg: AvatarPropAvgAggregateOutputType | null
    _sum: AvatarPropSumAggregateOutputType | null
    _min: AvatarPropMinAggregateOutputType | null
    _max: AvatarPropMaxAggregateOutputType | null
  }

  export type AvatarPropAvgAggregateOutputType = {
    id: number | null
    cost: number | null
  }

  export type AvatarPropSumAggregateOutputType = {
    id: number | null
    cost: number | null
  }

  export type AvatarPropMinAggregateOutputType = {
    id: number | null
    name: string | null
    type: $Enums.PropType | null
    cost: number | null
  }

  export type AvatarPropMaxAggregateOutputType = {
    id: number | null
    name: string | null
    type: $Enums.PropType | null
    cost: number | null
  }

  export type AvatarPropCountAggregateOutputType = {
    id: number
    name: number
    type: number
    cost: number
    _all: number
  }


  export type AvatarPropAvgAggregateInputType = {
    id?: true
    cost?: true
  }

  export type AvatarPropSumAggregateInputType = {
    id?: true
    cost?: true
  }

  export type AvatarPropMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    cost?: true
  }

  export type AvatarPropMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    cost?: true
  }

  export type AvatarPropCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    cost?: true
    _all?: true
  }

  export type AvatarPropAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AvatarProp to aggregate.
     */
    where?: AvatarPropWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvatarProps to fetch.
     */
    orderBy?: AvatarPropOrderByWithRelationInput | AvatarPropOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AvatarPropWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvatarProps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvatarProps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AvatarProps
    **/
    _count?: true | AvatarPropCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AvatarPropAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AvatarPropSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AvatarPropMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AvatarPropMaxAggregateInputType
  }

  export type GetAvatarPropAggregateType<T extends AvatarPropAggregateArgs> = {
        [P in keyof T & keyof AggregateAvatarProp]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAvatarProp[P]>
      : GetScalarType<T[P], AggregateAvatarProp[P]>
  }




  export type AvatarPropGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvatarPropWhereInput
    orderBy?: AvatarPropOrderByWithAggregationInput | AvatarPropOrderByWithAggregationInput[]
    by: AvatarPropScalarFieldEnum[] | AvatarPropScalarFieldEnum
    having?: AvatarPropScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AvatarPropCountAggregateInputType | true
    _avg?: AvatarPropAvgAggregateInputType
    _sum?: AvatarPropSumAggregateInputType
    _min?: AvatarPropMinAggregateInputType
    _max?: AvatarPropMaxAggregateInputType
  }

  export type AvatarPropGroupByOutputType = {
    id: number
    name: string
    type: $Enums.PropType
    cost: number
    _count: AvatarPropCountAggregateOutputType | null
    _avg: AvatarPropAvgAggregateOutputType | null
    _sum: AvatarPropSumAggregateOutputType | null
    _min: AvatarPropMinAggregateOutputType | null
    _max: AvatarPropMaxAggregateOutputType | null
  }

  type GetAvatarPropGroupByPayload<T extends AvatarPropGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AvatarPropGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AvatarPropGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AvatarPropGroupByOutputType[P]>
            : GetScalarType<T[P], AvatarPropGroupByOutputType[P]>
        }
      >
    >


  export type AvatarPropSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    cost?: boolean
    hatInAvatars?: boolean | AvatarProp$hatInAvatarsArgs<ExtArgs>
    hairInAvatars?: boolean | AvatarProp$hairInAvatarsArgs<ExtArgs>
    shirtInAvatars?: boolean | AvatarProp$shirtInAvatarsArgs<ExtArgs>
    backgroundInAvatars?: boolean | AvatarProp$backgroundInAvatarsArgs<ExtArgs>
    handPropInAvatars?: boolean | AvatarProp$handPropInAvatarsArgs<ExtArgs>
    userAvatarProps?: boolean | AvatarProp$userAvatarPropsArgs<ExtArgs>
    _count?: boolean | AvatarPropCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["avatarProp"]>

  export type AvatarPropSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    cost?: boolean
  }, ExtArgs["result"]["avatarProp"]>

  export type AvatarPropSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    cost?: boolean
  }, ExtArgs["result"]["avatarProp"]>

  export type AvatarPropSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    cost?: boolean
  }

  export type AvatarPropOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "type" | "cost", ExtArgs["result"]["avatarProp"]>
  export type AvatarPropInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hatInAvatars?: boolean | AvatarProp$hatInAvatarsArgs<ExtArgs>
    hairInAvatars?: boolean | AvatarProp$hairInAvatarsArgs<ExtArgs>
    shirtInAvatars?: boolean | AvatarProp$shirtInAvatarsArgs<ExtArgs>
    backgroundInAvatars?: boolean | AvatarProp$backgroundInAvatarsArgs<ExtArgs>
    handPropInAvatars?: boolean | AvatarProp$handPropInAvatarsArgs<ExtArgs>
    userAvatarProps?: boolean | AvatarProp$userAvatarPropsArgs<ExtArgs>
    _count?: boolean | AvatarPropCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AvatarPropIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AvatarPropIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AvatarPropPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AvatarProp"
    objects: {
      hatInAvatars: Prisma.$AvatarPayload<ExtArgs>[]
      hairInAvatars: Prisma.$AvatarPayload<ExtArgs>[]
      shirtInAvatars: Prisma.$AvatarPayload<ExtArgs>[]
      backgroundInAvatars: Prisma.$AvatarPayload<ExtArgs>[]
      handPropInAvatars: Prisma.$AvatarPayload<ExtArgs>[]
      userAvatarProps: Prisma.$UserAvatarPropsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      type: $Enums.PropType
      cost: number
    }, ExtArgs["result"]["avatarProp"]>
    composites: {}
  }

  type AvatarPropGetPayload<S extends boolean | null | undefined | AvatarPropDefaultArgs> = $Result.GetResult<Prisma.$AvatarPropPayload, S>

  type AvatarPropCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AvatarPropFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AvatarPropCountAggregateInputType | true
    }

  export interface AvatarPropDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AvatarProp'], meta: { name: 'AvatarProp' } }
    /**
     * Find zero or one AvatarProp that matches the filter.
     * @param {AvatarPropFindUniqueArgs} args - Arguments to find a AvatarProp
     * @example
     * // Get one AvatarProp
     * const avatarProp = await prisma.avatarProp.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AvatarPropFindUniqueArgs>(args: SelectSubset<T, AvatarPropFindUniqueArgs<ExtArgs>>): Prisma__AvatarPropClient<$Result.GetResult<Prisma.$AvatarPropPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AvatarProp that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AvatarPropFindUniqueOrThrowArgs} args - Arguments to find a AvatarProp
     * @example
     * // Get one AvatarProp
     * const avatarProp = await prisma.avatarProp.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AvatarPropFindUniqueOrThrowArgs>(args: SelectSubset<T, AvatarPropFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AvatarPropClient<$Result.GetResult<Prisma.$AvatarPropPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AvatarProp that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvatarPropFindFirstArgs} args - Arguments to find a AvatarProp
     * @example
     * // Get one AvatarProp
     * const avatarProp = await prisma.avatarProp.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AvatarPropFindFirstArgs>(args?: SelectSubset<T, AvatarPropFindFirstArgs<ExtArgs>>): Prisma__AvatarPropClient<$Result.GetResult<Prisma.$AvatarPropPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AvatarProp that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvatarPropFindFirstOrThrowArgs} args - Arguments to find a AvatarProp
     * @example
     * // Get one AvatarProp
     * const avatarProp = await prisma.avatarProp.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AvatarPropFindFirstOrThrowArgs>(args?: SelectSubset<T, AvatarPropFindFirstOrThrowArgs<ExtArgs>>): Prisma__AvatarPropClient<$Result.GetResult<Prisma.$AvatarPropPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AvatarProps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvatarPropFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AvatarProps
     * const avatarProps = await prisma.avatarProp.findMany()
     * 
     * // Get first 10 AvatarProps
     * const avatarProps = await prisma.avatarProp.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const avatarPropWithIdOnly = await prisma.avatarProp.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AvatarPropFindManyArgs>(args?: SelectSubset<T, AvatarPropFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvatarPropPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AvatarProp.
     * @param {AvatarPropCreateArgs} args - Arguments to create a AvatarProp.
     * @example
     * // Create one AvatarProp
     * const AvatarProp = await prisma.avatarProp.create({
     *   data: {
     *     // ... data to create a AvatarProp
     *   }
     * })
     * 
     */
    create<T extends AvatarPropCreateArgs>(args: SelectSubset<T, AvatarPropCreateArgs<ExtArgs>>): Prisma__AvatarPropClient<$Result.GetResult<Prisma.$AvatarPropPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AvatarProps.
     * @param {AvatarPropCreateManyArgs} args - Arguments to create many AvatarProps.
     * @example
     * // Create many AvatarProps
     * const avatarProp = await prisma.avatarProp.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AvatarPropCreateManyArgs>(args?: SelectSubset<T, AvatarPropCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AvatarProps and returns the data saved in the database.
     * @param {AvatarPropCreateManyAndReturnArgs} args - Arguments to create many AvatarProps.
     * @example
     * // Create many AvatarProps
     * const avatarProp = await prisma.avatarProp.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AvatarProps and only return the `id`
     * const avatarPropWithIdOnly = await prisma.avatarProp.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AvatarPropCreateManyAndReturnArgs>(args?: SelectSubset<T, AvatarPropCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvatarPropPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AvatarProp.
     * @param {AvatarPropDeleteArgs} args - Arguments to delete one AvatarProp.
     * @example
     * // Delete one AvatarProp
     * const AvatarProp = await prisma.avatarProp.delete({
     *   where: {
     *     // ... filter to delete one AvatarProp
     *   }
     * })
     * 
     */
    delete<T extends AvatarPropDeleteArgs>(args: SelectSubset<T, AvatarPropDeleteArgs<ExtArgs>>): Prisma__AvatarPropClient<$Result.GetResult<Prisma.$AvatarPropPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AvatarProp.
     * @param {AvatarPropUpdateArgs} args - Arguments to update one AvatarProp.
     * @example
     * // Update one AvatarProp
     * const avatarProp = await prisma.avatarProp.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AvatarPropUpdateArgs>(args: SelectSubset<T, AvatarPropUpdateArgs<ExtArgs>>): Prisma__AvatarPropClient<$Result.GetResult<Prisma.$AvatarPropPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AvatarProps.
     * @param {AvatarPropDeleteManyArgs} args - Arguments to filter AvatarProps to delete.
     * @example
     * // Delete a few AvatarProps
     * const { count } = await prisma.avatarProp.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AvatarPropDeleteManyArgs>(args?: SelectSubset<T, AvatarPropDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AvatarProps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvatarPropUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AvatarProps
     * const avatarProp = await prisma.avatarProp.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AvatarPropUpdateManyArgs>(args: SelectSubset<T, AvatarPropUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AvatarProps and returns the data updated in the database.
     * @param {AvatarPropUpdateManyAndReturnArgs} args - Arguments to update many AvatarProps.
     * @example
     * // Update many AvatarProps
     * const avatarProp = await prisma.avatarProp.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AvatarProps and only return the `id`
     * const avatarPropWithIdOnly = await prisma.avatarProp.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AvatarPropUpdateManyAndReturnArgs>(args: SelectSubset<T, AvatarPropUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvatarPropPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AvatarProp.
     * @param {AvatarPropUpsertArgs} args - Arguments to update or create a AvatarProp.
     * @example
     * // Update or create a AvatarProp
     * const avatarProp = await prisma.avatarProp.upsert({
     *   create: {
     *     // ... data to create a AvatarProp
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AvatarProp we want to update
     *   }
     * })
     */
    upsert<T extends AvatarPropUpsertArgs>(args: SelectSubset<T, AvatarPropUpsertArgs<ExtArgs>>): Prisma__AvatarPropClient<$Result.GetResult<Prisma.$AvatarPropPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AvatarProps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvatarPropCountArgs} args - Arguments to filter AvatarProps to count.
     * @example
     * // Count the number of AvatarProps
     * const count = await prisma.avatarProp.count({
     *   where: {
     *     // ... the filter for the AvatarProps we want to count
     *   }
     * })
    **/
    count<T extends AvatarPropCountArgs>(
      args?: Subset<T, AvatarPropCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AvatarPropCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AvatarProp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvatarPropAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AvatarPropAggregateArgs>(args: Subset<T, AvatarPropAggregateArgs>): Prisma.PrismaPromise<GetAvatarPropAggregateType<T>>

    /**
     * Group by AvatarProp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvatarPropGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AvatarPropGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AvatarPropGroupByArgs['orderBy'] }
        : { orderBy?: AvatarPropGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AvatarPropGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAvatarPropGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AvatarProp model
   */
  readonly fields: AvatarPropFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AvatarProp.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AvatarPropClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    hatInAvatars<T extends AvatarProp$hatInAvatarsArgs<ExtArgs> = {}>(args?: Subset<T, AvatarProp$hatInAvatarsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvatarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    hairInAvatars<T extends AvatarProp$hairInAvatarsArgs<ExtArgs> = {}>(args?: Subset<T, AvatarProp$hairInAvatarsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvatarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    shirtInAvatars<T extends AvatarProp$shirtInAvatarsArgs<ExtArgs> = {}>(args?: Subset<T, AvatarProp$shirtInAvatarsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvatarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    backgroundInAvatars<T extends AvatarProp$backgroundInAvatarsArgs<ExtArgs> = {}>(args?: Subset<T, AvatarProp$backgroundInAvatarsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvatarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    handPropInAvatars<T extends AvatarProp$handPropInAvatarsArgs<ExtArgs> = {}>(args?: Subset<T, AvatarProp$handPropInAvatarsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvatarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userAvatarProps<T extends AvatarProp$userAvatarPropsArgs<ExtArgs> = {}>(args?: Subset<T, AvatarProp$userAvatarPropsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAvatarPropsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AvatarProp model
   */
  interface AvatarPropFieldRefs {
    readonly id: FieldRef<"AvatarProp", 'Int'>
    readonly name: FieldRef<"AvatarProp", 'String'>
    readonly type: FieldRef<"AvatarProp", 'PropType'>
    readonly cost: FieldRef<"AvatarProp", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * AvatarProp findUnique
   */
  export type AvatarPropFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvatarProp
     */
    select?: AvatarPropSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvatarProp
     */
    omit?: AvatarPropOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarPropInclude<ExtArgs> | null
    /**
     * Filter, which AvatarProp to fetch.
     */
    where: AvatarPropWhereUniqueInput
  }

  /**
   * AvatarProp findUniqueOrThrow
   */
  export type AvatarPropFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvatarProp
     */
    select?: AvatarPropSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvatarProp
     */
    omit?: AvatarPropOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarPropInclude<ExtArgs> | null
    /**
     * Filter, which AvatarProp to fetch.
     */
    where: AvatarPropWhereUniqueInput
  }

  /**
   * AvatarProp findFirst
   */
  export type AvatarPropFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvatarProp
     */
    select?: AvatarPropSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvatarProp
     */
    omit?: AvatarPropOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarPropInclude<ExtArgs> | null
    /**
     * Filter, which AvatarProp to fetch.
     */
    where?: AvatarPropWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvatarProps to fetch.
     */
    orderBy?: AvatarPropOrderByWithRelationInput | AvatarPropOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AvatarProps.
     */
    cursor?: AvatarPropWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvatarProps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvatarProps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AvatarProps.
     */
    distinct?: AvatarPropScalarFieldEnum | AvatarPropScalarFieldEnum[]
  }

  /**
   * AvatarProp findFirstOrThrow
   */
  export type AvatarPropFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvatarProp
     */
    select?: AvatarPropSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvatarProp
     */
    omit?: AvatarPropOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarPropInclude<ExtArgs> | null
    /**
     * Filter, which AvatarProp to fetch.
     */
    where?: AvatarPropWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvatarProps to fetch.
     */
    orderBy?: AvatarPropOrderByWithRelationInput | AvatarPropOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AvatarProps.
     */
    cursor?: AvatarPropWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvatarProps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvatarProps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AvatarProps.
     */
    distinct?: AvatarPropScalarFieldEnum | AvatarPropScalarFieldEnum[]
  }

  /**
   * AvatarProp findMany
   */
  export type AvatarPropFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvatarProp
     */
    select?: AvatarPropSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvatarProp
     */
    omit?: AvatarPropOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarPropInclude<ExtArgs> | null
    /**
     * Filter, which AvatarProps to fetch.
     */
    where?: AvatarPropWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvatarProps to fetch.
     */
    orderBy?: AvatarPropOrderByWithRelationInput | AvatarPropOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AvatarProps.
     */
    cursor?: AvatarPropWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvatarProps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvatarProps.
     */
    skip?: number
    distinct?: AvatarPropScalarFieldEnum | AvatarPropScalarFieldEnum[]
  }

  /**
   * AvatarProp create
   */
  export type AvatarPropCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvatarProp
     */
    select?: AvatarPropSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvatarProp
     */
    omit?: AvatarPropOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarPropInclude<ExtArgs> | null
    /**
     * The data needed to create a AvatarProp.
     */
    data: XOR<AvatarPropCreateInput, AvatarPropUncheckedCreateInput>
  }

  /**
   * AvatarProp createMany
   */
  export type AvatarPropCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AvatarProps.
     */
    data: AvatarPropCreateManyInput | AvatarPropCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AvatarProp createManyAndReturn
   */
  export type AvatarPropCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvatarProp
     */
    select?: AvatarPropSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AvatarProp
     */
    omit?: AvatarPropOmit<ExtArgs> | null
    /**
     * The data used to create many AvatarProps.
     */
    data: AvatarPropCreateManyInput | AvatarPropCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AvatarProp update
   */
  export type AvatarPropUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvatarProp
     */
    select?: AvatarPropSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvatarProp
     */
    omit?: AvatarPropOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarPropInclude<ExtArgs> | null
    /**
     * The data needed to update a AvatarProp.
     */
    data: XOR<AvatarPropUpdateInput, AvatarPropUncheckedUpdateInput>
    /**
     * Choose, which AvatarProp to update.
     */
    where: AvatarPropWhereUniqueInput
  }

  /**
   * AvatarProp updateMany
   */
  export type AvatarPropUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AvatarProps.
     */
    data: XOR<AvatarPropUpdateManyMutationInput, AvatarPropUncheckedUpdateManyInput>
    /**
     * Filter which AvatarProps to update
     */
    where?: AvatarPropWhereInput
    /**
     * Limit how many AvatarProps to update.
     */
    limit?: number
  }

  /**
   * AvatarProp updateManyAndReturn
   */
  export type AvatarPropUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvatarProp
     */
    select?: AvatarPropSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AvatarProp
     */
    omit?: AvatarPropOmit<ExtArgs> | null
    /**
     * The data used to update AvatarProps.
     */
    data: XOR<AvatarPropUpdateManyMutationInput, AvatarPropUncheckedUpdateManyInput>
    /**
     * Filter which AvatarProps to update
     */
    where?: AvatarPropWhereInput
    /**
     * Limit how many AvatarProps to update.
     */
    limit?: number
  }

  /**
   * AvatarProp upsert
   */
  export type AvatarPropUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvatarProp
     */
    select?: AvatarPropSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvatarProp
     */
    omit?: AvatarPropOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarPropInclude<ExtArgs> | null
    /**
     * The filter to search for the AvatarProp to update in case it exists.
     */
    where: AvatarPropWhereUniqueInput
    /**
     * In case the AvatarProp found by the `where` argument doesn't exist, create a new AvatarProp with this data.
     */
    create: XOR<AvatarPropCreateInput, AvatarPropUncheckedCreateInput>
    /**
     * In case the AvatarProp was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AvatarPropUpdateInput, AvatarPropUncheckedUpdateInput>
  }

  /**
   * AvatarProp delete
   */
  export type AvatarPropDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvatarProp
     */
    select?: AvatarPropSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvatarProp
     */
    omit?: AvatarPropOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarPropInclude<ExtArgs> | null
    /**
     * Filter which AvatarProp to delete.
     */
    where: AvatarPropWhereUniqueInput
  }

  /**
   * AvatarProp deleteMany
   */
  export type AvatarPropDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AvatarProps to delete
     */
    where?: AvatarPropWhereInput
    /**
     * Limit how many AvatarProps to delete.
     */
    limit?: number
  }

  /**
   * AvatarProp.hatInAvatars
   */
  export type AvatarProp$hatInAvatarsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avatar
     */
    omit?: AvatarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarInclude<ExtArgs> | null
    where?: AvatarWhereInput
    orderBy?: AvatarOrderByWithRelationInput | AvatarOrderByWithRelationInput[]
    cursor?: AvatarWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AvatarScalarFieldEnum | AvatarScalarFieldEnum[]
  }

  /**
   * AvatarProp.hairInAvatars
   */
  export type AvatarProp$hairInAvatarsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avatar
     */
    omit?: AvatarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarInclude<ExtArgs> | null
    where?: AvatarWhereInput
    orderBy?: AvatarOrderByWithRelationInput | AvatarOrderByWithRelationInput[]
    cursor?: AvatarWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AvatarScalarFieldEnum | AvatarScalarFieldEnum[]
  }

  /**
   * AvatarProp.shirtInAvatars
   */
  export type AvatarProp$shirtInAvatarsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avatar
     */
    omit?: AvatarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarInclude<ExtArgs> | null
    where?: AvatarWhereInput
    orderBy?: AvatarOrderByWithRelationInput | AvatarOrderByWithRelationInput[]
    cursor?: AvatarWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AvatarScalarFieldEnum | AvatarScalarFieldEnum[]
  }

  /**
   * AvatarProp.backgroundInAvatars
   */
  export type AvatarProp$backgroundInAvatarsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avatar
     */
    omit?: AvatarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarInclude<ExtArgs> | null
    where?: AvatarWhereInput
    orderBy?: AvatarOrderByWithRelationInput | AvatarOrderByWithRelationInput[]
    cursor?: AvatarWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AvatarScalarFieldEnum | AvatarScalarFieldEnum[]
  }

  /**
   * AvatarProp.handPropInAvatars
   */
  export type AvatarProp$handPropInAvatarsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avatar
     */
    omit?: AvatarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarInclude<ExtArgs> | null
    where?: AvatarWhereInput
    orderBy?: AvatarOrderByWithRelationInput | AvatarOrderByWithRelationInput[]
    cursor?: AvatarWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AvatarScalarFieldEnum | AvatarScalarFieldEnum[]
  }

  /**
   * AvatarProp.userAvatarProps
   */
  export type AvatarProp$userAvatarPropsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAvatarProps
     */
    select?: UserAvatarPropsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAvatarProps
     */
    omit?: UserAvatarPropsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAvatarPropsInclude<ExtArgs> | null
    where?: UserAvatarPropsWhereInput
    orderBy?: UserAvatarPropsOrderByWithRelationInput | UserAvatarPropsOrderByWithRelationInput[]
    cursor?: UserAvatarPropsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserAvatarPropsScalarFieldEnum | UserAvatarPropsScalarFieldEnum[]
  }

  /**
   * AvatarProp without action
   */
  export type AvatarPropDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvatarProp
     */
    select?: AvatarPropSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvatarProp
     */
    omit?: AvatarPropOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarPropInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    email: 'email',
    name: 'name',
    password_hash: 'password_hash',
    salt: 'salt',
    householdId: 'householdId',
    role: 'role',
    difficulty: 'difficulty',
    totalPoints: 'totalPoints'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const HouseholdScalarFieldEnum: {
    id: 'id',
    name: 'name',
    joinCode: 'joinCode'
  };

  export type HouseholdScalarFieldEnum = (typeof HouseholdScalarFieldEnum)[keyof typeof HouseholdScalarFieldEnum]


  export const ChoreScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    difficulty: 'difficulty',
    location: 'location',
    estimatedTime: 'estimatedTime',
    dueDate: 'dueDate',
    repeat: 'repeat',
    householdId: 'householdId',
    assigneeId: 'assigneeId'
  };

  export type ChoreScalarFieldEnum = (typeof ChoreScalarFieldEnum)[keyof typeof ChoreScalarFieldEnum]


  export const AvatarScalarFieldEnum: {
    ownerId: 'ownerId',
    hatId: 'hatId',
    hairId: 'hairId',
    shirtId: 'shirtId',
    backgroundId: 'backgroundId',
    handPropId: 'handPropId'
  };

  export type AvatarScalarFieldEnum = (typeof AvatarScalarFieldEnum)[keyof typeof AvatarScalarFieldEnum]


  export const UserAvatarPropsScalarFieldEnum: {
    userId: 'userId',
    propId: 'propId'
  };

  export type UserAvatarPropsScalarFieldEnum = (typeof UserAvatarPropsScalarFieldEnum)[keyof typeof UserAvatarPropsScalarFieldEnum]


  export const AvatarPropScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    cost: 'cost'
  };

  export type AvatarPropScalarFieldEnum = (typeof AvatarPropScalarFieldEnum)[keyof typeof AvatarPropScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'PropType'
   */
  export type EnumPropTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PropType'>
    


  /**
   * Reference to a field of type 'PropType[]'
   */
  export type ListEnumPropTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PropType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    password_hash?: StringFilter<"User"> | string
    salt?: StringNullableFilter<"User"> | string | null
    householdId?: IntNullableFilter<"User"> | number | null
    role?: EnumRoleNullableFilter<"User"> | $Enums.Role | null
    difficulty?: IntNullableFilter<"User"> | number | null
    totalPoints?: IntNullableFilter<"User"> | number | null
    household?: XOR<HouseholdNullableScalarRelationFilter, HouseholdWhereInput> | null
    assignedChores?: ChoreListRelationFilter
    avatar?: XOR<AvatarNullableScalarRelationFilter, AvatarWhereInput> | null
    userAvatarProps?: UserAvatarPropsListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password_hash?: SortOrder
    salt?: SortOrderInput | SortOrder
    householdId?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    difficulty?: SortOrderInput | SortOrder
    totalPoints?: SortOrderInput | SortOrder
    household?: HouseholdOrderByWithRelationInput
    assignedChores?: ChoreOrderByRelationAggregateInput
    avatar?: AvatarOrderByWithRelationInput
    userAvatarProps?: UserAvatarPropsOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    createdAt?: DateTimeFilter<"User"> | Date | string
    name?: StringFilter<"User"> | string
    password_hash?: StringFilter<"User"> | string
    salt?: StringNullableFilter<"User"> | string | null
    householdId?: IntNullableFilter<"User"> | number | null
    role?: EnumRoleNullableFilter<"User"> | $Enums.Role | null
    difficulty?: IntNullableFilter<"User"> | number | null
    totalPoints?: IntNullableFilter<"User"> | number | null
    household?: XOR<HouseholdNullableScalarRelationFilter, HouseholdWhereInput> | null
    assignedChores?: ChoreListRelationFilter
    avatar?: XOR<AvatarNullableScalarRelationFilter, AvatarWhereInput> | null
    userAvatarProps?: UserAvatarPropsListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password_hash?: SortOrder
    salt?: SortOrderInput | SortOrder
    householdId?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    difficulty?: SortOrderInput | SortOrder
    totalPoints?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    password_hash?: StringWithAggregatesFilter<"User"> | string
    salt?: StringNullableWithAggregatesFilter<"User"> | string | null
    householdId?: IntNullableWithAggregatesFilter<"User"> | number | null
    role?: EnumRoleNullableWithAggregatesFilter<"User"> | $Enums.Role | null
    difficulty?: IntNullableWithAggregatesFilter<"User"> | number | null
    totalPoints?: IntNullableWithAggregatesFilter<"User"> | number | null
  }

  export type HouseholdWhereInput = {
    AND?: HouseholdWhereInput | HouseholdWhereInput[]
    OR?: HouseholdWhereInput[]
    NOT?: HouseholdWhereInput | HouseholdWhereInput[]
    id?: IntFilter<"Household"> | number
    name?: StringFilter<"Household"> | string
    joinCode?: StringFilter<"Household"> | string
    users?: UserListRelationFilter
    chores?: ChoreListRelationFilter
  }

  export type HouseholdOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    joinCode?: SortOrder
    users?: UserOrderByRelationAggregateInput
    chores?: ChoreOrderByRelationAggregateInput
  }

  export type HouseholdWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    joinCode?: string
    AND?: HouseholdWhereInput | HouseholdWhereInput[]
    OR?: HouseholdWhereInput[]
    NOT?: HouseholdWhereInput | HouseholdWhereInput[]
    name?: StringFilter<"Household"> | string
    users?: UserListRelationFilter
    chores?: ChoreListRelationFilter
  }, "id" | "joinCode">

  export type HouseholdOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    joinCode?: SortOrder
    _count?: HouseholdCountOrderByAggregateInput
    _avg?: HouseholdAvgOrderByAggregateInput
    _max?: HouseholdMaxOrderByAggregateInput
    _min?: HouseholdMinOrderByAggregateInput
    _sum?: HouseholdSumOrderByAggregateInput
  }

  export type HouseholdScalarWhereWithAggregatesInput = {
    AND?: HouseholdScalarWhereWithAggregatesInput | HouseholdScalarWhereWithAggregatesInput[]
    OR?: HouseholdScalarWhereWithAggregatesInput[]
    NOT?: HouseholdScalarWhereWithAggregatesInput | HouseholdScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Household"> | number
    name?: StringWithAggregatesFilter<"Household"> | string
    joinCode?: StringWithAggregatesFilter<"Household"> | string
  }

  export type ChoreWhereInput = {
    AND?: ChoreWhereInput | ChoreWhereInput[]
    OR?: ChoreWhereInput[]
    NOT?: ChoreWhereInput | ChoreWhereInput[]
    id?: IntFilter<"Chore"> | number
    name?: StringFilter<"Chore"> | string
    description?: StringFilter<"Chore"> | string
    difficulty?: IntFilter<"Chore"> | number
    location?: StringFilter<"Chore"> | string
    estimatedTime?: IntFilter<"Chore"> | number
    dueDate?: DateTimeFilter<"Chore"> | Date | string
    repeat?: BoolFilter<"Chore"> | boolean
    householdId?: IntFilter<"Chore"> | number
    assigneeId?: IntNullableFilter<"Chore"> | number | null
    household?: XOR<HouseholdScalarRelationFilter, HouseholdWhereInput>
    assignee?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type ChoreOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    difficulty?: SortOrder
    location?: SortOrder
    estimatedTime?: SortOrder
    dueDate?: SortOrder
    repeat?: SortOrder
    householdId?: SortOrder
    assigneeId?: SortOrderInput | SortOrder
    household?: HouseholdOrderByWithRelationInput
    assignee?: UserOrderByWithRelationInput
  }

  export type ChoreWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ChoreWhereInput | ChoreWhereInput[]
    OR?: ChoreWhereInput[]
    NOT?: ChoreWhereInput | ChoreWhereInput[]
    name?: StringFilter<"Chore"> | string
    description?: StringFilter<"Chore"> | string
    difficulty?: IntFilter<"Chore"> | number
    location?: StringFilter<"Chore"> | string
    estimatedTime?: IntFilter<"Chore"> | number
    dueDate?: DateTimeFilter<"Chore"> | Date | string
    repeat?: BoolFilter<"Chore"> | boolean
    householdId?: IntFilter<"Chore"> | number
    assigneeId?: IntNullableFilter<"Chore"> | number | null
    household?: XOR<HouseholdScalarRelationFilter, HouseholdWhereInput>
    assignee?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type ChoreOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    difficulty?: SortOrder
    location?: SortOrder
    estimatedTime?: SortOrder
    dueDate?: SortOrder
    repeat?: SortOrder
    householdId?: SortOrder
    assigneeId?: SortOrderInput | SortOrder
    _count?: ChoreCountOrderByAggregateInput
    _avg?: ChoreAvgOrderByAggregateInput
    _max?: ChoreMaxOrderByAggregateInput
    _min?: ChoreMinOrderByAggregateInput
    _sum?: ChoreSumOrderByAggregateInput
  }

  export type ChoreScalarWhereWithAggregatesInput = {
    AND?: ChoreScalarWhereWithAggregatesInput | ChoreScalarWhereWithAggregatesInput[]
    OR?: ChoreScalarWhereWithAggregatesInput[]
    NOT?: ChoreScalarWhereWithAggregatesInput | ChoreScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Chore"> | number
    name?: StringWithAggregatesFilter<"Chore"> | string
    description?: StringWithAggregatesFilter<"Chore"> | string
    difficulty?: IntWithAggregatesFilter<"Chore"> | number
    location?: StringWithAggregatesFilter<"Chore"> | string
    estimatedTime?: IntWithAggregatesFilter<"Chore"> | number
    dueDate?: DateTimeWithAggregatesFilter<"Chore"> | Date | string
    repeat?: BoolWithAggregatesFilter<"Chore"> | boolean
    householdId?: IntWithAggregatesFilter<"Chore"> | number
    assigneeId?: IntNullableWithAggregatesFilter<"Chore"> | number | null
  }

  export type AvatarWhereInput = {
    AND?: AvatarWhereInput | AvatarWhereInput[]
    OR?: AvatarWhereInput[]
    NOT?: AvatarWhereInput | AvatarWhereInput[]
    ownerId?: IntFilter<"Avatar"> | number
    hatId?: IntFilter<"Avatar"> | number
    hairId?: IntFilter<"Avatar"> | number
    shirtId?: IntFilter<"Avatar"> | number
    backgroundId?: IntFilter<"Avatar"> | number
    handPropId?: IntFilter<"Avatar"> | number
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    hat?: XOR<AvatarPropScalarRelationFilter, AvatarPropWhereInput>
    hair?: XOR<AvatarPropScalarRelationFilter, AvatarPropWhereInput>
    shirt?: XOR<AvatarPropScalarRelationFilter, AvatarPropWhereInput>
    background?: XOR<AvatarPropScalarRelationFilter, AvatarPropWhereInput>
    handProp?: XOR<AvatarPropScalarRelationFilter, AvatarPropWhereInput>
  }

  export type AvatarOrderByWithRelationInput = {
    ownerId?: SortOrder
    hatId?: SortOrder
    hairId?: SortOrder
    shirtId?: SortOrder
    backgroundId?: SortOrder
    handPropId?: SortOrder
    owner?: UserOrderByWithRelationInput
    hat?: AvatarPropOrderByWithRelationInput
    hair?: AvatarPropOrderByWithRelationInput
    shirt?: AvatarPropOrderByWithRelationInput
    background?: AvatarPropOrderByWithRelationInput
    handProp?: AvatarPropOrderByWithRelationInput
  }

  export type AvatarWhereUniqueInput = Prisma.AtLeast<{
    ownerId?: number
    AND?: AvatarWhereInput | AvatarWhereInput[]
    OR?: AvatarWhereInput[]
    NOT?: AvatarWhereInput | AvatarWhereInput[]
    hatId?: IntFilter<"Avatar"> | number
    hairId?: IntFilter<"Avatar"> | number
    shirtId?: IntFilter<"Avatar"> | number
    backgroundId?: IntFilter<"Avatar"> | number
    handPropId?: IntFilter<"Avatar"> | number
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    hat?: XOR<AvatarPropScalarRelationFilter, AvatarPropWhereInput>
    hair?: XOR<AvatarPropScalarRelationFilter, AvatarPropWhereInput>
    shirt?: XOR<AvatarPropScalarRelationFilter, AvatarPropWhereInput>
    background?: XOR<AvatarPropScalarRelationFilter, AvatarPropWhereInput>
    handProp?: XOR<AvatarPropScalarRelationFilter, AvatarPropWhereInput>
  }, "ownerId">

  export type AvatarOrderByWithAggregationInput = {
    ownerId?: SortOrder
    hatId?: SortOrder
    hairId?: SortOrder
    shirtId?: SortOrder
    backgroundId?: SortOrder
    handPropId?: SortOrder
    _count?: AvatarCountOrderByAggregateInput
    _avg?: AvatarAvgOrderByAggregateInput
    _max?: AvatarMaxOrderByAggregateInput
    _min?: AvatarMinOrderByAggregateInput
    _sum?: AvatarSumOrderByAggregateInput
  }

  export type AvatarScalarWhereWithAggregatesInput = {
    AND?: AvatarScalarWhereWithAggregatesInput | AvatarScalarWhereWithAggregatesInput[]
    OR?: AvatarScalarWhereWithAggregatesInput[]
    NOT?: AvatarScalarWhereWithAggregatesInput | AvatarScalarWhereWithAggregatesInput[]
    ownerId?: IntWithAggregatesFilter<"Avatar"> | number
    hatId?: IntWithAggregatesFilter<"Avatar"> | number
    hairId?: IntWithAggregatesFilter<"Avatar"> | number
    shirtId?: IntWithAggregatesFilter<"Avatar"> | number
    backgroundId?: IntWithAggregatesFilter<"Avatar"> | number
    handPropId?: IntWithAggregatesFilter<"Avatar"> | number
  }

  export type UserAvatarPropsWhereInput = {
    AND?: UserAvatarPropsWhereInput | UserAvatarPropsWhereInput[]
    OR?: UserAvatarPropsWhereInput[]
    NOT?: UserAvatarPropsWhereInput | UserAvatarPropsWhereInput[]
    userId?: IntFilter<"UserAvatarProps"> | number
    propId?: IntFilter<"UserAvatarProps"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    prop?: XOR<AvatarPropScalarRelationFilter, AvatarPropWhereInput>
  }

  export type UserAvatarPropsOrderByWithRelationInput = {
    userId?: SortOrder
    propId?: SortOrder
    user?: UserOrderByWithRelationInput
    prop?: AvatarPropOrderByWithRelationInput
  }

  export type UserAvatarPropsWhereUniqueInput = Prisma.AtLeast<{
    userId_propId?: UserAvatarPropsUserIdPropIdCompoundUniqueInput
    AND?: UserAvatarPropsWhereInput | UserAvatarPropsWhereInput[]
    OR?: UserAvatarPropsWhereInput[]
    NOT?: UserAvatarPropsWhereInput | UserAvatarPropsWhereInput[]
    userId?: IntFilter<"UserAvatarProps"> | number
    propId?: IntFilter<"UserAvatarProps"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    prop?: XOR<AvatarPropScalarRelationFilter, AvatarPropWhereInput>
  }, "userId_propId">

  export type UserAvatarPropsOrderByWithAggregationInput = {
    userId?: SortOrder
    propId?: SortOrder
    _count?: UserAvatarPropsCountOrderByAggregateInput
    _avg?: UserAvatarPropsAvgOrderByAggregateInput
    _max?: UserAvatarPropsMaxOrderByAggregateInput
    _min?: UserAvatarPropsMinOrderByAggregateInput
    _sum?: UserAvatarPropsSumOrderByAggregateInput
  }

  export type UserAvatarPropsScalarWhereWithAggregatesInput = {
    AND?: UserAvatarPropsScalarWhereWithAggregatesInput | UserAvatarPropsScalarWhereWithAggregatesInput[]
    OR?: UserAvatarPropsScalarWhereWithAggregatesInput[]
    NOT?: UserAvatarPropsScalarWhereWithAggregatesInput | UserAvatarPropsScalarWhereWithAggregatesInput[]
    userId?: IntWithAggregatesFilter<"UserAvatarProps"> | number
    propId?: IntWithAggregatesFilter<"UserAvatarProps"> | number
  }

  export type AvatarPropWhereInput = {
    AND?: AvatarPropWhereInput | AvatarPropWhereInput[]
    OR?: AvatarPropWhereInput[]
    NOT?: AvatarPropWhereInput | AvatarPropWhereInput[]
    id?: IntFilter<"AvatarProp"> | number
    name?: StringFilter<"AvatarProp"> | string
    type?: EnumPropTypeFilter<"AvatarProp"> | $Enums.PropType
    cost?: IntFilter<"AvatarProp"> | number
    hatInAvatars?: AvatarListRelationFilter
    hairInAvatars?: AvatarListRelationFilter
    shirtInAvatars?: AvatarListRelationFilter
    backgroundInAvatars?: AvatarListRelationFilter
    handPropInAvatars?: AvatarListRelationFilter
    userAvatarProps?: UserAvatarPropsListRelationFilter
  }

  export type AvatarPropOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    cost?: SortOrder
    hatInAvatars?: AvatarOrderByRelationAggregateInput
    hairInAvatars?: AvatarOrderByRelationAggregateInput
    shirtInAvatars?: AvatarOrderByRelationAggregateInput
    backgroundInAvatars?: AvatarOrderByRelationAggregateInput
    handPropInAvatars?: AvatarOrderByRelationAggregateInput
    userAvatarProps?: UserAvatarPropsOrderByRelationAggregateInput
  }

  export type AvatarPropWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: AvatarPropWhereInput | AvatarPropWhereInput[]
    OR?: AvatarPropWhereInput[]
    NOT?: AvatarPropWhereInput | AvatarPropWhereInput[]
    type?: EnumPropTypeFilter<"AvatarProp"> | $Enums.PropType
    cost?: IntFilter<"AvatarProp"> | number
    hatInAvatars?: AvatarListRelationFilter
    hairInAvatars?: AvatarListRelationFilter
    shirtInAvatars?: AvatarListRelationFilter
    backgroundInAvatars?: AvatarListRelationFilter
    handPropInAvatars?: AvatarListRelationFilter
    userAvatarProps?: UserAvatarPropsListRelationFilter
  }, "id" | "name">

  export type AvatarPropOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    cost?: SortOrder
    _count?: AvatarPropCountOrderByAggregateInput
    _avg?: AvatarPropAvgOrderByAggregateInput
    _max?: AvatarPropMaxOrderByAggregateInput
    _min?: AvatarPropMinOrderByAggregateInput
    _sum?: AvatarPropSumOrderByAggregateInput
  }

  export type AvatarPropScalarWhereWithAggregatesInput = {
    AND?: AvatarPropScalarWhereWithAggregatesInput | AvatarPropScalarWhereWithAggregatesInput[]
    OR?: AvatarPropScalarWhereWithAggregatesInput[]
    NOT?: AvatarPropScalarWhereWithAggregatesInput | AvatarPropScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AvatarProp"> | number
    name?: StringWithAggregatesFilter<"AvatarProp"> | string
    type?: EnumPropTypeWithAggregatesFilter<"AvatarProp"> | $Enums.PropType
    cost?: IntWithAggregatesFilter<"AvatarProp"> | number
  }

  export type UserCreateInput = {
    createdAt?: Date | string
    email: string
    name: string
    password_hash: string
    salt?: string | null
    role?: $Enums.Role | null
    difficulty?: number | null
    totalPoints?: number | null
    household?: HouseholdCreateNestedOneWithoutUsersInput
    assignedChores?: ChoreCreateNestedManyWithoutAssigneeInput
    avatar?: AvatarCreateNestedOneWithoutOwnerInput
    userAvatarProps?: UserAvatarPropsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    email: string
    name: string
    password_hash: string
    salt?: string | null
    householdId?: number | null
    role?: $Enums.Role | null
    difficulty?: number | null
    totalPoints?: number | null
    assignedChores?: ChoreUncheckedCreateNestedManyWithoutAssigneeInput
    avatar?: AvatarUncheckedCreateNestedOneWithoutOwnerInput
    userAvatarProps?: UserAvatarPropsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    salt?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    difficulty?: NullableIntFieldUpdateOperationsInput | number | null
    totalPoints?: NullableIntFieldUpdateOperationsInput | number | null
    household?: HouseholdUpdateOneWithoutUsersNestedInput
    assignedChores?: ChoreUpdateManyWithoutAssigneeNestedInput
    avatar?: AvatarUpdateOneWithoutOwnerNestedInput
    userAvatarProps?: UserAvatarPropsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    salt?: NullableStringFieldUpdateOperationsInput | string | null
    householdId?: NullableIntFieldUpdateOperationsInput | number | null
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    difficulty?: NullableIntFieldUpdateOperationsInput | number | null
    totalPoints?: NullableIntFieldUpdateOperationsInput | number | null
    assignedChores?: ChoreUncheckedUpdateManyWithoutAssigneeNestedInput
    avatar?: AvatarUncheckedUpdateOneWithoutOwnerNestedInput
    userAvatarProps?: UserAvatarPropsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    createdAt?: Date | string
    email: string
    name: string
    password_hash: string
    salt?: string | null
    householdId?: number | null
    role?: $Enums.Role | null
    difficulty?: number | null
    totalPoints?: number | null
  }

  export type UserUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    salt?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    difficulty?: NullableIntFieldUpdateOperationsInput | number | null
    totalPoints?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    salt?: NullableStringFieldUpdateOperationsInput | string | null
    householdId?: NullableIntFieldUpdateOperationsInput | number | null
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    difficulty?: NullableIntFieldUpdateOperationsInput | number | null
    totalPoints?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type HouseholdCreateInput = {
    name: string
    joinCode?: string
    users?: UserCreateNestedManyWithoutHouseholdInput
    chores?: ChoreCreateNestedManyWithoutHouseholdInput
  }

  export type HouseholdUncheckedCreateInput = {
    id?: number
    name: string
    joinCode?: string
    users?: UserUncheckedCreateNestedManyWithoutHouseholdInput
    chores?: ChoreUncheckedCreateNestedManyWithoutHouseholdInput
  }

  export type HouseholdUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    joinCode?: StringFieldUpdateOperationsInput | string
    users?: UserUpdateManyWithoutHouseholdNestedInput
    chores?: ChoreUpdateManyWithoutHouseholdNestedInput
  }

  export type HouseholdUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    joinCode?: StringFieldUpdateOperationsInput | string
    users?: UserUncheckedUpdateManyWithoutHouseholdNestedInput
    chores?: ChoreUncheckedUpdateManyWithoutHouseholdNestedInput
  }

  export type HouseholdCreateManyInput = {
    id?: number
    name: string
    joinCode?: string
  }

  export type HouseholdUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    joinCode?: StringFieldUpdateOperationsInput | string
  }

  export type HouseholdUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    joinCode?: StringFieldUpdateOperationsInput | string
  }

  export type ChoreCreateInput = {
    name: string
    description: string
    difficulty: number
    location: string
    estimatedTime: number
    dueDate: Date | string
    repeat: boolean
    household: HouseholdCreateNestedOneWithoutChoresInput
    assignee?: UserCreateNestedOneWithoutAssignedChoresInput
  }

  export type ChoreUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    difficulty: number
    location: string
    estimatedTime: number
    dueDate: Date | string
    repeat: boolean
    householdId: number
    assigneeId?: number | null
  }

  export type ChoreUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    estimatedTime?: IntFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    repeat?: BoolFieldUpdateOperationsInput | boolean
    household?: HouseholdUpdateOneRequiredWithoutChoresNestedInput
    assignee?: UserUpdateOneWithoutAssignedChoresNestedInput
  }

  export type ChoreUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    estimatedTime?: IntFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    repeat?: BoolFieldUpdateOperationsInput | boolean
    householdId?: IntFieldUpdateOperationsInput | number
    assigneeId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ChoreCreateManyInput = {
    id?: number
    name: string
    description: string
    difficulty: number
    location: string
    estimatedTime: number
    dueDate: Date | string
    repeat: boolean
    householdId: number
    assigneeId?: number | null
  }

  export type ChoreUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    estimatedTime?: IntFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    repeat?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ChoreUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    estimatedTime?: IntFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    repeat?: BoolFieldUpdateOperationsInput | boolean
    householdId?: IntFieldUpdateOperationsInput | number
    assigneeId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AvatarCreateInput = {
    owner: UserCreateNestedOneWithoutAvatarInput
    hat: AvatarPropCreateNestedOneWithoutHatInAvatarsInput
    hair: AvatarPropCreateNestedOneWithoutHairInAvatarsInput
    shirt: AvatarPropCreateNestedOneWithoutShirtInAvatarsInput
    background: AvatarPropCreateNestedOneWithoutBackgroundInAvatarsInput
    handProp: AvatarPropCreateNestedOneWithoutHandPropInAvatarsInput
  }

  export type AvatarUncheckedCreateInput = {
    ownerId: number
    hatId: number
    hairId: number
    shirtId: number
    backgroundId: number
    handPropId: number
  }

  export type AvatarUpdateInput = {
    owner?: UserUpdateOneRequiredWithoutAvatarNestedInput
    hat?: AvatarPropUpdateOneRequiredWithoutHatInAvatarsNestedInput
    hair?: AvatarPropUpdateOneRequiredWithoutHairInAvatarsNestedInput
    shirt?: AvatarPropUpdateOneRequiredWithoutShirtInAvatarsNestedInput
    background?: AvatarPropUpdateOneRequiredWithoutBackgroundInAvatarsNestedInput
    handProp?: AvatarPropUpdateOneRequiredWithoutHandPropInAvatarsNestedInput
  }

  export type AvatarUncheckedUpdateInput = {
    ownerId?: IntFieldUpdateOperationsInput | number
    hatId?: IntFieldUpdateOperationsInput | number
    hairId?: IntFieldUpdateOperationsInput | number
    shirtId?: IntFieldUpdateOperationsInput | number
    backgroundId?: IntFieldUpdateOperationsInput | number
    handPropId?: IntFieldUpdateOperationsInput | number
  }

  export type AvatarCreateManyInput = {
    ownerId: number
    hatId: number
    hairId: number
    shirtId: number
    backgroundId: number
    handPropId: number
  }

  export type AvatarUpdateManyMutationInput = {

  }

  export type AvatarUncheckedUpdateManyInput = {
    ownerId?: IntFieldUpdateOperationsInput | number
    hatId?: IntFieldUpdateOperationsInput | number
    hairId?: IntFieldUpdateOperationsInput | number
    shirtId?: IntFieldUpdateOperationsInput | number
    backgroundId?: IntFieldUpdateOperationsInput | number
    handPropId?: IntFieldUpdateOperationsInput | number
  }

  export type UserAvatarPropsCreateInput = {
    user: UserCreateNestedOneWithoutUserAvatarPropsInput
    prop: AvatarPropCreateNestedOneWithoutUserAvatarPropsInput
  }

  export type UserAvatarPropsUncheckedCreateInput = {
    userId: number
    propId: number
  }

  export type UserAvatarPropsUpdateInput = {
    user?: UserUpdateOneRequiredWithoutUserAvatarPropsNestedInput
    prop?: AvatarPropUpdateOneRequiredWithoutUserAvatarPropsNestedInput
  }

  export type UserAvatarPropsUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    propId?: IntFieldUpdateOperationsInput | number
  }

  export type UserAvatarPropsCreateManyInput = {
    userId: number
    propId: number
  }

  export type UserAvatarPropsUpdateManyMutationInput = {

  }

  export type UserAvatarPropsUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    propId?: IntFieldUpdateOperationsInput | number
  }

  export type AvatarPropCreateInput = {
    name: string
    type: $Enums.PropType
    cost: number
    hatInAvatars?: AvatarCreateNestedManyWithoutHatInput
    hairInAvatars?: AvatarCreateNestedManyWithoutHairInput
    shirtInAvatars?: AvatarCreateNestedManyWithoutShirtInput
    backgroundInAvatars?: AvatarCreateNestedManyWithoutBackgroundInput
    handPropInAvatars?: AvatarCreateNestedManyWithoutHandPropInput
    userAvatarProps?: UserAvatarPropsCreateNestedManyWithoutPropInput
  }

  export type AvatarPropUncheckedCreateInput = {
    id?: number
    name: string
    type: $Enums.PropType
    cost: number
    hatInAvatars?: AvatarUncheckedCreateNestedManyWithoutHatInput
    hairInAvatars?: AvatarUncheckedCreateNestedManyWithoutHairInput
    shirtInAvatars?: AvatarUncheckedCreateNestedManyWithoutShirtInput
    backgroundInAvatars?: AvatarUncheckedCreateNestedManyWithoutBackgroundInput
    handPropInAvatars?: AvatarUncheckedCreateNestedManyWithoutHandPropInput
    userAvatarProps?: UserAvatarPropsUncheckedCreateNestedManyWithoutPropInput
  }

  export type AvatarPropUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumPropTypeFieldUpdateOperationsInput | $Enums.PropType
    cost?: IntFieldUpdateOperationsInput | number
    hatInAvatars?: AvatarUpdateManyWithoutHatNestedInput
    hairInAvatars?: AvatarUpdateManyWithoutHairNestedInput
    shirtInAvatars?: AvatarUpdateManyWithoutShirtNestedInput
    backgroundInAvatars?: AvatarUpdateManyWithoutBackgroundNestedInput
    handPropInAvatars?: AvatarUpdateManyWithoutHandPropNestedInput
    userAvatarProps?: UserAvatarPropsUpdateManyWithoutPropNestedInput
  }

  export type AvatarPropUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumPropTypeFieldUpdateOperationsInput | $Enums.PropType
    cost?: IntFieldUpdateOperationsInput | number
    hatInAvatars?: AvatarUncheckedUpdateManyWithoutHatNestedInput
    hairInAvatars?: AvatarUncheckedUpdateManyWithoutHairNestedInput
    shirtInAvatars?: AvatarUncheckedUpdateManyWithoutShirtNestedInput
    backgroundInAvatars?: AvatarUncheckedUpdateManyWithoutBackgroundNestedInput
    handPropInAvatars?: AvatarUncheckedUpdateManyWithoutHandPropNestedInput
    userAvatarProps?: UserAvatarPropsUncheckedUpdateManyWithoutPropNestedInput
  }

  export type AvatarPropCreateManyInput = {
    id?: number
    name: string
    type: $Enums.PropType
    cost: number
  }

  export type AvatarPropUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumPropTypeFieldUpdateOperationsInput | $Enums.PropType
    cost?: IntFieldUpdateOperationsInput | number
  }

  export type AvatarPropUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumPropTypeFieldUpdateOperationsInput | $Enums.PropType
    cost?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumRoleNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel> | null
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRoleNullableFilter<$PrismaModel> | $Enums.Role | null
  }

  export type HouseholdNullableScalarRelationFilter = {
    is?: HouseholdWhereInput | null
    isNot?: HouseholdWhereInput | null
  }

  export type ChoreListRelationFilter = {
    every?: ChoreWhereInput
    some?: ChoreWhereInput
    none?: ChoreWhereInput
  }

  export type AvatarNullableScalarRelationFilter = {
    is?: AvatarWhereInput | null
    isNot?: AvatarWhereInput | null
  }

  export type UserAvatarPropsListRelationFilter = {
    every?: UserAvatarPropsWhereInput
    some?: UserAvatarPropsWhereInput
    none?: UserAvatarPropsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ChoreOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserAvatarPropsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password_hash?: SortOrder
    salt?: SortOrder
    householdId?: SortOrder
    role?: SortOrder
    difficulty?: SortOrder
    totalPoints?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    householdId?: SortOrder
    difficulty?: SortOrder
    totalPoints?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password_hash?: SortOrder
    salt?: SortOrder
    householdId?: SortOrder
    role?: SortOrder
    difficulty?: SortOrder
    totalPoints?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password_hash?: SortOrder
    salt?: SortOrder
    householdId?: SortOrder
    role?: SortOrder
    difficulty?: SortOrder
    totalPoints?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    householdId?: SortOrder
    difficulty?: SortOrder
    totalPoints?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumRoleNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel> | null
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRoleNullableWithAggregatesFilter<$PrismaModel> | $Enums.Role | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumRoleNullableFilter<$PrismaModel>
    _max?: NestedEnumRoleNullableFilter<$PrismaModel>
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HouseholdCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    joinCode?: SortOrder
  }

  export type HouseholdAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type HouseholdMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    joinCode?: SortOrder
  }

  export type HouseholdMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    joinCode?: SortOrder
  }

  export type HouseholdSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type HouseholdScalarRelationFilter = {
    is?: HouseholdWhereInput
    isNot?: HouseholdWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type ChoreCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    difficulty?: SortOrder
    location?: SortOrder
    estimatedTime?: SortOrder
    dueDate?: SortOrder
    repeat?: SortOrder
    householdId?: SortOrder
    assigneeId?: SortOrder
  }

  export type ChoreAvgOrderByAggregateInput = {
    id?: SortOrder
    difficulty?: SortOrder
    estimatedTime?: SortOrder
    householdId?: SortOrder
    assigneeId?: SortOrder
  }

  export type ChoreMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    difficulty?: SortOrder
    location?: SortOrder
    estimatedTime?: SortOrder
    dueDate?: SortOrder
    repeat?: SortOrder
    householdId?: SortOrder
    assigneeId?: SortOrder
  }

  export type ChoreMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    difficulty?: SortOrder
    location?: SortOrder
    estimatedTime?: SortOrder
    dueDate?: SortOrder
    repeat?: SortOrder
    householdId?: SortOrder
    assigneeId?: SortOrder
  }

  export type ChoreSumOrderByAggregateInput = {
    id?: SortOrder
    difficulty?: SortOrder
    estimatedTime?: SortOrder
    householdId?: SortOrder
    assigneeId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AvatarPropScalarRelationFilter = {
    is?: AvatarPropWhereInput
    isNot?: AvatarPropWhereInput
  }

  export type AvatarCountOrderByAggregateInput = {
    ownerId?: SortOrder
    hatId?: SortOrder
    hairId?: SortOrder
    shirtId?: SortOrder
    backgroundId?: SortOrder
    handPropId?: SortOrder
  }

  export type AvatarAvgOrderByAggregateInput = {
    ownerId?: SortOrder
    hatId?: SortOrder
    hairId?: SortOrder
    shirtId?: SortOrder
    backgroundId?: SortOrder
    handPropId?: SortOrder
  }

  export type AvatarMaxOrderByAggregateInput = {
    ownerId?: SortOrder
    hatId?: SortOrder
    hairId?: SortOrder
    shirtId?: SortOrder
    backgroundId?: SortOrder
    handPropId?: SortOrder
  }

  export type AvatarMinOrderByAggregateInput = {
    ownerId?: SortOrder
    hatId?: SortOrder
    hairId?: SortOrder
    shirtId?: SortOrder
    backgroundId?: SortOrder
    handPropId?: SortOrder
  }

  export type AvatarSumOrderByAggregateInput = {
    ownerId?: SortOrder
    hatId?: SortOrder
    hairId?: SortOrder
    shirtId?: SortOrder
    backgroundId?: SortOrder
    handPropId?: SortOrder
  }

  export type UserAvatarPropsUserIdPropIdCompoundUniqueInput = {
    userId: number
    propId: number
  }

  export type UserAvatarPropsCountOrderByAggregateInput = {
    userId?: SortOrder
    propId?: SortOrder
  }

  export type UserAvatarPropsAvgOrderByAggregateInput = {
    userId?: SortOrder
    propId?: SortOrder
  }

  export type UserAvatarPropsMaxOrderByAggregateInput = {
    userId?: SortOrder
    propId?: SortOrder
  }

  export type UserAvatarPropsMinOrderByAggregateInput = {
    userId?: SortOrder
    propId?: SortOrder
  }

  export type UserAvatarPropsSumOrderByAggregateInput = {
    userId?: SortOrder
    propId?: SortOrder
  }

  export type EnumPropTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PropType | EnumPropTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PropType[] | ListEnumPropTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PropType[] | ListEnumPropTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPropTypeFilter<$PrismaModel> | $Enums.PropType
  }

  export type AvatarListRelationFilter = {
    every?: AvatarWhereInput
    some?: AvatarWhereInput
    none?: AvatarWhereInput
  }

  export type AvatarOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AvatarPropCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    cost?: SortOrder
  }

  export type AvatarPropAvgOrderByAggregateInput = {
    id?: SortOrder
    cost?: SortOrder
  }

  export type AvatarPropMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    cost?: SortOrder
  }

  export type AvatarPropMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    cost?: SortOrder
  }

  export type AvatarPropSumOrderByAggregateInput = {
    id?: SortOrder
    cost?: SortOrder
  }

  export type EnumPropTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PropType | EnumPropTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PropType[] | ListEnumPropTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PropType[] | ListEnumPropTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPropTypeWithAggregatesFilter<$PrismaModel> | $Enums.PropType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPropTypeFilter<$PrismaModel>
    _max?: NestedEnumPropTypeFilter<$PrismaModel>
  }

  export type HouseholdCreateNestedOneWithoutUsersInput = {
    create?: XOR<HouseholdCreateWithoutUsersInput, HouseholdUncheckedCreateWithoutUsersInput>
    connectOrCreate?: HouseholdCreateOrConnectWithoutUsersInput
    connect?: HouseholdWhereUniqueInput
  }

  export type ChoreCreateNestedManyWithoutAssigneeInput = {
    create?: XOR<ChoreCreateWithoutAssigneeInput, ChoreUncheckedCreateWithoutAssigneeInput> | ChoreCreateWithoutAssigneeInput[] | ChoreUncheckedCreateWithoutAssigneeInput[]
    connectOrCreate?: ChoreCreateOrConnectWithoutAssigneeInput | ChoreCreateOrConnectWithoutAssigneeInput[]
    createMany?: ChoreCreateManyAssigneeInputEnvelope
    connect?: ChoreWhereUniqueInput | ChoreWhereUniqueInput[]
  }

  export type AvatarCreateNestedOneWithoutOwnerInput = {
    create?: XOR<AvatarCreateWithoutOwnerInput, AvatarUncheckedCreateWithoutOwnerInput>
    connectOrCreate?: AvatarCreateOrConnectWithoutOwnerInput
    connect?: AvatarWhereUniqueInput
  }

  export type UserAvatarPropsCreateNestedManyWithoutUserInput = {
    create?: XOR<UserAvatarPropsCreateWithoutUserInput, UserAvatarPropsUncheckedCreateWithoutUserInput> | UserAvatarPropsCreateWithoutUserInput[] | UserAvatarPropsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAvatarPropsCreateOrConnectWithoutUserInput | UserAvatarPropsCreateOrConnectWithoutUserInput[]
    createMany?: UserAvatarPropsCreateManyUserInputEnvelope
    connect?: UserAvatarPropsWhereUniqueInput | UserAvatarPropsWhereUniqueInput[]
  }

  export type ChoreUncheckedCreateNestedManyWithoutAssigneeInput = {
    create?: XOR<ChoreCreateWithoutAssigneeInput, ChoreUncheckedCreateWithoutAssigneeInput> | ChoreCreateWithoutAssigneeInput[] | ChoreUncheckedCreateWithoutAssigneeInput[]
    connectOrCreate?: ChoreCreateOrConnectWithoutAssigneeInput | ChoreCreateOrConnectWithoutAssigneeInput[]
    createMany?: ChoreCreateManyAssigneeInputEnvelope
    connect?: ChoreWhereUniqueInput | ChoreWhereUniqueInput[]
  }

  export type AvatarUncheckedCreateNestedOneWithoutOwnerInput = {
    create?: XOR<AvatarCreateWithoutOwnerInput, AvatarUncheckedCreateWithoutOwnerInput>
    connectOrCreate?: AvatarCreateOrConnectWithoutOwnerInput
    connect?: AvatarWhereUniqueInput
  }

  export type UserAvatarPropsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserAvatarPropsCreateWithoutUserInput, UserAvatarPropsUncheckedCreateWithoutUserInput> | UserAvatarPropsCreateWithoutUserInput[] | UserAvatarPropsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAvatarPropsCreateOrConnectWithoutUserInput | UserAvatarPropsCreateOrConnectWithoutUserInput[]
    createMany?: UserAvatarPropsCreateManyUserInputEnvelope
    connect?: UserAvatarPropsWhereUniqueInput | UserAvatarPropsWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableEnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type HouseholdUpdateOneWithoutUsersNestedInput = {
    create?: XOR<HouseholdCreateWithoutUsersInput, HouseholdUncheckedCreateWithoutUsersInput>
    connectOrCreate?: HouseholdCreateOrConnectWithoutUsersInput
    upsert?: HouseholdUpsertWithoutUsersInput
    disconnect?: HouseholdWhereInput | boolean
    delete?: HouseholdWhereInput | boolean
    connect?: HouseholdWhereUniqueInput
    update?: XOR<XOR<HouseholdUpdateToOneWithWhereWithoutUsersInput, HouseholdUpdateWithoutUsersInput>, HouseholdUncheckedUpdateWithoutUsersInput>
  }

  export type ChoreUpdateManyWithoutAssigneeNestedInput = {
    create?: XOR<ChoreCreateWithoutAssigneeInput, ChoreUncheckedCreateWithoutAssigneeInput> | ChoreCreateWithoutAssigneeInput[] | ChoreUncheckedCreateWithoutAssigneeInput[]
    connectOrCreate?: ChoreCreateOrConnectWithoutAssigneeInput | ChoreCreateOrConnectWithoutAssigneeInput[]
    upsert?: ChoreUpsertWithWhereUniqueWithoutAssigneeInput | ChoreUpsertWithWhereUniqueWithoutAssigneeInput[]
    createMany?: ChoreCreateManyAssigneeInputEnvelope
    set?: ChoreWhereUniqueInput | ChoreWhereUniqueInput[]
    disconnect?: ChoreWhereUniqueInput | ChoreWhereUniqueInput[]
    delete?: ChoreWhereUniqueInput | ChoreWhereUniqueInput[]
    connect?: ChoreWhereUniqueInput | ChoreWhereUniqueInput[]
    update?: ChoreUpdateWithWhereUniqueWithoutAssigneeInput | ChoreUpdateWithWhereUniqueWithoutAssigneeInput[]
    updateMany?: ChoreUpdateManyWithWhereWithoutAssigneeInput | ChoreUpdateManyWithWhereWithoutAssigneeInput[]
    deleteMany?: ChoreScalarWhereInput | ChoreScalarWhereInput[]
  }

  export type AvatarUpdateOneWithoutOwnerNestedInput = {
    create?: XOR<AvatarCreateWithoutOwnerInput, AvatarUncheckedCreateWithoutOwnerInput>
    connectOrCreate?: AvatarCreateOrConnectWithoutOwnerInput
    upsert?: AvatarUpsertWithoutOwnerInput
    disconnect?: AvatarWhereInput | boolean
    delete?: AvatarWhereInput | boolean
    connect?: AvatarWhereUniqueInput
    update?: XOR<XOR<AvatarUpdateToOneWithWhereWithoutOwnerInput, AvatarUpdateWithoutOwnerInput>, AvatarUncheckedUpdateWithoutOwnerInput>
  }

  export type UserAvatarPropsUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserAvatarPropsCreateWithoutUserInput, UserAvatarPropsUncheckedCreateWithoutUserInput> | UserAvatarPropsCreateWithoutUserInput[] | UserAvatarPropsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAvatarPropsCreateOrConnectWithoutUserInput | UserAvatarPropsCreateOrConnectWithoutUserInput[]
    upsert?: UserAvatarPropsUpsertWithWhereUniqueWithoutUserInput | UserAvatarPropsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserAvatarPropsCreateManyUserInputEnvelope
    set?: UserAvatarPropsWhereUniqueInput | UserAvatarPropsWhereUniqueInput[]
    disconnect?: UserAvatarPropsWhereUniqueInput | UserAvatarPropsWhereUniqueInput[]
    delete?: UserAvatarPropsWhereUniqueInput | UserAvatarPropsWhereUniqueInput[]
    connect?: UserAvatarPropsWhereUniqueInput | UserAvatarPropsWhereUniqueInput[]
    update?: UserAvatarPropsUpdateWithWhereUniqueWithoutUserInput | UserAvatarPropsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserAvatarPropsUpdateManyWithWhereWithoutUserInput | UserAvatarPropsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserAvatarPropsScalarWhereInput | UserAvatarPropsScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ChoreUncheckedUpdateManyWithoutAssigneeNestedInput = {
    create?: XOR<ChoreCreateWithoutAssigneeInput, ChoreUncheckedCreateWithoutAssigneeInput> | ChoreCreateWithoutAssigneeInput[] | ChoreUncheckedCreateWithoutAssigneeInput[]
    connectOrCreate?: ChoreCreateOrConnectWithoutAssigneeInput | ChoreCreateOrConnectWithoutAssigneeInput[]
    upsert?: ChoreUpsertWithWhereUniqueWithoutAssigneeInput | ChoreUpsertWithWhereUniqueWithoutAssigneeInput[]
    createMany?: ChoreCreateManyAssigneeInputEnvelope
    set?: ChoreWhereUniqueInput | ChoreWhereUniqueInput[]
    disconnect?: ChoreWhereUniqueInput | ChoreWhereUniqueInput[]
    delete?: ChoreWhereUniqueInput | ChoreWhereUniqueInput[]
    connect?: ChoreWhereUniqueInput | ChoreWhereUniqueInput[]
    update?: ChoreUpdateWithWhereUniqueWithoutAssigneeInput | ChoreUpdateWithWhereUniqueWithoutAssigneeInput[]
    updateMany?: ChoreUpdateManyWithWhereWithoutAssigneeInput | ChoreUpdateManyWithWhereWithoutAssigneeInput[]
    deleteMany?: ChoreScalarWhereInput | ChoreScalarWhereInput[]
  }

  export type AvatarUncheckedUpdateOneWithoutOwnerNestedInput = {
    create?: XOR<AvatarCreateWithoutOwnerInput, AvatarUncheckedCreateWithoutOwnerInput>
    connectOrCreate?: AvatarCreateOrConnectWithoutOwnerInput
    upsert?: AvatarUpsertWithoutOwnerInput
    disconnect?: AvatarWhereInput | boolean
    delete?: AvatarWhereInput | boolean
    connect?: AvatarWhereUniqueInput
    update?: XOR<XOR<AvatarUpdateToOneWithWhereWithoutOwnerInput, AvatarUpdateWithoutOwnerInput>, AvatarUncheckedUpdateWithoutOwnerInput>
  }

  export type UserAvatarPropsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserAvatarPropsCreateWithoutUserInput, UserAvatarPropsUncheckedCreateWithoutUserInput> | UserAvatarPropsCreateWithoutUserInput[] | UserAvatarPropsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAvatarPropsCreateOrConnectWithoutUserInput | UserAvatarPropsCreateOrConnectWithoutUserInput[]
    upsert?: UserAvatarPropsUpsertWithWhereUniqueWithoutUserInput | UserAvatarPropsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserAvatarPropsCreateManyUserInputEnvelope
    set?: UserAvatarPropsWhereUniqueInput | UserAvatarPropsWhereUniqueInput[]
    disconnect?: UserAvatarPropsWhereUniqueInput | UserAvatarPropsWhereUniqueInput[]
    delete?: UserAvatarPropsWhereUniqueInput | UserAvatarPropsWhereUniqueInput[]
    connect?: UserAvatarPropsWhereUniqueInput | UserAvatarPropsWhereUniqueInput[]
    update?: UserAvatarPropsUpdateWithWhereUniqueWithoutUserInput | UserAvatarPropsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserAvatarPropsUpdateManyWithWhereWithoutUserInput | UserAvatarPropsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserAvatarPropsScalarWhereInput | UserAvatarPropsScalarWhereInput[]
  }

  export type UserCreateNestedManyWithoutHouseholdInput = {
    create?: XOR<UserCreateWithoutHouseholdInput, UserUncheckedCreateWithoutHouseholdInput> | UserCreateWithoutHouseholdInput[] | UserUncheckedCreateWithoutHouseholdInput[]
    connectOrCreate?: UserCreateOrConnectWithoutHouseholdInput | UserCreateOrConnectWithoutHouseholdInput[]
    createMany?: UserCreateManyHouseholdInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ChoreCreateNestedManyWithoutHouseholdInput = {
    create?: XOR<ChoreCreateWithoutHouseholdInput, ChoreUncheckedCreateWithoutHouseholdInput> | ChoreCreateWithoutHouseholdInput[] | ChoreUncheckedCreateWithoutHouseholdInput[]
    connectOrCreate?: ChoreCreateOrConnectWithoutHouseholdInput | ChoreCreateOrConnectWithoutHouseholdInput[]
    createMany?: ChoreCreateManyHouseholdInputEnvelope
    connect?: ChoreWhereUniqueInput | ChoreWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutHouseholdInput = {
    create?: XOR<UserCreateWithoutHouseholdInput, UserUncheckedCreateWithoutHouseholdInput> | UserCreateWithoutHouseholdInput[] | UserUncheckedCreateWithoutHouseholdInput[]
    connectOrCreate?: UserCreateOrConnectWithoutHouseholdInput | UserCreateOrConnectWithoutHouseholdInput[]
    createMany?: UserCreateManyHouseholdInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ChoreUncheckedCreateNestedManyWithoutHouseholdInput = {
    create?: XOR<ChoreCreateWithoutHouseholdInput, ChoreUncheckedCreateWithoutHouseholdInput> | ChoreCreateWithoutHouseholdInput[] | ChoreUncheckedCreateWithoutHouseholdInput[]
    connectOrCreate?: ChoreCreateOrConnectWithoutHouseholdInput | ChoreCreateOrConnectWithoutHouseholdInput[]
    createMany?: ChoreCreateManyHouseholdInputEnvelope
    connect?: ChoreWhereUniqueInput | ChoreWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutHouseholdNestedInput = {
    create?: XOR<UserCreateWithoutHouseholdInput, UserUncheckedCreateWithoutHouseholdInput> | UserCreateWithoutHouseholdInput[] | UserUncheckedCreateWithoutHouseholdInput[]
    connectOrCreate?: UserCreateOrConnectWithoutHouseholdInput | UserCreateOrConnectWithoutHouseholdInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutHouseholdInput | UserUpsertWithWhereUniqueWithoutHouseholdInput[]
    createMany?: UserCreateManyHouseholdInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutHouseholdInput | UserUpdateWithWhereUniqueWithoutHouseholdInput[]
    updateMany?: UserUpdateManyWithWhereWithoutHouseholdInput | UserUpdateManyWithWhereWithoutHouseholdInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ChoreUpdateManyWithoutHouseholdNestedInput = {
    create?: XOR<ChoreCreateWithoutHouseholdInput, ChoreUncheckedCreateWithoutHouseholdInput> | ChoreCreateWithoutHouseholdInput[] | ChoreUncheckedCreateWithoutHouseholdInput[]
    connectOrCreate?: ChoreCreateOrConnectWithoutHouseholdInput | ChoreCreateOrConnectWithoutHouseholdInput[]
    upsert?: ChoreUpsertWithWhereUniqueWithoutHouseholdInput | ChoreUpsertWithWhereUniqueWithoutHouseholdInput[]
    createMany?: ChoreCreateManyHouseholdInputEnvelope
    set?: ChoreWhereUniqueInput | ChoreWhereUniqueInput[]
    disconnect?: ChoreWhereUniqueInput | ChoreWhereUniqueInput[]
    delete?: ChoreWhereUniqueInput | ChoreWhereUniqueInput[]
    connect?: ChoreWhereUniqueInput | ChoreWhereUniqueInput[]
    update?: ChoreUpdateWithWhereUniqueWithoutHouseholdInput | ChoreUpdateWithWhereUniqueWithoutHouseholdInput[]
    updateMany?: ChoreUpdateManyWithWhereWithoutHouseholdInput | ChoreUpdateManyWithWhereWithoutHouseholdInput[]
    deleteMany?: ChoreScalarWhereInput | ChoreScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutHouseholdNestedInput = {
    create?: XOR<UserCreateWithoutHouseholdInput, UserUncheckedCreateWithoutHouseholdInput> | UserCreateWithoutHouseholdInput[] | UserUncheckedCreateWithoutHouseholdInput[]
    connectOrCreate?: UserCreateOrConnectWithoutHouseholdInput | UserCreateOrConnectWithoutHouseholdInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutHouseholdInput | UserUpsertWithWhereUniqueWithoutHouseholdInput[]
    createMany?: UserCreateManyHouseholdInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutHouseholdInput | UserUpdateWithWhereUniqueWithoutHouseholdInput[]
    updateMany?: UserUpdateManyWithWhereWithoutHouseholdInput | UserUpdateManyWithWhereWithoutHouseholdInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ChoreUncheckedUpdateManyWithoutHouseholdNestedInput = {
    create?: XOR<ChoreCreateWithoutHouseholdInput, ChoreUncheckedCreateWithoutHouseholdInput> | ChoreCreateWithoutHouseholdInput[] | ChoreUncheckedCreateWithoutHouseholdInput[]
    connectOrCreate?: ChoreCreateOrConnectWithoutHouseholdInput | ChoreCreateOrConnectWithoutHouseholdInput[]
    upsert?: ChoreUpsertWithWhereUniqueWithoutHouseholdInput | ChoreUpsertWithWhereUniqueWithoutHouseholdInput[]
    createMany?: ChoreCreateManyHouseholdInputEnvelope
    set?: ChoreWhereUniqueInput | ChoreWhereUniqueInput[]
    disconnect?: ChoreWhereUniqueInput | ChoreWhereUniqueInput[]
    delete?: ChoreWhereUniqueInput | ChoreWhereUniqueInput[]
    connect?: ChoreWhereUniqueInput | ChoreWhereUniqueInput[]
    update?: ChoreUpdateWithWhereUniqueWithoutHouseholdInput | ChoreUpdateWithWhereUniqueWithoutHouseholdInput[]
    updateMany?: ChoreUpdateManyWithWhereWithoutHouseholdInput | ChoreUpdateManyWithWhereWithoutHouseholdInput[]
    deleteMany?: ChoreScalarWhereInput | ChoreScalarWhereInput[]
  }

  export type HouseholdCreateNestedOneWithoutChoresInput = {
    create?: XOR<HouseholdCreateWithoutChoresInput, HouseholdUncheckedCreateWithoutChoresInput>
    connectOrCreate?: HouseholdCreateOrConnectWithoutChoresInput
    connect?: HouseholdWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAssignedChoresInput = {
    create?: XOR<UserCreateWithoutAssignedChoresInput, UserUncheckedCreateWithoutAssignedChoresInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignedChoresInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type HouseholdUpdateOneRequiredWithoutChoresNestedInput = {
    create?: XOR<HouseholdCreateWithoutChoresInput, HouseholdUncheckedCreateWithoutChoresInput>
    connectOrCreate?: HouseholdCreateOrConnectWithoutChoresInput
    upsert?: HouseholdUpsertWithoutChoresInput
    connect?: HouseholdWhereUniqueInput
    update?: XOR<XOR<HouseholdUpdateToOneWithWhereWithoutChoresInput, HouseholdUpdateWithoutChoresInput>, HouseholdUncheckedUpdateWithoutChoresInput>
  }

  export type UserUpdateOneWithoutAssignedChoresNestedInput = {
    create?: XOR<UserCreateWithoutAssignedChoresInput, UserUncheckedCreateWithoutAssignedChoresInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignedChoresInput
    upsert?: UserUpsertWithoutAssignedChoresInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAssignedChoresInput, UserUpdateWithoutAssignedChoresInput>, UserUncheckedUpdateWithoutAssignedChoresInput>
  }

  export type UserCreateNestedOneWithoutAvatarInput = {
    create?: XOR<UserCreateWithoutAvatarInput, UserUncheckedCreateWithoutAvatarInput>
    connectOrCreate?: UserCreateOrConnectWithoutAvatarInput
    connect?: UserWhereUniqueInput
  }

  export type AvatarPropCreateNestedOneWithoutHatInAvatarsInput = {
    create?: XOR<AvatarPropCreateWithoutHatInAvatarsInput, AvatarPropUncheckedCreateWithoutHatInAvatarsInput>
    connectOrCreate?: AvatarPropCreateOrConnectWithoutHatInAvatarsInput
    connect?: AvatarPropWhereUniqueInput
  }

  export type AvatarPropCreateNestedOneWithoutHairInAvatarsInput = {
    create?: XOR<AvatarPropCreateWithoutHairInAvatarsInput, AvatarPropUncheckedCreateWithoutHairInAvatarsInput>
    connectOrCreate?: AvatarPropCreateOrConnectWithoutHairInAvatarsInput
    connect?: AvatarPropWhereUniqueInput
  }

  export type AvatarPropCreateNestedOneWithoutShirtInAvatarsInput = {
    create?: XOR<AvatarPropCreateWithoutShirtInAvatarsInput, AvatarPropUncheckedCreateWithoutShirtInAvatarsInput>
    connectOrCreate?: AvatarPropCreateOrConnectWithoutShirtInAvatarsInput
    connect?: AvatarPropWhereUniqueInput
  }

  export type AvatarPropCreateNestedOneWithoutBackgroundInAvatarsInput = {
    create?: XOR<AvatarPropCreateWithoutBackgroundInAvatarsInput, AvatarPropUncheckedCreateWithoutBackgroundInAvatarsInput>
    connectOrCreate?: AvatarPropCreateOrConnectWithoutBackgroundInAvatarsInput
    connect?: AvatarPropWhereUniqueInput
  }

  export type AvatarPropCreateNestedOneWithoutHandPropInAvatarsInput = {
    create?: XOR<AvatarPropCreateWithoutHandPropInAvatarsInput, AvatarPropUncheckedCreateWithoutHandPropInAvatarsInput>
    connectOrCreate?: AvatarPropCreateOrConnectWithoutHandPropInAvatarsInput
    connect?: AvatarPropWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAvatarNestedInput = {
    create?: XOR<UserCreateWithoutAvatarInput, UserUncheckedCreateWithoutAvatarInput>
    connectOrCreate?: UserCreateOrConnectWithoutAvatarInput
    upsert?: UserUpsertWithoutAvatarInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAvatarInput, UserUpdateWithoutAvatarInput>, UserUncheckedUpdateWithoutAvatarInput>
  }

  export type AvatarPropUpdateOneRequiredWithoutHatInAvatarsNestedInput = {
    create?: XOR<AvatarPropCreateWithoutHatInAvatarsInput, AvatarPropUncheckedCreateWithoutHatInAvatarsInput>
    connectOrCreate?: AvatarPropCreateOrConnectWithoutHatInAvatarsInput
    upsert?: AvatarPropUpsertWithoutHatInAvatarsInput
    connect?: AvatarPropWhereUniqueInput
    update?: XOR<XOR<AvatarPropUpdateToOneWithWhereWithoutHatInAvatarsInput, AvatarPropUpdateWithoutHatInAvatarsInput>, AvatarPropUncheckedUpdateWithoutHatInAvatarsInput>
  }

  export type AvatarPropUpdateOneRequiredWithoutHairInAvatarsNestedInput = {
    create?: XOR<AvatarPropCreateWithoutHairInAvatarsInput, AvatarPropUncheckedCreateWithoutHairInAvatarsInput>
    connectOrCreate?: AvatarPropCreateOrConnectWithoutHairInAvatarsInput
    upsert?: AvatarPropUpsertWithoutHairInAvatarsInput
    connect?: AvatarPropWhereUniqueInput
    update?: XOR<XOR<AvatarPropUpdateToOneWithWhereWithoutHairInAvatarsInput, AvatarPropUpdateWithoutHairInAvatarsInput>, AvatarPropUncheckedUpdateWithoutHairInAvatarsInput>
  }

  export type AvatarPropUpdateOneRequiredWithoutShirtInAvatarsNestedInput = {
    create?: XOR<AvatarPropCreateWithoutShirtInAvatarsInput, AvatarPropUncheckedCreateWithoutShirtInAvatarsInput>
    connectOrCreate?: AvatarPropCreateOrConnectWithoutShirtInAvatarsInput
    upsert?: AvatarPropUpsertWithoutShirtInAvatarsInput
    connect?: AvatarPropWhereUniqueInput
    update?: XOR<XOR<AvatarPropUpdateToOneWithWhereWithoutShirtInAvatarsInput, AvatarPropUpdateWithoutShirtInAvatarsInput>, AvatarPropUncheckedUpdateWithoutShirtInAvatarsInput>
  }

  export type AvatarPropUpdateOneRequiredWithoutBackgroundInAvatarsNestedInput = {
    create?: XOR<AvatarPropCreateWithoutBackgroundInAvatarsInput, AvatarPropUncheckedCreateWithoutBackgroundInAvatarsInput>
    connectOrCreate?: AvatarPropCreateOrConnectWithoutBackgroundInAvatarsInput
    upsert?: AvatarPropUpsertWithoutBackgroundInAvatarsInput
    connect?: AvatarPropWhereUniqueInput
    update?: XOR<XOR<AvatarPropUpdateToOneWithWhereWithoutBackgroundInAvatarsInput, AvatarPropUpdateWithoutBackgroundInAvatarsInput>, AvatarPropUncheckedUpdateWithoutBackgroundInAvatarsInput>
  }

  export type AvatarPropUpdateOneRequiredWithoutHandPropInAvatarsNestedInput = {
    create?: XOR<AvatarPropCreateWithoutHandPropInAvatarsInput, AvatarPropUncheckedCreateWithoutHandPropInAvatarsInput>
    connectOrCreate?: AvatarPropCreateOrConnectWithoutHandPropInAvatarsInput
    upsert?: AvatarPropUpsertWithoutHandPropInAvatarsInput
    connect?: AvatarPropWhereUniqueInput
    update?: XOR<XOR<AvatarPropUpdateToOneWithWhereWithoutHandPropInAvatarsInput, AvatarPropUpdateWithoutHandPropInAvatarsInput>, AvatarPropUncheckedUpdateWithoutHandPropInAvatarsInput>
  }

  export type UserCreateNestedOneWithoutUserAvatarPropsInput = {
    create?: XOR<UserCreateWithoutUserAvatarPropsInput, UserUncheckedCreateWithoutUserAvatarPropsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserAvatarPropsInput
    connect?: UserWhereUniqueInput
  }

  export type AvatarPropCreateNestedOneWithoutUserAvatarPropsInput = {
    create?: XOR<AvatarPropCreateWithoutUserAvatarPropsInput, AvatarPropUncheckedCreateWithoutUserAvatarPropsInput>
    connectOrCreate?: AvatarPropCreateOrConnectWithoutUserAvatarPropsInput
    connect?: AvatarPropWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUserAvatarPropsNestedInput = {
    create?: XOR<UserCreateWithoutUserAvatarPropsInput, UserUncheckedCreateWithoutUserAvatarPropsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserAvatarPropsInput
    upsert?: UserUpsertWithoutUserAvatarPropsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserAvatarPropsInput, UserUpdateWithoutUserAvatarPropsInput>, UserUncheckedUpdateWithoutUserAvatarPropsInput>
  }

  export type AvatarPropUpdateOneRequiredWithoutUserAvatarPropsNestedInput = {
    create?: XOR<AvatarPropCreateWithoutUserAvatarPropsInput, AvatarPropUncheckedCreateWithoutUserAvatarPropsInput>
    connectOrCreate?: AvatarPropCreateOrConnectWithoutUserAvatarPropsInput
    upsert?: AvatarPropUpsertWithoutUserAvatarPropsInput
    connect?: AvatarPropWhereUniqueInput
    update?: XOR<XOR<AvatarPropUpdateToOneWithWhereWithoutUserAvatarPropsInput, AvatarPropUpdateWithoutUserAvatarPropsInput>, AvatarPropUncheckedUpdateWithoutUserAvatarPropsInput>
  }

  export type AvatarCreateNestedManyWithoutHatInput = {
    create?: XOR<AvatarCreateWithoutHatInput, AvatarUncheckedCreateWithoutHatInput> | AvatarCreateWithoutHatInput[] | AvatarUncheckedCreateWithoutHatInput[]
    connectOrCreate?: AvatarCreateOrConnectWithoutHatInput | AvatarCreateOrConnectWithoutHatInput[]
    createMany?: AvatarCreateManyHatInputEnvelope
    connect?: AvatarWhereUniqueInput | AvatarWhereUniqueInput[]
  }

  export type AvatarCreateNestedManyWithoutHairInput = {
    create?: XOR<AvatarCreateWithoutHairInput, AvatarUncheckedCreateWithoutHairInput> | AvatarCreateWithoutHairInput[] | AvatarUncheckedCreateWithoutHairInput[]
    connectOrCreate?: AvatarCreateOrConnectWithoutHairInput | AvatarCreateOrConnectWithoutHairInput[]
    createMany?: AvatarCreateManyHairInputEnvelope
    connect?: AvatarWhereUniqueInput | AvatarWhereUniqueInput[]
  }

  export type AvatarCreateNestedManyWithoutShirtInput = {
    create?: XOR<AvatarCreateWithoutShirtInput, AvatarUncheckedCreateWithoutShirtInput> | AvatarCreateWithoutShirtInput[] | AvatarUncheckedCreateWithoutShirtInput[]
    connectOrCreate?: AvatarCreateOrConnectWithoutShirtInput | AvatarCreateOrConnectWithoutShirtInput[]
    createMany?: AvatarCreateManyShirtInputEnvelope
    connect?: AvatarWhereUniqueInput | AvatarWhereUniqueInput[]
  }

  export type AvatarCreateNestedManyWithoutBackgroundInput = {
    create?: XOR<AvatarCreateWithoutBackgroundInput, AvatarUncheckedCreateWithoutBackgroundInput> | AvatarCreateWithoutBackgroundInput[] | AvatarUncheckedCreateWithoutBackgroundInput[]
    connectOrCreate?: AvatarCreateOrConnectWithoutBackgroundInput | AvatarCreateOrConnectWithoutBackgroundInput[]
    createMany?: AvatarCreateManyBackgroundInputEnvelope
    connect?: AvatarWhereUniqueInput | AvatarWhereUniqueInput[]
  }

  export type AvatarCreateNestedManyWithoutHandPropInput = {
    create?: XOR<AvatarCreateWithoutHandPropInput, AvatarUncheckedCreateWithoutHandPropInput> | AvatarCreateWithoutHandPropInput[] | AvatarUncheckedCreateWithoutHandPropInput[]
    connectOrCreate?: AvatarCreateOrConnectWithoutHandPropInput | AvatarCreateOrConnectWithoutHandPropInput[]
    createMany?: AvatarCreateManyHandPropInputEnvelope
    connect?: AvatarWhereUniqueInput | AvatarWhereUniqueInput[]
  }

  export type UserAvatarPropsCreateNestedManyWithoutPropInput = {
    create?: XOR<UserAvatarPropsCreateWithoutPropInput, UserAvatarPropsUncheckedCreateWithoutPropInput> | UserAvatarPropsCreateWithoutPropInput[] | UserAvatarPropsUncheckedCreateWithoutPropInput[]
    connectOrCreate?: UserAvatarPropsCreateOrConnectWithoutPropInput | UserAvatarPropsCreateOrConnectWithoutPropInput[]
    createMany?: UserAvatarPropsCreateManyPropInputEnvelope
    connect?: UserAvatarPropsWhereUniqueInput | UserAvatarPropsWhereUniqueInput[]
  }

  export type AvatarUncheckedCreateNestedManyWithoutHatInput = {
    create?: XOR<AvatarCreateWithoutHatInput, AvatarUncheckedCreateWithoutHatInput> | AvatarCreateWithoutHatInput[] | AvatarUncheckedCreateWithoutHatInput[]
    connectOrCreate?: AvatarCreateOrConnectWithoutHatInput | AvatarCreateOrConnectWithoutHatInput[]
    createMany?: AvatarCreateManyHatInputEnvelope
    connect?: AvatarWhereUniqueInput | AvatarWhereUniqueInput[]
  }

  export type AvatarUncheckedCreateNestedManyWithoutHairInput = {
    create?: XOR<AvatarCreateWithoutHairInput, AvatarUncheckedCreateWithoutHairInput> | AvatarCreateWithoutHairInput[] | AvatarUncheckedCreateWithoutHairInput[]
    connectOrCreate?: AvatarCreateOrConnectWithoutHairInput | AvatarCreateOrConnectWithoutHairInput[]
    createMany?: AvatarCreateManyHairInputEnvelope
    connect?: AvatarWhereUniqueInput | AvatarWhereUniqueInput[]
  }

  export type AvatarUncheckedCreateNestedManyWithoutShirtInput = {
    create?: XOR<AvatarCreateWithoutShirtInput, AvatarUncheckedCreateWithoutShirtInput> | AvatarCreateWithoutShirtInput[] | AvatarUncheckedCreateWithoutShirtInput[]
    connectOrCreate?: AvatarCreateOrConnectWithoutShirtInput | AvatarCreateOrConnectWithoutShirtInput[]
    createMany?: AvatarCreateManyShirtInputEnvelope
    connect?: AvatarWhereUniqueInput | AvatarWhereUniqueInput[]
  }

  export type AvatarUncheckedCreateNestedManyWithoutBackgroundInput = {
    create?: XOR<AvatarCreateWithoutBackgroundInput, AvatarUncheckedCreateWithoutBackgroundInput> | AvatarCreateWithoutBackgroundInput[] | AvatarUncheckedCreateWithoutBackgroundInput[]
    connectOrCreate?: AvatarCreateOrConnectWithoutBackgroundInput | AvatarCreateOrConnectWithoutBackgroundInput[]
    createMany?: AvatarCreateManyBackgroundInputEnvelope
    connect?: AvatarWhereUniqueInput | AvatarWhereUniqueInput[]
  }

  export type AvatarUncheckedCreateNestedManyWithoutHandPropInput = {
    create?: XOR<AvatarCreateWithoutHandPropInput, AvatarUncheckedCreateWithoutHandPropInput> | AvatarCreateWithoutHandPropInput[] | AvatarUncheckedCreateWithoutHandPropInput[]
    connectOrCreate?: AvatarCreateOrConnectWithoutHandPropInput | AvatarCreateOrConnectWithoutHandPropInput[]
    createMany?: AvatarCreateManyHandPropInputEnvelope
    connect?: AvatarWhereUniqueInput | AvatarWhereUniqueInput[]
  }

  export type UserAvatarPropsUncheckedCreateNestedManyWithoutPropInput = {
    create?: XOR<UserAvatarPropsCreateWithoutPropInput, UserAvatarPropsUncheckedCreateWithoutPropInput> | UserAvatarPropsCreateWithoutPropInput[] | UserAvatarPropsUncheckedCreateWithoutPropInput[]
    connectOrCreate?: UserAvatarPropsCreateOrConnectWithoutPropInput | UserAvatarPropsCreateOrConnectWithoutPropInput[]
    createMany?: UserAvatarPropsCreateManyPropInputEnvelope
    connect?: UserAvatarPropsWhereUniqueInput | UserAvatarPropsWhereUniqueInput[]
  }

  export type EnumPropTypeFieldUpdateOperationsInput = {
    set?: $Enums.PropType
  }

  export type AvatarUpdateManyWithoutHatNestedInput = {
    create?: XOR<AvatarCreateWithoutHatInput, AvatarUncheckedCreateWithoutHatInput> | AvatarCreateWithoutHatInput[] | AvatarUncheckedCreateWithoutHatInput[]
    connectOrCreate?: AvatarCreateOrConnectWithoutHatInput | AvatarCreateOrConnectWithoutHatInput[]
    upsert?: AvatarUpsertWithWhereUniqueWithoutHatInput | AvatarUpsertWithWhereUniqueWithoutHatInput[]
    createMany?: AvatarCreateManyHatInputEnvelope
    set?: AvatarWhereUniqueInput | AvatarWhereUniqueInput[]
    disconnect?: AvatarWhereUniqueInput | AvatarWhereUniqueInput[]
    delete?: AvatarWhereUniqueInput | AvatarWhereUniqueInput[]
    connect?: AvatarWhereUniqueInput | AvatarWhereUniqueInput[]
    update?: AvatarUpdateWithWhereUniqueWithoutHatInput | AvatarUpdateWithWhereUniqueWithoutHatInput[]
    updateMany?: AvatarUpdateManyWithWhereWithoutHatInput | AvatarUpdateManyWithWhereWithoutHatInput[]
    deleteMany?: AvatarScalarWhereInput | AvatarScalarWhereInput[]
  }

  export type AvatarUpdateManyWithoutHairNestedInput = {
    create?: XOR<AvatarCreateWithoutHairInput, AvatarUncheckedCreateWithoutHairInput> | AvatarCreateWithoutHairInput[] | AvatarUncheckedCreateWithoutHairInput[]
    connectOrCreate?: AvatarCreateOrConnectWithoutHairInput | AvatarCreateOrConnectWithoutHairInput[]
    upsert?: AvatarUpsertWithWhereUniqueWithoutHairInput | AvatarUpsertWithWhereUniqueWithoutHairInput[]
    createMany?: AvatarCreateManyHairInputEnvelope
    set?: AvatarWhereUniqueInput | AvatarWhereUniqueInput[]
    disconnect?: AvatarWhereUniqueInput | AvatarWhereUniqueInput[]
    delete?: AvatarWhereUniqueInput | AvatarWhereUniqueInput[]
    connect?: AvatarWhereUniqueInput | AvatarWhereUniqueInput[]
    update?: AvatarUpdateWithWhereUniqueWithoutHairInput | AvatarUpdateWithWhereUniqueWithoutHairInput[]
    updateMany?: AvatarUpdateManyWithWhereWithoutHairInput | AvatarUpdateManyWithWhereWithoutHairInput[]
    deleteMany?: AvatarScalarWhereInput | AvatarScalarWhereInput[]
  }

  export type AvatarUpdateManyWithoutShirtNestedInput = {
    create?: XOR<AvatarCreateWithoutShirtInput, AvatarUncheckedCreateWithoutShirtInput> | AvatarCreateWithoutShirtInput[] | AvatarUncheckedCreateWithoutShirtInput[]
    connectOrCreate?: AvatarCreateOrConnectWithoutShirtInput | AvatarCreateOrConnectWithoutShirtInput[]
    upsert?: AvatarUpsertWithWhereUniqueWithoutShirtInput | AvatarUpsertWithWhereUniqueWithoutShirtInput[]
    createMany?: AvatarCreateManyShirtInputEnvelope
    set?: AvatarWhereUniqueInput | AvatarWhereUniqueInput[]
    disconnect?: AvatarWhereUniqueInput | AvatarWhereUniqueInput[]
    delete?: AvatarWhereUniqueInput | AvatarWhereUniqueInput[]
    connect?: AvatarWhereUniqueInput | AvatarWhereUniqueInput[]
    update?: AvatarUpdateWithWhereUniqueWithoutShirtInput | AvatarUpdateWithWhereUniqueWithoutShirtInput[]
    updateMany?: AvatarUpdateManyWithWhereWithoutShirtInput | AvatarUpdateManyWithWhereWithoutShirtInput[]
    deleteMany?: AvatarScalarWhereInput | AvatarScalarWhereInput[]
  }

  export type AvatarUpdateManyWithoutBackgroundNestedInput = {
    create?: XOR<AvatarCreateWithoutBackgroundInput, AvatarUncheckedCreateWithoutBackgroundInput> | AvatarCreateWithoutBackgroundInput[] | AvatarUncheckedCreateWithoutBackgroundInput[]
    connectOrCreate?: AvatarCreateOrConnectWithoutBackgroundInput | AvatarCreateOrConnectWithoutBackgroundInput[]
    upsert?: AvatarUpsertWithWhereUniqueWithoutBackgroundInput | AvatarUpsertWithWhereUniqueWithoutBackgroundInput[]
    createMany?: AvatarCreateManyBackgroundInputEnvelope
    set?: AvatarWhereUniqueInput | AvatarWhereUniqueInput[]
    disconnect?: AvatarWhereUniqueInput | AvatarWhereUniqueInput[]
    delete?: AvatarWhereUniqueInput | AvatarWhereUniqueInput[]
    connect?: AvatarWhereUniqueInput | AvatarWhereUniqueInput[]
    update?: AvatarUpdateWithWhereUniqueWithoutBackgroundInput | AvatarUpdateWithWhereUniqueWithoutBackgroundInput[]
    updateMany?: AvatarUpdateManyWithWhereWithoutBackgroundInput | AvatarUpdateManyWithWhereWithoutBackgroundInput[]
    deleteMany?: AvatarScalarWhereInput | AvatarScalarWhereInput[]
  }

  export type AvatarUpdateManyWithoutHandPropNestedInput = {
    create?: XOR<AvatarCreateWithoutHandPropInput, AvatarUncheckedCreateWithoutHandPropInput> | AvatarCreateWithoutHandPropInput[] | AvatarUncheckedCreateWithoutHandPropInput[]
    connectOrCreate?: AvatarCreateOrConnectWithoutHandPropInput | AvatarCreateOrConnectWithoutHandPropInput[]
    upsert?: AvatarUpsertWithWhereUniqueWithoutHandPropInput | AvatarUpsertWithWhereUniqueWithoutHandPropInput[]
    createMany?: AvatarCreateManyHandPropInputEnvelope
    set?: AvatarWhereUniqueInput | AvatarWhereUniqueInput[]
    disconnect?: AvatarWhereUniqueInput | AvatarWhereUniqueInput[]
    delete?: AvatarWhereUniqueInput | AvatarWhereUniqueInput[]
    connect?: AvatarWhereUniqueInput | AvatarWhereUniqueInput[]
    update?: AvatarUpdateWithWhereUniqueWithoutHandPropInput | AvatarUpdateWithWhereUniqueWithoutHandPropInput[]
    updateMany?: AvatarUpdateManyWithWhereWithoutHandPropInput | AvatarUpdateManyWithWhereWithoutHandPropInput[]
    deleteMany?: AvatarScalarWhereInput | AvatarScalarWhereInput[]
  }

  export type UserAvatarPropsUpdateManyWithoutPropNestedInput = {
    create?: XOR<UserAvatarPropsCreateWithoutPropInput, UserAvatarPropsUncheckedCreateWithoutPropInput> | UserAvatarPropsCreateWithoutPropInput[] | UserAvatarPropsUncheckedCreateWithoutPropInput[]
    connectOrCreate?: UserAvatarPropsCreateOrConnectWithoutPropInput | UserAvatarPropsCreateOrConnectWithoutPropInput[]
    upsert?: UserAvatarPropsUpsertWithWhereUniqueWithoutPropInput | UserAvatarPropsUpsertWithWhereUniqueWithoutPropInput[]
    createMany?: UserAvatarPropsCreateManyPropInputEnvelope
    set?: UserAvatarPropsWhereUniqueInput | UserAvatarPropsWhereUniqueInput[]
    disconnect?: UserAvatarPropsWhereUniqueInput | UserAvatarPropsWhereUniqueInput[]
    delete?: UserAvatarPropsWhereUniqueInput | UserAvatarPropsWhereUniqueInput[]
    connect?: UserAvatarPropsWhereUniqueInput | UserAvatarPropsWhereUniqueInput[]
    update?: UserAvatarPropsUpdateWithWhereUniqueWithoutPropInput | UserAvatarPropsUpdateWithWhereUniqueWithoutPropInput[]
    updateMany?: UserAvatarPropsUpdateManyWithWhereWithoutPropInput | UserAvatarPropsUpdateManyWithWhereWithoutPropInput[]
    deleteMany?: UserAvatarPropsScalarWhereInput | UserAvatarPropsScalarWhereInput[]
  }

  export type AvatarUncheckedUpdateManyWithoutHatNestedInput = {
    create?: XOR<AvatarCreateWithoutHatInput, AvatarUncheckedCreateWithoutHatInput> | AvatarCreateWithoutHatInput[] | AvatarUncheckedCreateWithoutHatInput[]
    connectOrCreate?: AvatarCreateOrConnectWithoutHatInput | AvatarCreateOrConnectWithoutHatInput[]
    upsert?: AvatarUpsertWithWhereUniqueWithoutHatInput | AvatarUpsertWithWhereUniqueWithoutHatInput[]
    createMany?: AvatarCreateManyHatInputEnvelope
    set?: AvatarWhereUniqueInput | AvatarWhereUniqueInput[]
    disconnect?: AvatarWhereUniqueInput | AvatarWhereUniqueInput[]
    delete?: AvatarWhereUniqueInput | AvatarWhereUniqueInput[]
    connect?: AvatarWhereUniqueInput | AvatarWhereUniqueInput[]
    update?: AvatarUpdateWithWhereUniqueWithoutHatInput | AvatarUpdateWithWhereUniqueWithoutHatInput[]
    updateMany?: AvatarUpdateManyWithWhereWithoutHatInput | AvatarUpdateManyWithWhereWithoutHatInput[]
    deleteMany?: AvatarScalarWhereInput | AvatarScalarWhereInput[]
  }

  export type AvatarUncheckedUpdateManyWithoutHairNestedInput = {
    create?: XOR<AvatarCreateWithoutHairInput, AvatarUncheckedCreateWithoutHairInput> | AvatarCreateWithoutHairInput[] | AvatarUncheckedCreateWithoutHairInput[]
    connectOrCreate?: AvatarCreateOrConnectWithoutHairInput | AvatarCreateOrConnectWithoutHairInput[]
    upsert?: AvatarUpsertWithWhereUniqueWithoutHairInput | AvatarUpsertWithWhereUniqueWithoutHairInput[]
    createMany?: AvatarCreateManyHairInputEnvelope
    set?: AvatarWhereUniqueInput | AvatarWhereUniqueInput[]
    disconnect?: AvatarWhereUniqueInput | AvatarWhereUniqueInput[]
    delete?: AvatarWhereUniqueInput | AvatarWhereUniqueInput[]
    connect?: AvatarWhereUniqueInput | AvatarWhereUniqueInput[]
    update?: AvatarUpdateWithWhereUniqueWithoutHairInput | AvatarUpdateWithWhereUniqueWithoutHairInput[]
    updateMany?: AvatarUpdateManyWithWhereWithoutHairInput | AvatarUpdateManyWithWhereWithoutHairInput[]
    deleteMany?: AvatarScalarWhereInput | AvatarScalarWhereInput[]
  }

  export type AvatarUncheckedUpdateManyWithoutShirtNestedInput = {
    create?: XOR<AvatarCreateWithoutShirtInput, AvatarUncheckedCreateWithoutShirtInput> | AvatarCreateWithoutShirtInput[] | AvatarUncheckedCreateWithoutShirtInput[]
    connectOrCreate?: AvatarCreateOrConnectWithoutShirtInput | AvatarCreateOrConnectWithoutShirtInput[]
    upsert?: AvatarUpsertWithWhereUniqueWithoutShirtInput | AvatarUpsertWithWhereUniqueWithoutShirtInput[]
    createMany?: AvatarCreateManyShirtInputEnvelope
    set?: AvatarWhereUniqueInput | AvatarWhereUniqueInput[]
    disconnect?: AvatarWhereUniqueInput | AvatarWhereUniqueInput[]
    delete?: AvatarWhereUniqueInput | AvatarWhereUniqueInput[]
    connect?: AvatarWhereUniqueInput | AvatarWhereUniqueInput[]
    update?: AvatarUpdateWithWhereUniqueWithoutShirtInput | AvatarUpdateWithWhereUniqueWithoutShirtInput[]
    updateMany?: AvatarUpdateManyWithWhereWithoutShirtInput | AvatarUpdateManyWithWhereWithoutShirtInput[]
    deleteMany?: AvatarScalarWhereInput | AvatarScalarWhereInput[]
  }

  export type AvatarUncheckedUpdateManyWithoutBackgroundNestedInput = {
    create?: XOR<AvatarCreateWithoutBackgroundInput, AvatarUncheckedCreateWithoutBackgroundInput> | AvatarCreateWithoutBackgroundInput[] | AvatarUncheckedCreateWithoutBackgroundInput[]
    connectOrCreate?: AvatarCreateOrConnectWithoutBackgroundInput | AvatarCreateOrConnectWithoutBackgroundInput[]
    upsert?: AvatarUpsertWithWhereUniqueWithoutBackgroundInput | AvatarUpsertWithWhereUniqueWithoutBackgroundInput[]
    createMany?: AvatarCreateManyBackgroundInputEnvelope
    set?: AvatarWhereUniqueInput | AvatarWhereUniqueInput[]
    disconnect?: AvatarWhereUniqueInput | AvatarWhereUniqueInput[]
    delete?: AvatarWhereUniqueInput | AvatarWhereUniqueInput[]
    connect?: AvatarWhereUniqueInput | AvatarWhereUniqueInput[]
    update?: AvatarUpdateWithWhereUniqueWithoutBackgroundInput | AvatarUpdateWithWhereUniqueWithoutBackgroundInput[]
    updateMany?: AvatarUpdateManyWithWhereWithoutBackgroundInput | AvatarUpdateManyWithWhereWithoutBackgroundInput[]
    deleteMany?: AvatarScalarWhereInput | AvatarScalarWhereInput[]
  }

  export type AvatarUncheckedUpdateManyWithoutHandPropNestedInput = {
    create?: XOR<AvatarCreateWithoutHandPropInput, AvatarUncheckedCreateWithoutHandPropInput> | AvatarCreateWithoutHandPropInput[] | AvatarUncheckedCreateWithoutHandPropInput[]
    connectOrCreate?: AvatarCreateOrConnectWithoutHandPropInput | AvatarCreateOrConnectWithoutHandPropInput[]
    upsert?: AvatarUpsertWithWhereUniqueWithoutHandPropInput | AvatarUpsertWithWhereUniqueWithoutHandPropInput[]
    createMany?: AvatarCreateManyHandPropInputEnvelope
    set?: AvatarWhereUniqueInput | AvatarWhereUniqueInput[]
    disconnect?: AvatarWhereUniqueInput | AvatarWhereUniqueInput[]
    delete?: AvatarWhereUniqueInput | AvatarWhereUniqueInput[]
    connect?: AvatarWhereUniqueInput | AvatarWhereUniqueInput[]
    update?: AvatarUpdateWithWhereUniqueWithoutHandPropInput | AvatarUpdateWithWhereUniqueWithoutHandPropInput[]
    updateMany?: AvatarUpdateManyWithWhereWithoutHandPropInput | AvatarUpdateManyWithWhereWithoutHandPropInput[]
    deleteMany?: AvatarScalarWhereInput | AvatarScalarWhereInput[]
  }

  export type UserAvatarPropsUncheckedUpdateManyWithoutPropNestedInput = {
    create?: XOR<UserAvatarPropsCreateWithoutPropInput, UserAvatarPropsUncheckedCreateWithoutPropInput> | UserAvatarPropsCreateWithoutPropInput[] | UserAvatarPropsUncheckedCreateWithoutPropInput[]
    connectOrCreate?: UserAvatarPropsCreateOrConnectWithoutPropInput | UserAvatarPropsCreateOrConnectWithoutPropInput[]
    upsert?: UserAvatarPropsUpsertWithWhereUniqueWithoutPropInput | UserAvatarPropsUpsertWithWhereUniqueWithoutPropInput[]
    createMany?: UserAvatarPropsCreateManyPropInputEnvelope
    set?: UserAvatarPropsWhereUniqueInput | UserAvatarPropsWhereUniqueInput[]
    disconnect?: UserAvatarPropsWhereUniqueInput | UserAvatarPropsWhereUniqueInput[]
    delete?: UserAvatarPropsWhereUniqueInput | UserAvatarPropsWhereUniqueInput[]
    connect?: UserAvatarPropsWhereUniqueInput | UserAvatarPropsWhereUniqueInput[]
    update?: UserAvatarPropsUpdateWithWhereUniqueWithoutPropInput | UserAvatarPropsUpdateWithWhereUniqueWithoutPropInput[]
    updateMany?: UserAvatarPropsUpdateManyWithWhereWithoutPropInput | UserAvatarPropsUpdateManyWithWhereWithoutPropInput[]
    deleteMany?: UserAvatarPropsScalarWhereInput | UserAvatarPropsScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoleNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel> | null
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRoleNullableFilter<$PrismaModel> | $Enums.Role | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoleNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel> | null
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRoleNullableWithAggregatesFilter<$PrismaModel> | $Enums.Role | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumRoleNullableFilter<$PrismaModel>
    _max?: NestedEnumRoleNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumPropTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PropType | EnumPropTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PropType[] | ListEnumPropTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PropType[] | ListEnumPropTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPropTypeFilter<$PrismaModel> | $Enums.PropType
  }

  export type NestedEnumPropTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PropType | EnumPropTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PropType[] | ListEnumPropTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PropType[] | ListEnumPropTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPropTypeWithAggregatesFilter<$PrismaModel> | $Enums.PropType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPropTypeFilter<$PrismaModel>
    _max?: NestedEnumPropTypeFilter<$PrismaModel>
  }

  export type HouseholdCreateWithoutUsersInput = {
    name: string
    joinCode?: string
    chores?: ChoreCreateNestedManyWithoutHouseholdInput
  }

  export type HouseholdUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
    joinCode?: string
    chores?: ChoreUncheckedCreateNestedManyWithoutHouseholdInput
  }

  export type HouseholdCreateOrConnectWithoutUsersInput = {
    where: HouseholdWhereUniqueInput
    create: XOR<HouseholdCreateWithoutUsersInput, HouseholdUncheckedCreateWithoutUsersInput>
  }

  export type ChoreCreateWithoutAssigneeInput = {
    name: string
    description: string
    difficulty: number
    location: string
    estimatedTime: number
    dueDate: Date | string
    repeat: boolean
    household: HouseholdCreateNestedOneWithoutChoresInput
  }

  export type ChoreUncheckedCreateWithoutAssigneeInput = {
    id?: number
    name: string
    description: string
    difficulty: number
    location: string
    estimatedTime: number
    dueDate: Date | string
    repeat: boolean
    householdId: number
  }

  export type ChoreCreateOrConnectWithoutAssigneeInput = {
    where: ChoreWhereUniqueInput
    create: XOR<ChoreCreateWithoutAssigneeInput, ChoreUncheckedCreateWithoutAssigneeInput>
  }

  export type ChoreCreateManyAssigneeInputEnvelope = {
    data: ChoreCreateManyAssigneeInput | ChoreCreateManyAssigneeInput[]
    skipDuplicates?: boolean
  }

  export type AvatarCreateWithoutOwnerInput = {
    hat: AvatarPropCreateNestedOneWithoutHatInAvatarsInput
    hair: AvatarPropCreateNestedOneWithoutHairInAvatarsInput
    shirt: AvatarPropCreateNestedOneWithoutShirtInAvatarsInput
    background: AvatarPropCreateNestedOneWithoutBackgroundInAvatarsInput
    handProp: AvatarPropCreateNestedOneWithoutHandPropInAvatarsInput
  }

  export type AvatarUncheckedCreateWithoutOwnerInput = {
    hatId: number
    hairId: number
    shirtId: number
    backgroundId: number
    handPropId: number
  }

  export type AvatarCreateOrConnectWithoutOwnerInput = {
    where: AvatarWhereUniqueInput
    create: XOR<AvatarCreateWithoutOwnerInput, AvatarUncheckedCreateWithoutOwnerInput>
  }

  export type UserAvatarPropsCreateWithoutUserInput = {
    prop: AvatarPropCreateNestedOneWithoutUserAvatarPropsInput
  }

  export type UserAvatarPropsUncheckedCreateWithoutUserInput = {
    propId: number
  }

  export type UserAvatarPropsCreateOrConnectWithoutUserInput = {
    where: UserAvatarPropsWhereUniqueInput
    create: XOR<UserAvatarPropsCreateWithoutUserInput, UserAvatarPropsUncheckedCreateWithoutUserInput>
  }

  export type UserAvatarPropsCreateManyUserInputEnvelope = {
    data: UserAvatarPropsCreateManyUserInput | UserAvatarPropsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type HouseholdUpsertWithoutUsersInput = {
    update: XOR<HouseholdUpdateWithoutUsersInput, HouseholdUncheckedUpdateWithoutUsersInput>
    create: XOR<HouseholdCreateWithoutUsersInput, HouseholdUncheckedCreateWithoutUsersInput>
    where?: HouseholdWhereInput
  }

  export type HouseholdUpdateToOneWithWhereWithoutUsersInput = {
    where?: HouseholdWhereInput
    data: XOR<HouseholdUpdateWithoutUsersInput, HouseholdUncheckedUpdateWithoutUsersInput>
  }

  export type HouseholdUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    joinCode?: StringFieldUpdateOperationsInput | string
    chores?: ChoreUpdateManyWithoutHouseholdNestedInput
  }

  export type HouseholdUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    joinCode?: StringFieldUpdateOperationsInput | string
    chores?: ChoreUncheckedUpdateManyWithoutHouseholdNestedInput
  }

  export type ChoreUpsertWithWhereUniqueWithoutAssigneeInput = {
    where: ChoreWhereUniqueInput
    update: XOR<ChoreUpdateWithoutAssigneeInput, ChoreUncheckedUpdateWithoutAssigneeInput>
    create: XOR<ChoreCreateWithoutAssigneeInput, ChoreUncheckedCreateWithoutAssigneeInput>
  }

  export type ChoreUpdateWithWhereUniqueWithoutAssigneeInput = {
    where: ChoreWhereUniqueInput
    data: XOR<ChoreUpdateWithoutAssigneeInput, ChoreUncheckedUpdateWithoutAssigneeInput>
  }

  export type ChoreUpdateManyWithWhereWithoutAssigneeInput = {
    where: ChoreScalarWhereInput
    data: XOR<ChoreUpdateManyMutationInput, ChoreUncheckedUpdateManyWithoutAssigneeInput>
  }

  export type ChoreScalarWhereInput = {
    AND?: ChoreScalarWhereInput | ChoreScalarWhereInput[]
    OR?: ChoreScalarWhereInput[]
    NOT?: ChoreScalarWhereInput | ChoreScalarWhereInput[]
    id?: IntFilter<"Chore"> | number
    name?: StringFilter<"Chore"> | string
    description?: StringFilter<"Chore"> | string
    difficulty?: IntFilter<"Chore"> | number
    location?: StringFilter<"Chore"> | string
    estimatedTime?: IntFilter<"Chore"> | number
    dueDate?: DateTimeFilter<"Chore"> | Date | string
    repeat?: BoolFilter<"Chore"> | boolean
    householdId?: IntFilter<"Chore"> | number
    assigneeId?: IntNullableFilter<"Chore"> | number | null
  }

  export type AvatarUpsertWithoutOwnerInput = {
    update: XOR<AvatarUpdateWithoutOwnerInput, AvatarUncheckedUpdateWithoutOwnerInput>
    create: XOR<AvatarCreateWithoutOwnerInput, AvatarUncheckedCreateWithoutOwnerInput>
    where?: AvatarWhereInput
  }

  export type AvatarUpdateToOneWithWhereWithoutOwnerInput = {
    where?: AvatarWhereInput
    data: XOR<AvatarUpdateWithoutOwnerInput, AvatarUncheckedUpdateWithoutOwnerInput>
  }

  export type AvatarUpdateWithoutOwnerInput = {
    hat?: AvatarPropUpdateOneRequiredWithoutHatInAvatarsNestedInput
    hair?: AvatarPropUpdateOneRequiredWithoutHairInAvatarsNestedInput
    shirt?: AvatarPropUpdateOneRequiredWithoutShirtInAvatarsNestedInput
    background?: AvatarPropUpdateOneRequiredWithoutBackgroundInAvatarsNestedInput
    handProp?: AvatarPropUpdateOneRequiredWithoutHandPropInAvatarsNestedInput
  }

  export type AvatarUncheckedUpdateWithoutOwnerInput = {
    hatId?: IntFieldUpdateOperationsInput | number
    hairId?: IntFieldUpdateOperationsInput | number
    shirtId?: IntFieldUpdateOperationsInput | number
    backgroundId?: IntFieldUpdateOperationsInput | number
    handPropId?: IntFieldUpdateOperationsInput | number
  }

  export type UserAvatarPropsUpsertWithWhereUniqueWithoutUserInput = {
    where: UserAvatarPropsWhereUniqueInput
    update: XOR<UserAvatarPropsUpdateWithoutUserInput, UserAvatarPropsUncheckedUpdateWithoutUserInput>
    create: XOR<UserAvatarPropsCreateWithoutUserInput, UserAvatarPropsUncheckedCreateWithoutUserInput>
  }

  export type UserAvatarPropsUpdateWithWhereUniqueWithoutUserInput = {
    where: UserAvatarPropsWhereUniqueInput
    data: XOR<UserAvatarPropsUpdateWithoutUserInput, UserAvatarPropsUncheckedUpdateWithoutUserInput>
  }

  export type UserAvatarPropsUpdateManyWithWhereWithoutUserInput = {
    where: UserAvatarPropsScalarWhereInput
    data: XOR<UserAvatarPropsUpdateManyMutationInput, UserAvatarPropsUncheckedUpdateManyWithoutUserInput>
  }

  export type UserAvatarPropsScalarWhereInput = {
    AND?: UserAvatarPropsScalarWhereInput | UserAvatarPropsScalarWhereInput[]
    OR?: UserAvatarPropsScalarWhereInput[]
    NOT?: UserAvatarPropsScalarWhereInput | UserAvatarPropsScalarWhereInput[]
    userId?: IntFilter<"UserAvatarProps"> | number
    propId?: IntFilter<"UserAvatarProps"> | number
  }

  export type UserCreateWithoutHouseholdInput = {
    createdAt?: Date | string
    email: string
    name: string
    password_hash: string
    salt?: string | null
    role?: $Enums.Role | null
    difficulty?: number | null
    totalPoints?: number | null
    assignedChores?: ChoreCreateNestedManyWithoutAssigneeInput
    avatar?: AvatarCreateNestedOneWithoutOwnerInput
    userAvatarProps?: UserAvatarPropsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutHouseholdInput = {
    id?: number
    createdAt?: Date | string
    email: string
    name: string
    password_hash: string
    salt?: string | null
    role?: $Enums.Role | null
    difficulty?: number | null
    totalPoints?: number | null
    assignedChores?: ChoreUncheckedCreateNestedManyWithoutAssigneeInput
    avatar?: AvatarUncheckedCreateNestedOneWithoutOwnerInput
    userAvatarProps?: UserAvatarPropsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutHouseholdInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutHouseholdInput, UserUncheckedCreateWithoutHouseholdInput>
  }

  export type UserCreateManyHouseholdInputEnvelope = {
    data: UserCreateManyHouseholdInput | UserCreateManyHouseholdInput[]
    skipDuplicates?: boolean
  }

  export type ChoreCreateWithoutHouseholdInput = {
    name: string
    description: string
    difficulty: number
    location: string
    estimatedTime: number
    dueDate: Date | string
    repeat: boolean
    assignee?: UserCreateNestedOneWithoutAssignedChoresInput
  }

  export type ChoreUncheckedCreateWithoutHouseholdInput = {
    id?: number
    name: string
    description: string
    difficulty: number
    location: string
    estimatedTime: number
    dueDate: Date | string
    repeat: boolean
    assigneeId?: number | null
  }

  export type ChoreCreateOrConnectWithoutHouseholdInput = {
    where: ChoreWhereUniqueInput
    create: XOR<ChoreCreateWithoutHouseholdInput, ChoreUncheckedCreateWithoutHouseholdInput>
  }

  export type ChoreCreateManyHouseholdInputEnvelope = {
    data: ChoreCreateManyHouseholdInput | ChoreCreateManyHouseholdInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutHouseholdInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutHouseholdInput, UserUncheckedUpdateWithoutHouseholdInput>
    create: XOR<UserCreateWithoutHouseholdInput, UserUncheckedCreateWithoutHouseholdInput>
  }

  export type UserUpdateWithWhereUniqueWithoutHouseholdInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutHouseholdInput, UserUncheckedUpdateWithoutHouseholdInput>
  }

  export type UserUpdateManyWithWhereWithoutHouseholdInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutHouseholdInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    password_hash?: StringFilter<"User"> | string
    salt?: StringNullableFilter<"User"> | string | null
    householdId?: IntNullableFilter<"User"> | number | null
    role?: EnumRoleNullableFilter<"User"> | $Enums.Role | null
    difficulty?: IntNullableFilter<"User"> | number | null
    totalPoints?: IntNullableFilter<"User"> | number | null
  }

  export type ChoreUpsertWithWhereUniqueWithoutHouseholdInput = {
    where: ChoreWhereUniqueInput
    update: XOR<ChoreUpdateWithoutHouseholdInput, ChoreUncheckedUpdateWithoutHouseholdInput>
    create: XOR<ChoreCreateWithoutHouseholdInput, ChoreUncheckedCreateWithoutHouseholdInput>
  }

  export type ChoreUpdateWithWhereUniqueWithoutHouseholdInput = {
    where: ChoreWhereUniqueInput
    data: XOR<ChoreUpdateWithoutHouseholdInput, ChoreUncheckedUpdateWithoutHouseholdInput>
  }

  export type ChoreUpdateManyWithWhereWithoutHouseholdInput = {
    where: ChoreScalarWhereInput
    data: XOR<ChoreUpdateManyMutationInput, ChoreUncheckedUpdateManyWithoutHouseholdInput>
  }

  export type HouseholdCreateWithoutChoresInput = {
    name: string
    joinCode?: string
    users?: UserCreateNestedManyWithoutHouseholdInput
  }

  export type HouseholdUncheckedCreateWithoutChoresInput = {
    id?: number
    name: string
    joinCode?: string
    users?: UserUncheckedCreateNestedManyWithoutHouseholdInput
  }

  export type HouseholdCreateOrConnectWithoutChoresInput = {
    where: HouseholdWhereUniqueInput
    create: XOR<HouseholdCreateWithoutChoresInput, HouseholdUncheckedCreateWithoutChoresInput>
  }

  export type UserCreateWithoutAssignedChoresInput = {
    createdAt?: Date | string
    email: string
    name: string
    password_hash: string
    salt?: string | null
    role?: $Enums.Role | null
    difficulty?: number | null
    totalPoints?: number | null
    household?: HouseholdCreateNestedOneWithoutUsersInput
    avatar?: AvatarCreateNestedOneWithoutOwnerInput
    userAvatarProps?: UserAvatarPropsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAssignedChoresInput = {
    id?: number
    createdAt?: Date | string
    email: string
    name: string
    password_hash: string
    salt?: string | null
    householdId?: number | null
    role?: $Enums.Role | null
    difficulty?: number | null
    totalPoints?: number | null
    avatar?: AvatarUncheckedCreateNestedOneWithoutOwnerInput
    userAvatarProps?: UserAvatarPropsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAssignedChoresInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAssignedChoresInput, UserUncheckedCreateWithoutAssignedChoresInput>
  }

  export type HouseholdUpsertWithoutChoresInput = {
    update: XOR<HouseholdUpdateWithoutChoresInput, HouseholdUncheckedUpdateWithoutChoresInput>
    create: XOR<HouseholdCreateWithoutChoresInput, HouseholdUncheckedCreateWithoutChoresInput>
    where?: HouseholdWhereInput
  }

  export type HouseholdUpdateToOneWithWhereWithoutChoresInput = {
    where?: HouseholdWhereInput
    data: XOR<HouseholdUpdateWithoutChoresInput, HouseholdUncheckedUpdateWithoutChoresInput>
  }

  export type HouseholdUpdateWithoutChoresInput = {
    name?: StringFieldUpdateOperationsInput | string
    joinCode?: StringFieldUpdateOperationsInput | string
    users?: UserUpdateManyWithoutHouseholdNestedInput
  }

  export type HouseholdUncheckedUpdateWithoutChoresInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    joinCode?: StringFieldUpdateOperationsInput | string
    users?: UserUncheckedUpdateManyWithoutHouseholdNestedInput
  }

  export type UserUpsertWithoutAssignedChoresInput = {
    update: XOR<UserUpdateWithoutAssignedChoresInput, UserUncheckedUpdateWithoutAssignedChoresInput>
    create: XOR<UserCreateWithoutAssignedChoresInput, UserUncheckedCreateWithoutAssignedChoresInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAssignedChoresInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAssignedChoresInput, UserUncheckedUpdateWithoutAssignedChoresInput>
  }

  export type UserUpdateWithoutAssignedChoresInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    salt?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    difficulty?: NullableIntFieldUpdateOperationsInput | number | null
    totalPoints?: NullableIntFieldUpdateOperationsInput | number | null
    household?: HouseholdUpdateOneWithoutUsersNestedInput
    avatar?: AvatarUpdateOneWithoutOwnerNestedInput
    userAvatarProps?: UserAvatarPropsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAssignedChoresInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    salt?: NullableStringFieldUpdateOperationsInput | string | null
    householdId?: NullableIntFieldUpdateOperationsInput | number | null
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    difficulty?: NullableIntFieldUpdateOperationsInput | number | null
    totalPoints?: NullableIntFieldUpdateOperationsInput | number | null
    avatar?: AvatarUncheckedUpdateOneWithoutOwnerNestedInput
    userAvatarProps?: UserAvatarPropsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutAvatarInput = {
    createdAt?: Date | string
    email: string
    name: string
    password_hash: string
    salt?: string | null
    role?: $Enums.Role | null
    difficulty?: number | null
    totalPoints?: number | null
    household?: HouseholdCreateNestedOneWithoutUsersInput
    assignedChores?: ChoreCreateNestedManyWithoutAssigneeInput
    userAvatarProps?: UserAvatarPropsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAvatarInput = {
    id?: number
    createdAt?: Date | string
    email: string
    name: string
    password_hash: string
    salt?: string | null
    householdId?: number | null
    role?: $Enums.Role | null
    difficulty?: number | null
    totalPoints?: number | null
    assignedChores?: ChoreUncheckedCreateNestedManyWithoutAssigneeInput
    userAvatarProps?: UserAvatarPropsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAvatarInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAvatarInput, UserUncheckedCreateWithoutAvatarInput>
  }

  export type AvatarPropCreateWithoutHatInAvatarsInput = {
    name: string
    type: $Enums.PropType
    cost: number
    hairInAvatars?: AvatarCreateNestedManyWithoutHairInput
    shirtInAvatars?: AvatarCreateNestedManyWithoutShirtInput
    backgroundInAvatars?: AvatarCreateNestedManyWithoutBackgroundInput
    handPropInAvatars?: AvatarCreateNestedManyWithoutHandPropInput
    userAvatarProps?: UserAvatarPropsCreateNestedManyWithoutPropInput
  }

  export type AvatarPropUncheckedCreateWithoutHatInAvatarsInput = {
    id?: number
    name: string
    type: $Enums.PropType
    cost: number
    hairInAvatars?: AvatarUncheckedCreateNestedManyWithoutHairInput
    shirtInAvatars?: AvatarUncheckedCreateNestedManyWithoutShirtInput
    backgroundInAvatars?: AvatarUncheckedCreateNestedManyWithoutBackgroundInput
    handPropInAvatars?: AvatarUncheckedCreateNestedManyWithoutHandPropInput
    userAvatarProps?: UserAvatarPropsUncheckedCreateNestedManyWithoutPropInput
  }

  export type AvatarPropCreateOrConnectWithoutHatInAvatarsInput = {
    where: AvatarPropWhereUniqueInput
    create: XOR<AvatarPropCreateWithoutHatInAvatarsInput, AvatarPropUncheckedCreateWithoutHatInAvatarsInput>
  }

  export type AvatarPropCreateWithoutHairInAvatarsInput = {
    name: string
    type: $Enums.PropType
    cost: number
    hatInAvatars?: AvatarCreateNestedManyWithoutHatInput
    shirtInAvatars?: AvatarCreateNestedManyWithoutShirtInput
    backgroundInAvatars?: AvatarCreateNestedManyWithoutBackgroundInput
    handPropInAvatars?: AvatarCreateNestedManyWithoutHandPropInput
    userAvatarProps?: UserAvatarPropsCreateNestedManyWithoutPropInput
  }

  export type AvatarPropUncheckedCreateWithoutHairInAvatarsInput = {
    id?: number
    name: string
    type: $Enums.PropType
    cost: number
    hatInAvatars?: AvatarUncheckedCreateNestedManyWithoutHatInput
    shirtInAvatars?: AvatarUncheckedCreateNestedManyWithoutShirtInput
    backgroundInAvatars?: AvatarUncheckedCreateNestedManyWithoutBackgroundInput
    handPropInAvatars?: AvatarUncheckedCreateNestedManyWithoutHandPropInput
    userAvatarProps?: UserAvatarPropsUncheckedCreateNestedManyWithoutPropInput
  }

  export type AvatarPropCreateOrConnectWithoutHairInAvatarsInput = {
    where: AvatarPropWhereUniqueInput
    create: XOR<AvatarPropCreateWithoutHairInAvatarsInput, AvatarPropUncheckedCreateWithoutHairInAvatarsInput>
  }

  export type AvatarPropCreateWithoutShirtInAvatarsInput = {
    name: string
    type: $Enums.PropType
    cost: number
    hatInAvatars?: AvatarCreateNestedManyWithoutHatInput
    hairInAvatars?: AvatarCreateNestedManyWithoutHairInput
    backgroundInAvatars?: AvatarCreateNestedManyWithoutBackgroundInput
    handPropInAvatars?: AvatarCreateNestedManyWithoutHandPropInput
    userAvatarProps?: UserAvatarPropsCreateNestedManyWithoutPropInput
  }

  export type AvatarPropUncheckedCreateWithoutShirtInAvatarsInput = {
    id?: number
    name: string
    type: $Enums.PropType
    cost: number
    hatInAvatars?: AvatarUncheckedCreateNestedManyWithoutHatInput
    hairInAvatars?: AvatarUncheckedCreateNestedManyWithoutHairInput
    backgroundInAvatars?: AvatarUncheckedCreateNestedManyWithoutBackgroundInput
    handPropInAvatars?: AvatarUncheckedCreateNestedManyWithoutHandPropInput
    userAvatarProps?: UserAvatarPropsUncheckedCreateNestedManyWithoutPropInput
  }

  export type AvatarPropCreateOrConnectWithoutShirtInAvatarsInput = {
    where: AvatarPropWhereUniqueInput
    create: XOR<AvatarPropCreateWithoutShirtInAvatarsInput, AvatarPropUncheckedCreateWithoutShirtInAvatarsInput>
  }

  export type AvatarPropCreateWithoutBackgroundInAvatarsInput = {
    name: string
    type: $Enums.PropType
    cost: number
    hatInAvatars?: AvatarCreateNestedManyWithoutHatInput
    hairInAvatars?: AvatarCreateNestedManyWithoutHairInput
    shirtInAvatars?: AvatarCreateNestedManyWithoutShirtInput
    handPropInAvatars?: AvatarCreateNestedManyWithoutHandPropInput
    userAvatarProps?: UserAvatarPropsCreateNestedManyWithoutPropInput
  }

  export type AvatarPropUncheckedCreateWithoutBackgroundInAvatarsInput = {
    id?: number
    name: string
    type: $Enums.PropType
    cost: number
    hatInAvatars?: AvatarUncheckedCreateNestedManyWithoutHatInput
    hairInAvatars?: AvatarUncheckedCreateNestedManyWithoutHairInput
    shirtInAvatars?: AvatarUncheckedCreateNestedManyWithoutShirtInput
    handPropInAvatars?: AvatarUncheckedCreateNestedManyWithoutHandPropInput
    userAvatarProps?: UserAvatarPropsUncheckedCreateNestedManyWithoutPropInput
  }

  export type AvatarPropCreateOrConnectWithoutBackgroundInAvatarsInput = {
    where: AvatarPropWhereUniqueInput
    create: XOR<AvatarPropCreateWithoutBackgroundInAvatarsInput, AvatarPropUncheckedCreateWithoutBackgroundInAvatarsInput>
  }

  export type AvatarPropCreateWithoutHandPropInAvatarsInput = {
    name: string
    type: $Enums.PropType
    cost: number
    hatInAvatars?: AvatarCreateNestedManyWithoutHatInput
    hairInAvatars?: AvatarCreateNestedManyWithoutHairInput
    shirtInAvatars?: AvatarCreateNestedManyWithoutShirtInput
    backgroundInAvatars?: AvatarCreateNestedManyWithoutBackgroundInput
    userAvatarProps?: UserAvatarPropsCreateNestedManyWithoutPropInput
  }

  export type AvatarPropUncheckedCreateWithoutHandPropInAvatarsInput = {
    id?: number
    name: string
    type: $Enums.PropType
    cost: number
    hatInAvatars?: AvatarUncheckedCreateNestedManyWithoutHatInput
    hairInAvatars?: AvatarUncheckedCreateNestedManyWithoutHairInput
    shirtInAvatars?: AvatarUncheckedCreateNestedManyWithoutShirtInput
    backgroundInAvatars?: AvatarUncheckedCreateNestedManyWithoutBackgroundInput
    userAvatarProps?: UserAvatarPropsUncheckedCreateNestedManyWithoutPropInput
  }

  export type AvatarPropCreateOrConnectWithoutHandPropInAvatarsInput = {
    where: AvatarPropWhereUniqueInput
    create: XOR<AvatarPropCreateWithoutHandPropInAvatarsInput, AvatarPropUncheckedCreateWithoutHandPropInAvatarsInput>
  }

  export type UserUpsertWithoutAvatarInput = {
    update: XOR<UserUpdateWithoutAvatarInput, UserUncheckedUpdateWithoutAvatarInput>
    create: XOR<UserCreateWithoutAvatarInput, UserUncheckedCreateWithoutAvatarInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAvatarInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAvatarInput, UserUncheckedUpdateWithoutAvatarInput>
  }

  export type UserUpdateWithoutAvatarInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    salt?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    difficulty?: NullableIntFieldUpdateOperationsInput | number | null
    totalPoints?: NullableIntFieldUpdateOperationsInput | number | null
    household?: HouseholdUpdateOneWithoutUsersNestedInput
    assignedChores?: ChoreUpdateManyWithoutAssigneeNestedInput
    userAvatarProps?: UserAvatarPropsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAvatarInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    salt?: NullableStringFieldUpdateOperationsInput | string | null
    householdId?: NullableIntFieldUpdateOperationsInput | number | null
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    difficulty?: NullableIntFieldUpdateOperationsInput | number | null
    totalPoints?: NullableIntFieldUpdateOperationsInput | number | null
    assignedChores?: ChoreUncheckedUpdateManyWithoutAssigneeNestedInput
    userAvatarProps?: UserAvatarPropsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AvatarPropUpsertWithoutHatInAvatarsInput = {
    update: XOR<AvatarPropUpdateWithoutHatInAvatarsInput, AvatarPropUncheckedUpdateWithoutHatInAvatarsInput>
    create: XOR<AvatarPropCreateWithoutHatInAvatarsInput, AvatarPropUncheckedCreateWithoutHatInAvatarsInput>
    where?: AvatarPropWhereInput
  }

  export type AvatarPropUpdateToOneWithWhereWithoutHatInAvatarsInput = {
    where?: AvatarPropWhereInput
    data: XOR<AvatarPropUpdateWithoutHatInAvatarsInput, AvatarPropUncheckedUpdateWithoutHatInAvatarsInput>
  }

  export type AvatarPropUpdateWithoutHatInAvatarsInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumPropTypeFieldUpdateOperationsInput | $Enums.PropType
    cost?: IntFieldUpdateOperationsInput | number
    hairInAvatars?: AvatarUpdateManyWithoutHairNestedInput
    shirtInAvatars?: AvatarUpdateManyWithoutShirtNestedInput
    backgroundInAvatars?: AvatarUpdateManyWithoutBackgroundNestedInput
    handPropInAvatars?: AvatarUpdateManyWithoutHandPropNestedInput
    userAvatarProps?: UserAvatarPropsUpdateManyWithoutPropNestedInput
  }

  export type AvatarPropUncheckedUpdateWithoutHatInAvatarsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumPropTypeFieldUpdateOperationsInput | $Enums.PropType
    cost?: IntFieldUpdateOperationsInput | number
    hairInAvatars?: AvatarUncheckedUpdateManyWithoutHairNestedInput
    shirtInAvatars?: AvatarUncheckedUpdateManyWithoutShirtNestedInput
    backgroundInAvatars?: AvatarUncheckedUpdateManyWithoutBackgroundNestedInput
    handPropInAvatars?: AvatarUncheckedUpdateManyWithoutHandPropNestedInput
    userAvatarProps?: UserAvatarPropsUncheckedUpdateManyWithoutPropNestedInput
  }

  export type AvatarPropUpsertWithoutHairInAvatarsInput = {
    update: XOR<AvatarPropUpdateWithoutHairInAvatarsInput, AvatarPropUncheckedUpdateWithoutHairInAvatarsInput>
    create: XOR<AvatarPropCreateWithoutHairInAvatarsInput, AvatarPropUncheckedCreateWithoutHairInAvatarsInput>
    where?: AvatarPropWhereInput
  }

  export type AvatarPropUpdateToOneWithWhereWithoutHairInAvatarsInput = {
    where?: AvatarPropWhereInput
    data: XOR<AvatarPropUpdateWithoutHairInAvatarsInput, AvatarPropUncheckedUpdateWithoutHairInAvatarsInput>
  }

  export type AvatarPropUpdateWithoutHairInAvatarsInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumPropTypeFieldUpdateOperationsInput | $Enums.PropType
    cost?: IntFieldUpdateOperationsInput | number
    hatInAvatars?: AvatarUpdateManyWithoutHatNestedInput
    shirtInAvatars?: AvatarUpdateManyWithoutShirtNestedInput
    backgroundInAvatars?: AvatarUpdateManyWithoutBackgroundNestedInput
    handPropInAvatars?: AvatarUpdateManyWithoutHandPropNestedInput
    userAvatarProps?: UserAvatarPropsUpdateManyWithoutPropNestedInput
  }

  export type AvatarPropUncheckedUpdateWithoutHairInAvatarsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumPropTypeFieldUpdateOperationsInput | $Enums.PropType
    cost?: IntFieldUpdateOperationsInput | number
    hatInAvatars?: AvatarUncheckedUpdateManyWithoutHatNestedInput
    shirtInAvatars?: AvatarUncheckedUpdateManyWithoutShirtNestedInput
    backgroundInAvatars?: AvatarUncheckedUpdateManyWithoutBackgroundNestedInput
    handPropInAvatars?: AvatarUncheckedUpdateManyWithoutHandPropNestedInput
    userAvatarProps?: UserAvatarPropsUncheckedUpdateManyWithoutPropNestedInput
  }

  export type AvatarPropUpsertWithoutShirtInAvatarsInput = {
    update: XOR<AvatarPropUpdateWithoutShirtInAvatarsInput, AvatarPropUncheckedUpdateWithoutShirtInAvatarsInput>
    create: XOR<AvatarPropCreateWithoutShirtInAvatarsInput, AvatarPropUncheckedCreateWithoutShirtInAvatarsInput>
    where?: AvatarPropWhereInput
  }

  export type AvatarPropUpdateToOneWithWhereWithoutShirtInAvatarsInput = {
    where?: AvatarPropWhereInput
    data: XOR<AvatarPropUpdateWithoutShirtInAvatarsInput, AvatarPropUncheckedUpdateWithoutShirtInAvatarsInput>
  }

  export type AvatarPropUpdateWithoutShirtInAvatarsInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumPropTypeFieldUpdateOperationsInput | $Enums.PropType
    cost?: IntFieldUpdateOperationsInput | number
    hatInAvatars?: AvatarUpdateManyWithoutHatNestedInput
    hairInAvatars?: AvatarUpdateManyWithoutHairNestedInput
    backgroundInAvatars?: AvatarUpdateManyWithoutBackgroundNestedInput
    handPropInAvatars?: AvatarUpdateManyWithoutHandPropNestedInput
    userAvatarProps?: UserAvatarPropsUpdateManyWithoutPropNestedInput
  }

  export type AvatarPropUncheckedUpdateWithoutShirtInAvatarsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumPropTypeFieldUpdateOperationsInput | $Enums.PropType
    cost?: IntFieldUpdateOperationsInput | number
    hatInAvatars?: AvatarUncheckedUpdateManyWithoutHatNestedInput
    hairInAvatars?: AvatarUncheckedUpdateManyWithoutHairNestedInput
    backgroundInAvatars?: AvatarUncheckedUpdateManyWithoutBackgroundNestedInput
    handPropInAvatars?: AvatarUncheckedUpdateManyWithoutHandPropNestedInput
    userAvatarProps?: UserAvatarPropsUncheckedUpdateManyWithoutPropNestedInput
  }

  export type AvatarPropUpsertWithoutBackgroundInAvatarsInput = {
    update: XOR<AvatarPropUpdateWithoutBackgroundInAvatarsInput, AvatarPropUncheckedUpdateWithoutBackgroundInAvatarsInput>
    create: XOR<AvatarPropCreateWithoutBackgroundInAvatarsInput, AvatarPropUncheckedCreateWithoutBackgroundInAvatarsInput>
    where?: AvatarPropWhereInput
  }

  export type AvatarPropUpdateToOneWithWhereWithoutBackgroundInAvatarsInput = {
    where?: AvatarPropWhereInput
    data: XOR<AvatarPropUpdateWithoutBackgroundInAvatarsInput, AvatarPropUncheckedUpdateWithoutBackgroundInAvatarsInput>
  }

  export type AvatarPropUpdateWithoutBackgroundInAvatarsInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumPropTypeFieldUpdateOperationsInput | $Enums.PropType
    cost?: IntFieldUpdateOperationsInput | number
    hatInAvatars?: AvatarUpdateManyWithoutHatNestedInput
    hairInAvatars?: AvatarUpdateManyWithoutHairNestedInput
    shirtInAvatars?: AvatarUpdateManyWithoutShirtNestedInput
    handPropInAvatars?: AvatarUpdateManyWithoutHandPropNestedInput
    userAvatarProps?: UserAvatarPropsUpdateManyWithoutPropNestedInput
  }

  export type AvatarPropUncheckedUpdateWithoutBackgroundInAvatarsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumPropTypeFieldUpdateOperationsInput | $Enums.PropType
    cost?: IntFieldUpdateOperationsInput | number
    hatInAvatars?: AvatarUncheckedUpdateManyWithoutHatNestedInput
    hairInAvatars?: AvatarUncheckedUpdateManyWithoutHairNestedInput
    shirtInAvatars?: AvatarUncheckedUpdateManyWithoutShirtNestedInput
    handPropInAvatars?: AvatarUncheckedUpdateManyWithoutHandPropNestedInput
    userAvatarProps?: UserAvatarPropsUncheckedUpdateManyWithoutPropNestedInput
  }

  export type AvatarPropUpsertWithoutHandPropInAvatarsInput = {
    update: XOR<AvatarPropUpdateWithoutHandPropInAvatarsInput, AvatarPropUncheckedUpdateWithoutHandPropInAvatarsInput>
    create: XOR<AvatarPropCreateWithoutHandPropInAvatarsInput, AvatarPropUncheckedCreateWithoutHandPropInAvatarsInput>
    where?: AvatarPropWhereInput
  }

  export type AvatarPropUpdateToOneWithWhereWithoutHandPropInAvatarsInput = {
    where?: AvatarPropWhereInput
    data: XOR<AvatarPropUpdateWithoutHandPropInAvatarsInput, AvatarPropUncheckedUpdateWithoutHandPropInAvatarsInput>
  }

  export type AvatarPropUpdateWithoutHandPropInAvatarsInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumPropTypeFieldUpdateOperationsInput | $Enums.PropType
    cost?: IntFieldUpdateOperationsInput | number
    hatInAvatars?: AvatarUpdateManyWithoutHatNestedInput
    hairInAvatars?: AvatarUpdateManyWithoutHairNestedInput
    shirtInAvatars?: AvatarUpdateManyWithoutShirtNestedInput
    backgroundInAvatars?: AvatarUpdateManyWithoutBackgroundNestedInput
    userAvatarProps?: UserAvatarPropsUpdateManyWithoutPropNestedInput
  }

  export type AvatarPropUncheckedUpdateWithoutHandPropInAvatarsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumPropTypeFieldUpdateOperationsInput | $Enums.PropType
    cost?: IntFieldUpdateOperationsInput | number
    hatInAvatars?: AvatarUncheckedUpdateManyWithoutHatNestedInput
    hairInAvatars?: AvatarUncheckedUpdateManyWithoutHairNestedInput
    shirtInAvatars?: AvatarUncheckedUpdateManyWithoutShirtNestedInput
    backgroundInAvatars?: AvatarUncheckedUpdateManyWithoutBackgroundNestedInput
    userAvatarProps?: UserAvatarPropsUncheckedUpdateManyWithoutPropNestedInput
  }

  export type UserCreateWithoutUserAvatarPropsInput = {
    createdAt?: Date | string
    email: string
    name: string
    password_hash: string
    salt?: string | null
    role?: $Enums.Role | null
    difficulty?: number | null
    totalPoints?: number | null
    household?: HouseholdCreateNestedOneWithoutUsersInput
    assignedChores?: ChoreCreateNestedManyWithoutAssigneeInput
    avatar?: AvatarCreateNestedOneWithoutOwnerInput
  }

  export type UserUncheckedCreateWithoutUserAvatarPropsInput = {
    id?: number
    createdAt?: Date | string
    email: string
    name: string
    password_hash: string
    salt?: string | null
    householdId?: number | null
    role?: $Enums.Role | null
    difficulty?: number | null
    totalPoints?: number | null
    assignedChores?: ChoreUncheckedCreateNestedManyWithoutAssigneeInput
    avatar?: AvatarUncheckedCreateNestedOneWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutUserAvatarPropsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserAvatarPropsInput, UserUncheckedCreateWithoutUserAvatarPropsInput>
  }

  export type AvatarPropCreateWithoutUserAvatarPropsInput = {
    name: string
    type: $Enums.PropType
    cost: number
    hatInAvatars?: AvatarCreateNestedManyWithoutHatInput
    hairInAvatars?: AvatarCreateNestedManyWithoutHairInput
    shirtInAvatars?: AvatarCreateNestedManyWithoutShirtInput
    backgroundInAvatars?: AvatarCreateNestedManyWithoutBackgroundInput
    handPropInAvatars?: AvatarCreateNestedManyWithoutHandPropInput
  }

  export type AvatarPropUncheckedCreateWithoutUserAvatarPropsInput = {
    id?: number
    name: string
    type: $Enums.PropType
    cost: number
    hatInAvatars?: AvatarUncheckedCreateNestedManyWithoutHatInput
    hairInAvatars?: AvatarUncheckedCreateNestedManyWithoutHairInput
    shirtInAvatars?: AvatarUncheckedCreateNestedManyWithoutShirtInput
    backgroundInAvatars?: AvatarUncheckedCreateNestedManyWithoutBackgroundInput
    handPropInAvatars?: AvatarUncheckedCreateNestedManyWithoutHandPropInput
  }

  export type AvatarPropCreateOrConnectWithoutUserAvatarPropsInput = {
    where: AvatarPropWhereUniqueInput
    create: XOR<AvatarPropCreateWithoutUserAvatarPropsInput, AvatarPropUncheckedCreateWithoutUserAvatarPropsInput>
  }

  export type UserUpsertWithoutUserAvatarPropsInput = {
    update: XOR<UserUpdateWithoutUserAvatarPropsInput, UserUncheckedUpdateWithoutUserAvatarPropsInput>
    create: XOR<UserCreateWithoutUserAvatarPropsInput, UserUncheckedCreateWithoutUserAvatarPropsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserAvatarPropsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserAvatarPropsInput, UserUncheckedUpdateWithoutUserAvatarPropsInput>
  }

  export type UserUpdateWithoutUserAvatarPropsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    salt?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    difficulty?: NullableIntFieldUpdateOperationsInput | number | null
    totalPoints?: NullableIntFieldUpdateOperationsInput | number | null
    household?: HouseholdUpdateOneWithoutUsersNestedInput
    assignedChores?: ChoreUpdateManyWithoutAssigneeNestedInput
    avatar?: AvatarUpdateOneWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutUserAvatarPropsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    salt?: NullableStringFieldUpdateOperationsInput | string | null
    householdId?: NullableIntFieldUpdateOperationsInput | number | null
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    difficulty?: NullableIntFieldUpdateOperationsInput | number | null
    totalPoints?: NullableIntFieldUpdateOperationsInput | number | null
    assignedChores?: ChoreUncheckedUpdateManyWithoutAssigneeNestedInput
    avatar?: AvatarUncheckedUpdateOneWithoutOwnerNestedInput
  }

  export type AvatarPropUpsertWithoutUserAvatarPropsInput = {
    update: XOR<AvatarPropUpdateWithoutUserAvatarPropsInput, AvatarPropUncheckedUpdateWithoutUserAvatarPropsInput>
    create: XOR<AvatarPropCreateWithoutUserAvatarPropsInput, AvatarPropUncheckedCreateWithoutUserAvatarPropsInput>
    where?: AvatarPropWhereInput
  }

  export type AvatarPropUpdateToOneWithWhereWithoutUserAvatarPropsInput = {
    where?: AvatarPropWhereInput
    data: XOR<AvatarPropUpdateWithoutUserAvatarPropsInput, AvatarPropUncheckedUpdateWithoutUserAvatarPropsInput>
  }

  export type AvatarPropUpdateWithoutUserAvatarPropsInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumPropTypeFieldUpdateOperationsInput | $Enums.PropType
    cost?: IntFieldUpdateOperationsInput | number
    hatInAvatars?: AvatarUpdateManyWithoutHatNestedInput
    hairInAvatars?: AvatarUpdateManyWithoutHairNestedInput
    shirtInAvatars?: AvatarUpdateManyWithoutShirtNestedInput
    backgroundInAvatars?: AvatarUpdateManyWithoutBackgroundNestedInput
    handPropInAvatars?: AvatarUpdateManyWithoutHandPropNestedInput
  }

  export type AvatarPropUncheckedUpdateWithoutUserAvatarPropsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumPropTypeFieldUpdateOperationsInput | $Enums.PropType
    cost?: IntFieldUpdateOperationsInput | number
    hatInAvatars?: AvatarUncheckedUpdateManyWithoutHatNestedInput
    hairInAvatars?: AvatarUncheckedUpdateManyWithoutHairNestedInput
    shirtInAvatars?: AvatarUncheckedUpdateManyWithoutShirtNestedInput
    backgroundInAvatars?: AvatarUncheckedUpdateManyWithoutBackgroundNestedInput
    handPropInAvatars?: AvatarUncheckedUpdateManyWithoutHandPropNestedInput
  }

  export type AvatarCreateWithoutHatInput = {
    owner: UserCreateNestedOneWithoutAvatarInput
    hair: AvatarPropCreateNestedOneWithoutHairInAvatarsInput
    shirt: AvatarPropCreateNestedOneWithoutShirtInAvatarsInput
    background: AvatarPropCreateNestedOneWithoutBackgroundInAvatarsInput
    handProp: AvatarPropCreateNestedOneWithoutHandPropInAvatarsInput
  }

  export type AvatarUncheckedCreateWithoutHatInput = {
    ownerId: number
    hairId: number
    shirtId: number
    backgroundId: number
    handPropId: number
  }

  export type AvatarCreateOrConnectWithoutHatInput = {
    where: AvatarWhereUniqueInput
    create: XOR<AvatarCreateWithoutHatInput, AvatarUncheckedCreateWithoutHatInput>
  }

  export type AvatarCreateManyHatInputEnvelope = {
    data: AvatarCreateManyHatInput | AvatarCreateManyHatInput[]
    skipDuplicates?: boolean
  }

  export type AvatarCreateWithoutHairInput = {
    owner: UserCreateNestedOneWithoutAvatarInput
    hat: AvatarPropCreateNestedOneWithoutHatInAvatarsInput
    shirt: AvatarPropCreateNestedOneWithoutShirtInAvatarsInput
    background: AvatarPropCreateNestedOneWithoutBackgroundInAvatarsInput
    handProp: AvatarPropCreateNestedOneWithoutHandPropInAvatarsInput
  }

  export type AvatarUncheckedCreateWithoutHairInput = {
    ownerId: number
    hatId: number
    shirtId: number
    backgroundId: number
    handPropId: number
  }

  export type AvatarCreateOrConnectWithoutHairInput = {
    where: AvatarWhereUniqueInput
    create: XOR<AvatarCreateWithoutHairInput, AvatarUncheckedCreateWithoutHairInput>
  }

  export type AvatarCreateManyHairInputEnvelope = {
    data: AvatarCreateManyHairInput | AvatarCreateManyHairInput[]
    skipDuplicates?: boolean
  }

  export type AvatarCreateWithoutShirtInput = {
    owner: UserCreateNestedOneWithoutAvatarInput
    hat: AvatarPropCreateNestedOneWithoutHatInAvatarsInput
    hair: AvatarPropCreateNestedOneWithoutHairInAvatarsInput
    background: AvatarPropCreateNestedOneWithoutBackgroundInAvatarsInput
    handProp: AvatarPropCreateNestedOneWithoutHandPropInAvatarsInput
  }

  export type AvatarUncheckedCreateWithoutShirtInput = {
    ownerId: number
    hatId: number
    hairId: number
    backgroundId: number
    handPropId: number
  }

  export type AvatarCreateOrConnectWithoutShirtInput = {
    where: AvatarWhereUniqueInput
    create: XOR<AvatarCreateWithoutShirtInput, AvatarUncheckedCreateWithoutShirtInput>
  }

  export type AvatarCreateManyShirtInputEnvelope = {
    data: AvatarCreateManyShirtInput | AvatarCreateManyShirtInput[]
    skipDuplicates?: boolean
  }

  export type AvatarCreateWithoutBackgroundInput = {
    owner: UserCreateNestedOneWithoutAvatarInput
    hat: AvatarPropCreateNestedOneWithoutHatInAvatarsInput
    hair: AvatarPropCreateNestedOneWithoutHairInAvatarsInput
    shirt: AvatarPropCreateNestedOneWithoutShirtInAvatarsInput
    handProp: AvatarPropCreateNestedOneWithoutHandPropInAvatarsInput
  }

  export type AvatarUncheckedCreateWithoutBackgroundInput = {
    ownerId: number
    hatId: number
    hairId: number
    shirtId: number
    handPropId: number
  }

  export type AvatarCreateOrConnectWithoutBackgroundInput = {
    where: AvatarWhereUniqueInput
    create: XOR<AvatarCreateWithoutBackgroundInput, AvatarUncheckedCreateWithoutBackgroundInput>
  }

  export type AvatarCreateManyBackgroundInputEnvelope = {
    data: AvatarCreateManyBackgroundInput | AvatarCreateManyBackgroundInput[]
    skipDuplicates?: boolean
  }

  export type AvatarCreateWithoutHandPropInput = {
    owner: UserCreateNestedOneWithoutAvatarInput
    hat: AvatarPropCreateNestedOneWithoutHatInAvatarsInput
    hair: AvatarPropCreateNestedOneWithoutHairInAvatarsInput
    shirt: AvatarPropCreateNestedOneWithoutShirtInAvatarsInput
    background: AvatarPropCreateNestedOneWithoutBackgroundInAvatarsInput
  }

  export type AvatarUncheckedCreateWithoutHandPropInput = {
    ownerId: number
    hatId: number
    hairId: number
    shirtId: number
    backgroundId: number
  }

  export type AvatarCreateOrConnectWithoutHandPropInput = {
    where: AvatarWhereUniqueInput
    create: XOR<AvatarCreateWithoutHandPropInput, AvatarUncheckedCreateWithoutHandPropInput>
  }

  export type AvatarCreateManyHandPropInputEnvelope = {
    data: AvatarCreateManyHandPropInput | AvatarCreateManyHandPropInput[]
    skipDuplicates?: boolean
  }

  export type UserAvatarPropsCreateWithoutPropInput = {
    user: UserCreateNestedOneWithoutUserAvatarPropsInput
  }

  export type UserAvatarPropsUncheckedCreateWithoutPropInput = {
    userId: number
  }

  export type UserAvatarPropsCreateOrConnectWithoutPropInput = {
    where: UserAvatarPropsWhereUniqueInput
    create: XOR<UserAvatarPropsCreateWithoutPropInput, UserAvatarPropsUncheckedCreateWithoutPropInput>
  }

  export type UserAvatarPropsCreateManyPropInputEnvelope = {
    data: UserAvatarPropsCreateManyPropInput | UserAvatarPropsCreateManyPropInput[]
    skipDuplicates?: boolean
  }

  export type AvatarUpsertWithWhereUniqueWithoutHatInput = {
    where: AvatarWhereUniqueInput
    update: XOR<AvatarUpdateWithoutHatInput, AvatarUncheckedUpdateWithoutHatInput>
    create: XOR<AvatarCreateWithoutHatInput, AvatarUncheckedCreateWithoutHatInput>
  }

  export type AvatarUpdateWithWhereUniqueWithoutHatInput = {
    where: AvatarWhereUniqueInput
    data: XOR<AvatarUpdateWithoutHatInput, AvatarUncheckedUpdateWithoutHatInput>
  }

  export type AvatarUpdateManyWithWhereWithoutHatInput = {
    where: AvatarScalarWhereInput
    data: XOR<AvatarUpdateManyMutationInput, AvatarUncheckedUpdateManyWithoutHatInput>
  }

  export type AvatarScalarWhereInput = {
    AND?: AvatarScalarWhereInput | AvatarScalarWhereInput[]
    OR?: AvatarScalarWhereInput[]
    NOT?: AvatarScalarWhereInput | AvatarScalarWhereInput[]
    ownerId?: IntFilter<"Avatar"> | number
    hatId?: IntFilter<"Avatar"> | number
    hairId?: IntFilter<"Avatar"> | number
    shirtId?: IntFilter<"Avatar"> | number
    backgroundId?: IntFilter<"Avatar"> | number
    handPropId?: IntFilter<"Avatar"> | number
  }

  export type AvatarUpsertWithWhereUniqueWithoutHairInput = {
    where: AvatarWhereUniqueInput
    update: XOR<AvatarUpdateWithoutHairInput, AvatarUncheckedUpdateWithoutHairInput>
    create: XOR<AvatarCreateWithoutHairInput, AvatarUncheckedCreateWithoutHairInput>
  }

  export type AvatarUpdateWithWhereUniqueWithoutHairInput = {
    where: AvatarWhereUniqueInput
    data: XOR<AvatarUpdateWithoutHairInput, AvatarUncheckedUpdateWithoutHairInput>
  }

  export type AvatarUpdateManyWithWhereWithoutHairInput = {
    where: AvatarScalarWhereInput
    data: XOR<AvatarUpdateManyMutationInput, AvatarUncheckedUpdateManyWithoutHairInput>
  }

  export type AvatarUpsertWithWhereUniqueWithoutShirtInput = {
    where: AvatarWhereUniqueInput
    update: XOR<AvatarUpdateWithoutShirtInput, AvatarUncheckedUpdateWithoutShirtInput>
    create: XOR<AvatarCreateWithoutShirtInput, AvatarUncheckedCreateWithoutShirtInput>
  }

  export type AvatarUpdateWithWhereUniqueWithoutShirtInput = {
    where: AvatarWhereUniqueInput
    data: XOR<AvatarUpdateWithoutShirtInput, AvatarUncheckedUpdateWithoutShirtInput>
  }

  export type AvatarUpdateManyWithWhereWithoutShirtInput = {
    where: AvatarScalarWhereInput
    data: XOR<AvatarUpdateManyMutationInput, AvatarUncheckedUpdateManyWithoutShirtInput>
  }

  export type AvatarUpsertWithWhereUniqueWithoutBackgroundInput = {
    where: AvatarWhereUniqueInput
    update: XOR<AvatarUpdateWithoutBackgroundInput, AvatarUncheckedUpdateWithoutBackgroundInput>
    create: XOR<AvatarCreateWithoutBackgroundInput, AvatarUncheckedCreateWithoutBackgroundInput>
  }

  export type AvatarUpdateWithWhereUniqueWithoutBackgroundInput = {
    where: AvatarWhereUniqueInput
    data: XOR<AvatarUpdateWithoutBackgroundInput, AvatarUncheckedUpdateWithoutBackgroundInput>
  }

  export type AvatarUpdateManyWithWhereWithoutBackgroundInput = {
    where: AvatarScalarWhereInput
    data: XOR<AvatarUpdateManyMutationInput, AvatarUncheckedUpdateManyWithoutBackgroundInput>
  }

  export type AvatarUpsertWithWhereUniqueWithoutHandPropInput = {
    where: AvatarWhereUniqueInput
    update: XOR<AvatarUpdateWithoutHandPropInput, AvatarUncheckedUpdateWithoutHandPropInput>
    create: XOR<AvatarCreateWithoutHandPropInput, AvatarUncheckedCreateWithoutHandPropInput>
  }

  export type AvatarUpdateWithWhereUniqueWithoutHandPropInput = {
    where: AvatarWhereUniqueInput
    data: XOR<AvatarUpdateWithoutHandPropInput, AvatarUncheckedUpdateWithoutHandPropInput>
  }

  export type AvatarUpdateManyWithWhereWithoutHandPropInput = {
    where: AvatarScalarWhereInput
    data: XOR<AvatarUpdateManyMutationInput, AvatarUncheckedUpdateManyWithoutHandPropInput>
  }

  export type UserAvatarPropsUpsertWithWhereUniqueWithoutPropInput = {
    where: UserAvatarPropsWhereUniqueInput
    update: XOR<UserAvatarPropsUpdateWithoutPropInput, UserAvatarPropsUncheckedUpdateWithoutPropInput>
    create: XOR<UserAvatarPropsCreateWithoutPropInput, UserAvatarPropsUncheckedCreateWithoutPropInput>
  }

  export type UserAvatarPropsUpdateWithWhereUniqueWithoutPropInput = {
    where: UserAvatarPropsWhereUniqueInput
    data: XOR<UserAvatarPropsUpdateWithoutPropInput, UserAvatarPropsUncheckedUpdateWithoutPropInput>
  }

  export type UserAvatarPropsUpdateManyWithWhereWithoutPropInput = {
    where: UserAvatarPropsScalarWhereInput
    data: XOR<UserAvatarPropsUpdateManyMutationInput, UserAvatarPropsUncheckedUpdateManyWithoutPropInput>
  }

  export type ChoreCreateManyAssigneeInput = {
    id?: number
    name: string
    description: string
    difficulty: number
    location: string
    estimatedTime: number
    dueDate: Date | string
    repeat: boolean
    householdId: number
  }

  export type UserAvatarPropsCreateManyUserInput = {
    propId: number
  }

  export type ChoreUpdateWithoutAssigneeInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    estimatedTime?: IntFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    repeat?: BoolFieldUpdateOperationsInput | boolean
    household?: HouseholdUpdateOneRequiredWithoutChoresNestedInput
  }

  export type ChoreUncheckedUpdateWithoutAssigneeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    estimatedTime?: IntFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    repeat?: BoolFieldUpdateOperationsInput | boolean
    householdId?: IntFieldUpdateOperationsInput | number
  }

  export type ChoreUncheckedUpdateManyWithoutAssigneeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    estimatedTime?: IntFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    repeat?: BoolFieldUpdateOperationsInput | boolean
    householdId?: IntFieldUpdateOperationsInput | number
  }

  export type UserAvatarPropsUpdateWithoutUserInput = {
    prop?: AvatarPropUpdateOneRequiredWithoutUserAvatarPropsNestedInput
  }

  export type UserAvatarPropsUncheckedUpdateWithoutUserInput = {
    propId?: IntFieldUpdateOperationsInput | number
  }

  export type UserAvatarPropsUncheckedUpdateManyWithoutUserInput = {
    propId?: IntFieldUpdateOperationsInput | number
  }

  export type UserCreateManyHouseholdInput = {
    id?: number
    createdAt?: Date | string
    email: string
    name: string
    password_hash: string
    salt?: string | null
    role?: $Enums.Role | null
    difficulty?: number | null
    totalPoints?: number | null
  }

  export type ChoreCreateManyHouseholdInput = {
    id?: number
    name: string
    description: string
    difficulty: number
    location: string
    estimatedTime: number
    dueDate: Date | string
    repeat: boolean
    assigneeId?: number | null
  }

  export type UserUpdateWithoutHouseholdInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    salt?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    difficulty?: NullableIntFieldUpdateOperationsInput | number | null
    totalPoints?: NullableIntFieldUpdateOperationsInput | number | null
    assignedChores?: ChoreUpdateManyWithoutAssigneeNestedInput
    avatar?: AvatarUpdateOneWithoutOwnerNestedInput
    userAvatarProps?: UserAvatarPropsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutHouseholdInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    salt?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    difficulty?: NullableIntFieldUpdateOperationsInput | number | null
    totalPoints?: NullableIntFieldUpdateOperationsInput | number | null
    assignedChores?: ChoreUncheckedUpdateManyWithoutAssigneeNestedInput
    avatar?: AvatarUncheckedUpdateOneWithoutOwnerNestedInput
    userAvatarProps?: UserAvatarPropsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutHouseholdInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    salt?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    difficulty?: NullableIntFieldUpdateOperationsInput | number | null
    totalPoints?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ChoreUpdateWithoutHouseholdInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    estimatedTime?: IntFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    repeat?: BoolFieldUpdateOperationsInput | boolean
    assignee?: UserUpdateOneWithoutAssignedChoresNestedInput
  }

  export type ChoreUncheckedUpdateWithoutHouseholdInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    estimatedTime?: IntFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    repeat?: BoolFieldUpdateOperationsInput | boolean
    assigneeId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ChoreUncheckedUpdateManyWithoutHouseholdInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    estimatedTime?: IntFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    repeat?: BoolFieldUpdateOperationsInput | boolean
    assigneeId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AvatarCreateManyHatInput = {
    ownerId: number
    hairId: number
    shirtId: number
    backgroundId: number
    handPropId: number
  }

  export type AvatarCreateManyHairInput = {
    ownerId: number
    hatId: number
    shirtId: number
    backgroundId: number
    handPropId: number
  }

  export type AvatarCreateManyShirtInput = {
    ownerId: number
    hatId: number
    hairId: number
    backgroundId: number
    handPropId: number
  }

  export type AvatarCreateManyBackgroundInput = {
    ownerId: number
    hatId: number
    hairId: number
    shirtId: number
    handPropId: number
  }

  export type AvatarCreateManyHandPropInput = {
    ownerId: number
    hatId: number
    hairId: number
    shirtId: number
    backgroundId: number
  }

  export type UserAvatarPropsCreateManyPropInput = {
    userId: number
  }

  export type AvatarUpdateWithoutHatInput = {
    owner?: UserUpdateOneRequiredWithoutAvatarNestedInput
    hair?: AvatarPropUpdateOneRequiredWithoutHairInAvatarsNestedInput
    shirt?: AvatarPropUpdateOneRequiredWithoutShirtInAvatarsNestedInput
    background?: AvatarPropUpdateOneRequiredWithoutBackgroundInAvatarsNestedInput
    handProp?: AvatarPropUpdateOneRequiredWithoutHandPropInAvatarsNestedInput
  }

  export type AvatarUncheckedUpdateWithoutHatInput = {
    ownerId?: IntFieldUpdateOperationsInput | number
    hairId?: IntFieldUpdateOperationsInput | number
    shirtId?: IntFieldUpdateOperationsInput | number
    backgroundId?: IntFieldUpdateOperationsInput | number
    handPropId?: IntFieldUpdateOperationsInput | number
  }

  export type AvatarUncheckedUpdateManyWithoutHatInput = {
    ownerId?: IntFieldUpdateOperationsInput | number
    hairId?: IntFieldUpdateOperationsInput | number
    shirtId?: IntFieldUpdateOperationsInput | number
    backgroundId?: IntFieldUpdateOperationsInput | number
    handPropId?: IntFieldUpdateOperationsInput | number
  }

  export type AvatarUpdateWithoutHairInput = {
    owner?: UserUpdateOneRequiredWithoutAvatarNestedInput
    hat?: AvatarPropUpdateOneRequiredWithoutHatInAvatarsNestedInput
    shirt?: AvatarPropUpdateOneRequiredWithoutShirtInAvatarsNestedInput
    background?: AvatarPropUpdateOneRequiredWithoutBackgroundInAvatarsNestedInput
    handProp?: AvatarPropUpdateOneRequiredWithoutHandPropInAvatarsNestedInput
  }

  export type AvatarUncheckedUpdateWithoutHairInput = {
    ownerId?: IntFieldUpdateOperationsInput | number
    hatId?: IntFieldUpdateOperationsInput | number
    shirtId?: IntFieldUpdateOperationsInput | number
    backgroundId?: IntFieldUpdateOperationsInput | number
    handPropId?: IntFieldUpdateOperationsInput | number
  }

  export type AvatarUncheckedUpdateManyWithoutHairInput = {
    ownerId?: IntFieldUpdateOperationsInput | number
    hatId?: IntFieldUpdateOperationsInput | number
    shirtId?: IntFieldUpdateOperationsInput | number
    backgroundId?: IntFieldUpdateOperationsInput | number
    handPropId?: IntFieldUpdateOperationsInput | number
  }

  export type AvatarUpdateWithoutShirtInput = {
    owner?: UserUpdateOneRequiredWithoutAvatarNestedInput
    hat?: AvatarPropUpdateOneRequiredWithoutHatInAvatarsNestedInput
    hair?: AvatarPropUpdateOneRequiredWithoutHairInAvatarsNestedInput
    background?: AvatarPropUpdateOneRequiredWithoutBackgroundInAvatarsNestedInput
    handProp?: AvatarPropUpdateOneRequiredWithoutHandPropInAvatarsNestedInput
  }

  export type AvatarUncheckedUpdateWithoutShirtInput = {
    ownerId?: IntFieldUpdateOperationsInput | number
    hatId?: IntFieldUpdateOperationsInput | number
    hairId?: IntFieldUpdateOperationsInput | number
    backgroundId?: IntFieldUpdateOperationsInput | number
    handPropId?: IntFieldUpdateOperationsInput | number
  }

  export type AvatarUncheckedUpdateManyWithoutShirtInput = {
    ownerId?: IntFieldUpdateOperationsInput | number
    hatId?: IntFieldUpdateOperationsInput | number
    hairId?: IntFieldUpdateOperationsInput | number
    backgroundId?: IntFieldUpdateOperationsInput | number
    handPropId?: IntFieldUpdateOperationsInput | number
  }

  export type AvatarUpdateWithoutBackgroundInput = {
    owner?: UserUpdateOneRequiredWithoutAvatarNestedInput
    hat?: AvatarPropUpdateOneRequiredWithoutHatInAvatarsNestedInput
    hair?: AvatarPropUpdateOneRequiredWithoutHairInAvatarsNestedInput
    shirt?: AvatarPropUpdateOneRequiredWithoutShirtInAvatarsNestedInput
    handProp?: AvatarPropUpdateOneRequiredWithoutHandPropInAvatarsNestedInput
  }

  export type AvatarUncheckedUpdateWithoutBackgroundInput = {
    ownerId?: IntFieldUpdateOperationsInput | number
    hatId?: IntFieldUpdateOperationsInput | number
    hairId?: IntFieldUpdateOperationsInput | number
    shirtId?: IntFieldUpdateOperationsInput | number
    handPropId?: IntFieldUpdateOperationsInput | number
  }

  export type AvatarUncheckedUpdateManyWithoutBackgroundInput = {
    ownerId?: IntFieldUpdateOperationsInput | number
    hatId?: IntFieldUpdateOperationsInput | number
    hairId?: IntFieldUpdateOperationsInput | number
    shirtId?: IntFieldUpdateOperationsInput | number
    handPropId?: IntFieldUpdateOperationsInput | number
  }

  export type AvatarUpdateWithoutHandPropInput = {
    owner?: UserUpdateOneRequiredWithoutAvatarNestedInput
    hat?: AvatarPropUpdateOneRequiredWithoutHatInAvatarsNestedInput
    hair?: AvatarPropUpdateOneRequiredWithoutHairInAvatarsNestedInput
    shirt?: AvatarPropUpdateOneRequiredWithoutShirtInAvatarsNestedInput
    background?: AvatarPropUpdateOneRequiredWithoutBackgroundInAvatarsNestedInput
  }

  export type AvatarUncheckedUpdateWithoutHandPropInput = {
    ownerId?: IntFieldUpdateOperationsInput | number
    hatId?: IntFieldUpdateOperationsInput | number
    hairId?: IntFieldUpdateOperationsInput | number
    shirtId?: IntFieldUpdateOperationsInput | number
    backgroundId?: IntFieldUpdateOperationsInput | number
  }

  export type AvatarUncheckedUpdateManyWithoutHandPropInput = {
    ownerId?: IntFieldUpdateOperationsInput | number
    hatId?: IntFieldUpdateOperationsInput | number
    hairId?: IntFieldUpdateOperationsInput | number
    shirtId?: IntFieldUpdateOperationsInput | number
    backgroundId?: IntFieldUpdateOperationsInput | number
  }

  export type UserAvatarPropsUpdateWithoutPropInput = {
    user?: UserUpdateOneRequiredWithoutUserAvatarPropsNestedInput
  }

  export type UserAvatarPropsUncheckedUpdateWithoutPropInput = {
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type UserAvatarPropsUncheckedUpdateManyWithoutPropInput = {
    userId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}