
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Empresa
 * 
 */
export type Empresa = $Result.DefaultSelection<Prisma.$EmpresaPayload>
/**
 * Model Insumo
 * 
 */
export type Insumo = $Result.DefaultSelection<Prisma.$InsumoPayload>
/**
 * Model Produto
 * 
 */
export type Produto = $Result.DefaultSelection<Prisma.$ProdutoPayload>
/**
 * Model ProdutoInsumo
 * 
 */
export type ProdutoInsumo = $Result.DefaultSelection<Prisma.$ProdutoInsumoPayload>
/**
 * Model Cliente
 * 
 */
export type Cliente = $Result.DefaultSelection<Prisma.$ClientePayload>
/**
 * Model Pedido
 * 
 */
export type Pedido = $Result.DefaultSelection<Prisma.$PedidoPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Empresas
 * const empresas = await prisma.empresa.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
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
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Empresas
   * const empresas = await prisma.empresa.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.empresa`: Exposes CRUD operations for the **Empresa** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Empresas
    * const empresas = await prisma.empresa.findMany()
    * ```
    */
  get empresa(): Prisma.EmpresaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.insumo`: Exposes CRUD operations for the **Insumo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Insumos
    * const insumos = await prisma.insumo.findMany()
    * ```
    */
  get insumo(): Prisma.InsumoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.produto`: Exposes CRUD operations for the **Produto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Produtos
    * const produtos = await prisma.produto.findMany()
    * ```
    */
  get produto(): Prisma.ProdutoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.produtoInsumo`: Exposes CRUD operations for the **ProdutoInsumo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProdutoInsumos
    * const produtoInsumos = await prisma.produtoInsumo.findMany()
    * ```
    */
  get produtoInsumo(): Prisma.ProdutoInsumoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cliente`: Exposes CRUD operations for the **Cliente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clientes
    * const clientes = await prisma.cliente.findMany()
    * ```
    */
  get cliente(): Prisma.ClienteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pedido`: Exposes CRUD operations for the **Pedido** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pedidos
    * const pedidos = await prisma.pedido.findMany()
    * ```
    */
  get pedido(): Prisma.PedidoDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.10.0
   * Query Engine version: 0edf323efd1d98336f3f0a68684b56f689b900d3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

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
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
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
    Empresa: 'Empresa',
    Insumo: 'Insumo',
    Produto: 'Produto',
    ProdutoInsumo: 'ProdutoInsumo',
    Cliente: 'Cliente',
    Pedido: 'Pedido'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "empresa" | "insumo" | "produto" | "produtoInsumo" | "cliente" | "pedido"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Empresa: {
        payload: Prisma.$EmpresaPayload<ExtArgs>
        fields: Prisma.EmpresaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmpresaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmpresaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>
          }
          findFirst: {
            args: Prisma.EmpresaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmpresaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>
          }
          findMany: {
            args: Prisma.EmpresaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>[]
          }
          create: {
            args: Prisma.EmpresaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>
          }
          createMany: {
            args: Prisma.EmpresaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmpresaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>[]
          }
          delete: {
            args: Prisma.EmpresaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>
          }
          update: {
            args: Prisma.EmpresaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>
          }
          deleteMany: {
            args: Prisma.EmpresaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmpresaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmpresaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>[]
          }
          upsert: {
            args: Prisma.EmpresaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>
          }
          aggregate: {
            args: Prisma.EmpresaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmpresa>
          }
          groupBy: {
            args: Prisma.EmpresaGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmpresaGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmpresaCountArgs<ExtArgs>
            result: $Utils.Optional<EmpresaCountAggregateOutputType> | number
          }
        }
      }
      Insumo: {
        payload: Prisma.$InsumoPayload<ExtArgs>
        fields: Prisma.InsumoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InsumoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsumoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InsumoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsumoPayload>
          }
          findFirst: {
            args: Prisma.InsumoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsumoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InsumoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsumoPayload>
          }
          findMany: {
            args: Prisma.InsumoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsumoPayload>[]
          }
          create: {
            args: Prisma.InsumoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsumoPayload>
          }
          createMany: {
            args: Prisma.InsumoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InsumoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsumoPayload>[]
          }
          delete: {
            args: Prisma.InsumoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsumoPayload>
          }
          update: {
            args: Prisma.InsumoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsumoPayload>
          }
          deleteMany: {
            args: Prisma.InsumoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InsumoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InsumoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsumoPayload>[]
          }
          upsert: {
            args: Prisma.InsumoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsumoPayload>
          }
          aggregate: {
            args: Prisma.InsumoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInsumo>
          }
          groupBy: {
            args: Prisma.InsumoGroupByArgs<ExtArgs>
            result: $Utils.Optional<InsumoGroupByOutputType>[]
          }
          count: {
            args: Prisma.InsumoCountArgs<ExtArgs>
            result: $Utils.Optional<InsumoCountAggregateOutputType> | number
          }
        }
      }
      Produto: {
        payload: Prisma.$ProdutoPayload<ExtArgs>
        fields: Prisma.ProdutoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProdutoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProdutoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          findFirst: {
            args: Prisma.ProdutoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProdutoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          findMany: {
            args: Prisma.ProdutoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>[]
          }
          create: {
            args: Prisma.ProdutoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          createMany: {
            args: Prisma.ProdutoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProdutoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>[]
          }
          delete: {
            args: Prisma.ProdutoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          update: {
            args: Prisma.ProdutoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          deleteMany: {
            args: Prisma.ProdutoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProdutoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProdutoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>[]
          }
          upsert: {
            args: Prisma.ProdutoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          aggregate: {
            args: Prisma.ProdutoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduto>
          }
          groupBy: {
            args: Prisma.ProdutoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProdutoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProdutoCountArgs<ExtArgs>
            result: $Utils.Optional<ProdutoCountAggregateOutputType> | number
          }
        }
      }
      ProdutoInsumo: {
        payload: Prisma.$ProdutoInsumoPayload<ExtArgs>
        fields: Prisma.ProdutoInsumoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProdutoInsumoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoInsumoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProdutoInsumoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoInsumoPayload>
          }
          findFirst: {
            args: Prisma.ProdutoInsumoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoInsumoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProdutoInsumoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoInsumoPayload>
          }
          findMany: {
            args: Prisma.ProdutoInsumoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoInsumoPayload>[]
          }
          create: {
            args: Prisma.ProdutoInsumoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoInsumoPayload>
          }
          createMany: {
            args: Prisma.ProdutoInsumoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProdutoInsumoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoInsumoPayload>[]
          }
          delete: {
            args: Prisma.ProdutoInsumoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoInsumoPayload>
          }
          update: {
            args: Prisma.ProdutoInsumoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoInsumoPayload>
          }
          deleteMany: {
            args: Prisma.ProdutoInsumoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProdutoInsumoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProdutoInsumoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoInsumoPayload>[]
          }
          upsert: {
            args: Prisma.ProdutoInsumoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoInsumoPayload>
          }
          aggregate: {
            args: Prisma.ProdutoInsumoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProdutoInsumo>
          }
          groupBy: {
            args: Prisma.ProdutoInsumoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProdutoInsumoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProdutoInsumoCountArgs<ExtArgs>
            result: $Utils.Optional<ProdutoInsumoCountAggregateOutputType> | number
          }
        }
      }
      Cliente: {
        payload: Prisma.$ClientePayload<ExtArgs>
        fields: Prisma.ClienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClienteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClienteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findFirst: {
            args: Prisma.ClienteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClienteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findMany: {
            args: Prisma.ClienteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          create: {
            args: Prisma.ClienteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          createMany: {
            args: Prisma.ClienteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClienteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          delete: {
            args: Prisma.ClienteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          update: {
            args: Prisma.ClienteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          deleteMany: {
            args: Prisma.ClienteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClienteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClienteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          upsert: {
            args: Prisma.ClienteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          aggregate: {
            args: Prisma.ClienteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCliente>
          }
          groupBy: {
            args: Prisma.ClienteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClienteCountArgs<ExtArgs>
            result: $Utils.Optional<ClienteCountAggregateOutputType> | number
          }
        }
      }
      Pedido: {
        payload: Prisma.$PedidoPayload<ExtArgs>
        fields: Prisma.PedidoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PedidoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PedidoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          findFirst: {
            args: Prisma.PedidoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PedidoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          findMany: {
            args: Prisma.PedidoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>[]
          }
          create: {
            args: Prisma.PedidoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          createMany: {
            args: Prisma.PedidoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PedidoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>[]
          }
          delete: {
            args: Prisma.PedidoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          update: {
            args: Prisma.PedidoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          deleteMany: {
            args: Prisma.PedidoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PedidoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PedidoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>[]
          }
          upsert: {
            args: Prisma.PedidoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          aggregate: {
            args: Prisma.PedidoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePedido>
          }
          groupBy: {
            args: Prisma.PedidoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PedidoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PedidoCountArgs<ExtArgs>
            result: $Utils.Optional<PedidoCountAggregateOutputType> | number
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
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    empresa?: EmpresaOmit
    insumo?: InsumoOmit
    produto?: ProdutoOmit
    produtoInsumo?: ProdutoInsumoOmit
    cliente?: ClienteOmit
    pedido?: PedidoOmit
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
   * Count Type EmpresaCountOutputType
   */

  export type EmpresaCountOutputType = {
    insumos: number
    produtos: number
    clientes: number
    pedidos: number
  }

  export type EmpresaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    insumos?: boolean | EmpresaCountOutputTypeCountInsumosArgs
    produtos?: boolean | EmpresaCountOutputTypeCountProdutosArgs
    clientes?: boolean | EmpresaCountOutputTypeCountClientesArgs
    pedidos?: boolean | EmpresaCountOutputTypeCountPedidosArgs
  }

  // Custom InputTypes
  /**
   * EmpresaCountOutputType without action
   */
  export type EmpresaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmpresaCountOutputType
     */
    select?: EmpresaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EmpresaCountOutputType without action
   */
  export type EmpresaCountOutputTypeCountInsumosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InsumoWhereInput
  }

  /**
   * EmpresaCountOutputType without action
   */
  export type EmpresaCountOutputTypeCountProdutosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProdutoWhereInput
  }

  /**
   * EmpresaCountOutputType without action
   */
  export type EmpresaCountOutputTypeCountClientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClienteWhereInput
  }

  /**
   * EmpresaCountOutputType without action
   */
  export type EmpresaCountOutputTypeCountPedidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PedidoWhereInput
  }


  /**
   * Count Type InsumoCountOutputType
   */

  export type InsumoCountOutputType = {
    receitas: number
  }

  export type InsumoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receitas?: boolean | InsumoCountOutputTypeCountReceitasArgs
  }

  // Custom InputTypes
  /**
   * InsumoCountOutputType without action
   */
  export type InsumoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InsumoCountOutputType
     */
    select?: InsumoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InsumoCountOutputType without action
   */
  export type InsumoCountOutputTypeCountReceitasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProdutoInsumoWhereInput
  }


  /**
   * Count Type ProdutoCountOutputType
   */

  export type ProdutoCountOutputType = {
    ingredientes: number
  }

  export type ProdutoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ingredientes?: boolean | ProdutoCountOutputTypeCountIngredientesArgs
  }

  // Custom InputTypes
  /**
   * ProdutoCountOutputType without action
   */
  export type ProdutoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdutoCountOutputType
     */
    select?: ProdutoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProdutoCountOutputType without action
   */
  export type ProdutoCountOutputTypeCountIngredientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProdutoInsumoWhereInput
  }


  /**
   * Count Type ClienteCountOutputType
   */

  export type ClienteCountOutputType = {
    pedidos: number
  }

  export type ClienteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedidos?: boolean | ClienteCountOutputTypeCountPedidosArgs
  }

  // Custom InputTypes
  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClienteCountOutputType
     */
    select?: ClienteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeCountPedidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PedidoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Empresa
   */

  export type AggregateEmpresa = {
    _count: EmpresaCountAggregateOutputType | null
    _avg: EmpresaAvgAggregateOutputType | null
    _sum: EmpresaSumAggregateOutputType | null
    _min: EmpresaMinAggregateOutputType | null
    _max: EmpresaMaxAggregateOutputType | null
  }

  export type EmpresaAvgAggregateOutputType = {
    id: number | null
  }

  export type EmpresaSumAggregateOutputType = {
    id: number | null
  }

  export type EmpresaMinAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    senha: string | null
    createdAt: Date | null
  }

  export type EmpresaMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    senha: string | null
    createdAt: Date | null
  }

  export type EmpresaCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    senha: number
    createdAt: number
    _all: number
  }


  export type EmpresaAvgAggregateInputType = {
    id?: true
  }

  export type EmpresaSumAggregateInputType = {
    id?: true
  }

  export type EmpresaMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    createdAt?: true
  }

  export type EmpresaMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    createdAt?: true
  }

  export type EmpresaCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    createdAt?: true
    _all?: true
  }

  export type EmpresaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Empresa to aggregate.
     */
    where?: EmpresaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Empresas to fetch.
     */
    orderBy?: EmpresaOrderByWithRelationInput | EmpresaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmpresaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Empresas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Empresas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Empresas
    **/
    _count?: true | EmpresaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmpresaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmpresaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmpresaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmpresaMaxAggregateInputType
  }

  export type GetEmpresaAggregateType<T extends EmpresaAggregateArgs> = {
        [P in keyof T & keyof AggregateEmpresa]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmpresa[P]>
      : GetScalarType<T[P], AggregateEmpresa[P]>
  }




  export type EmpresaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmpresaWhereInput
    orderBy?: EmpresaOrderByWithAggregationInput | EmpresaOrderByWithAggregationInput[]
    by: EmpresaScalarFieldEnum[] | EmpresaScalarFieldEnum
    having?: EmpresaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmpresaCountAggregateInputType | true
    _avg?: EmpresaAvgAggregateInputType
    _sum?: EmpresaSumAggregateInputType
    _min?: EmpresaMinAggregateInputType
    _max?: EmpresaMaxAggregateInputType
  }

  export type EmpresaGroupByOutputType = {
    id: number
    nome: string
    email: string
    senha: string
    createdAt: Date
    _count: EmpresaCountAggregateOutputType | null
    _avg: EmpresaAvgAggregateOutputType | null
    _sum: EmpresaSumAggregateOutputType | null
    _min: EmpresaMinAggregateOutputType | null
    _max: EmpresaMaxAggregateOutputType | null
  }

  type GetEmpresaGroupByPayload<T extends EmpresaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmpresaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmpresaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmpresaGroupByOutputType[P]>
            : GetScalarType<T[P], EmpresaGroupByOutputType[P]>
        }
      >
    >


  export type EmpresaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    createdAt?: boolean
    insumos?: boolean | Empresa$insumosArgs<ExtArgs>
    produtos?: boolean | Empresa$produtosArgs<ExtArgs>
    clientes?: boolean | Empresa$clientesArgs<ExtArgs>
    pedidos?: boolean | Empresa$pedidosArgs<ExtArgs>
    _count?: boolean | EmpresaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["empresa"]>

  export type EmpresaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["empresa"]>

  export type EmpresaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["empresa"]>

  export type EmpresaSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    createdAt?: boolean
  }

  export type EmpresaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "email" | "senha" | "createdAt", ExtArgs["result"]["empresa"]>
  export type EmpresaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    insumos?: boolean | Empresa$insumosArgs<ExtArgs>
    produtos?: boolean | Empresa$produtosArgs<ExtArgs>
    clientes?: boolean | Empresa$clientesArgs<ExtArgs>
    pedidos?: boolean | Empresa$pedidosArgs<ExtArgs>
    _count?: boolean | EmpresaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EmpresaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EmpresaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EmpresaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Empresa"
    objects: {
      insumos: Prisma.$InsumoPayload<ExtArgs>[]
      produtos: Prisma.$ProdutoPayload<ExtArgs>[]
      clientes: Prisma.$ClientePayload<ExtArgs>[]
      pedidos: Prisma.$PedidoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      email: string
      senha: string
      createdAt: Date
    }, ExtArgs["result"]["empresa"]>
    composites: {}
  }

  type EmpresaGetPayload<S extends boolean | null | undefined | EmpresaDefaultArgs> = $Result.GetResult<Prisma.$EmpresaPayload, S>

  type EmpresaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmpresaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmpresaCountAggregateInputType | true
    }

  export interface EmpresaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Empresa'], meta: { name: 'Empresa' } }
    /**
     * Find zero or one Empresa that matches the filter.
     * @param {EmpresaFindUniqueArgs} args - Arguments to find a Empresa
     * @example
     * // Get one Empresa
     * const empresa = await prisma.empresa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmpresaFindUniqueArgs>(args: SelectSubset<T, EmpresaFindUniqueArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Empresa that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmpresaFindUniqueOrThrowArgs} args - Arguments to find a Empresa
     * @example
     * // Get one Empresa
     * const empresa = await prisma.empresa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmpresaFindUniqueOrThrowArgs>(args: SelectSubset<T, EmpresaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Empresa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaFindFirstArgs} args - Arguments to find a Empresa
     * @example
     * // Get one Empresa
     * const empresa = await prisma.empresa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmpresaFindFirstArgs>(args?: SelectSubset<T, EmpresaFindFirstArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Empresa that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaFindFirstOrThrowArgs} args - Arguments to find a Empresa
     * @example
     * // Get one Empresa
     * const empresa = await prisma.empresa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmpresaFindFirstOrThrowArgs>(args?: SelectSubset<T, EmpresaFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Empresas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Empresas
     * const empresas = await prisma.empresa.findMany()
     * 
     * // Get first 10 Empresas
     * const empresas = await prisma.empresa.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const empresaWithIdOnly = await prisma.empresa.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmpresaFindManyArgs>(args?: SelectSubset<T, EmpresaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Empresa.
     * @param {EmpresaCreateArgs} args - Arguments to create a Empresa.
     * @example
     * // Create one Empresa
     * const Empresa = await prisma.empresa.create({
     *   data: {
     *     // ... data to create a Empresa
     *   }
     * })
     * 
     */
    create<T extends EmpresaCreateArgs>(args: SelectSubset<T, EmpresaCreateArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Empresas.
     * @param {EmpresaCreateManyArgs} args - Arguments to create many Empresas.
     * @example
     * // Create many Empresas
     * const empresa = await prisma.empresa.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmpresaCreateManyArgs>(args?: SelectSubset<T, EmpresaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Empresas and returns the data saved in the database.
     * @param {EmpresaCreateManyAndReturnArgs} args - Arguments to create many Empresas.
     * @example
     * // Create many Empresas
     * const empresa = await prisma.empresa.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Empresas and only return the `id`
     * const empresaWithIdOnly = await prisma.empresa.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmpresaCreateManyAndReturnArgs>(args?: SelectSubset<T, EmpresaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Empresa.
     * @param {EmpresaDeleteArgs} args - Arguments to delete one Empresa.
     * @example
     * // Delete one Empresa
     * const Empresa = await prisma.empresa.delete({
     *   where: {
     *     // ... filter to delete one Empresa
     *   }
     * })
     * 
     */
    delete<T extends EmpresaDeleteArgs>(args: SelectSubset<T, EmpresaDeleteArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Empresa.
     * @param {EmpresaUpdateArgs} args - Arguments to update one Empresa.
     * @example
     * // Update one Empresa
     * const empresa = await prisma.empresa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmpresaUpdateArgs>(args: SelectSubset<T, EmpresaUpdateArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Empresas.
     * @param {EmpresaDeleteManyArgs} args - Arguments to filter Empresas to delete.
     * @example
     * // Delete a few Empresas
     * const { count } = await prisma.empresa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmpresaDeleteManyArgs>(args?: SelectSubset<T, EmpresaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Empresas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Empresas
     * const empresa = await prisma.empresa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmpresaUpdateManyArgs>(args: SelectSubset<T, EmpresaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Empresas and returns the data updated in the database.
     * @param {EmpresaUpdateManyAndReturnArgs} args - Arguments to update many Empresas.
     * @example
     * // Update many Empresas
     * const empresa = await prisma.empresa.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Empresas and only return the `id`
     * const empresaWithIdOnly = await prisma.empresa.updateManyAndReturn({
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
    updateManyAndReturn<T extends EmpresaUpdateManyAndReturnArgs>(args: SelectSubset<T, EmpresaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Empresa.
     * @param {EmpresaUpsertArgs} args - Arguments to update or create a Empresa.
     * @example
     * // Update or create a Empresa
     * const empresa = await prisma.empresa.upsert({
     *   create: {
     *     // ... data to create a Empresa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Empresa we want to update
     *   }
     * })
     */
    upsert<T extends EmpresaUpsertArgs>(args: SelectSubset<T, EmpresaUpsertArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Empresas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaCountArgs} args - Arguments to filter Empresas to count.
     * @example
     * // Count the number of Empresas
     * const count = await prisma.empresa.count({
     *   where: {
     *     // ... the filter for the Empresas we want to count
     *   }
     * })
    **/
    count<T extends EmpresaCountArgs>(
      args?: Subset<T, EmpresaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmpresaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Empresa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmpresaAggregateArgs>(args: Subset<T, EmpresaAggregateArgs>): Prisma.PrismaPromise<GetEmpresaAggregateType<T>>

    /**
     * Group by Empresa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaGroupByArgs} args - Group by arguments.
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
      T extends EmpresaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmpresaGroupByArgs['orderBy'] }
        : { orderBy?: EmpresaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EmpresaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmpresaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Empresa model
   */
  readonly fields: EmpresaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Empresa.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmpresaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    insumos<T extends Empresa$insumosArgs<ExtArgs> = {}>(args?: Subset<T, Empresa$insumosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InsumoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    produtos<T extends Empresa$produtosArgs<ExtArgs> = {}>(args?: Subset<T, Empresa$produtosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    clientes<T extends Empresa$clientesArgs<ExtArgs> = {}>(args?: Subset<T, Empresa$clientesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pedidos<T extends Empresa$pedidosArgs<ExtArgs> = {}>(args?: Subset<T, Empresa$pedidosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Empresa model
   */
  interface EmpresaFieldRefs {
    readonly id: FieldRef<"Empresa", 'Int'>
    readonly nome: FieldRef<"Empresa", 'String'>
    readonly email: FieldRef<"Empresa", 'String'>
    readonly senha: FieldRef<"Empresa", 'String'>
    readonly createdAt: FieldRef<"Empresa", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Empresa findUnique
   */
  export type EmpresaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * Filter, which Empresa to fetch.
     */
    where: EmpresaWhereUniqueInput
  }

  /**
   * Empresa findUniqueOrThrow
   */
  export type EmpresaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * Filter, which Empresa to fetch.
     */
    where: EmpresaWhereUniqueInput
  }

  /**
   * Empresa findFirst
   */
  export type EmpresaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * Filter, which Empresa to fetch.
     */
    where?: EmpresaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Empresas to fetch.
     */
    orderBy?: EmpresaOrderByWithRelationInput | EmpresaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Empresas.
     */
    cursor?: EmpresaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Empresas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Empresas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Empresas.
     */
    distinct?: EmpresaScalarFieldEnum | EmpresaScalarFieldEnum[]
  }

  /**
   * Empresa findFirstOrThrow
   */
  export type EmpresaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * Filter, which Empresa to fetch.
     */
    where?: EmpresaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Empresas to fetch.
     */
    orderBy?: EmpresaOrderByWithRelationInput | EmpresaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Empresas.
     */
    cursor?: EmpresaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Empresas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Empresas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Empresas.
     */
    distinct?: EmpresaScalarFieldEnum | EmpresaScalarFieldEnum[]
  }

  /**
   * Empresa findMany
   */
  export type EmpresaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * Filter, which Empresas to fetch.
     */
    where?: EmpresaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Empresas to fetch.
     */
    orderBy?: EmpresaOrderByWithRelationInput | EmpresaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Empresas.
     */
    cursor?: EmpresaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Empresas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Empresas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Empresas.
     */
    distinct?: EmpresaScalarFieldEnum | EmpresaScalarFieldEnum[]
  }

  /**
   * Empresa create
   */
  export type EmpresaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * The data needed to create a Empresa.
     */
    data: XOR<EmpresaCreateInput, EmpresaUncheckedCreateInput>
  }

  /**
   * Empresa createMany
   */
  export type EmpresaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Empresas.
     */
    data: EmpresaCreateManyInput | EmpresaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Empresa createManyAndReturn
   */
  export type EmpresaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * The data used to create many Empresas.
     */
    data: EmpresaCreateManyInput | EmpresaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Empresa update
   */
  export type EmpresaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * The data needed to update a Empresa.
     */
    data: XOR<EmpresaUpdateInput, EmpresaUncheckedUpdateInput>
    /**
     * Choose, which Empresa to update.
     */
    where: EmpresaWhereUniqueInput
  }

  /**
   * Empresa updateMany
   */
  export type EmpresaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Empresas.
     */
    data: XOR<EmpresaUpdateManyMutationInput, EmpresaUncheckedUpdateManyInput>
    /**
     * Filter which Empresas to update
     */
    where?: EmpresaWhereInput
    /**
     * Limit how many Empresas to update.
     */
    limit?: number
  }

  /**
   * Empresa updateManyAndReturn
   */
  export type EmpresaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * The data used to update Empresas.
     */
    data: XOR<EmpresaUpdateManyMutationInput, EmpresaUncheckedUpdateManyInput>
    /**
     * Filter which Empresas to update
     */
    where?: EmpresaWhereInput
    /**
     * Limit how many Empresas to update.
     */
    limit?: number
  }

  /**
   * Empresa upsert
   */
  export type EmpresaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * The filter to search for the Empresa to update in case it exists.
     */
    where: EmpresaWhereUniqueInput
    /**
     * In case the Empresa found by the `where` argument doesn't exist, create a new Empresa with this data.
     */
    create: XOR<EmpresaCreateInput, EmpresaUncheckedCreateInput>
    /**
     * In case the Empresa was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmpresaUpdateInput, EmpresaUncheckedUpdateInput>
  }

  /**
   * Empresa delete
   */
  export type EmpresaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * Filter which Empresa to delete.
     */
    where: EmpresaWhereUniqueInput
  }

  /**
   * Empresa deleteMany
   */
  export type EmpresaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Empresas to delete
     */
    where?: EmpresaWhereInput
    /**
     * Limit how many Empresas to delete.
     */
    limit?: number
  }

  /**
   * Empresa.insumos
   */
  export type Empresa$insumosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insumo
     */
    select?: InsumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insumo
     */
    omit?: InsumoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsumoInclude<ExtArgs> | null
    where?: InsumoWhereInput
    orderBy?: InsumoOrderByWithRelationInput | InsumoOrderByWithRelationInput[]
    cursor?: InsumoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InsumoScalarFieldEnum | InsumoScalarFieldEnum[]
  }

  /**
   * Empresa.produtos
   */
  export type Empresa$produtosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    where?: ProdutoWhereInput
    orderBy?: ProdutoOrderByWithRelationInput | ProdutoOrderByWithRelationInput[]
    cursor?: ProdutoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProdutoScalarFieldEnum | ProdutoScalarFieldEnum[]
  }

  /**
   * Empresa.clientes
   */
  export type Empresa$clientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    where?: ClienteWhereInput
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    cursor?: ClienteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Empresa.pedidos
   */
  export type Empresa$pedidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    where?: PedidoWhereInput
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    cursor?: PedidoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Empresa without action
   */
  export type EmpresaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
  }


  /**
   * Model Insumo
   */

  export type AggregateInsumo = {
    _count: InsumoCountAggregateOutputType | null
    _avg: InsumoAvgAggregateOutputType | null
    _sum: InsumoSumAggregateOutputType | null
    _min: InsumoMinAggregateOutputType | null
    _max: InsumoMaxAggregateOutputType | null
  }

  export type InsumoAvgAggregateOutputType = {
    id: number | null
    empresaId: number | null
    quantidadeAtual: number | null
    estoqueMinimo: number | null
  }

  export type InsumoSumAggregateOutputType = {
    id: number | null
    empresaId: number | null
    quantidadeAtual: number | null
    estoqueMinimo: number | null
  }

  export type InsumoMinAggregateOutputType = {
    id: number | null
    empresaId: number | null
    nome: string | null
    unidadeMedida: string | null
    quantidadeAtual: number | null
    estoqueMinimo: number | null
  }

  export type InsumoMaxAggregateOutputType = {
    id: number | null
    empresaId: number | null
    nome: string | null
    unidadeMedida: string | null
    quantidadeAtual: number | null
    estoqueMinimo: number | null
  }

  export type InsumoCountAggregateOutputType = {
    id: number
    empresaId: number
    nome: number
    unidadeMedida: number
    quantidadeAtual: number
    estoqueMinimo: number
    _all: number
  }


  export type InsumoAvgAggregateInputType = {
    id?: true
    empresaId?: true
    quantidadeAtual?: true
    estoqueMinimo?: true
  }

  export type InsumoSumAggregateInputType = {
    id?: true
    empresaId?: true
    quantidadeAtual?: true
    estoqueMinimo?: true
  }

  export type InsumoMinAggregateInputType = {
    id?: true
    empresaId?: true
    nome?: true
    unidadeMedida?: true
    quantidadeAtual?: true
    estoqueMinimo?: true
  }

  export type InsumoMaxAggregateInputType = {
    id?: true
    empresaId?: true
    nome?: true
    unidadeMedida?: true
    quantidadeAtual?: true
    estoqueMinimo?: true
  }

  export type InsumoCountAggregateInputType = {
    id?: true
    empresaId?: true
    nome?: true
    unidadeMedida?: true
    quantidadeAtual?: true
    estoqueMinimo?: true
    _all?: true
  }

  export type InsumoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Insumo to aggregate.
     */
    where?: InsumoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Insumos to fetch.
     */
    orderBy?: InsumoOrderByWithRelationInput | InsumoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InsumoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Insumos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Insumos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Insumos
    **/
    _count?: true | InsumoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InsumoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InsumoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InsumoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InsumoMaxAggregateInputType
  }

  export type GetInsumoAggregateType<T extends InsumoAggregateArgs> = {
        [P in keyof T & keyof AggregateInsumo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInsumo[P]>
      : GetScalarType<T[P], AggregateInsumo[P]>
  }




  export type InsumoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InsumoWhereInput
    orderBy?: InsumoOrderByWithAggregationInput | InsumoOrderByWithAggregationInput[]
    by: InsumoScalarFieldEnum[] | InsumoScalarFieldEnum
    having?: InsumoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InsumoCountAggregateInputType | true
    _avg?: InsumoAvgAggregateInputType
    _sum?: InsumoSumAggregateInputType
    _min?: InsumoMinAggregateInputType
    _max?: InsumoMaxAggregateInputType
  }

  export type InsumoGroupByOutputType = {
    id: number
    empresaId: number
    nome: string
    unidadeMedida: string
    quantidadeAtual: number
    estoqueMinimo: number
    _count: InsumoCountAggregateOutputType | null
    _avg: InsumoAvgAggregateOutputType | null
    _sum: InsumoSumAggregateOutputType | null
    _min: InsumoMinAggregateOutputType | null
    _max: InsumoMaxAggregateOutputType | null
  }

  type GetInsumoGroupByPayload<T extends InsumoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InsumoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InsumoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InsumoGroupByOutputType[P]>
            : GetScalarType<T[P], InsumoGroupByOutputType[P]>
        }
      >
    >


  export type InsumoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    empresaId?: boolean
    nome?: boolean
    unidadeMedida?: boolean
    quantidadeAtual?: boolean
    estoqueMinimo?: boolean
    empresa?: boolean | EmpresaDefaultArgs<ExtArgs>
    receitas?: boolean | Insumo$receitasArgs<ExtArgs>
    _count?: boolean | InsumoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["insumo"]>

  export type InsumoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    empresaId?: boolean
    nome?: boolean
    unidadeMedida?: boolean
    quantidadeAtual?: boolean
    estoqueMinimo?: boolean
    empresa?: boolean | EmpresaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["insumo"]>

  export type InsumoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    empresaId?: boolean
    nome?: boolean
    unidadeMedida?: boolean
    quantidadeAtual?: boolean
    estoqueMinimo?: boolean
    empresa?: boolean | EmpresaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["insumo"]>

  export type InsumoSelectScalar = {
    id?: boolean
    empresaId?: boolean
    nome?: boolean
    unidadeMedida?: boolean
    quantidadeAtual?: boolean
    estoqueMinimo?: boolean
  }

  export type InsumoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "empresaId" | "nome" | "unidadeMedida" | "quantidadeAtual" | "estoqueMinimo", ExtArgs["result"]["insumo"]>
  export type InsumoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empresa?: boolean | EmpresaDefaultArgs<ExtArgs>
    receitas?: boolean | Insumo$receitasArgs<ExtArgs>
    _count?: boolean | InsumoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InsumoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empresa?: boolean | EmpresaDefaultArgs<ExtArgs>
  }
  export type InsumoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empresa?: boolean | EmpresaDefaultArgs<ExtArgs>
  }

  export type $InsumoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Insumo"
    objects: {
      empresa: Prisma.$EmpresaPayload<ExtArgs>
      receitas: Prisma.$ProdutoInsumoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      empresaId: number
      nome: string
      unidadeMedida: string
      quantidadeAtual: number
      estoqueMinimo: number
    }, ExtArgs["result"]["insumo"]>
    composites: {}
  }

  type InsumoGetPayload<S extends boolean | null | undefined | InsumoDefaultArgs> = $Result.GetResult<Prisma.$InsumoPayload, S>

  type InsumoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InsumoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InsumoCountAggregateInputType | true
    }

  export interface InsumoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Insumo'], meta: { name: 'Insumo' } }
    /**
     * Find zero or one Insumo that matches the filter.
     * @param {InsumoFindUniqueArgs} args - Arguments to find a Insumo
     * @example
     * // Get one Insumo
     * const insumo = await prisma.insumo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InsumoFindUniqueArgs>(args: SelectSubset<T, InsumoFindUniqueArgs<ExtArgs>>): Prisma__InsumoClient<$Result.GetResult<Prisma.$InsumoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Insumo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InsumoFindUniqueOrThrowArgs} args - Arguments to find a Insumo
     * @example
     * // Get one Insumo
     * const insumo = await prisma.insumo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InsumoFindUniqueOrThrowArgs>(args: SelectSubset<T, InsumoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InsumoClient<$Result.GetResult<Prisma.$InsumoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Insumo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsumoFindFirstArgs} args - Arguments to find a Insumo
     * @example
     * // Get one Insumo
     * const insumo = await prisma.insumo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InsumoFindFirstArgs>(args?: SelectSubset<T, InsumoFindFirstArgs<ExtArgs>>): Prisma__InsumoClient<$Result.GetResult<Prisma.$InsumoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Insumo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsumoFindFirstOrThrowArgs} args - Arguments to find a Insumo
     * @example
     * // Get one Insumo
     * const insumo = await prisma.insumo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InsumoFindFirstOrThrowArgs>(args?: SelectSubset<T, InsumoFindFirstOrThrowArgs<ExtArgs>>): Prisma__InsumoClient<$Result.GetResult<Prisma.$InsumoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Insumos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsumoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Insumos
     * const insumos = await prisma.insumo.findMany()
     * 
     * // Get first 10 Insumos
     * const insumos = await prisma.insumo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const insumoWithIdOnly = await prisma.insumo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InsumoFindManyArgs>(args?: SelectSubset<T, InsumoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InsumoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Insumo.
     * @param {InsumoCreateArgs} args - Arguments to create a Insumo.
     * @example
     * // Create one Insumo
     * const Insumo = await prisma.insumo.create({
     *   data: {
     *     // ... data to create a Insumo
     *   }
     * })
     * 
     */
    create<T extends InsumoCreateArgs>(args: SelectSubset<T, InsumoCreateArgs<ExtArgs>>): Prisma__InsumoClient<$Result.GetResult<Prisma.$InsumoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Insumos.
     * @param {InsumoCreateManyArgs} args - Arguments to create many Insumos.
     * @example
     * // Create many Insumos
     * const insumo = await prisma.insumo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InsumoCreateManyArgs>(args?: SelectSubset<T, InsumoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Insumos and returns the data saved in the database.
     * @param {InsumoCreateManyAndReturnArgs} args - Arguments to create many Insumos.
     * @example
     * // Create many Insumos
     * const insumo = await prisma.insumo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Insumos and only return the `id`
     * const insumoWithIdOnly = await prisma.insumo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InsumoCreateManyAndReturnArgs>(args?: SelectSubset<T, InsumoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InsumoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Insumo.
     * @param {InsumoDeleteArgs} args - Arguments to delete one Insumo.
     * @example
     * // Delete one Insumo
     * const Insumo = await prisma.insumo.delete({
     *   where: {
     *     // ... filter to delete one Insumo
     *   }
     * })
     * 
     */
    delete<T extends InsumoDeleteArgs>(args: SelectSubset<T, InsumoDeleteArgs<ExtArgs>>): Prisma__InsumoClient<$Result.GetResult<Prisma.$InsumoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Insumo.
     * @param {InsumoUpdateArgs} args - Arguments to update one Insumo.
     * @example
     * // Update one Insumo
     * const insumo = await prisma.insumo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InsumoUpdateArgs>(args: SelectSubset<T, InsumoUpdateArgs<ExtArgs>>): Prisma__InsumoClient<$Result.GetResult<Prisma.$InsumoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Insumos.
     * @param {InsumoDeleteManyArgs} args - Arguments to filter Insumos to delete.
     * @example
     * // Delete a few Insumos
     * const { count } = await prisma.insumo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InsumoDeleteManyArgs>(args?: SelectSubset<T, InsumoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Insumos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsumoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Insumos
     * const insumo = await prisma.insumo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InsumoUpdateManyArgs>(args: SelectSubset<T, InsumoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Insumos and returns the data updated in the database.
     * @param {InsumoUpdateManyAndReturnArgs} args - Arguments to update many Insumos.
     * @example
     * // Update many Insumos
     * const insumo = await prisma.insumo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Insumos and only return the `id`
     * const insumoWithIdOnly = await prisma.insumo.updateManyAndReturn({
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
    updateManyAndReturn<T extends InsumoUpdateManyAndReturnArgs>(args: SelectSubset<T, InsumoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InsumoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Insumo.
     * @param {InsumoUpsertArgs} args - Arguments to update or create a Insumo.
     * @example
     * // Update or create a Insumo
     * const insumo = await prisma.insumo.upsert({
     *   create: {
     *     // ... data to create a Insumo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Insumo we want to update
     *   }
     * })
     */
    upsert<T extends InsumoUpsertArgs>(args: SelectSubset<T, InsumoUpsertArgs<ExtArgs>>): Prisma__InsumoClient<$Result.GetResult<Prisma.$InsumoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Insumos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsumoCountArgs} args - Arguments to filter Insumos to count.
     * @example
     * // Count the number of Insumos
     * const count = await prisma.insumo.count({
     *   where: {
     *     // ... the filter for the Insumos we want to count
     *   }
     * })
    **/
    count<T extends InsumoCountArgs>(
      args?: Subset<T, InsumoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InsumoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Insumo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsumoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InsumoAggregateArgs>(args: Subset<T, InsumoAggregateArgs>): Prisma.PrismaPromise<GetInsumoAggregateType<T>>

    /**
     * Group by Insumo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsumoGroupByArgs} args - Group by arguments.
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
      T extends InsumoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InsumoGroupByArgs['orderBy'] }
        : { orderBy?: InsumoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InsumoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInsumoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Insumo model
   */
  readonly fields: InsumoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Insumo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InsumoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    empresa<T extends EmpresaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmpresaDefaultArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    receitas<T extends Insumo$receitasArgs<ExtArgs> = {}>(args?: Subset<T, Insumo$receitasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdutoInsumoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Insumo model
   */
  interface InsumoFieldRefs {
    readonly id: FieldRef<"Insumo", 'Int'>
    readonly empresaId: FieldRef<"Insumo", 'Int'>
    readonly nome: FieldRef<"Insumo", 'String'>
    readonly unidadeMedida: FieldRef<"Insumo", 'String'>
    readonly quantidadeAtual: FieldRef<"Insumo", 'Float'>
    readonly estoqueMinimo: FieldRef<"Insumo", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Insumo findUnique
   */
  export type InsumoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insumo
     */
    select?: InsumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insumo
     */
    omit?: InsumoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsumoInclude<ExtArgs> | null
    /**
     * Filter, which Insumo to fetch.
     */
    where: InsumoWhereUniqueInput
  }

  /**
   * Insumo findUniqueOrThrow
   */
  export type InsumoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insumo
     */
    select?: InsumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insumo
     */
    omit?: InsumoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsumoInclude<ExtArgs> | null
    /**
     * Filter, which Insumo to fetch.
     */
    where: InsumoWhereUniqueInput
  }

  /**
   * Insumo findFirst
   */
  export type InsumoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insumo
     */
    select?: InsumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insumo
     */
    omit?: InsumoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsumoInclude<ExtArgs> | null
    /**
     * Filter, which Insumo to fetch.
     */
    where?: InsumoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Insumos to fetch.
     */
    orderBy?: InsumoOrderByWithRelationInput | InsumoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Insumos.
     */
    cursor?: InsumoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Insumos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Insumos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Insumos.
     */
    distinct?: InsumoScalarFieldEnum | InsumoScalarFieldEnum[]
  }

  /**
   * Insumo findFirstOrThrow
   */
  export type InsumoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insumo
     */
    select?: InsumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insumo
     */
    omit?: InsumoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsumoInclude<ExtArgs> | null
    /**
     * Filter, which Insumo to fetch.
     */
    where?: InsumoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Insumos to fetch.
     */
    orderBy?: InsumoOrderByWithRelationInput | InsumoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Insumos.
     */
    cursor?: InsumoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Insumos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Insumos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Insumos.
     */
    distinct?: InsumoScalarFieldEnum | InsumoScalarFieldEnum[]
  }

  /**
   * Insumo findMany
   */
  export type InsumoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insumo
     */
    select?: InsumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insumo
     */
    omit?: InsumoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsumoInclude<ExtArgs> | null
    /**
     * Filter, which Insumos to fetch.
     */
    where?: InsumoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Insumos to fetch.
     */
    orderBy?: InsumoOrderByWithRelationInput | InsumoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Insumos.
     */
    cursor?: InsumoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Insumos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Insumos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Insumos.
     */
    distinct?: InsumoScalarFieldEnum | InsumoScalarFieldEnum[]
  }

  /**
   * Insumo create
   */
  export type InsumoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insumo
     */
    select?: InsumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insumo
     */
    omit?: InsumoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsumoInclude<ExtArgs> | null
    /**
     * The data needed to create a Insumo.
     */
    data: XOR<InsumoCreateInput, InsumoUncheckedCreateInput>
  }

  /**
   * Insumo createMany
   */
  export type InsumoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Insumos.
     */
    data: InsumoCreateManyInput | InsumoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Insumo createManyAndReturn
   */
  export type InsumoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insumo
     */
    select?: InsumoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Insumo
     */
    omit?: InsumoOmit<ExtArgs> | null
    /**
     * The data used to create many Insumos.
     */
    data: InsumoCreateManyInput | InsumoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsumoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Insumo update
   */
  export type InsumoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insumo
     */
    select?: InsumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insumo
     */
    omit?: InsumoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsumoInclude<ExtArgs> | null
    /**
     * The data needed to update a Insumo.
     */
    data: XOR<InsumoUpdateInput, InsumoUncheckedUpdateInput>
    /**
     * Choose, which Insumo to update.
     */
    where: InsumoWhereUniqueInput
  }

  /**
   * Insumo updateMany
   */
  export type InsumoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Insumos.
     */
    data: XOR<InsumoUpdateManyMutationInput, InsumoUncheckedUpdateManyInput>
    /**
     * Filter which Insumos to update
     */
    where?: InsumoWhereInput
    /**
     * Limit how many Insumos to update.
     */
    limit?: number
  }

  /**
   * Insumo updateManyAndReturn
   */
  export type InsumoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insumo
     */
    select?: InsumoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Insumo
     */
    omit?: InsumoOmit<ExtArgs> | null
    /**
     * The data used to update Insumos.
     */
    data: XOR<InsumoUpdateManyMutationInput, InsumoUncheckedUpdateManyInput>
    /**
     * Filter which Insumos to update
     */
    where?: InsumoWhereInput
    /**
     * Limit how many Insumos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsumoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Insumo upsert
   */
  export type InsumoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insumo
     */
    select?: InsumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insumo
     */
    omit?: InsumoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsumoInclude<ExtArgs> | null
    /**
     * The filter to search for the Insumo to update in case it exists.
     */
    where: InsumoWhereUniqueInput
    /**
     * In case the Insumo found by the `where` argument doesn't exist, create a new Insumo with this data.
     */
    create: XOR<InsumoCreateInput, InsumoUncheckedCreateInput>
    /**
     * In case the Insumo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InsumoUpdateInput, InsumoUncheckedUpdateInput>
  }

  /**
   * Insumo delete
   */
  export type InsumoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insumo
     */
    select?: InsumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insumo
     */
    omit?: InsumoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsumoInclude<ExtArgs> | null
    /**
     * Filter which Insumo to delete.
     */
    where: InsumoWhereUniqueInput
  }

  /**
   * Insumo deleteMany
   */
  export type InsumoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Insumos to delete
     */
    where?: InsumoWhereInput
    /**
     * Limit how many Insumos to delete.
     */
    limit?: number
  }

  /**
   * Insumo.receitas
   */
  export type Insumo$receitasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdutoInsumo
     */
    select?: ProdutoInsumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProdutoInsumo
     */
    omit?: ProdutoInsumoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInsumoInclude<ExtArgs> | null
    where?: ProdutoInsumoWhereInput
    orderBy?: ProdutoInsumoOrderByWithRelationInput | ProdutoInsumoOrderByWithRelationInput[]
    cursor?: ProdutoInsumoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProdutoInsumoScalarFieldEnum | ProdutoInsumoScalarFieldEnum[]
  }

  /**
   * Insumo without action
   */
  export type InsumoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insumo
     */
    select?: InsumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insumo
     */
    omit?: InsumoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsumoInclude<ExtArgs> | null
  }


  /**
   * Model Produto
   */

  export type AggregateProduto = {
    _count: ProdutoCountAggregateOutputType | null
    _avg: ProdutoAvgAggregateOutputType | null
    _sum: ProdutoSumAggregateOutputType | null
    _min: ProdutoMinAggregateOutputType | null
    _max: ProdutoMaxAggregateOutputType | null
  }

  export type ProdutoAvgAggregateOutputType = {
    id: number | null
    empresaId: number | null
    preco: number | null
  }

  export type ProdutoSumAggregateOutputType = {
    id: number | null
    empresaId: number | null
    preco: number | null
  }

  export type ProdutoMinAggregateOutputType = {
    id: number | null
    empresaId: number | null
    nome: string | null
    descricao: string | null
    preco: number | null
    categoria: string | null
    disponivel: boolean | null
  }

  export type ProdutoMaxAggregateOutputType = {
    id: number | null
    empresaId: number | null
    nome: string | null
    descricao: string | null
    preco: number | null
    categoria: string | null
    disponivel: boolean | null
  }

  export type ProdutoCountAggregateOutputType = {
    id: number
    empresaId: number
    nome: number
    descricao: number
    preco: number
    categoria: number
    disponivel: number
    _all: number
  }


  export type ProdutoAvgAggregateInputType = {
    id?: true
    empresaId?: true
    preco?: true
  }

  export type ProdutoSumAggregateInputType = {
    id?: true
    empresaId?: true
    preco?: true
  }

  export type ProdutoMinAggregateInputType = {
    id?: true
    empresaId?: true
    nome?: true
    descricao?: true
    preco?: true
    categoria?: true
    disponivel?: true
  }

  export type ProdutoMaxAggregateInputType = {
    id?: true
    empresaId?: true
    nome?: true
    descricao?: true
    preco?: true
    categoria?: true
    disponivel?: true
  }

  export type ProdutoCountAggregateInputType = {
    id?: true
    empresaId?: true
    nome?: true
    descricao?: true
    preco?: true
    categoria?: true
    disponivel?: true
    _all?: true
  }

  export type ProdutoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Produto to aggregate.
     */
    where?: ProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produtos to fetch.
     */
    orderBy?: ProdutoOrderByWithRelationInput | ProdutoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Produtos
    **/
    _count?: true | ProdutoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProdutoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProdutoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProdutoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProdutoMaxAggregateInputType
  }

  export type GetProdutoAggregateType<T extends ProdutoAggregateArgs> = {
        [P in keyof T & keyof AggregateProduto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduto[P]>
      : GetScalarType<T[P], AggregateProduto[P]>
  }




  export type ProdutoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProdutoWhereInput
    orderBy?: ProdutoOrderByWithAggregationInput | ProdutoOrderByWithAggregationInput[]
    by: ProdutoScalarFieldEnum[] | ProdutoScalarFieldEnum
    having?: ProdutoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProdutoCountAggregateInputType | true
    _avg?: ProdutoAvgAggregateInputType
    _sum?: ProdutoSumAggregateInputType
    _min?: ProdutoMinAggregateInputType
    _max?: ProdutoMaxAggregateInputType
  }

  export type ProdutoGroupByOutputType = {
    id: number
    empresaId: number
    nome: string
    descricao: string | null
    preco: number
    categoria: string
    disponivel: boolean
    _count: ProdutoCountAggregateOutputType | null
    _avg: ProdutoAvgAggregateOutputType | null
    _sum: ProdutoSumAggregateOutputType | null
    _min: ProdutoMinAggregateOutputType | null
    _max: ProdutoMaxAggregateOutputType | null
  }

  type GetProdutoGroupByPayload<T extends ProdutoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProdutoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProdutoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProdutoGroupByOutputType[P]>
            : GetScalarType<T[P], ProdutoGroupByOutputType[P]>
        }
      >
    >


  export type ProdutoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    empresaId?: boolean
    nome?: boolean
    descricao?: boolean
    preco?: boolean
    categoria?: boolean
    disponivel?: boolean
    ingredientes?: boolean | Produto$ingredientesArgs<ExtArgs>
    empresa?: boolean | EmpresaDefaultArgs<ExtArgs>
    _count?: boolean | ProdutoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produto"]>

  export type ProdutoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    empresaId?: boolean
    nome?: boolean
    descricao?: boolean
    preco?: boolean
    categoria?: boolean
    disponivel?: boolean
    empresa?: boolean | EmpresaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produto"]>

  export type ProdutoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    empresaId?: boolean
    nome?: boolean
    descricao?: boolean
    preco?: boolean
    categoria?: boolean
    disponivel?: boolean
    empresa?: boolean | EmpresaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produto"]>

  export type ProdutoSelectScalar = {
    id?: boolean
    empresaId?: boolean
    nome?: boolean
    descricao?: boolean
    preco?: boolean
    categoria?: boolean
    disponivel?: boolean
  }

  export type ProdutoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "empresaId" | "nome" | "descricao" | "preco" | "categoria" | "disponivel", ExtArgs["result"]["produto"]>
  export type ProdutoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ingredientes?: boolean | Produto$ingredientesArgs<ExtArgs>
    empresa?: boolean | EmpresaDefaultArgs<ExtArgs>
    _count?: boolean | ProdutoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProdutoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empresa?: boolean | EmpresaDefaultArgs<ExtArgs>
  }
  export type ProdutoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empresa?: boolean | EmpresaDefaultArgs<ExtArgs>
  }

  export type $ProdutoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Produto"
    objects: {
      ingredientes: Prisma.$ProdutoInsumoPayload<ExtArgs>[]
      empresa: Prisma.$EmpresaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      empresaId: number
      nome: string
      descricao: string | null
      preco: number
      categoria: string
      disponivel: boolean
    }, ExtArgs["result"]["produto"]>
    composites: {}
  }

  type ProdutoGetPayload<S extends boolean | null | undefined | ProdutoDefaultArgs> = $Result.GetResult<Prisma.$ProdutoPayload, S>

  type ProdutoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProdutoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProdutoCountAggregateInputType | true
    }

  export interface ProdutoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Produto'], meta: { name: 'Produto' } }
    /**
     * Find zero or one Produto that matches the filter.
     * @param {ProdutoFindUniqueArgs} args - Arguments to find a Produto
     * @example
     * // Get one Produto
     * const produto = await prisma.produto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProdutoFindUniqueArgs>(args: SelectSubset<T, ProdutoFindUniqueArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Produto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProdutoFindUniqueOrThrowArgs} args - Arguments to find a Produto
     * @example
     * // Get one Produto
     * const produto = await prisma.produto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProdutoFindUniqueOrThrowArgs>(args: SelectSubset<T, ProdutoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Produto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoFindFirstArgs} args - Arguments to find a Produto
     * @example
     * // Get one Produto
     * const produto = await prisma.produto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProdutoFindFirstArgs>(args?: SelectSubset<T, ProdutoFindFirstArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Produto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoFindFirstOrThrowArgs} args - Arguments to find a Produto
     * @example
     * // Get one Produto
     * const produto = await prisma.produto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProdutoFindFirstOrThrowArgs>(args?: SelectSubset<T, ProdutoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Produtos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Produtos
     * const produtos = await prisma.produto.findMany()
     * 
     * // Get first 10 Produtos
     * const produtos = await prisma.produto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const produtoWithIdOnly = await prisma.produto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProdutoFindManyArgs>(args?: SelectSubset<T, ProdutoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Produto.
     * @param {ProdutoCreateArgs} args - Arguments to create a Produto.
     * @example
     * // Create one Produto
     * const Produto = await prisma.produto.create({
     *   data: {
     *     // ... data to create a Produto
     *   }
     * })
     * 
     */
    create<T extends ProdutoCreateArgs>(args: SelectSubset<T, ProdutoCreateArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Produtos.
     * @param {ProdutoCreateManyArgs} args - Arguments to create many Produtos.
     * @example
     * // Create many Produtos
     * const produto = await prisma.produto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProdutoCreateManyArgs>(args?: SelectSubset<T, ProdutoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Produtos and returns the data saved in the database.
     * @param {ProdutoCreateManyAndReturnArgs} args - Arguments to create many Produtos.
     * @example
     * // Create many Produtos
     * const produto = await prisma.produto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Produtos and only return the `id`
     * const produtoWithIdOnly = await prisma.produto.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProdutoCreateManyAndReturnArgs>(args?: SelectSubset<T, ProdutoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Produto.
     * @param {ProdutoDeleteArgs} args - Arguments to delete one Produto.
     * @example
     * // Delete one Produto
     * const Produto = await prisma.produto.delete({
     *   where: {
     *     // ... filter to delete one Produto
     *   }
     * })
     * 
     */
    delete<T extends ProdutoDeleteArgs>(args: SelectSubset<T, ProdutoDeleteArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Produto.
     * @param {ProdutoUpdateArgs} args - Arguments to update one Produto.
     * @example
     * // Update one Produto
     * const produto = await prisma.produto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProdutoUpdateArgs>(args: SelectSubset<T, ProdutoUpdateArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Produtos.
     * @param {ProdutoDeleteManyArgs} args - Arguments to filter Produtos to delete.
     * @example
     * // Delete a few Produtos
     * const { count } = await prisma.produto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProdutoDeleteManyArgs>(args?: SelectSubset<T, ProdutoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Produtos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Produtos
     * const produto = await prisma.produto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProdutoUpdateManyArgs>(args: SelectSubset<T, ProdutoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Produtos and returns the data updated in the database.
     * @param {ProdutoUpdateManyAndReturnArgs} args - Arguments to update many Produtos.
     * @example
     * // Update many Produtos
     * const produto = await prisma.produto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Produtos and only return the `id`
     * const produtoWithIdOnly = await prisma.produto.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProdutoUpdateManyAndReturnArgs>(args: SelectSubset<T, ProdutoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Produto.
     * @param {ProdutoUpsertArgs} args - Arguments to update or create a Produto.
     * @example
     * // Update or create a Produto
     * const produto = await prisma.produto.upsert({
     *   create: {
     *     // ... data to create a Produto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Produto we want to update
     *   }
     * })
     */
    upsert<T extends ProdutoUpsertArgs>(args: SelectSubset<T, ProdutoUpsertArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Produtos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoCountArgs} args - Arguments to filter Produtos to count.
     * @example
     * // Count the number of Produtos
     * const count = await prisma.produto.count({
     *   where: {
     *     // ... the filter for the Produtos we want to count
     *   }
     * })
    **/
    count<T extends ProdutoCountArgs>(
      args?: Subset<T, ProdutoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProdutoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Produto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProdutoAggregateArgs>(args: Subset<T, ProdutoAggregateArgs>): Prisma.PrismaPromise<GetProdutoAggregateType<T>>

    /**
     * Group by Produto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoGroupByArgs} args - Group by arguments.
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
      T extends ProdutoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProdutoGroupByArgs['orderBy'] }
        : { orderBy?: ProdutoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProdutoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProdutoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Produto model
   */
  readonly fields: ProdutoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Produto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProdutoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ingredientes<T extends Produto$ingredientesArgs<ExtArgs> = {}>(args?: Subset<T, Produto$ingredientesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdutoInsumoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    empresa<T extends EmpresaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmpresaDefaultArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Produto model
   */
  interface ProdutoFieldRefs {
    readonly id: FieldRef<"Produto", 'Int'>
    readonly empresaId: FieldRef<"Produto", 'Int'>
    readonly nome: FieldRef<"Produto", 'String'>
    readonly descricao: FieldRef<"Produto", 'String'>
    readonly preco: FieldRef<"Produto", 'Float'>
    readonly categoria: FieldRef<"Produto", 'String'>
    readonly disponivel: FieldRef<"Produto", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Produto findUnique
   */
  export type ProdutoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter, which Produto to fetch.
     */
    where: ProdutoWhereUniqueInput
  }

  /**
   * Produto findUniqueOrThrow
   */
  export type ProdutoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter, which Produto to fetch.
     */
    where: ProdutoWhereUniqueInput
  }

  /**
   * Produto findFirst
   */
  export type ProdutoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter, which Produto to fetch.
     */
    where?: ProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produtos to fetch.
     */
    orderBy?: ProdutoOrderByWithRelationInput | ProdutoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Produtos.
     */
    cursor?: ProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Produtos.
     */
    distinct?: ProdutoScalarFieldEnum | ProdutoScalarFieldEnum[]
  }

  /**
   * Produto findFirstOrThrow
   */
  export type ProdutoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter, which Produto to fetch.
     */
    where?: ProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produtos to fetch.
     */
    orderBy?: ProdutoOrderByWithRelationInput | ProdutoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Produtos.
     */
    cursor?: ProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Produtos.
     */
    distinct?: ProdutoScalarFieldEnum | ProdutoScalarFieldEnum[]
  }

  /**
   * Produto findMany
   */
  export type ProdutoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter, which Produtos to fetch.
     */
    where?: ProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produtos to fetch.
     */
    orderBy?: ProdutoOrderByWithRelationInput | ProdutoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Produtos.
     */
    cursor?: ProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Produtos.
     */
    distinct?: ProdutoScalarFieldEnum | ProdutoScalarFieldEnum[]
  }

  /**
   * Produto create
   */
  export type ProdutoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * The data needed to create a Produto.
     */
    data: XOR<ProdutoCreateInput, ProdutoUncheckedCreateInput>
  }

  /**
   * Produto createMany
   */
  export type ProdutoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Produtos.
     */
    data: ProdutoCreateManyInput | ProdutoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Produto createManyAndReturn
   */
  export type ProdutoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * The data used to create many Produtos.
     */
    data: ProdutoCreateManyInput | ProdutoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Produto update
   */
  export type ProdutoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * The data needed to update a Produto.
     */
    data: XOR<ProdutoUpdateInput, ProdutoUncheckedUpdateInput>
    /**
     * Choose, which Produto to update.
     */
    where: ProdutoWhereUniqueInput
  }

  /**
   * Produto updateMany
   */
  export type ProdutoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Produtos.
     */
    data: XOR<ProdutoUpdateManyMutationInput, ProdutoUncheckedUpdateManyInput>
    /**
     * Filter which Produtos to update
     */
    where?: ProdutoWhereInput
    /**
     * Limit how many Produtos to update.
     */
    limit?: number
  }

  /**
   * Produto updateManyAndReturn
   */
  export type ProdutoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * The data used to update Produtos.
     */
    data: XOR<ProdutoUpdateManyMutationInput, ProdutoUncheckedUpdateManyInput>
    /**
     * Filter which Produtos to update
     */
    where?: ProdutoWhereInput
    /**
     * Limit how many Produtos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Produto upsert
   */
  export type ProdutoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * The filter to search for the Produto to update in case it exists.
     */
    where: ProdutoWhereUniqueInput
    /**
     * In case the Produto found by the `where` argument doesn't exist, create a new Produto with this data.
     */
    create: XOR<ProdutoCreateInput, ProdutoUncheckedCreateInput>
    /**
     * In case the Produto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProdutoUpdateInput, ProdutoUncheckedUpdateInput>
  }

  /**
   * Produto delete
   */
  export type ProdutoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter which Produto to delete.
     */
    where: ProdutoWhereUniqueInput
  }

  /**
   * Produto deleteMany
   */
  export type ProdutoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Produtos to delete
     */
    where?: ProdutoWhereInput
    /**
     * Limit how many Produtos to delete.
     */
    limit?: number
  }

  /**
   * Produto.ingredientes
   */
  export type Produto$ingredientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdutoInsumo
     */
    select?: ProdutoInsumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProdutoInsumo
     */
    omit?: ProdutoInsumoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInsumoInclude<ExtArgs> | null
    where?: ProdutoInsumoWhereInput
    orderBy?: ProdutoInsumoOrderByWithRelationInput | ProdutoInsumoOrderByWithRelationInput[]
    cursor?: ProdutoInsumoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProdutoInsumoScalarFieldEnum | ProdutoInsumoScalarFieldEnum[]
  }

  /**
   * Produto without action
   */
  export type ProdutoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
  }


  /**
   * Model ProdutoInsumo
   */

  export type AggregateProdutoInsumo = {
    _count: ProdutoInsumoCountAggregateOutputType | null
    _avg: ProdutoInsumoAvgAggregateOutputType | null
    _sum: ProdutoInsumoSumAggregateOutputType | null
    _min: ProdutoInsumoMinAggregateOutputType | null
    _max: ProdutoInsumoMaxAggregateOutputType | null
  }

  export type ProdutoInsumoAvgAggregateOutputType = {
    id: number | null
    produtoId: number | null
    insumoId: number | null
    quantidadeGasta: number | null
  }

  export type ProdutoInsumoSumAggregateOutputType = {
    id: number | null
    produtoId: number | null
    insumoId: number | null
    quantidadeGasta: number | null
  }

  export type ProdutoInsumoMinAggregateOutputType = {
    id: number | null
    produtoId: number | null
    insumoId: number | null
    quantidadeGasta: number | null
  }

  export type ProdutoInsumoMaxAggregateOutputType = {
    id: number | null
    produtoId: number | null
    insumoId: number | null
    quantidadeGasta: number | null
  }

  export type ProdutoInsumoCountAggregateOutputType = {
    id: number
    produtoId: number
    insumoId: number
    quantidadeGasta: number
    _all: number
  }


  export type ProdutoInsumoAvgAggregateInputType = {
    id?: true
    produtoId?: true
    insumoId?: true
    quantidadeGasta?: true
  }

  export type ProdutoInsumoSumAggregateInputType = {
    id?: true
    produtoId?: true
    insumoId?: true
    quantidadeGasta?: true
  }

  export type ProdutoInsumoMinAggregateInputType = {
    id?: true
    produtoId?: true
    insumoId?: true
    quantidadeGasta?: true
  }

  export type ProdutoInsumoMaxAggregateInputType = {
    id?: true
    produtoId?: true
    insumoId?: true
    quantidadeGasta?: true
  }

  export type ProdutoInsumoCountAggregateInputType = {
    id?: true
    produtoId?: true
    insumoId?: true
    quantidadeGasta?: true
    _all?: true
  }

  export type ProdutoInsumoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProdutoInsumo to aggregate.
     */
    where?: ProdutoInsumoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProdutoInsumos to fetch.
     */
    orderBy?: ProdutoInsumoOrderByWithRelationInput | ProdutoInsumoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProdutoInsumoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProdutoInsumos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProdutoInsumos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProdutoInsumos
    **/
    _count?: true | ProdutoInsumoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProdutoInsumoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProdutoInsumoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProdutoInsumoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProdutoInsumoMaxAggregateInputType
  }

  export type GetProdutoInsumoAggregateType<T extends ProdutoInsumoAggregateArgs> = {
        [P in keyof T & keyof AggregateProdutoInsumo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProdutoInsumo[P]>
      : GetScalarType<T[P], AggregateProdutoInsumo[P]>
  }




  export type ProdutoInsumoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProdutoInsumoWhereInput
    orderBy?: ProdutoInsumoOrderByWithAggregationInput | ProdutoInsumoOrderByWithAggregationInput[]
    by: ProdutoInsumoScalarFieldEnum[] | ProdutoInsumoScalarFieldEnum
    having?: ProdutoInsumoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProdutoInsumoCountAggregateInputType | true
    _avg?: ProdutoInsumoAvgAggregateInputType
    _sum?: ProdutoInsumoSumAggregateInputType
    _min?: ProdutoInsumoMinAggregateInputType
    _max?: ProdutoInsumoMaxAggregateInputType
  }

  export type ProdutoInsumoGroupByOutputType = {
    id: number
    produtoId: number
    insumoId: number
    quantidadeGasta: number
    _count: ProdutoInsumoCountAggregateOutputType | null
    _avg: ProdutoInsumoAvgAggregateOutputType | null
    _sum: ProdutoInsumoSumAggregateOutputType | null
    _min: ProdutoInsumoMinAggregateOutputType | null
    _max: ProdutoInsumoMaxAggregateOutputType | null
  }

  type GetProdutoInsumoGroupByPayload<T extends ProdutoInsumoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProdutoInsumoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProdutoInsumoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProdutoInsumoGroupByOutputType[P]>
            : GetScalarType<T[P], ProdutoInsumoGroupByOutputType[P]>
        }
      >
    >


  export type ProdutoInsumoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    produtoId?: boolean
    insumoId?: boolean
    quantidadeGasta?: boolean
    produto?: boolean | ProdutoDefaultArgs<ExtArgs>
    insumo?: boolean | InsumoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produtoInsumo"]>

  export type ProdutoInsumoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    produtoId?: boolean
    insumoId?: boolean
    quantidadeGasta?: boolean
    produto?: boolean | ProdutoDefaultArgs<ExtArgs>
    insumo?: boolean | InsumoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produtoInsumo"]>

  export type ProdutoInsumoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    produtoId?: boolean
    insumoId?: boolean
    quantidadeGasta?: boolean
    produto?: boolean | ProdutoDefaultArgs<ExtArgs>
    insumo?: boolean | InsumoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produtoInsumo"]>

  export type ProdutoInsumoSelectScalar = {
    id?: boolean
    produtoId?: boolean
    insumoId?: boolean
    quantidadeGasta?: boolean
  }

  export type ProdutoInsumoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "produtoId" | "insumoId" | "quantidadeGasta", ExtArgs["result"]["produtoInsumo"]>
  export type ProdutoInsumoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produto?: boolean | ProdutoDefaultArgs<ExtArgs>
    insumo?: boolean | InsumoDefaultArgs<ExtArgs>
  }
  export type ProdutoInsumoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produto?: boolean | ProdutoDefaultArgs<ExtArgs>
    insumo?: boolean | InsumoDefaultArgs<ExtArgs>
  }
  export type ProdutoInsumoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produto?: boolean | ProdutoDefaultArgs<ExtArgs>
    insumo?: boolean | InsumoDefaultArgs<ExtArgs>
  }

  export type $ProdutoInsumoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProdutoInsumo"
    objects: {
      produto: Prisma.$ProdutoPayload<ExtArgs>
      insumo: Prisma.$InsumoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      produtoId: number
      insumoId: number
      quantidadeGasta: number
    }, ExtArgs["result"]["produtoInsumo"]>
    composites: {}
  }

  type ProdutoInsumoGetPayload<S extends boolean | null | undefined | ProdutoInsumoDefaultArgs> = $Result.GetResult<Prisma.$ProdutoInsumoPayload, S>

  type ProdutoInsumoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProdutoInsumoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProdutoInsumoCountAggregateInputType | true
    }

  export interface ProdutoInsumoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProdutoInsumo'], meta: { name: 'ProdutoInsumo' } }
    /**
     * Find zero or one ProdutoInsumo that matches the filter.
     * @param {ProdutoInsumoFindUniqueArgs} args - Arguments to find a ProdutoInsumo
     * @example
     * // Get one ProdutoInsumo
     * const produtoInsumo = await prisma.produtoInsumo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProdutoInsumoFindUniqueArgs>(args: SelectSubset<T, ProdutoInsumoFindUniqueArgs<ExtArgs>>): Prisma__ProdutoInsumoClient<$Result.GetResult<Prisma.$ProdutoInsumoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProdutoInsumo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProdutoInsumoFindUniqueOrThrowArgs} args - Arguments to find a ProdutoInsumo
     * @example
     * // Get one ProdutoInsumo
     * const produtoInsumo = await prisma.produtoInsumo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProdutoInsumoFindUniqueOrThrowArgs>(args: SelectSubset<T, ProdutoInsumoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProdutoInsumoClient<$Result.GetResult<Prisma.$ProdutoInsumoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProdutoInsumo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoInsumoFindFirstArgs} args - Arguments to find a ProdutoInsumo
     * @example
     * // Get one ProdutoInsumo
     * const produtoInsumo = await prisma.produtoInsumo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProdutoInsumoFindFirstArgs>(args?: SelectSubset<T, ProdutoInsumoFindFirstArgs<ExtArgs>>): Prisma__ProdutoInsumoClient<$Result.GetResult<Prisma.$ProdutoInsumoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProdutoInsumo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoInsumoFindFirstOrThrowArgs} args - Arguments to find a ProdutoInsumo
     * @example
     * // Get one ProdutoInsumo
     * const produtoInsumo = await prisma.produtoInsumo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProdutoInsumoFindFirstOrThrowArgs>(args?: SelectSubset<T, ProdutoInsumoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProdutoInsumoClient<$Result.GetResult<Prisma.$ProdutoInsumoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProdutoInsumos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoInsumoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProdutoInsumos
     * const produtoInsumos = await prisma.produtoInsumo.findMany()
     * 
     * // Get first 10 ProdutoInsumos
     * const produtoInsumos = await prisma.produtoInsumo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const produtoInsumoWithIdOnly = await prisma.produtoInsumo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProdutoInsumoFindManyArgs>(args?: SelectSubset<T, ProdutoInsumoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdutoInsumoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProdutoInsumo.
     * @param {ProdutoInsumoCreateArgs} args - Arguments to create a ProdutoInsumo.
     * @example
     * // Create one ProdutoInsumo
     * const ProdutoInsumo = await prisma.produtoInsumo.create({
     *   data: {
     *     // ... data to create a ProdutoInsumo
     *   }
     * })
     * 
     */
    create<T extends ProdutoInsumoCreateArgs>(args: SelectSubset<T, ProdutoInsumoCreateArgs<ExtArgs>>): Prisma__ProdutoInsumoClient<$Result.GetResult<Prisma.$ProdutoInsumoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProdutoInsumos.
     * @param {ProdutoInsumoCreateManyArgs} args - Arguments to create many ProdutoInsumos.
     * @example
     * // Create many ProdutoInsumos
     * const produtoInsumo = await prisma.produtoInsumo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProdutoInsumoCreateManyArgs>(args?: SelectSubset<T, ProdutoInsumoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProdutoInsumos and returns the data saved in the database.
     * @param {ProdutoInsumoCreateManyAndReturnArgs} args - Arguments to create many ProdutoInsumos.
     * @example
     * // Create many ProdutoInsumos
     * const produtoInsumo = await prisma.produtoInsumo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProdutoInsumos and only return the `id`
     * const produtoInsumoWithIdOnly = await prisma.produtoInsumo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProdutoInsumoCreateManyAndReturnArgs>(args?: SelectSubset<T, ProdutoInsumoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdutoInsumoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProdutoInsumo.
     * @param {ProdutoInsumoDeleteArgs} args - Arguments to delete one ProdutoInsumo.
     * @example
     * // Delete one ProdutoInsumo
     * const ProdutoInsumo = await prisma.produtoInsumo.delete({
     *   where: {
     *     // ... filter to delete one ProdutoInsumo
     *   }
     * })
     * 
     */
    delete<T extends ProdutoInsumoDeleteArgs>(args: SelectSubset<T, ProdutoInsumoDeleteArgs<ExtArgs>>): Prisma__ProdutoInsumoClient<$Result.GetResult<Prisma.$ProdutoInsumoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProdutoInsumo.
     * @param {ProdutoInsumoUpdateArgs} args - Arguments to update one ProdutoInsumo.
     * @example
     * // Update one ProdutoInsumo
     * const produtoInsumo = await prisma.produtoInsumo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProdutoInsumoUpdateArgs>(args: SelectSubset<T, ProdutoInsumoUpdateArgs<ExtArgs>>): Prisma__ProdutoInsumoClient<$Result.GetResult<Prisma.$ProdutoInsumoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProdutoInsumos.
     * @param {ProdutoInsumoDeleteManyArgs} args - Arguments to filter ProdutoInsumos to delete.
     * @example
     * // Delete a few ProdutoInsumos
     * const { count } = await prisma.produtoInsumo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProdutoInsumoDeleteManyArgs>(args?: SelectSubset<T, ProdutoInsumoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProdutoInsumos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoInsumoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProdutoInsumos
     * const produtoInsumo = await prisma.produtoInsumo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProdutoInsumoUpdateManyArgs>(args: SelectSubset<T, ProdutoInsumoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProdutoInsumos and returns the data updated in the database.
     * @param {ProdutoInsumoUpdateManyAndReturnArgs} args - Arguments to update many ProdutoInsumos.
     * @example
     * // Update many ProdutoInsumos
     * const produtoInsumo = await prisma.produtoInsumo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProdutoInsumos and only return the `id`
     * const produtoInsumoWithIdOnly = await prisma.produtoInsumo.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProdutoInsumoUpdateManyAndReturnArgs>(args: SelectSubset<T, ProdutoInsumoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdutoInsumoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProdutoInsumo.
     * @param {ProdutoInsumoUpsertArgs} args - Arguments to update or create a ProdutoInsumo.
     * @example
     * // Update or create a ProdutoInsumo
     * const produtoInsumo = await prisma.produtoInsumo.upsert({
     *   create: {
     *     // ... data to create a ProdutoInsumo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProdutoInsumo we want to update
     *   }
     * })
     */
    upsert<T extends ProdutoInsumoUpsertArgs>(args: SelectSubset<T, ProdutoInsumoUpsertArgs<ExtArgs>>): Prisma__ProdutoInsumoClient<$Result.GetResult<Prisma.$ProdutoInsumoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProdutoInsumos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoInsumoCountArgs} args - Arguments to filter ProdutoInsumos to count.
     * @example
     * // Count the number of ProdutoInsumos
     * const count = await prisma.produtoInsumo.count({
     *   where: {
     *     // ... the filter for the ProdutoInsumos we want to count
     *   }
     * })
    **/
    count<T extends ProdutoInsumoCountArgs>(
      args?: Subset<T, ProdutoInsumoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProdutoInsumoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProdutoInsumo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoInsumoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProdutoInsumoAggregateArgs>(args: Subset<T, ProdutoInsumoAggregateArgs>): Prisma.PrismaPromise<GetProdutoInsumoAggregateType<T>>

    /**
     * Group by ProdutoInsumo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoInsumoGroupByArgs} args - Group by arguments.
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
      T extends ProdutoInsumoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProdutoInsumoGroupByArgs['orderBy'] }
        : { orderBy?: ProdutoInsumoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProdutoInsumoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProdutoInsumoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProdutoInsumo model
   */
  readonly fields: ProdutoInsumoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProdutoInsumo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProdutoInsumoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    produto<T extends ProdutoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProdutoDefaultArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    insumo<T extends InsumoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InsumoDefaultArgs<ExtArgs>>): Prisma__InsumoClient<$Result.GetResult<Prisma.$InsumoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ProdutoInsumo model
   */
  interface ProdutoInsumoFieldRefs {
    readonly id: FieldRef<"ProdutoInsumo", 'Int'>
    readonly produtoId: FieldRef<"ProdutoInsumo", 'Int'>
    readonly insumoId: FieldRef<"ProdutoInsumo", 'Int'>
    readonly quantidadeGasta: FieldRef<"ProdutoInsumo", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * ProdutoInsumo findUnique
   */
  export type ProdutoInsumoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdutoInsumo
     */
    select?: ProdutoInsumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProdutoInsumo
     */
    omit?: ProdutoInsumoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInsumoInclude<ExtArgs> | null
    /**
     * Filter, which ProdutoInsumo to fetch.
     */
    where: ProdutoInsumoWhereUniqueInput
  }

  /**
   * ProdutoInsumo findUniqueOrThrow
   */
  export type ProdutoInsumoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdutoInsumo
     */
    select?: ProdutoInsumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProdutoInsumo
     */
    omit?: ProdutoInsumoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInsumoInclude<ExtArgs> | null
    /**
     * Filter, which ProdutoInsumo to fetch.
     */
    where: ProdutoInsumoWhereUniqueInput
  }

  /**
   * ProdutoInsumo findFirst
   */
  export type ProdutoInsumoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdutoInsumo
     */
    select?: ProdutoInsumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProdutoInsumo
     */
    omit?: ProdutoInsumoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInsumoInclude<ExtArgs> | null
    /**
     * Filter, which ProdutoInsumo to fetch.
     */
    where?: ProdutoInsumoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProdutoInsumos to fetch.
     */
    orderBy?: ProdutoInsumoOrderByWithRelationInput | ProdutoInsumoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProdutoInsumos.
     */
    cursor?: ProdutoInsumoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProdutoInsumos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProdutoInsumos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProdutoInsumos.
     */
    distinct?: ProdutoInsumoScalarFieldEnum | ProdutoInsumoScalarFieldEnum[]
  }

  /**
   * ProdutoInsumo findFirstOrThrow
   */
  export type ProdutoInsumoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdutoInsumo
     */
    select?: ProdutoInsumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProdutoInsumo
     */
    omit?: ProdutoInsumoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInsumoInclude<ExtArgs> | null
    /**
     * Filter, which ProdutoInsumo to fetch.
     */
    where?: ProdutoInsumoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProdutoInsumos to fetch.
     */
    orderBy?: ProdutoInsumoOrderByWithRelationInput | ProdutoInsumoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProdutoInsumos.
     */
    cursor?: ProdutoInsumoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProdutoInsumos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProdutoInsumos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProdutoInsumos.
     */
    distinct?: ProdutoInsumoScalarFieldEnum | ProdutoInsumoScalarFieldEnum[]
  }

  /**
   * ProdutoInsumo findMany
   */
  export type ProdutoInsumoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdutoInsumo
     */
    select?: ProdutoInsumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProdutoInsumo
     */
    omit?: ProdutoInsumoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInsumoInclude<ExtArgs> | null
    /**
     * Filter, which ProdutoInsumos to fetch.
     */
    where?: ProdutoInsumoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProdutoInsumos to fetch.
     */
    orderBy?: ProdutoInsumoOrderByWithRelationInput | ProdutoInsumoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProdutoInsumos.
     */
    cursor?: ProdutoInsumoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProdutoInsumos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProdutoInsumos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProdutoInsumos.
     */
    distinct?: ProdutoInsumoScalarFieldEnum | ProdutoInsumoScalarFieldEnum[]
  }

  /**
   * ProdutoInsumo create
   */
  export type ProdutoInsumoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdutoInsumo
     */
    select?: ProdutoInsumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProdutoInsumo
     */
    omit?: ProdutoInsumoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInsumoInclude<ExtArgs> | null
    /**
     * The data needed to create a ProdutoInsumo.
     */
    data: XOR<ProdutoInsumoCreateInput, ProdutoInsumoUncheckedCreateInput>
  }

  /**
   * ProdutoInsumo createMany
   */
  export type ProdutoInsumoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProdutoInsumos.
     */
    data: ProdutoInsumoCreateManyInput | ProdutoInsumoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProdutoInsumo createManyAndReturn
   */
  export type ProdutoInsumoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdutoInsumo
     */
    select?: ProdutoInsumoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProdutoInsumo
     */
    omit?: ProdutoInsumoOmit<ExtArgs> | null
    /**
     * The data used to create many ProdutoInsumos.
     */
    data: ProdutoInsumoCreateManyInput | ProdutoInsumoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInsumoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProdutoInsumo update
   */
  export type ProdutoInsumoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdutoInsumo
     */
    select?: ProdutoInsumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProdutoInsumo
     */
    omit?: ProdutoInsumoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInsumoInclude<ExtArgs> | null
    /**
     * The data needed to update a ProdutoInsumo.
     */
    data: XOR<ProdutoInsumoUpdateInput, ProdutoInsumoUncheckedUpdateInput>
    /**
     * Choose, which ProdutoInsumo to update.
     */
    where: ProdutoInsumoWhereUniqueInput
  }

  /**
   * ProdutoInsumo updateMany
   */
  export type ProdutoInsumoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProdutoInsumos.
     */
    data: XOR<ProdutoInsumoUpdateManyMutationInput, ProdutoInsumoUncheckedUpdateManyInput>
    /**
     * Filter which ProdutoInsumos to update
     */
    where?: ProdutoInsumoWhereInput
    /**
     * Limit how many ProdutoInsumos to update.
     */
    limit?: number
  }

  /**
   * ProdutoInsumo updateManyAndReturn
   */
  export type ProdutoInsumoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdutoInsumo
     */
    select?: ProdutoInsumoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProdutoInsumo
     */
    omit?: ProdutoInsumoOmit<ExtArgs> | null
    /**
     * The data used to update ProdutoInsumos.
     */
    data: XOR<ProdutoInsumoUpdateManyMutationInput, ProdutoInsumoUncheckedUpdateManyInput>
    /**
     * Filter which ProdutoInsumos to update
     */
    where?: ProdutoInsumoWhereInput
    /**
     * Limit how many ProdutoInsumos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInsumoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProdutoInsumo upsert
   */
  export type ProdutoInsumoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdutoInsumo
     */
    select?: ProdutoInsumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProdutoInsumo
     */
    omit?: ProdutoInsumoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInsumoInclude<ExtArgs> | null
    /**
     * The filter to search for the ProdutoInsumo to update in case it exists.
     */
    where: ProdutoInsumoWhereUniqueInput
    /**
     * In case the ProdutoInsumo found by the `where` argument doesn't exist, create a new ProdutoInsumo with this data.
     */
    create: XOR<ProdutoInsumoCreateInput, ProdutoInsumoUncheckedCreateInput>
    /**
     * In case the ProdutoInsumo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProdutoInsumoUpdateInput, ProdutoInsumoUncheckedUpdateInput>
  }

  /**
   * ProdutoInsumo delete
   */
  export type ProdutoInsumoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdutoInsumo
     */
    select?: ProdutoInsumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProdutoInsumo
     */
    omit?: ProdutoInsumoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInsumoInclude<ExtArgs> | null
    /**
     * Filter which ProdutoInsumo to delete.
     */
    where: ProdutoInsumoWhereUniqueInput
  }

  /**
   * ProdutoInsumo deleteMany
   */
  export type ProdutoInsumoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProdutoInsumos to delete
     */
    where?: ProdutoInsumoWhereInput
    /**
     * Limit how many ProdutoInsumos to delete.
     */
    limit?: number
  }

  /**
   * ProdutoInsumo without action
   */
  export type ProdutoInsumoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdutoInsumo
     */
    select?: ProdutoInsumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProdutoInsumo
     */
    omit?: ProdutoInsumoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInsumoInclude<ExtArgs> | null
  }


  /**
   * Model Cliente
   */

  export type AggregateCliente = {
    _count: ClienteCountAggregateOutputType | null
    _avg: ClienteAvgAggregateOutputType | null
    _sum: ClienteSumAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  export type ClienteAvgAggregateOutputType = {
    id: number | null
    empresaId: number | null
  }

  export type ClienteSumAggregateOutputType = {
    id: number | null
    empresaId: number | null
  }

  export type ClienteMinAggregateOutputType = {
    id: number | null
    empresaId: number | null
    telefone: string | null
    nome: string | null
    endereco: string | null
    criadoEm: Date | null
    atualizadoEm: Date | null
  }

  export type ClienteMaxAggregateOutputType = {
    id: number | null
    empresaId: number | null
    telefone: string | null
    nome: string | null
    endereco: string | null
    criadoEm: Date | null
    atualizadoEm: Date | null
  }

  export type ClienteCountAggregateOutputType = {
    id: number
    empresaId: number
    telefone: number
    nome: number
    endereco: number
    criadoEm: number
    atualizadoEm: number
    _all: number
  }


  export type ClienteAvgAggregateInputType = {
    id?: true
    empresaId?: true
  }

  export type ClienteSumAggregateInputType = {
    id?: true
    empresaId?: true
  }

  export type ClienteMinAggregateInputType = {
    id?: true
    empresaId?: true
    telefone?: true
    nome?: true
    endereco?: true
    criadoEm?: true
    atualizadoEm?: true
  }

  export type ClienteMaxAggregateInputType = {
    id?: true
    empresaId?: true
    telefone?: true
    nome?: true
    endereco?: true
    criadoEm?: true
    atualizadoEm?: true
  }

  export type ClienteCountAggregateInputType = {
    id?: true
    empresaId?: true
    telefone?: true
    nome?: true
    endereco?: true
    criadoEm?: true
    atualizadoEm?: true
    _all?: true
  }

  export type ClienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cliente to aggregate.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clientes
    **/
    _count?: true | ClienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClienteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClienteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClienteMaxAggregateInputType
  }

  export type GetClienteAggregateType<T extends ClienteAggregateArgs> = {
        [P in keyof T & keyof AggregateCliente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCliente[P]>
      : GetScalarType<T[P], AggregateCliente[P]>
  }




  export type ClienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClienteWhereInput
    orderBy?: ClienteOrderByWithAggregationInput | ClienteOrderByWithAggregationInput[]
    by: ClienteScalarFieldEnum[] | ClienteScalarFieldEnum
    having?: ClienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClienteCountAggregateInputType | true
    _avg?: ClienteAvgAggregateInputType
    _sum?: ClienteSumAggregateInputType
    _min?: ClienteMinAggregateInputType
    _max?: ClienteMaxAggregateInputType
  }

  export type ClienteGroupByOutputType = {
    id: number
    empresaId: number
    telefone: string
    nome: string
    endereco: string
    criadoEm: Date
    atualizadoEm: Date
    _count: ClienteCountAggregateOutputType | null
    _avg: ClienteAvgAggregateOutputType | null
    _sum: ClienteSumAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  type GetClienteGroupByPayload<T extends ClienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClienteGroupByOutputType[P]>
            : GetScalarType<T[P], ClienteGroupByOutputType[P]>
        }
      >
    >


  export type ClienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    empresaId?: boolean
    telefone?: boolean
    nome?: boolean
    endereco?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
    empresa?: boolean | EmpresaDefaultArgs<ExtArgs>
    pedidos?: boolean | Cliente$pedidosArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    empresaId?: boolean
    telefone?: boolean
    nome?: boolean
    endereco?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
    empresa?: boolean | EmpresaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    empresaId?: boolean
    telefone?: boolean
    nome?: boolean
    endereco?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
    empresa?: boolean | EmpresaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectScalar = {
    id?: boolean
    empresaId?: boolean
    telefone?: boolean
    nome?: boolean
    endereco?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
  }

  export type ClienteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "empresaId" | "telefone" | "nome" | "endereco" | "criadoEm" | "atualizadoEm", ExtArgs["result"]["cliente"]>
  export type ClienteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empresa?: boolean | EmpresaDefaultArgs<ExtArgs>
    pedidos?: boolean | Cliente$pedidosArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClienteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empresa?: boolean | EmpresaDefaultArgs<ExtArgs>
  }
  export type ClienteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empresa?: boolean | EmpresaDefaultArgs<ExtArgs>
  }

  export type $ClientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cliente"
    objects: {
      empresa: Prisma.$EmpresaPayload<ExtArgs>
      pedidos: Prisma.$PedidoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      empresaId: number
      telefone: string
      nome: string
      endereco: string
      criadoEm: Date
      atualizadoEm: Date
    }, ExtArgs["result"]["cliente"]>
    composites: {}
  }

  type ClienteGetPayload<S extends boolean | null | undefined | ClienteDefaultArgs> = $Result.GetResult<Prisma.$ClientePayload, S>

  type ClienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClienteCountAggregateInputType | true
    }

  export interface ClienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cliente'], meta: { name: 'Cliente' } }
    /**
     * Find zero or one Cliente that matches the filter.
     * @param {ClienteFindUniqueArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClienteFindUniqueArgs>(args: SelectSubset<T, ClienteFindUniqueArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cliente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClienteFindUniqueOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClienteFindUniqueOrThrowArgs>(args: SelectSubset<T, ClienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClienteFindFirstArgs>(args?: SelectSubset<T, ClienteFindFirstArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClienteFindFirstOrThrowArgs>(args?: SelectSubset<T, ClienteFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clientes
     * const clientes = await prisma.cliente.findMany()
     * 
     * // Get first 10 Clientes
     * const clientes = await prisma.cliente.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clienteWithIdOnly = await prisma.cliente.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClienteFindManyArgs>(args?: SelectSubset<T, ClienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cliente.
     * @param {ClienteCreateArgs} args - Arguments to create a Cliente.
     * @example
     * // Create one Cliente
     * const Cliente = await prisma.cliente.create({
     *   data: {
     *     // ... data to create a Cliente
     *   }
     * })
     * 
     */
    create<T extends ClienteCreateArgs>(args: SelectSubset<T, ClienteCreateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clientes.
     * @param {ClienteCreateManyArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClienteCreateManyArgs>(args?: SelectSubset<T, ClienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clientes and returns the data saved in the database.
     * @param {ClienteCreateManyAndReturnArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clientes and only return the `id`
     * const clienteWithIdOnly = await prisma.cliente.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClienteCreateManyAndReturnArgs>(args?: SelectSubset<T, ClienteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cliente.
     * @param {ClienteDeleteArgs} args - Arguments to delete one Cliente.
     * @example
     * // Delete one Cliente
     * const Cliente = await prisma.cliente.delete({
     *   where: {
     *     // ... filter to delete one Cliente
     *   }
     * })
     * 
     */
    delete<T extends ClienteDeleteArgs>(args: SelectSubset<T, ClienteDeleteArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cliente.
     * @param {ClienteUpdateArgs} args - Arguments to update one Cliente.
     * @example
     * // Update one Cliente
     * const cliente = await prisma.cliente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClienteUpdateArgs>(args: SelectSubset<T, ClienteUpdateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clientes.
     * @param {ClienteDeleteManyArgs} args - Arguments to filter Clientes to delete.
     * @example
     * // Delete a few Clientes
     * const { count } = await prisma.cliente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClienteDeleteManyArgs>(args?: SelectSubset<T, ClienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClienteUpdateManyArgs>(args: SelectSubset<T, ClienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes and returns the data updated in the database.
     * @param {ClienteUpdateManyAndReturnArgs} args - Arguments to update many Clientes.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clientes and only return the `id`
     * const clienteWithIdOnly = await prisma.cliente.updateManyAndReturn({
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
    updateManyAndReturn<T extends ClienteUpdateManyAndReturnArgs>(args: SelectSubset<T, ClienteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cliente.
     * @param {ClienteUpsertArgs} args - Arguments to update or create a Cliente.
     * @example
     * // Update or create a Cliente
     * const cliente = await prisma.cliente.upsert({
     *   create: {
     *     // ... data to create a Cliente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cliente we want to update
     *   }
     * })
     */
    upsert<T extends ClienteUpsertArgs>(args: SelectSubset<T, ClienteUpsertArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteCountArgs} args - Arguments to filter Clientes to count.
     * @example
     * // Count the number of Clientes
     * const count = await prisma.cliente.count({
     *   where: {
     *     // ... the filter for the Clientes we want to count
     *   }
     * })
    **/
    count<T extends ClienteCountArgs>(
      args?: Subset<T, ClienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClienteAggregateArgs>(args: Subset<T, ClienteAggregateArgs>): Prisma.PrismaPromise<GetClienteAggregateType<T>>

    /**
     * Group by Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteGroupByArgs} args - Group by arguments.
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
      T extends ClienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClienteGroupByArgs['orderBy'] }
        : { orderBy?: ClienteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cliente model
   */
  readonly fields: ClienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cliente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    empresa<T extends EmpresaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmpresaDefaultArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    pedidos<T extends Cliente$pedidosArgs<ExtArgs> = {}>(args?: Subset<T, Cliente$pedidosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Cliente model
   */
  interface ClienteFieldRefs {
    readonly id: FieldRef<"Cliente", 'Int'>
    readonly empresaId: FieldRef<"Cliente", 'Int'>
    readonly telefone: FieldRef<"Cliente", 'String'>
    readonly nome: FieldRef<"Cliente", 'String'>
    readonly endereco: FieldRef<"Cliente", 'String'>
    readonly criadoEm: FieldRef<"Cliente", 'DateTime'>
    readonly atualizadoEm: FieldRef<"Cliente", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Cliente findUnique
   */
  export type ClienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findUniqueOrThrow
   */
  export type ClienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findFirst
   */
  export type ClienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findFirstOrThrow
   */
  export type ClienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findMany
   */
  export type ClienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Clientes to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente create
   */
  export type ClienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to create a Cliente.
     */
    data: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
  }

  /**
   * Cliente createMany
   */
  export type ClienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clientes.
     */
    data: ClienteCreateManyInput | ClienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cliente createManyAndReturn
   */
  export type ClienteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * The data used to create many Clientes.
     */
    data: ClienteCreateManyInput | ClienteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Cliente update
   */
  export type ClienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to update a Cliente.
     */
    data: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
    /**
     * Choose, which Cliente to update.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente updateMany
   */
  export type ClienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clientes.
     */
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyInput>
    /**
     * Filter which Clientes to update
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to update.
     */
    limit?: number
  }

  /**
   * Cliente updateManyAndReturn
   */
  export type ClienteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * The data used to update Clientes.
     */
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyInput>
    /**
     * Filter which Clientes to update
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Cliente upsert
   */
  export type ClienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The filter to search for the Cliente to update in case it exists.
     */
    where: ClienteWhereUniqueInput
    /**
     * In case the Cliente found by the `where` argument doesn't exist, create a new Cliente with this data.
     */
    create: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
    /**
     * In case the Cliente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
  }

  /**
   * Cliente delete
   */
  export type ClienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter which Cliente to delete.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente deleteMany
   */
  export type ClienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clientes to delete
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to delete.
     */
    limit?: number
  }

  /**
   * Cliente.pedidos
   */
  export type Cliente$pedidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    where?: PedidoWhereInput
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    cursor?: PedidoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Cliente without action
   */
  export type ClienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
  }


  /**
   * Model Pedido
   */

  export type AggregatePedido = {
    _count: PedidoCountAggregateOutputType | null
    _avg: PedidoAvgAggregateOutputType | null
    _sum: PedidoSumAggregateOutputType | null
    _min: PedidoMinAggregateOutputType | null
    _max: PedidoMaxAggregateOutputType | null
  }

  export type PedidoAvgAggregateOutputType = {
    id: number | null
    empresaId: number | null
    clienteId: number | null
    valorTotal: number | null
  }

  export type PedidoSumAggregateOutputType = {
    id: number | null
    empresaId: number | null
    clienteId: number | null
    valorTotal: number | null
  }

  export type PedidoMinAggregateOutputType = {
    id: number | null
    empresaId: number | null
    clienteId: number | null
    status: string | null
    observacoes: string | null
    valorTotal: number | null
    criadoEm: Date | null
    atualizadoEm: Date | null
  }

  export type PedidoMaxAggregateOutputType = {
    id: number | null
    empresaId: number | null
    clienteId: number | null
    status: string | null
    observacoes: string | null
    valorTotal: number | null
    criadoEm: Date | null
    atualizadoEm: Date | null
  }

  export type PedidoCountAggregateOutputType = {
    id: number
    empresaId: number
    clienteId: number
    status: number
    pedido: number
    observacoes: number
    valorTotal: number
    criadoEm: number
    atualizadoEm: number
    _all: number
  }


  export type PedidoAvgAggregateInputType = {
    id?: true
    empresaId?: true
    clienteId?: true
    valorTotal?: true
  }

  export type PedidoSumAggregateInputType = {
    id?: true
    empresaId?: true
    clienteId?: true
    valorTotal?: true
  }

  export type PedidoMinAggregateInputType = {
    id?: true
    empresaId?: true
    clienteId?: true
    status?: true
    observacoes?: true
    valorTotal?: true
    criadoEm?: true
    atualizadoEm?: true
  }

  export type PedidoMaxAggregateInputType = {
    id?: true
    empresaId?: true
    clienteId?: true
    status?: true
    observacoes?: true
    valorTotal?: true
    criadoEm?: true
    atualizadoEm?: true
  }

  export type PedidoCountAggregateInputType = {
    id?: true
    empresaId?: true
    clienteId?: true
    status?: true
    pedido?: true
    observacoes?: true
    valorTotal?: true
    criadoEm?: true
    atualizadoEm?: true
    _all?: true
  }

  export type PedidoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pedido to aggregate.
     */
    where?: PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pedidos
    **/
    _count?: true | PedidoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PedidoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PedidoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PedidoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PedidoMaxAggregateInputType
  }

  export type GetPedidoAggregateType<T extends PedidoAggregateArgs> = {
        [P in keyof T & keyof AggregatePedido]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePedido[P]>
      : GetScalarType<T[P], AggregatePedido[P]>
  }




  export type PedidoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PedidoWhereInput
    orderBy?: PedidoOrderByWithAggregationInput | PedidoOrderByWithAggregationInput[]
    by: PedidoScalarFieldEnum[] | PedidoScalarFieldEnum
    having?: PedidoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PedidoCountAggregateInputType | true
    _avg?: PedidoAvgAggregateInputType
    _sum?: PedidoSumAggregateInputType
    _min?: PedidoMinAggregateInputType
    _max?: PedidoMaxAggregateInputType
  }

  export type PedidoGroupByOutputType = {
    id: number
    empresaId: number
    clienteId: number
    status: string
    pedido: JsonValue
    observacoes: string | null
    valorTotal: number
    criadoEm: Date
    atualizadoEm: Date
    _count: PedidoCountAggregateOutputType | null
    _avg: PedidoAvgAggregateOutputType | null
    _sum: PedidoSumAggregateOutputType | null
    _min: PedidoMinAggregateOutputType | null
    _max: PedidoMaxAggregateOutputType | null
  }

  type GetPedidoGroupByPayload<T extends PedidoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PedidoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PedidoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PedidoGroupByOutputType[P]>
            : GetScalarType<T[P], PedidoGroupByOutputType[P]>
        }
      >
    >


  export type PedidoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    empresaId?: boolean
    clienteId?: boolean
    status?: boolean
    pedido?: boolean
    observacoes?: boolean
    valorTotal?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
    empresa?: boolean | EmpresaDefaultArgs<ExtArgs>
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pedido"]>

  export type PedidoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    empresaId?: boolean
    clienteId?: boolean
    status?: boolean
    pedido?: boolean
    observacoes?: boolean
    valorTotal?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
    empresa?: boolean | EmpresaDefaultArgs<ExtArgs>
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pedido"]>

  export type PedidoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    empresaId?: boolean
    clienteId?: boolean
    status?: boolean
    pedido?: boolean
    observacoes?: boolean
    valorTotal?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
    empresa?: boolean | EmpresaDefaultArgs<ExtArgs>
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pedido"]>

  export type PedidoSelectScalar = {
    id?: boolean
    empresaId?: boolean
    clienteId?: boolean
    status?: boolean
    pedido?: boolean
    observacoes?: boolean
    valorTotal?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
  }

  export type PedidoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "empresaId" | "clienteId" | "status" | "pedido" | "observacoes" | "valorTotal" | "criadoEm" | "atualizadoEm", ExtArgs["result"]["pedido"]>
  export type PedidoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empresa?: boolean | EmpresaDefaultArgs<ExtArgs>
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }
  export type PedidoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empresa?: boolean | EmpresaDefaultArgs<ExtArgs>
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }
  export type PedidoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empresa?: boolean | EmpresaDefaultArgs<ExtArgs>
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }

  export type $PedidoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pedido"
    objects: {
      empresa: Prisma.$EmpresaPayload<ExtArgs>
      cliente: Prisma.$ClientePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      empresaId: number
      clienteId: number
      status: string
      pedido: Prisma.JsonValue
      observacoes: string | null
      valorTotal: number
      criadoEm: Date
      atualizadoEm: Date
    }, ExtArgs["result"]["pedido"]>
    composites: {}
  }

  type PedidoGetPayload<S extends boolean | null | undefined | PedidoDefaultArgs> = $Result.GetResult<Prisma.$PedidoPayload, S>

  type PedidoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PedidoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PedidoCountAggregateInputType | true
    }

  export interface PedidoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pedido'], meta: { name: 'Pedido' } }
    /**
     * Find zero or one Pedido that matches the filter.
     * @param {PedidoFindUniqueArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PedidoFindUniqueArgs>(args: SelectSubset<T, PedidoFindUniqueArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pedido that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PedidoFindUniqueOrThrowArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PedidoFindUniqueOrThrowArgs>(args: SelectSubset<T, PedidoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pedido that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoFindFirstArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PedidoFindFirstArgs>(args?: SelectSubset<T, PedidoFindFirstArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pedido that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoFindFirstOrThrowArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PedidoFindFirstOrThrowArgs>(args?: SelectSubset<T, PedidoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pedidos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pedidos
     * const pedidos = await prisma.pedido.findMany()
     * 
     * // Get first 10 Pedidos
     * const pedidos = await prisma.pedido.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pedidoWithIdOnly = await prisma.pedido.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PedidoFindManyArgs>(args?: SelectSubset<T, PedidoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pedido.
     * @param {PedidoCreateArgs} args - Arguments to create a Pedido.
     * @example
     * // Create one Pedido
     * const Pedido = await prisma.pedido.create({
     *   data: {
     *     // ... data to create a Pedido
     *   }
     * })
     * 
     */
    create<T extends PedidoCreateArgs>(args: SelectSubset<T, PedidoCreateArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pedidos.
     * @param {PedidoCreateManyArgs} args - Arguments to create many Pedidos.
     * @example
     * // Create many Pedidos
     * const pedido = await prisma.pedido.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PedidoCreateManyArgs>(args?: SelectSubset<T, PedidoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pedidos and returns the data saved in the database.
     * @param {PedidoCreateManyAndReturnArgs} args - Arguments to create many Pedidos.
     * @example
     * // Create many Pedidos
     * const pedido = await prisma.pedido.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pedidos and only return the `id`
     * const pedidoWithIdOnly = await prisma.pedido.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PedidoCreateManyAndReturnArgs>(args?: SelectSubset<T, PedidoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pedido.
     * @param {PedidoDeleteArgs} args - Arguments to delete one Pedido.
     * @example
     * // Delete one Pedido
     * const Pedido = await prisma.pedido.delete({
     *   where: {
     *     // ... filter to delete one Pedido
     *   }
     * })
     * 
     */
    delete<T extends PedidoDeleteArgs>(args: SelectSubset<T, PedidoDeleteArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pedido.
     * @param {PedidoUpdateArgs} args - Arguments to update one Pedido.
     * @example
     * // Update one Pedido
     * const pedido = await prisma.pedido.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PedidoUpdateArgs>(args: SelectSubset<T, PedidoUpdateArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pedidos.
     * @param {PedidoDeleteManyArgs} args - Arguments to filter Pedidos to delete.
     * @example
     * // Delete a few Pedidos
     * const { count } = await prisma.pedido.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PedidoDeleteManyArgs>(args?: SelectSubset<T, PedidoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pedidos
     * const pedido = await prisma.pedido.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PedidoUpdateManyArgs>(args: SelectSubset<T, PedidoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pedidos and returns the data updated in the database.
     * @param {PedidoUpdateManyAndReturnArgs} args - Arguments to update many Pedidos.
     * @example
     * // Update many Pedidos
     * const pedido = await prisma.pedido.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pedidos and only return the `id`
     * const pedidoWithIdOnly = await prisma.pedido.updateManyAndReturn({
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
    updateManyAndReturn<T extends PedidoUpdateManyAndReturnArgs>(args: SelectSubset<T, PedidoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pedido.
     * @param {PedidoUpsertArgs} args - Arguments to update or create a Pedido.
     * @example
     * // Update or create a Pedido
     * const pedido = await prisma.pedido.upsert({
     *   create: {
     *     // ... data to create a Pedido
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pedido we want to update
     *   }
     * })
     */
    upsert<T extends PedidoUpsertArgs>(args: SelectSubset<T, PedidoUpsertArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoCountArgs} args - Arguments to filter Pedidos to count.
     * @example
     * // Count the number of Pedidos
     * const count = await prisma.pedido.count({
     *   where: {
     *     // ... the filter for the Pedidos we want to count
     *   }
     * })
    **/
    count<T extends PedidoCountArgs>(
      args?: Subset<T, PedidoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PedidoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PedidoAggregateArgs>(args: Subset<T, PedidoAggregateArgs>): Prisma.PrismaPromise<GetPedidoAggregateType<T>>

    /**
     * Group by Pedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoGroupByArgs} args - Group by arguments.
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
      T extends PedidoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PedidoGroupByArgs['orderBy'] }
        : { orderBy?: PedidoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PedidoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPedidoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pedido model
   */
  readonly fields: PedidoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pedido.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PedidoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    empresa<T extends EmpresaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmpresaDefaultArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cliente<T extends ClienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClienteDefaultArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Pedido model
   */
  interface PedidoFieldRefs {
    readonly id: FieldRef<"Pedido", 'Int'>
    readonly empresaId: FieldRef<"Pedido", 'Int'>
    readonly clienteId: FieldRef<"Pedido", 'Int'>
    readonly status: FieldRef<"Pedido", 'String'>
    readonly pedido: FieldRef<"Pedido", 'Json'>
    readonly observacoes: FieldRef<"Pedido", 'String'>
    readonly valorTotal: FieldRef<"Pedido", 'Float'>
    readonly criadoEm: FieldRef<"Pedido", 'DateTime'>
    readonly atualizadoEm: FieldRef<"Pedido", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Pedido findUnique
   */
  export type PedidoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedido to fetch.
     */
    where: PedidoWhereUniqueInput
  }

  /**
   * Pedido findUniqueOrThrow
   */
  export type PedidoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedido to fetch.
     */
    where: PedidoWhereUniqueInput
  }

  /**
   * Pedido findFirst
   */
  export type PedidoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedido to fetch.
     */
    where?: PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pedidos.
     */
    cursor?: PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pedidos.
     */
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Pedido findFirstOrThrow
   */
  export type PedidoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedido to fetch.
     */
    where?: PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pedidos.
     */
    cursor?: PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pedidos.
     */
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Pedido findMany
   */
  export type PedidoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedidos to fetch.
     */
    where?: PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pedidos.
     */
    cursor?: PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pedidos.
     */
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Pedido create
   */
  export type PedidoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * The data needed to create a Pedido.
     */
    data: XOR<PedidoCreateInput, PedidoUncheckedCreateInput>
  }

  /**
   * Pedido createMany
   */
  export type PedidoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pedidos.
     */
    data: PedidoCreateManyInput | PedidoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pedido createManyAndReturn
   */
  export type PedidoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * The data used to create many Pedidos.
     */
    data: PedidoCreateManyInput | PedidoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pedido update
   */
  export type PedidoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * The data needed to update a Pedido.
     */
    data: XOR<PedidoUpdateInput, PedidoUncheckedUpdateInput>
    /**
     * Choose, which Pedido to update.
     */
    where: PedidoWhereUniqueInput
  }

  /**
   * Pedido updateMany
   */
  export type PedidoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pedidos.
     */
    data: XOR<PedidoUpdateManyMutationInput, PedidoUncheckedUpdateManyInput>
    /**
     * Filter which Pedidos to update
     */
    where?: PedidoWhereInput
    /**
     * Limit how many Pedidos to update.
     */
    limit?: number
  }

  /**
   * Pedido updateManyAndReturn
   */
  export type PedidoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * The data used to update Pedidos.
     */
    data: XOR<PedidoUpdateManyMutationInput, PedidoUncheckedUpdateManyInput>
    /**
     * Filter which Pedidos to update
     */
    where?: PedidoWhereInput
    /**
     * Limit how many Pedidos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pedido upsert
   */
  export type PedidoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * The filter to search for the Pedido to update in case it exists.
     */
    where: PedidoWhereUniqueInput
    /**
     * In case the Pedido found by the `where` argument doesn't exist, create a new Pedido with this data.
     */
    create: XOR<PedidoCreateInput, PedidoUncheckedCreateInput>
    /**
     * In case the Pedido was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PedidoUpdateInput, PedidoUncheckedUpdateInput>
  }

  /**
   * Pedido delete
   */
  export type PedidoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter which Pedido to delete.
     */
    where: PedidoWhereUniqueInput
  }

  /**
   * Pedido deleteMany
   */
  export type PedidoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pedidos to delete
     */
    where?: PedidoWhereInput
    /**
     * Limit how many Pedidos to delete.
     */
    limit?: number
  }

  /**
   * Pedido without action
   */
  export type PedidoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
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


  export const EmpresaScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    senha: 'senha',
    createdAt: 'createdAt'
  };

  export type EmpresaScalarFieldEnum = (typeof EmpresaScalarFieldEnum)[keyof typeof EmpresaScalarFieldEnum]


  export const InsumoScalarFieldEnum: {
    id: 'id',
    empresaId: 'empresaId',
    nome: 'nome',
    unidadeMedida: 'unidadeMedida',
    quantidadeAtual: 'quantidadeAtual',
    estoqueMinimo: 'estoqueMinimo'
  };

  export type InsumoScalarFieldEnum = (typeof InsumoScalarFieldEnum)[keyof typeof InsumoScalarFieldEnum]


  export const ProdutoScalarFieldEnum: {
    id: 'id',
    empresaId: 'empresaId',
    nome: 'nome',
    descricao: 'descricao',
    preco: 'preco',
    categoria: 'categoria',
    disponivel: 'disponivel'
  };

  export type ProdutoScalarFieldEnum = (typeof ProdutoScalarFieldEnum)[keyof typeof ProdutoScalarFieldEnum]


  export const ProdutoInsumoScalarFieldEnum: {
    id: 'id',
    produtoId: 'produtoId',
    insumoId: 'insumoId',
    quantidadeGasta: 'quantidadeGasta'
  };

  export type ProdutoInsumoScalarFieldEnum = (typeof ProdutoInsumoScalarFieldEnum)[keyof typeof ProdutoInsumoScalarFieldEnum]


  export const ClienteScalarFieldEnum: {
    id: 'id',
    empresaId: 'empresaId',
    telefone: 'telefone',
    nome: 'nome',
    endereco: 'endereco',
    criadoEm: 'criadoEm',
    atualizadoEm: 'atualizadoEm'
  };

  export type ClienteScalarFieldEnum = (typeof ClienteScalarFieldEnum)[keyof typeof ClienteScalarFieldEnum]


  export const PedidoScalarFieldEnum: {
    id: 'id',
    empresaId: 'empresaId',
    clienteId: 'clienteId',
    status: 'status',
    pedido: 'pedido',
    observacoes: 'observacoes',
    valorTotal: 'valorTotal',
    criadoEm: 'criadoEm',
    atualizadoEm: 'atualizadoEm'
  };

  export type PedidoScalarFieldEnum = (typeof PedidoScalarFieldEnum)[keyof typeof PedidoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    
  /**
   * Deep Input Types
   */


  export type EmpresaWhereInput = {
    AND?: EmpresaWhereInput | EmpresaWhereInput[]
    OR?: EmpresaWhereInput[]
    NOT?: EmpresaWhereInput | EmpresaWhereInput[]
    id?: IntFilter<"Empresa"> | number
    nome?: StringFilter<"Empresa"> | string
    email?: StringFilter<"Empresa"> | string
    senha?: StringFilter<"Empresa"> | string
    createdAt?: DateTimeFilter<"Empresa"> | Date | string
    insumos?: InsumoListRelationFilter
    produtos?: ProdutoListRelationFilter
    clientes?: ClienteListRelationFilter
    pedidos?: PedidoListRelationFilter
  }

  export type EmpresaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    createdAt?: SortOrder
    insumos?: InsumoOrderByRelationAggregateInput
    produtos?: ProdutoOrderByRelationAggregateInput
    clientes?: ClienteOrderByRelationAggregateInput
    pedidos?: PedidoOrderByRelationAggregateInput
  }

  export type EmpresaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: EmpresaWhereInput | EmpresaWhereInput[]
    OR?: EmpresaWhereInput[]
    NOT?: EmpresaWhereInput | EmpresaWhereInput[]
    nome?: StringFilter<"Empresa"> | string
    senha?: StringFilter<"Empresa"> | string
    createdAt?: DateTimeFilter<"Empresa"> | Date | string
    insumos?: InsumoListRelationFilter
    produtos?: ProdutoListRelationFilter
    clientes?: ClienteListRelationFilter
    pedidos?: PedidoListRelationFilter
  }, "id" | "email">

  export type EmpresaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    createdAt?: SortOrder
    _count?: EmpresaCountOrderByAggregateInput
    _avg?: EmpresaAvgOrderByAggregateInput
    _max?: EmpresaMaxOrderByAggregateInput
    _min?: EmpresaMinOrderByAggregateInput
    _sum?: EmpresaSumOrderByAggregateInput
  }

  export type EmpresaScalarWhereWithAggregatesInput = {
    AND?: EmpresaScalarWhereWithAggregatesInput | EmpresaScalarWhereWithAggregatesInput[]
    OR?: EmpresaScalarWhereWithAggregatesInput[]
    NOT?: EmpresaScalarWhereWithAggregatesInput | EmpresaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Empresa"> | number
    nome?: StringWithAggregatesFilter<"Empresa"> | string
    email?: StringWithAggregatesFilter<"Empresa"> | string
    senha?: StringWithAggregatesFilter<"Empresa"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Empresa"> | Date | string
  }

  export type InsumoWhereInput = {
    AND?: InsumoWhereInput | InsumoWhereInput[]
    OR?: InsumoWhereInput[]
    NOT?: InsumoWhereInput | InsumoWhereInput[]
    id?: IntFilter<"Insumo"> | number
    empresaId?: IntFilter<"Insumo"> | number
    nome?: StringFilter<"Insumo"> | string
    unidadeMedida?: StringFilter<"Insumo"> | string
    quantidadeAtual?: FloatFilter<"Insumo"> | number
    estoqueMinimo?: FloatFilter<"Insumo"> | number
    empresa?: XOR<EmpresaScalarRelationFilter, EmpresaWhereInput>
    receitas?: ProdutoInsumoListRelationFilter
  }

  export type InsumoOrderByWithRelationInput = {
    id?: SortOrder
    empresaId?: SortOrder
    nome?: SortOrder
    unidadeMedida?: SortOrder
    quantidadeAtual?: SortOrder
    estoqueMinimo?: SortOrder
    empresa?: EmpresaOrderByWithRelationInput
    receitas?: ProdutoInsumoOrderByRelationAggregateInput
  }

  export type InsumoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: InsumoWhereInput | InsumoWhereInput[]
    OR?: InsumoWhereInput[]
    NOT?: InsumoWhereInput | InsumoWhereInput[]
    empresaId?: IntFilter<"Insumo"> | number
    nome?: StringFilter<"Insumo"> | string
    unidadeMedida?: StringFilter<"Insumo"> | string
    quantidadeAtual?: FloatFilter<"Insumo"> | number
    estoqueMinimo?: FloatFilter<"Insumo"> | number
    empresa?: XOR<EmpresaScalarRelationFilter, EmpresaWhereInput>
    receitas?: ProdutoInsumoListRelationFilter
  }, "id">

  export type InsumoOrderByWithAggregationInput = {
    id?: SortOrder
    empresaId?: SortOrder
    nome?: SortOrder
    unidadeMedida?: SortOrder
    quantidadeAtual?: SortOrder
    estoqueMinimo?: SortOrder
    _count?: InsumoCountOrderByAggregateInput
    _avg?: InsumoAvgOrderByAggregateInput
    _max?: InsumoMaxOrderByAggregateInput
    _min?: InsumoMinOrderByAggregateInput
    _sum?: InsumoSumOrderByAggregateInput
  }

  export type InsumoScalarWhereWithAggregatesInput = {
    AND?: InsumoScalarWhereWithAggregatesInput | InsumoScalarWhereWithAggregatesInput[]
    OR?: InsumoScalarWhereWithAggregatesInput[]
    NOT?: InsumoScalarWhereWithAggregatesInput | InsumoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Insumo"> | number
    empresaId?: IntWithAggregatesFilter<"Insumo"> | number
    nome?: StringWithAggregatesFilter<"Insumo"> | string
    unidadeMedida?: StringWithAggregatesFilter<"Insumo"> | string
    quantidadeAtual?: FloatWithAggregatesFilter<"Insumo"> | number
    estoqueMinimo?: FloatWithAggregatesFilter<"Insumo"> | number
  }

  export type ProdutoWhereInput = {
    AND?: ProdutoWhereInput | ProdutoWhereInput[]
    OR?: ProdutoWhereInput[]
    NOT?: ProdutoWhereInput | ProdutoWhereInput[]
    id?: IntFilter<"Produto"> | number
    empresaId?: IntFilter<"Produto"> | number
    nome?: StringFilter<"Produto"> | string
    descricao?: StringNullableFilter<"Produto"> | string | null
    preco?: FloatFilter<"Produto"> | number
    categoria?: StringFilter<"Produto"> | string
    disponivel?: BoolFilter<"Produto"> | boolean
    ingredientes?: ProdutoInsumoListRelationFilter
    empresa?: XOR<EmpresaScalarRelationFilter, EmpresaWhereInput>
  }

  export type ProdutoOrderByWithRelationInput = {
    id?: SortOrder
    empresaId?: SortOrder
    nome?: SortOrder
    descricao?: SortOrderInput | SortOrder
    preco?: SortOrder
    categoria?: SortOrder
    disponivel?: SortOrder
    ingredientes?: ProdutoInsumoOrderByRelationAggregateInput
    empresa?: EmpresaOrderByWithRelationInput
  }

  export type ProdutoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    empresaId_nome?: ProdutoEmpresaIdNomeCompoundUniqueInput
    AND?: ProdutoWhereInput | ProdutoWhereInput[]
    OR?: ProdutoWhereInput[]
    NOT?: ProdutoWhereInput | ProdutoWhereInput[]
    empresaId?: IntFilter<"Produto"> | number
    nome?: StringFilter<"Produto"> | string
    descricao?: StringNullableFilter<"Produto"> | string | null
    preco?: FloatFilter<"Produto"> | number
    categoria?: StringFilter<"Produto"> | string
    disponivel?: BoolFilter<"Produto"> | boolean
    ingredientes?: ProdutoInsumoListRelationFilter
    empresa?: XOR<EmpresaScalarRelationFilter, EmpresaWhereInput>
  }, "id" | "empresaId_nome">

  export type ProdutoOrderByWithAggregationInput = {
    id?: SortOrder
    empresaId?: SortOrder
    nome?: SortOrder
    descricao?: SortOrderInput | SortOrder
    preco?: SortOrder
    categoria?: SortOrder
    disponivel?: SortOrder
    _count?: ProdutoCountOrderByAggregateInput
    _avg?: ProdutoAvgOrderByAggregateInput
    _max?: ProdutoMaxOrderByAggregateInput
    _min?: ProdutoMinOrderByAggregateInput
    _sum?: ProdutoSumOrderByAggregateInput
  }

  export type ProdutoScalarWhereWithAggregatesInput = {
    AND?: ProdutoScalarWhereWithAggregatesInput | ProdutoScalarWhereWithAggregatesInput[]
    OR?: ProdutoScalarWhereWithAggregatesInput[]
    NOT?: ProdutoScalarWhereWithAggregatesInput | ProdutoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Produto"> | number
    empresaId?: IntWithAggregatesFilter<"Produto"> | number
    nome?: StringWithAggregatesFilter<"Produto"> | string
    descricao?: StringNullableWithAggregatesFilter<"Produto"> | string | null
    preco?: FloatWithAggregatesFilter<"Produto"> | number
    categoria?: StringWithAggregatesFilter<"Produto"> | string
    disponivel?: BoolWithAggregatesFilter<"Produto"> | boolean
  }

  export type ProdutoInsumoWhereInput = {
    AND?: ProdutoInsumoWhereInput | ProdutoInsumoWhereInput[]
    OR?: ProdutoInsumoWhereInput[]
    NOT?: ProdutoInsumoWhereInput | ProdutoInsumoWhereInput[]
    id?: IntFilter<"ProdutoInsumo"> | number
    produtoId?: IntFilter<"ProdutoInsumo"> | number
    insumoId?: IntFilter<"ProdutoInsumo"> | number
    quantidadeGasta?: FloatFilter<"ProdutoInsumo"> | number
    produto?: XOR<ProdutoScalarRelationFilter, ProdutoWhereInput>
    insumo?: XOR<InsumoScalarRelationFilter, InsumoWhereInput>
  }

  export type ProdutoInsumoOrderByWithRelationInput = {
    id?: SortOrder
    produtoId?: SortOrder
    insumoId?: SortOrder
    quantidadeGasta?: SortOrder
    produto?: ProdutoOrderByWithRelationInput
    insumo?: InsumoOrderByWithRelationInput
  }

  export type ProdutoInsumoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProdutoInsumoWhereInput | ProdutoInsumoWhereInput[]
    OR?: ProdutoInsumoWhereInput[]
    NOT?: ProdutoInsumoWhereInput | ProdutoInsumoWhereInput[]
    produtoId?: IntFilter<"ProdutoInsumo"> | number
    insumoId?: IntFilter<"ProdutoInsumo"> | number
    quantidadeGasta?: FloatFilter<"ProdutoInsumo"> | number
    produto?: XOR<ProdutoScalarRelationFilter, ProdutoWhereInput>
    insumo?: XOR<InsumoScalarRelationFilter, InsumoWhereInput>
  }, "id">

  export type ProdutoInsumoOrderByWithAggregationInput = {
    id?: SortOrder
    produtoId?: SortOrder
    insumoId?: SortOrder
    quantidadeGasta?: SortOrder
    _count?: ProdutoInsumoCountOrderByAggregateInput
    _avg?: ProdutoInsumoAvgOrderByAggregateInput
    _max?: ProdutoInsumoMaxOrderByAggregateInput
    _min?: ProdutoInsumoMinOrderByAggregateInput
    _sum?: ProdutoInsumoSumOrderByAggregateInput
  }

  export type ProdutoInsumoScalarWhereWithAggregatesInput = {
    AND?: ProdutoInsumoScalarWhereWithAggregatesInput | ProdutoInsumoScalarWhereWithAggregatesInput[]
    OR?: ProdutoInsumoScalarWhereWithAggregatesInput[]
    NOT?: ProdutoInsumoScalarWhereWithAggregatesInput | ProdutoInsumoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProdutoInsumo"> | number
    produtoId?: IntWithAggregatesFilter<"ProdutoInsumo"> | number
    insumoId?: IntWithAggregatesFilter<"ProdutoInsumo"> | number
    quantidadeGasta?: FloatWithAggregatesFilter<"ProdutoInsumo"> | number
  }

  export type ClienteWhereInput = {
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    id?: IntFilter<"Cliente"> | number
    empresaId?: IntFilter<"Cliente"> | number
    telefone?: StringFilter<"Cliente"> | string
    nome?: StringFilter<"Cliente"> | string
    endereco?: StringFilter<"Cliente"> | string
    criadoEm?: DateTimeFilter<"Cliente"> | Date | string
    atualizadoEm?: DateTimeFilter<"Cliente"> | Date | string
    empresa?: XOR<EmpresaScalarRelationFilter, EmpresaWhereInput>
    pedidos?: PedidoListRelationFilter
  }

  export type ClienteOrderByWithRelationInput = {
    id?: SortOrder
    empresaId?: SortOrder
    telefone?: SortOrder
    nome?: SortOrder
    endereco?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    empresa?: EmpresaOrderByWithRelationInput
    pedidos?: PedidoOrderByRelationAggregateInput
  }

  export type ClienteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    empresaId_telefone?: ClienteEmpresaIdTelefoneCompoundUniqueInput
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    empresaId?: IntFilter<"Cliente"> | number
    telefone?: StringFilter<"Cliente"> | string
    nome?: StringFilter<"Cliente"> | string
    endereco?: StringFilter<"Cliente"> | string
    criadoEm?: DateTimeFilter<"Cliente"> | Date | string
    atualizadoEm?: DateTimeFilter<"Cliente"> | Date | string
    empresa?: XOR<EmpresaScalarRelationFilter, EmpresaWhereInput>
    pedidos?: PedidoListRelationFilter
  }, "id" | "empresaId_telefone">

  export type ClienteOrderByWithAggregationInput = {
    id?: SortOrder
    empresaId?: SortOrder
    telefone?: SortOrder
    nome?: SortOrder
    endereco?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    _count?: ClienteCountOrderByAggregateInput
    _avg?: ClienteAvgOrderByAggregateInput
    _max?: ClienteMaxOrderByAggregateInput
    _min?: ClienteMinOrderByAggregateInput
    _sum?: ClienteSumOrderByAggregateInput
  }

  export type ClienteScalarWhereWithAggregatesInput = {
    AND?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    OR?: ClienteScalarWhereWithAggregatesInput[]
    NOT?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Cliente"> | number
    empresaId?: IntWithAggregatesFilter<"Cliente"> | number
    telefone?: StringWithAggregatesFilter<"Cliente"> | string
    nome?: StringWithAggregatesFilter<"Cliente"> | string
    endereco?: StringWithAggregatesFilter<"Cliente"> | string
    criadoEm?: DateTimeWithAggregatesFilter<"Cliente"> | Date | string
    atualizadoEm?: DateTimeWithAggregatesFilter<"Cliente"> | Date | string
  }

  export type PedidoWhereInput = {
    AND?: PedidoWhereInput | PedidoWhereInput[]
    OR?: PedidoWhereInput[]
    NOT?: PedidoWhereInput | PedidoWhereInput[]
    id?: IntFilter<"Pedido"> | number
    empresaId?: IntFilter<"Pedido"> | number
    clienteId?: IntFilter<"Pedido"> | number
    status?: StringFilter<"Pedido"> | string
    pedido?: JsonFilter<"Pedido">
    observacoes?: StringNullableFilter<"Pedido"> | string | null
    valorTotal?: FloatFilter<"Pedido"> | number
    criadoEm?: DateTimeFilter<"Pedido"> | Date | string
    atualizadoEm?: DateTimeFilter<"Pedido"> | Date | string
    empresa?: XOR<EmpresaScalarRelationFilter, EmpresaWhereInput>
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
  }

  export type PedidoOrderByWithRelationInput = {
    id?: SortOrder
    empresaId?: SortOrder
    clienteId?: SortOrder
    status?: SortOrder
    pedido?: SortOrder
    observacoes?: SortOrderInput | SortOrder
    valorTotal?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    empresa?: EmpresaOrderByWithRelationInput
    cliente?: ClienteOrderByWithRelationInput
  }

  export type PedidoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PedidoWhereInput | PedidoWhereInput[]
    OR?: PedidoWhereInput[]
    NOT?: PedidoWhereInput | PedidoWhereInput[]
    empresaId?: IntFilter<"Pedido"> | number
    clienteId?: IntFilter<"Pedido"> | number
    status?: StringFilter<"Pedido"> | string
    pedido?: JsonFilter<"Pedido">
    observacoes?: StringNullableFilter<"Pedido"> | string | null
    valorTotal?: FloatFilter<"Pedido"> | number
    criadoEm?: DateTimeFilter<"Pedido"> | Date | string
    atualizadoEm?: DateTimeFilter<"Pedido"> | Date | string
    empresa?: XOR<EmpresaScalarRelationFilter, EmpresaWhereInput>
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
  }, "id">

  export type PedidoOrderByWithAggregationInput = {
    id?: SortOrder
    empresaId?: SortOrder
    clienteId?: SortOrder
    status?: SortOrder
    pedido?: SortOrder
    observacoes?: SortOrderInput | SortOrder
    valorTotal?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    _count?: PedidoCountOrderByAggregateInput
    _avg?: PedidoAvgOrderByAggregateInput
    _max?: PedidoMaxOrderByAggregateInput
    _min?: PedidoMinOrderByAggregateInput
    _sum?: PedidoSumOrderByAggregateInput
  }

  export type PedidoScalarWhereWithAggregatesInput = {
    AND?: PedidoScalarWhereWithAggregatesInput | PedidoScalarWhereWithAggregatesInput[]
    OR?: PedidoScalarWhereWithAggregatesInput[]
    NOT?: PedidoScalarWhereWithAggregatesInput | PedidoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Pedido"> | number
    empresaId?: IntWithAggregatesFilter<"Pedido"> | number
    clienteId?: IntWithAggregatesFilter<"Pedido"> | number
    status?: StringWithAggregatesFilter<"Pedido"> | string
    pedido?: JsonWithAggregatesFilter<"Pedido">
    observacoes?: StringNullableWithAggregatesFilter<"Pedido"> | string | null
    valorTotal?: FloatWithAggregatesFilter<"Pedido"> | number
    criadoEm?: DateTimeWithAggregatesFilter<"Pedido"> | Date | string
    atualizadoEm?: DateTimeWithAggregatesFilter<"Pedido"> | Date | string
  }

  export type EmpresaCreateInput = {
    nome: string
    email: string
    senha: string
    createdAt?: Date | string
    insumos?: InsumoCreateNestedManyWithoutEmpresaInput
    produtos?: ProdutoCreateNestedManyWithoutEmpresaInput
    clientes?: ClienteCreateNestedManyWithoutEmpresaInput
    pedidos?: PedidoCreateNestedManyWithoutEmpresaInput
  }

  export type EmpresaUncheckedCreateInput = {
    id?: number
    nome: string
    email: string
    senha: string
    createdAt?: Date | string
    insumos?: InsumoUncheckedCreateNestedManyWithoutEmpresaInput
    produtos?: ProdutoUncheckedCreateNestedManyWithoutEmpresaInput
    clientes?: ClienteUncheckedCreateNestedManyWithoutEmpresaInput
    pedidos?: PedidoUncheckedCreateNestedManyWithoutEmpresaInput
  }

  export type EmpresaUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    insumos?: InsumoUpdateManyWithoutEmpresaNestedInput
    produtos?: ProdutoUpdateManyWithoutEmpresaNestedInput
    clientes?: ClienteUpdateManyWithoutEmpresaNestedInput
    pedidos?: PedidoUpdateManyWithoutEmpresaNestedInput
  }

  export type EmpresaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    insumos?: InsumoUncheckedUpdateManyWithoutEmpresaNestedInput
    produtos?: ProdutoUncheckedUpdateManyWithoutEmpresaNestedInput
    clientes?: ClienteUncheckedUpdateManyWithoutEmpresaNestedInput
    pedidos?: PedidoUncheckedUpdateManyWithoutEmpresaNestedInput
  }

  export type EmpresaCreateManyInput = {
    id?: number
    nome: string
    email: string
    senha: string
    createdAt?: Date | string
  }

  export type EmpresaUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmpresaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InsumoCreateInput = {
    nome: string
    unidadeMedida: string
    quantidadeAtual: number
    estoqueMinimo: number
    empresa: EmpresaCreateNestedOneWithoutInsumosInput
    receitas?: ProdutoInsumoCreateNestedManyWithoutInsumoInput
  }

  export type InsumoUncheckedCreateInput = {
    id?: number
    empresaId: number
    nome: string
    unidadeMedida: string
    quantidadeAtual: number
    estoqueMinimo: number
    receitas?: ProdutoInsumoUncheckedCreateNestedManyWithoutInsumoInput
  }

  export type InsumoUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    unidadeMedida?: StringFieldUpdateOperationsInput | string
    quantidadeAtual?: FloatFieldUpdateOperationsInput | number
    estoqueMinimo?: FloatFieldUpdateOperationsInput | number
    empresa?: EmpresaUpdateOneRequiredWithoutInsumosNestedInput
    receitas?: ProdutoInsumoUpdateManyWithoutInsumoNestedInput
  }

  export type InsumoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    empresaId?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    unidadeMedida?: StringFieldUpdateOperationsInput | string
    quantidadeAtual?: FloatFieldUpdateOperationsInput | number
    estoqueMinimo?: FloatFieldUpdateOperationsInput | number
    receitas?: ProdutoInsumoUncheckedUpdateManyWithoutInsumoNestedInput
  }

  export type InsumoCreateManyInput = {
    id?: number
    empresaId: number
    nome: string
    unidadeMedida: string
    quantidadeAtual: number
    estoqueMinimo: number
  }

  export type InsumoUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    unidadeMedida?: StringFieldUpdateOperationsInput | string
    quantidadeAtual?: FloatFieldUpdateOperationsInput | number
    estoqueMinimo?: FloatFieldUpdateOperationsInput | number
  }

  export type InsumoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    empresaId?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    unidadeMedida?: StringFieldUpdateOperationsInput | string
    quantidadeAtual?: FloatFieldUpdateOperationsInput | number
    estoqueMinimo?: FloatFieldUpdateOperationsInput | number
  }

  export type ProdutoCreateInput = {
    nome: string
    descricao?: string | null
    preco: number
    categoria: string
    disponivel?: boolean
    ingredientes?: ProdutoInsumoCreateNestedManyWithoutProdutoInput
    empresa: EmpresaCreateNestedOneWithoutProdutosInput
  }

  export type ProdutoUncheckedCreateInput = {
    id?: number
    empresaId: number
    nome: string
    descricao?: string | null
    preco: number
    categoria: string
    disponivel?: boolean
    ingredientes?: ProdutoInsumoUncheckedCreateNestedManyWithoutProdutoInput
  }

  export type ProdutoUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    preco?: FloatFieldUpdateOperationsInput | number
    categoria?: StringFieldUpdateOperationsInput | string
    disponivel?: BoolFieldUpdateOperationsInput | boolean
    ingredientes?: ProdutoInsumoUpdateManyWithoutProdutoNestedInput
    empresa?: EmpresaUpdateOneRequiredWithoutProdutosNestedInput
  }

  export type ProdutoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    empresaId?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    preco?: FloatFieldUpdateOperationsInput | number
    categoria?: StringFieldUpdateOperationsInput | string
    disponivel?: BoolFieldUpdateOperationsInput | boolean
    ingredientes?: ProdutoInsumoUncheckedUpdateManyWithoutProdutoNestedInput
  }

  export type ProdutoCreateManyInput = {
    id?: number
    empresaId: number
    nome: string
    descricao?: string | null
    preco: number
    categoria: string
    disponivel?: boolean
  }

  export type ProdutoUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    preco?: FloatFieldUpdateOperationsInput | number
    categoria?: StringFieldUpdateOperationsInput | string
    disponivel?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProdutoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    empresaId?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    preco?: FloatFieldUpdateOperationsInput | number
    categoria?: StringFieldUpdateOperationsInput | string
    disponivel?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProdutoInsumoCreateInput = {
    quantidadeGasta: number
    produto: ProdutoCreateNestedOneWithoutIngredientesInput
    insumo: InsumoCreateNestedOneWithoutReceitasInput
  }

  export type ProdutoInsumoUncheckedCreateInput = {
    id?: number
    produtoId: number
    insumoId: number
    quantidadeGasta: number
  }

  export type ProdutoInsumoUpdateInput = {
    quantidadeGasta?: FloatFieldUpdateOperationsInput | number
    produto?: ProdutoUpdateOneRequiredWithoutIngredientesNestedInput
    insumo?: InsumoUpdateOneRequiredWithoutReceitasNestedInput
  }

  export type ProdutoInsumoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    produtoId?: IntFieldUpdateOperationsInput | number
    insumoId?: IntFieldUpdateOperationsInput | number
    quantidadeGasta?: FloatFieldUpdateOperationsInput | number
  }

  export type ProdutoInsumoCreateManyInput = {
    id?: number
    produtoId: number
    insumoId: number
    quantidadeGasta: number
  }

  export type ProdutoInsumoUpdateManyMutationInput = {
    quantidadeGasta?: FloatFieldUpdateOperationsInput | number
  }

  export type ProdutoInsumoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    produtoId?: IntFieldUpdateOperationsInput | number
    insumoId?: IntFieldUpdateOperationsInput | number
    quantidadeGasta?: FloatFieldUpdateOperationsInput | number
  }

  export type ClienteCreateInput = {
    telefone: string
    nome: string
    endereco: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    empresa: EmpresaCreateNestedOneWithoutClientesInput
    pedidos?: PedidoCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateInput = {
    id?: number
    empresaId: number
    telefone: string
    nome: string
    endereco: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    pedidos?: PedidoUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteUpdateInput = {
    telefone?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    empresa?: EmpresaUpdateOneRequiredWithoutClientesNestedInput
    pedidos?: PedidoUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    empresaId?: IntFieldUpdateOperationsInput | number
    telefone?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    pedidos?: PedidoUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type ClienteCreateManyInput = {
    id?: number
    empresaId: number
    telefone: string
    nome: string
    endereco: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type ClienteUpdateManyMutationInput = {
    telefone?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClienteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    empresaId?: IntFieldUpdateOperationsInput | number
    telefone?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PedidoCreateInput = {
    status?: string
    pedido: JsonNullValueInput | InputJsonValue
    observacoes?: string | null
    valorTotal?: number
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    empresa: EmpresaCreateNestedOneWithoutPedidosInput
    cliente: ClienteCreateNestedOneWithoutPedidosInput
  }

  export type PedidoUncheckedCreateInput = {
    id?: number
    empresaId: number
    clienteId: number
    status?: string
    pedido: JsonNullValueInput | InputJsonValue
    observacoes?: string | null
    valorTotal?: number
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type PedidoUpdateInput = {
    status?: StringFieldUpdateOperationsInput | string
    pedido?: JsonNullValueInput | InputJsonValue
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    valorTotal?: FloatFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    empresa?: EmpresaUpdateOneRequiredWithoutPedidosNestedInput
    cliente?: ClienteUpdateOneRequiredWithoutPedidosNestedInput
  }

  export type PedidoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    empresaId?: IntFieldUpdateOperationsInput | number
    clienteId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    pedido?: JsonNullValueInput | InputJsonValue
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    valorTotal?: FloatFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PedidoCreateManyInput = {
    id?: number
    empresaId: number
    clienteId: number
    status?: string
    pedido: JsonNullValueInput | InputJsonValue
    observacoes?: string | null
    valorTotal?: number
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type PedidoUpdateManyMutationInput = {
    status?: StringFieldUpdateOperationsInput | string
    pedido?: JsonNullValueInput | InputJsonValue
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    valorTotal?: FloatFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PedidoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    empresaId?: IntFieldUpdateOperationsInput | number
    clienteId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    pedido?: JsonNullValueInput | InputJsonValue
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    valorTotal?: FloatFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type InsumoListRelationFilter = {
    every?: InsumoWhereInput
    some?: InsumoWhereInput
    none?: InsumoWhereInput
  }

  export type ProdutoListRelationFilter = {
    every?: ProdutoWhereInput
    some?: ProdutoWhereInput
    none?: ProdutoWhereInput
  }

  export type ClienteListRelationFilter = {
    every?: ClienteWhereInput
    some?: ClienteWhereInput
    none?: ClienteWhereInput
  }

  export type PedidoListRelationFilter = {
    every?: PedidoWhereInput
    some?: PedidoWhereInput
    none?: PedidoWhereInput
  }

  export type InsumoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProdutoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClienteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PedidoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmpresaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    createdAt?: SortOrder
  }

  export type EmpresaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EmpresaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    createdAt?: SortOrder
  }

  export type EmpresaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    createdAt?: SortOrder
  }

  export type EmpresaSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EmpresaScalarRelationFilter = {
    is?: EmpresaWhereInput
    isNot?: EmpresaWhereInput
  }

  export type ProdutoInsumoListRelationFilter = {
    every?: ProdutoInsumoWhereInput
    some?: ProdutoInsumoWhereInput
    none?: ProdutoInsumoWhereInput
  }

  export type ProdutoInsumoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InsumoCountOrderByAggregateInput = {
    id?: SortOrder
    empresaId?: SortOrder
    nome?: SortOrder
    unidadeMedida?: SortOrder
    quantidadeAtual?: SortOrder
    estoqueMinimo?: SortOrder
  }

  export type InsumoAvgOrderByAggregateInput = {
    id?: SortOrder
    empresaId?: SortOrder
    quantidadeAtual?: SortOrder
    estoqueMinimo?: SortOrder
  }

  export type InsumoMaxOrderByAggregateInput = {
    id?: SortOrder
    empresaId?: SortOrder
    nome?: SortOrder
    unidadeMedida?: SortOrder
    quantidadeAtual?: SortOrder
    estoqueMinimo?: SortOrder
  }

  export type InsumoMinOrderByAggregateInput = {
    id?: SortOrder
    empresaId?: SortOrder
    nome?: SortOrder
    unidadeMedida?: SortOrder
    quantidadeAtual?: SortOrder
    estoqueMinimo?: SortOrder
  }

  export type InsumoSumOrderByAggregateInput = {
    id?: SortOrder
    empresaId?: SortOrder
    quantidadeAtual?: SortOrder
    estoqueMinimo?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProdutoEmpresaIdNomeCompoundUniqueInput = {
    empresaId: number
    nome: string
  }

  export type ProdutoCountOrderByAggregateInput = {
    id?: SortOrder
    empresaId?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    preco?: SortOrder
    categoria?: SortOrder
    disponivel?: SortOrder
  }

  export type ProdutoAvgOrderByAggregateInput = {
    id?: SortOrder
    empresaId?: SortOrder
    preco?: SortOrder
  }

  export type ProdutoMaxOrderByAggregateInput = {
    id?: SortOrder
    empresaId?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    preco?: SortOrder
    categoria?: SortOrder
    disponivel?: SortOrder
  }

  export type ProdutoMinOrderByAggregateInput = {
    id?: SortOrder
    empresaId?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    preco?: SortOrder
    categoria?: SortOrder
    disponivel?: SortOrder
  }

  export type ProdutoSumOrderByAggregateInput = {
    id?: SortOrder
    empresaId?: SortOrder
    preco?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ProdutoScalarRelationFilter = {
    is?: ProdutoWhereInput
    isNot?: ProdutoWhereInput
  }

  export type InsumoScalarRelationFilter = {
    is?: InsumoWhereInput
    isNot?: InsumoWhereInput
  }

  export type ProdutoInsumoCountOrderByAggregateInput = {
    id?: SortOrder
    produtoId?: SortOrder
    insumoId?: SortOrder
    quantidadeGasta?: SortOrder
  }

  export type ProdutoInsumoAvgOrderByAggregateInput = {
    id?: SortOrder
    produtoId?: SortOrder
    insumoId?: SortOrder
    quantidadeGasta?: SortOrder
  }

  export type ProdutoInsumoMaxOrderByAggregateInput = {
    id?: SortOrder
    produtoId?: SortOrder
    insumoId?: SortOrder
    quantidadeGasta?: SortOrder
  }

  export type ProdutoInsumoMinOrderByAggregateInput = {
    id?: SortOrder
    produtoId?: SortOrder
    insumoId?: SortOrder
    quantidadeGasta?: SortOrder
  }

  export type ProdutoInsumoSumOrderByAggregateInput = {
    id?: SortOrder
    produtoId?: SortOrder
    insumoId?: SortOrder
    quantidadeGasta?: SortOrder
  }

  export type ClienteEmpresaIdTelefoneCompoundUniqueInput = {
    empresaId: number
    telefone: string
  }

  export type ClienteCountOrderByAggregateInput = {
    id?: SortOrder
    empresaId?: SortOrder
    telefone?: SortOrder
    nome?: SortOrder
    endereco?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type ClienteAvgOrderByAggregateInput = {
    id?: SortOrder
    empresaId?: SortOrder
  }

  export type ClienteMaxOrderByAggregateInput = {
    id?: SortOrder
    empresaId?: SortOrder
    telefone?: SortOrder
    nome?: SortOrder
    endereco?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type ClienteMinOrderByAggregateInput = {
    id?: SortOrder
    empresaId?: SortOrder
    telefone?: SortOrder
    nome?: SortOrder
    endereco?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type ClienteSumOrderByAggregateInput = {
    id?: SortOrder
    empresaId?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ClienteScalarRelationFilter = {
    is?: ClienteWhereInput
    isNot?: ClienteWhereInput
  }

  export type PedidoCountOrderByAggregateInput = {
    id?: SortOrder
    empresaId?: SortOrder
    clienteId?: SortOrder
    status?: SortOrder
    pedido?: SortOrder
    observacoes?: SortOrder
    valorTotal?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type PedidoAvgOrderByAggregateInput = {
    id?: SortOrder
    empresaId?: SortOrder
    clienteId?: SortOrder
    valorTotal?: SortOrder
  }

  export type PedidoMaxOrderByAggregateInput = {
    id?: SortOrder
    empresaId?: SortOrder
    clienteId?: SortOrder
    status?: SortOrder
    observacoes?: SortOrder
    valorTotal?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type PedidoMinOrderByAggregateInput = {
    id?: SortOrder
    empresaId?: SortOrder
    clienteId?: SortOrder
    status?: SortOrder
    observacoes?: SortOrder
    valorTotal?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type PedidoSumOrderByAggregateInput = {
    id?: SortOrder
    empresaId?: SortOrder
    clienteId?: SortOrder
    valorTotal?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type InsumoCreateNestedManyWithoutEmpresaInput = {
    create?: XOR<InsumoCreateWithoutEmpresaInput, InsumoUncheckedCreateWithoutEmpresaInput> | InsumoCreateWithoutEmpresaInput[] | InsumoUncheckedCreateWithoutEmpresaInput[]
    connectOrCreate?: InsumoCreateOrConnectWithoutEmpresaInput | InsumoCreateOrConnectWithoutEmpresaInput[]
    createMany?: InsumoCreateManyEmpresaInputEnvelope
    connect?: InsumoWhereUniqueInput | InsumoWhereUniqueInput[]
  }

  export type ProdutoCreateNestedManyWithoutEmpresaInput = {
    create?: XOR<ProdutoCreateWithoutEmpresaInput, ProdutoUncheckedCreateWithoutEmpresaInput> | ProdutoCreateWithoutEmpresaInput[] | ProdutoUncheckedCreateWithoutEmpresaInput[]
    connectOrCreate?: ProdutoCreateOrConnectWithoutEmpresaInput | ProdutoCreateOrConnectWithoutEmpresaInput[]
    createMany?: ProdutoCreateManyEmpresaInputEnvelope
    connect?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
  }

  export type ClienteCreateNestedManyWithoutEmpresaInput = {
    create?: XOR<ClienteCreateWithoutEmpresaInput, ClienteUncheckedCreateWithoutEmpresaInput> | ClienteCreateWithoutEmpresaInput[] | ClienteUncheckedCreateWithoutEmpresaInput[]
    connectOrCreate?: ClienteCreateOrConnectWithoutEmpresaInput | ClienteCreateOrConnectWithoutEmpresaInput[]
    createMany?: ClienteCreateManyEmpresaInputEnvelope
    connect?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
  }

  export type PedidoCreateNestedManyWithoutEmpresaInput = {
    create?: XOR<PedidoCreateWithoutEmpresaInput, PedidoUncheckedCreateWithoutEmpresaInput> | PedidoCreateWithoutEmpresaInput[] | PedidoUncheckedCreateWithoutEmpresaInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutEmpresaInput | PedidoCreateOrConnectWithoutEmpresaInput[]
    createMany?: PedidoCreateManyEmpresaInputEnvelope
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
  }

  export type InsumoUncheckedCreateNestedManyWithoutEmpresaInput = {
    create?: XOR<InsumoCreateWithoutEmpresaInput, InsumoUncheckedCreateWithoutEmpresaInput> | InsumoCreateWithoutEmpresaInput[] | InsumoUncheckedCreateWithoutEmpresaInput[]
    connectOrCreate?: InsumoCreateOrConnectWithoutEmpresaInput | InsumoCreateOrConnectWithoutEmpresaInput[]
    createMany?: InsumoCreateManyEmpresaInputEnvelope
    connect?: InsumoWhereUniqueInput | InsumoWhereUniqueInput[]
  }

  export type ProdutoUncheckedCreateNestedManyWithoutEmpresaInput = {
    create?: XOR<ProdutoCreateWithoutEmpresaInput, ProdutoUncheckedCreateWithoutEmpresaInput> | ProdutoCreateWithoutEmpresaInput[] | ProdutoUncheckedCreateWithoutEmpresaInput[]
    connectOrCreate?: ProdutoCreateOrConnectWithoutEmpresaInput | ProdutoCreateOrConnectWithoutEmpresaInput[]
    createMany?: ProdutoCreateManyEmpresaInputEnvelope
    connect?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
  }

  export type ClienteUncheckedCreateNestedManyWithoutEmpresaInput = {
    create?: XOR<ClienteCreateWithoutEmpresaInput, ClienteUncheckedCreateWithoutEmpresaInput> | ClienteCreateWithoutEmpresaInput[] | ClienteUncheckedCreateWithoutEmpresaInput[]
    connectOrCreate?: ClienteCreateOrConnectWithoutEmpresaInput | ClienteCreateOrConnectWithoutEmpresaInput[]
    createMany?: ClienteCreateManyEmpresaInputEnvelope
    connect?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
  }

  export type PedidoUncheckedCreateNestedManyWithoutEmpresaInput = {
    create?: XOR<PedidoCreateWithoutEmpresaInput, PedidoUncheckedCreateWithoutEmpresaInput> | PedidoCreateWithoutEmpresaInput[] | PedidoUncheckedCreateWithoutEmpresaInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutEmpresaInput | PedidoCreateOrConnectWithoutEmpresaInput[]
    createMany?: PedidoCreateManyEmpresaInputEnvelope
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type InsumoUpdateManyWithoutEmpresaNestedInput = {
    create?: XOR<InsumoCreateWithoutEmpresaInput, InsumoUncheckedCreateWithoutEmpresaInput> | InsumoCreateWithoutEmpresaInput[] | InsumoUncheckedCreateWithoutEmpresaInput[]
    connectOrCreate?: InsumoCreateOrConnectWithoutEmpresaInput | InsumoCreateOrConnectWithoutEmpresaInput[]
    upsert?: InsumoUpsertWithWhereUniqueWithoutEmpresaInput | InsumoUpsertWithWhereUniqueWithoutEmpresaInput[]
    createMany?: InsumoCreateManyEmpresaInputEnvelope
    set?: InsumoWhereUniqueInput | InsumoWhereUniqueInput[]
    disconnect?: InsumoWhereUniqueInput | InsumoWhereUniqueInput[]
    delete?: InsumoWhereUniqueInput | InsumoWhereUniqueInput[]
    connect?: InsumoWhereUniqueInput | InsumoWhereUniqueInput[]
    update?: InsumoUpdateWithWhereUniqueWithoutEmpresaInput | InsumoUpdateWithWhereUniqueWithoutEmpresaInput[]
    updateMany?: InsumoUpdateManyWithWhereWithoutEmpresaInput | InsumoUpdateManyWithWhereWithoutEmpresaInput[]
    deleteMany?: InsumoScalarWhereInput | InsumoScalarWhereInput[]
  }

  export type ProdutoUpdateManyWithoutEmpresaNestedInput = {
    create?: XOR<ProdutoCreateWithoutEmpresaInput, ProdutoUncheckedCreateWithoutEmpresaInput> | ProdutoCreateWithoutEmpresaInput[] | ProdutoUncheckedCreateWithoutEmpresaInput[]
    connectOrCreate?: ProdutoCreateOrConnectWithoutEmpresaInput | ProdutoCreateOrConnectWithoutEmpresaInput[]
    upsert?: ProdutoUpsertWithWhereUniqueWithoutEmpresaInput | ProdutoUpsertWithWhereUniqueWithoutEmpresaInput[]
    createMany?: ProdutoCreateManyEmpresaInputEnvelope
    set?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    disconnect?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    delete?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    connect?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    update?: ProdutoUpdateWithWhereUniqueWithoutEmpresaInput | ProdutoUpdateWithWhereUniqueWithoutEmpresaInput[]
    updateMany?: ProdutoUpdateManyWithWhereWithoutEmpresaInput | ProdutoUpdateManyWithWhereWithoutEmpresaInput[]
    deleteMany?: ProdutoScalarWhereInput | ProdutoScalarWhereInput[]
  }

  export type ClienteUpdateManyWithoutEmpresaNestedInput = {
    create?: XOR<ClienteCreateWithoutEmpresaInput, ClienteUncheckedCreateWithoutEmpresaInput> | ClienteCreateWithoutEmpresaInput[] | ClienteUncheckedCreateWithoutEmpresaInput[]
    connectOrCreate?: ClienteCreateOrConnectWithoutEmpresaInput | ClienteCreateOrConnectWithoutEmpresaInput[]
    upsert?: ClienteUpsertWithWhereUniqueWithoutEmpresaInput | ClienteUpsertWithWhereUniqueWithoutEmpresaInput[]
    createMany?: ClienteCreateManyEmpresaInputEnvelope
    set?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    disconnect?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    delete?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    connect?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    update?: ClienteUpdateWithWhereUniqueWithoutEmpresaInput | ClienteUpdateWithWhereUniqueWithoutEmpresaInput[]
    updateMany?: ClienteUpdateManyWithWhereWithoutEmpresaInput | ClienteUpdateManyWithWhereWithoutEmpresaInput[]
    deleteMany?: ClienteScalarWhereInput | ClienteScalarWhereInput[]
  }

  export type PedidoUpdateManyWithoutEmpresaNestedInput = {
    create?: XOR<PedidoCreateWithoutEmpresaInput, PedidoUncheckedCreateWithoutEmpresaInput> | PedidoCreateWithoutEmpresaInput[] | PedidoUncheckedCreateWithoutEmpresaInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutEmpresaInput | PedidoCreateOrConnectWithoutEmpresaInput[]
    upsert?: PedidoUpsertWithWhereUniqueWithoutEmpresaInput | PedidoUpsertWithWhereUniqueWithoutEmpresaInput[]
    createMany?: PedidoCreateManyEmpresaInputEnvelope
    set?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    disconnect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    delete?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    update?: PedidoUpdateWithWhereUniqueWithoutEmpresaInput | PedidoUpdateWithWhereUniqueWithoutEmpresaInput[]
    updateMany?: PedidoUpdateManyWithWhereWithoutEmpresaInput | PedidoUpdateManyWithWhereWithoutEmpresaInput[]
    deleteMany?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type InsumoUncheckedUpdateManyWithoutEmpresaNestedInput = {
    create?: XOR<InsumoCreateWithoutEmpresaInput, InsumoUncheckedCreateWithoutEmpresaInput> | InsumoCreateWithoutEmpresaInput[] | InsumoUncheckedCreateWithoutEmpresaInput[]
    connectOrCreate?: InsumoCreateOrConnectWithoutEmpresaInput | InsumoCreateOrConnectWithoutEmpresaInput[]
    upsert?: InsumoUpsertWithWhereUniqueWithoutEmpresaInput | InsumoUpsertWithWhereUniqueWithoutEmpresaInput[]
    createMany?: InsumoCreateManyEmpresaInputEnvelope
    set?: InsumoWhereUniqueInput | InsumoWhereUniqueInput[]
    disconnect?: InsumoWhereUniqueInput | InsumoWhereUniqueInput[]
    delete?: InsumoWhereUniqueInput | InsumoWhereUniqueInput[]
    connect?: InsumoWhereUniqueInput | InsumoWhereUniqueInput[]
    update?: InsumoUpdateWithWhereUniqueWithoutEmpresaInput | InsumoUpdateWithWhereUniqueWithoutEmpresaInput[]
    updateMany?: InsumoUpdateManyWithWhereWithoutEmpresaInput | InsumoUpdateManyWithWhereWithoutEmpresaInput[]
    deleteMany?: InsumoScalarWhereInput | InsumoScalarWhereInput[]
  }

  export type ProdutoUncheckedUpdateManyWithoutEmpresaNestedInput = {
    create?: XOR<ProdutoCreateWithoutEmpresaInput, ProdutoUncheckedCreateWithoutEmpresaInput> | ProdutoCreateWithoutEmpresaInput[] | ProdutoUncheckedCreateWithoutEmpresaInput[]
    connectOrCreate?: ProdutoCreateOrConnectWithoutEmpresaInput | ProdutoCreateOrConnectWithoutEmpresaInput[]
    upsert?: ProdutoUpsertWithWhereUniqueWithoutEmpresaInput | ProdutoUpsertWithWhereUniqueWithoutEmpresaInput[]
    createMany?: ProdutoCreateManyEmpresaInputEnvelope
    set?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    disconnect?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    delete?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    connect?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    update?: ProdutoUpdateWithWhereUniqueWithoutEmpresaInput | ProdutoUpdateWithWhereUniqueWithoutEmpresaInput[]
    updateMany?: ProdutoUpdateManyWithWhereWithoutEmpresaInput | ProdutoUpdateManyWithWhereWithoutEmpresaInput[]
    deleteMany?: ProdutoScalarWhereInput | ProdutoScalarWhereInput[]
  }

  export type ClienteUncheckedUpdateManyWithoutEmpresaNestedInput = {
    create?: XOR<ClienteCreateWithoutEmpresaInput, ClienteUncheckedCreateWithoutEmpresaInput> | ClienteCreateWithoutEmpresaInput[] | ClienteUncheckedCreateWithoutEmpresaInput[]
    connectOrCreate?: ClienteCreateOrConnectWithoutEmpresaInput | ClienteCreateOrConnectWithoutEmpresaInput[]
    upsert?: ClienteUpsertWithWhereUniqueWithoutEmpresaInput | ClienteUpsertWithWhereUniqueWithoutEmpresaInput[]
    createMany?: ClienteCreateManyEmpresaInputEnvelope
    set?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    disconnect?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    delete?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    connect?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    update?: ClienteUpdateWithWhereUniqueWithoutEmpresaInput | ClienteUpdateWithWhereUniqueWithoutEmpresaInput[]
    updateMany?: ClienteUpdateManyWithWhereWithoutEmpresaInput | ClienteUpdateManyWithWhereWithoutEmpresaInput[]
    deleteMany?: ClienteScalarWhereInput | ClienteScalarWhereInput[]
  }

  export type PedidoUncheckedUpdateManyWithoutEmpresaNestedInput = {
    create?: XOR<PedidoCreateWithoutEmpresaInput, PedidoUncheckedCreateWithoutEmpresaInput> | PedidoCreateWithoutEmpresaInput[] | PedidoUncheckedCreateWithoutEmpresaInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutEmpresaInput | PedidoCreateOrConnectWithoutEmpresaInput[]
    upsert?: PedidoUpsertWithWhereUniqueWithoutEmpresaInput | PedidoUpsertWithWhereUniqueWithoutEmpresaInput[]
    createMany?: PedidoCreateManyEmpresaInputEnvelope
    set?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    disconnect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    delete?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    update?: PedidoUpdateWithWhereUniqueWithoutEmpresaInput | PedidoUpdateWithWhereUniqueWithoutEmpresaInput[]
    updateMany?: PedidoUpdateManyWithWhereWithoutEmpresaInput | PedidoUpdateManyWithWhereWithoutEmpresaInput[]
    deleteMany?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
  }

  export type EmpresaCreateNestedOneWithoutInsumosInput = {
    create?: XOR<EmpresaCreateWithoutInsumosInput, EmpresaUncheckedCreateWithoutInsumosInput>
    connectOrCreate?: EmpresaCreateOrConnectWithoutInsumosInput
    connect?: EmpresaWhereUniqueInput
  }

  export type ProdutoInsumoCreateNestedManyWithoutInsumoInput = {
    create?: XOR<ProdutoInsumoCreateWithoutInsumoInput, ProdutoInsumoUncheckedCreateWithoutInsumoInput> | ProdutoInsumoCreateWithoutInsumoInput[] | ProdutoInsumoUncheckedCreateWithoutInsumoInput[]
    connectOrCreate?: ProdutoInsumoCreateOrConnectWithoutInsumoInput | ProdutoInsumoCreateOrConnectWithoutInsumoInput[]
    createMany?: ProdutoInsumoCreateManyInsumoInputEnvelope
    connect?: ProdutoInsumoWhereUniqueInput | ProdutoInsumoWhereUniqueInput[]
  }

  export type ProdutoInsumoUncheckedCreateNestedManyWithoutInsumoInput = {
    create?: XOR<ProdutoInsumoCreateWithoutInsumoInput, ProdutoInsumoUncheckedCreateWithoutInsumoInput> | ProdutoInsumoCreateWithoutInsumoInput[] | ProdutoInsumoUncheckedCreateWithoutInsumoInput[]
    connectOrCreate?: ProdutoInsumoCreateOrConnectWithoutInsumoInput | ProdutoInsumoCreateOrConnectWithoutInsumoInput[]
    createMany?: ProdutoInsumoCreateManyInsumoInputEnvelope
    connect?: ProdutoInsumoWhereUniqueInput | ProdutoInsumoWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EmpresaUpdateOneRequiredWithoutInsumosNestedInput = {
    create?: XOR<EmpresaCreateWithoutInsumosInput, EmpresaUncheckedCreateWithoutInsumosInput>
    connectOrCreate?: EmpresaCreateOrConnectWithoutInsumosInput
    upsert?: EmpresaUpsertWithoutInsumosInput
    connect?: EmpresaWhereUniqueInput
    update?: XOR<XOR<EmpresaUpdateToOneWithWhereWithoutInsumosInput, EmpresaUpdateWithoutInsumosInput>, EmpresaUncheckedUpdateWithoutInsumosInput>
  }

  export type ProdutoInsumoUpdateManyWithoutInsumoNestedInput = {
    create?: XOR<ProdutoInsumoCreateWithoutInsumoInput, ProdutoInsumoUncheckedCreateWithoutInsumoInput> | ProdutoInsumoCreateWithoutInsumoInput[] | ProdutoInsumoUncheckedCreateWithoutInsumoInput[]
    connectOrCreate?: ProdutoInsumoCreateOrConnectWithoutInsumoInput | ProdutoInsumoCreateOrConnectWithoutInsumoInput[]
    upsert?: ProdutoInsumoUpsertWithWhereUniqueWithoutInsumoInput | ProdutoInsumoUpsertWithWhereUniqueWithoutInsumoInput[]
    createMany?: ProdutoInsumoCreateManyInsumoInputEnvelope
    set?: ProdutoInsumoWhereUniqueInput | ProdutoInsumoWhereUniqueInput[]
    disconnect?: ProdutoInsumoWhereUniqueInput | ProdutoInsumoWhereUniqueInput[]
    delete?: ProdutoInsumoWhereUniqueInput | ProdutoInsumoWhereUniqueInput[]
    connect?: ProdutoInsumoWhereUniqueInput | ProdutoInsumoWhereUniqueInput[]
    update?: ProdutoInsumoUpdateWithWhereUniqueWithoutInsumoInput | ProdutoInsumoUpdateWithWhereUniqueWithoutInsumoInput[]
    updateMany?: ProdutoInsumoUpdateManyWithWhereWithoutInsumoInput | ProdutoInsumoUpdateManyWithWhereWithoutInsumoInput[]
    deleteMany?: ProdutoInsumoScalarWhereInput | ProdutoInsumoScalarWhereInput[]
  }

  export type ProdutoInsumoUncheckedUpdateManyWithoutInsumoNestedInput = {
    create?: XOR<ProdutoInsumoCreateWithoutInsumoInput, ProdutoInsumoUncheckedCreateWithoutInsumoInput> | ProdutoInsumoCreateWithoutInsumoInput[] | ProdutoInsumoUncheckedCreateWithoutInsumoInput[]
    connectOrCreate?: ProdutoInsumoCreateOrConnectWithoutInsumoInput | ProdutoInsumoCreateOrConnectWithoutInsumoInput[]
    upsert?: ProdutoInsumoUpsertWithWhereUniqueWithoutInsumoInput | ProdutoInsumoUpsertWithWhereUniqueWithoutInsumoInput[]
    createMany?: ProdutoInsumoCreateManyInsumoInputEnvelope
    set?: ProdutoInsumoWhereUniqueInput | ProdutoInsumoWhereUniqueInput[]
    disconnect?: ProdutoInsumoWhereUniqueInput | ProdutoInsumoWhereUniqueInput[]
    delete?: ProdutoInsumoWhereUniqueInput | ProdutoInsumoWhereUniqueInput[]
    connect?: ProdutoInsumoWhereUniqueInput | ProdutoInsumoWhereUniqueInput[]
    update?: ProdutoInsumoUpdateWithWhereUniqueWithoutInsumoInput | ProdutoInsumoUpdateWithWhereUniqueWithoutInsumoInput[]
    updateMany?: ProdutoInsumoUpdateManyWithWhereWithoutInsumoInput | ProdutoInsumoUpdateManyWithWhereWithoutInsumoInput[]
    deleteMany?: ProdutoInsumoScalarWhereInput | ProdutoInsumoScalarWhereInput[]
  }

  export type ProdutoInsumoCreateNestedManyWithoutProdutoInput = {
    create?: XOR<ProdutoInsumoCreateWithoutProdutoInput, ProdutoInsumoUncheckedCreateWithoutProdutoInput> | ProdutoInsumoCreateWithoutProdutoInput[] | ProdutoInsumoUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: ProdutoInsumoCreateOrConnectWithoutProdutoInput | ProdutoInsumoCreateOrConnectWithoutProdutoInput[]
    createMany?: ProdutoInsumoCreateManyProdutoInputEnvelope
    connect?: ProdutoInsumoWhereUniqueInput | ProdutoInsumoWhereUniqueInput[]
  }

  export type EmpresaCreateNestedOneWithoutProdutosInput = {
    create?: XOR<EmpresaCreateWithoutProdutosInput, EmpresaUncheckedCreateWithoutProdutosInput>
    connectOrCreate?: EmpresaCreateOrConnectWithoutProdutosInput
    connect?: EmpresaWhereUniqueInput
  }

  export type ProdutoInsumoUncheckedCreateNestedManyWithoutProdutoInput = {
    create?: XOR<ProdutoInsumoCreateWithoutProdutoInput, ProdutoInsumoUncheckedCreateWithoutProdutoInput> | ProdutoInsumoCreateWithoutProdutoInput[] | ProdutoInsumoUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: ProdutoInsumoCreateOrConnectWithoutProdutoInput | ProdutoInsumoCreateOrConnectWithoutProdutoInput[]
    createMany?: ProdutoInsumoCreateManyProdutoInputEnvelope
    connect?: ProdutoInsumoWhereUniqueInput | ProdutoInsumoWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ProdutoInsumoUpdateManyWithoutProdutoNestedInput = {
    create?: XOR<ProdutoInsumoCreateWithoutProdutoInput, ProdutoInsumoUncheckedCreateWithoutProdutoInput> | ProdutoInsumoCreateWithoutProdutoInput[] | ProdutoInsumoUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: ProdutoInsumoCreateOrConnectWithoutProdutoInput | ProdutoInsumoCreateOrConnectWithoutProdutoInput[]
    upsert?: ProdutoInsumoUpsertWithWhereUniqueWithoutProdutoInput | ProdutoInsumoUpsertWithWhereUniqueWithoutProdutoInput[]
    createMany?: ProdutoInsumoCreateManyProdutoInputEnvelope
    set?: ProdutoInsumoWhereUniqueInput | ProdutoInsumoWhereUniqueInput[]
    disconnect?: ProdutoInsumoWhereUniqueInput | ProdutoInsumoWhereUniqueInput[]
    delete?: ProdutoInsumoWhereUniqueInput | ProdutoInsumoWhereUniqueInput[]
    connect?: ProdutoInsumoWhereUniqueInput | ProdutoInsumoWhereUniqueInput[]
    update?: ProdutoInsumoUpdateWithWhereUniqueWithoutProdutoInput | ProdutoInsumoUpdateWithWhereUniqueWithoutProdutoInput[]
    updateMany?: ProdutoInsumoUpdateManyWithWhereWithoutProdutoInput | ProdutoInsumoUpdateManyWithWhereWithoutProdutoInput[]
    deleteMany?: ProdutoInsumoScalarWhereInput | ProdutoInsumoScalarWhereInput[]
  }

  export type EmpresaUpdateOneRequiredWithoutProdutosNestedInput = {
    create?: XOR<EmpresaCreateWithoutProdutosInput, EmpresaUncheckedCreateWithoutProdutosInput>
    connectOrCreate?: EmpresaCreateOrConnectWithoutProdutosInput
    upsert?: EmpresaUpsertWithoutProdutosInput
    connect?: EmpresaWhereUniqueInput
    update?: XOR<XOR<EmpresaUpdateToOneWithWhereWithoutProdutosInput, EmpresaUpdateWithoutProdutosInput>, EmpresaUncheckedUpdateWithoutProdutosInput>
  }

  export type ProdutoInsumoUncheckedUpdateManyWithoutProdutoNestedInput = {
    create?: XOR<ProdutoInsumoCreateWithoutProdutoInput, ProdutoInsumoUncheckedCreateWithoutProdutoInput> | ProdutoInsumoCreateWithoutProdutoInput[] | ProdutoInsumoUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: ProdutoInsumoCreateOrConnectWithoutProdutoInput | ProdutoInsumoCreateOrConnectWithoutProdutoInput[]
    upsert?: ProdutoInsumoUpsertWithWhereUniqueWithoutProdutoInput | ProdutoInsumoUpsertWithWhereUniqueWithoutProdutoInput[]
    createMany?: ProdutoInsumoCreateManyProdutoInputEnvelope
    set?: ProdutoInsumoWhereUniqueInput | ProdutoInsumoWhereUniqueInput[]
    disconnect?: ProdutoInsumoWhereUniqueInput | ProdutoInsumoWhereUniqueInput[]
    delete?: ProdutoInsumoWhereUniqueInput | ProdutoInsumoWhereUniqueInput[]
    connect?: ProdutoInsumoWhereUniqueInput | ProdutoInsumoWhereUniqueInput[]
    update?: ProdutoInsumoUpdateWithWhereUniqueWithoutProdutoInput | ProdutoInsumoUpdateWithWhereUniqueWithoutProdutoInput[]
    updateMany?: ProdutoInsumoUpdateManyWithWhereWithoutProdutoInput | ProdutoInsumoUpdateManyWithWhereWithoutProdutoInput[]
    deleteMany?: ProdutoInsumoScalarWhereInput | ProdutoInsumoScalarWhereInput[]
  }

  export type ProdutoCreateNestedOneWithoutIngredientesInput = {
    create?: XOR<ProdutoCreateWithoutIngredientesInput, ProdutoUncheckedCreateWithoutIngredientesInput>
    connectOrCreate?: ProdutoCreateOrConnectWithoutIngredientesInput
    connect?: ProdutoWhereUniqueInput
  }

  export type InsumoCreateNestedOneWithoutReceitasInput = {
    create?: XOR<InsumoCreateWithoutReceitasInput, InsumoUncheckedCreateWithoutReceitasInput>
    connectOrCreate?: InsumoCreateOrConnectWithoutReceitasInput
    connect?: InsumoWhereUniqueInput
  }

  export type ProdutoUpdateOneRequiredWithoutIngredientesNestedInput = {
    create?: XOR<ProdutoCreateWithoutIngredientesInput, ProdutoUncheckedCreateWithoutIngredientesInput>
    connectOrCreate?: ProdutoCreateOrConnectWithoutIngredientesInput
    upsert?: ProdutoUpsertWithoutIngredientesInput
    connect?: ProdutoWhereUniqueInput
    update?: XOR<XOR<ProdutoUpdateToOneWithWhereWithoutIngredientesInput, ProdutoUpdateWithoutIngredientesInput>, ProdutoUncheckedUpdateWithoutIngredientesInput>
  }

  export type InsumoUpdateOneRequiredWithoutReceitasNestedInput = {
    create?: XOR<InsumoCreateWithoutReceitasInput, InsumoUncheckedCreateWithoutReceitasInput>
    connectOrCreate?: InsumoCreateOrConnectWithoutReceitasInput
    upsert?: InsumoUpsertWithoutReceitasInput
    connect?: InsumoWhereUniqueInput
    update?: XOR<XOR<InsumoUpdateToOneWithWhereWithoutReceitasInput, InsumoUpdateWithoutReceitasInput>, InsumoUncheckedUpdateWithoutReceitasInput>
  }

  export type EmpresaCreateNestedOneWithoutClientesInput = {
    create?: XOR<EmpresaCreateWithoutClientesInput, EmpresaUncheckedCreateWithoutClientesInput>
    connectOrCreate?: EmpresaCreateOrConnectWithoutClientesInput
    connect?: EmpresaWhereUniqueInput
  }

  export type PedidoCreateNestedManyWithoutClienteInput = {
    create?: XOR<PedidoCreateWithoutClienteInput, PedidoUncheckedCreateWithoutClienteInput> | PedidoCreateWithoutClienteInput[] | PedidoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutClienteInput | PedidoCreateOrConnectWithoutClienteInput[]
    createMany?: PedidoCreateManyClienteInputEnvelope
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
  }

  export type PedidoUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<PedidoCreateWithoutClienteInput, PedidoUncheckedCreateWithoutClienteInput> | PedidoCreateWithoutClienteInput[] | PedidoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutClienteInput | PedidoCreateOrConnectWithoutClienteInput[]
    createMany?: PedidoCreateManyClienteInputEnvelope
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
  }

  export type EmpresaUpdateOneRequiredWithoutClientesNestedInput = {
    create?: XOR<EmpresaCreateWithoutClientesInput, EmpresaUncheckedCreateWithoutClientesInput>
    connectOrCreate?: EmpresaCreateOrConnectWithoutClientesInput
    upsert?: EmpresaUpsertWithoutClientesInput
    connect?: EmpresaWhereUniqueInput
    update?: XOR<XOR<EmpresaUpdateToOneWithWhereWithoutClientesInput, EmpresaUpdateWithoutClientesInput>, EmpresaUncheckedUpdateWithoutClientesInput>
  }

  export type PedidoUpdateManyWithoutClienteNestedInput = {
    create?: XOR<PedidoCreateWithoutClienteInput, PedidoUncheckedCreateWithoutClienteInput> | PedidoCreateWithoutClienteInput[] | PedidoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutClienteInput | PedidoCreateOrConnectWithoutClienteInput[]
    upsert?: PedidoUpsertWithWhereUniqueWithoutClienteInput | PedidoUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: PedidoCreateManyClienteInputEnvelope
    set?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    disconnect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    delete?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    update?: PedidoUpdateWithWhereUniqueWithoutClienteInput | PedidoUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: PedidoUpdateManyWithWhereWithoutClienteInput | PedidoUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
  }

  export type PedidoUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<PedidoCreateWithoutClienteInput, PedidoUncheckedCreateWithoutClienteInput> | PedidoCreateWithoutClienteInput[] | PedidoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutClienteInput | PedidoCreateOrConnectWithoutClienteInput[]
    upsert?: PedidoUpsertWithWhereUniqueWithoutClienteInput | PedidoUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: PedidoCreateManyClienteInputEnvelope
    set?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    disconnect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    delete?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    update?: PedidoUpdateWithWhereUniqueWithoutClienteInput | PedidoUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: PedidoUpdateManyWithWhereWithoutClienteInput | PedidoUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
  }

  export type EmpresaCreateNestedOneWithoutPedidosInput = {
    create?: XOR<EmpresaCreateWithoutPedidosInput, EmpresaUncheckedCreateWithoutPedidosInput>
    connectOrCreate?: EmpresaCreateOrConnectWithoutPedidosInput
    connect?: EmpresaWhereUniqueInput
  }

  export type ClienteCreateNestedOneWithoutPedidosInput = {
    create?: XOR<ClienteCreateWithoutPedidosInput, ClienteUncheckedCreateWithoutPedidosInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutPedidosInput
    connect?: ClienteWhereUniqueInput
  }

  export type EmpresaUpdateOneRequiredWithoutPedidosNestedInput = {
    create?: XOR<EmpresaCreateWithoutPedidosInput, EmpresaUncheckedCreateWithoutPedidosInput>
    connectOrCreate?: EmpresaCreateOrConnectWithoutPedidosInput
    upsert?: EmpresaUpsertWithoutPedidosInput
    connect?: EmpresaWhereUniqueInput
    update?: XOR<XOR<EmpresaUpdateToOneWithWhereWithoutPedidosInput, EmpresaUpdateWithoutPedidosInput>, EmpresaUncheckedUpdateWithoutPedidosInput>
  }

  export type ClienteUpdateOneRequiredWithoutPedidosNestedInput = {
    create?: XOR<ClienteCreateWithoutPedidosInput, ClienteUncheckedCreateWithoutPedidosInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutPedidosInput
    upsert?: ClienteUpsertWithoutPedidosInput
    connect?: ClienteWhereUniqueInput
    update?: XOR<XOR<ClienteUpdateToOneWithWhereWithoutPedidosInput, ClienteUpdateWithoutPedidosInput>, ClienteUncheckedUpdateWithoutPedidosInput>
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type InsumoCreateWithoutEmpresaInput = {
    nome: string
    unidadeMedida: string
    quantidadeAtual: number
    estoqueMinimo: number
    receitas?: ProdutoInsumoCreateNestedManyWithoutInsumoInput
  }

  export type InsumoUncheckedCreateWithoutEmpresaInput = {
    id?: number
    nome: string
    unidadeMedida: string
    quantidadeAtual: number
    estoqueMinimo: number
    receitas?: ProdutoInsumoUncheckedCreateNestedManyWithoutInsumoInput
  }

  export type InsumoCreateOrConnectWithoutEmpresaInput = {
    where: InsumoWhereUniqueInput
    create: XOR<InsumoCreateWithoutEmpresaInput, InsumoUncheckedCreateWithoutEmpresaInput>
  }

  export type InsumoCreateManyEmpresaInputEnvelope = {
    data: InsumoCreateManyEmpresaInput | InsumoCreateManyEmpresaInput[]
    skipDuplicates?: boolean
  }

  export type ProdutoCreateWithoutEmpresaInput = {
    nome: string
    descricao?: string | null
    preco: number
    categoria: string
    disponivel?: boolean
    ingredientes?: ProdutoInsumoCreateNestedManyWithoutProdutoInput
  }

  export type ProdutoUncheckedCreateWithoutEmpresaInput = {
    id?: number
    nome: string
    descricao?: string | null
    preco: number
    categoria: string
    disponivel?: boolean
    ingredientes?: ProdutoInsumoUncheckedCreateNestedManyWithoutProdutoInput
  }

  export type ProdutoCreateOrConnectWithoutEmpresaInput = {
    where: ProdutoWhereUniqueInput
    create: XOR<ProdutoCreateWithoutEmpresaInput, ProdutoUncheckedCreateWithoutEmpresaInput>
  }

  export type ProdutoCreateManyEmpresaInputEnvelope = {
    data: ProdutoCreateManyEmpresaInput | ProdutoCreateManyEmpresaInput[]
    skipDuplicates?: boolean
  }

  export type ClienteCreateWithoutEmpresaInput = {
    telefone: string
    nome: string
    endereco: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    pedidos?: PedidoCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateWithoutEmpresaInput = {
    id?: number
    telefone: string
    nome: string
    endereco: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    pedidos?: PedidoUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteCreateOrConnectWithoutEmpresaInput = {
    where: ClienteWhereUniqueInput
    create: XOR<ClienteCreateWithoutEmpresaInput, ClienteUncheckedCreateWithoutEmpresaInput>
  }

  export type ClienteCreateManyEmpresaInputEnvelope = {
    data: ClienteCreateManyEmpresaInput | ClienteCreateManyEmpresaInput[]
    skipDuplicates?: boolean
  }

  export type PedidoCreateWithoutEmpresaInput = {
    status?: string
    pedido: JsonNullValueInput | InputJsonValue
    observacoes?: string | null
    valorTotal?: number
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    cliente: ClienteCreateNestedOneWithoutPedidosInput
  }

  export type PedidoUncheckedCreateWithoutEmpresaInput = {
    id?: number
    clienteId: number
    status?: string
    pedido: JsonNullValueInput | InputJsonValue
    observacoes?: string | null
    valorTotal?: number
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type PedidoCreateOrConnectWithoutEmpresaInput = {
    where: PedidoWhereUniqueInput
    create: XOR<PedidoCreateWithoutEmpresaInput, PedidoUncheckedCreateWithoutEmpresaInput>
  }

  export type PedidoCreateManyEmpresaInputEnvelope = {
    data: PedidoCreateManyEmpresaInput | PedidoCreateManyEmpresaInput[]
    skipDuplicates?: boolean
  }

  export type InsumoUpsertWithWhereUniqueWithoutEmpresaInput = {
    where: InsumoWhereUniqueInput
    update: XOR<InsumoUpdateWithoutEmpresaInput, InsumoUncheckedUpdateWithoutEmpresaInput>
    create: XOR<InsumoCreateWithoutEmpresaInput, InsumoUncheckedCreateWithoutEmpresaInput>
  }

  export type InsumoUpdateWithWhereUniqueWithoutEmpresaInput = {
    where: InsumoWhereUniqueInput
    data: XOR<InsumoUpdateWithoutEmpresaInput, InsumoUncheckedUpdateWithoutEmpresaInput>
  }

  export type InsumoUpdateManyWithWhereWithoutEmpresaInput = {
    where: InsumoScalarWhereInput
    data: XOR<InsumoUpdateManyMutationInput, InsumoUncheckedUpdateManyWithoutEmpresaInput>
  }

  export type InsumoScalarWhereInput = {
    AND?: InsumoScalarWhereInput | InsumoScalarWhereInput[]
    OR?: InsumoScalarWhereInput[]
    NOT?: InsumoScalarWhereInput | InsumoScalarWhereInput[]
    id?: IntFilter<"Insumo"> | number
    empresaId?: IntFilter<"Insumo"> | number
    nome?: StringFilter<"Insumo"> | string
    unidadeMedida?: StringFilter<"Insumo"> | string
    quantidadeAtual?: FloatFilter<"Insumo"> | number
    estoqueMinimo?: FloatFilter<"Insumo"> | number
  }

  export type ProdutoUpsertWithWhereUniqueWithoutEmpresaInput = {
    where: ProdutoWhereUniqueInput
    update: XOR<ProdutoUpdateWithoutEmpresaInput, ProdutoUncheckedUpdateWithoutEmpresaInput>
    create: XOR<ProdutoCreateWithoutEmpresaInput, ProdutoUncheckedCreateWithoutEmpresaInput>
  }

  export type ProdutoUpdateWithWhereUniqueWithoutEmpresaInput = {
    where: ProdutoWhereUniqueInput
    data: XOR<ProdutoUpdateWithoutEmpresaInput, ProdutoUncheckedUpdateWithoutEmpresaInput>
  }

  export type ProdutoUpdateManyWithWhereWithoutEmpresaInput = {
    where: ProdutoScalarWhereInput
    data: XOR<ProdutoUpdateManyMutationInput, ProdutoUncheckedUpdateManyWithoutEmpresaInput>
  }

  export type ProdutoScalarWhereInput = {
    AND?: ProdutoScalarWhereInput | ProdutoScalarWhereInput[]
    OR?: ProdutoScalarWhereInput[]
    NOT?: ProdutoScalarWhereInput | ProdutoScalarWhereInput[]
    id?: IntFilter<"Produto"> | number
    empresaId?: IntFilter<"Produto"> | number
    nome?: StringFilter<"Produto"> | string
    descricao?: StringNullableFilter<"Produto"> | string | null
    preco?: FloatFilter<"Produto"> | number
    categoria?: StringFilter<"Produto"> | string
    disponivel?: BoolFilter<"Produto"> | boolean
  }

  export type ClienteUpsertWithWhereUniqueWithoutEmpresaInput = {
    where: ClienteWhereUniqueInput
    update: XOR<ClienteUpdateWithoutEmpresaInput, ClienteUncheckedUpdateWithoutEmpresaInput>
    create: XOR<ClienteCreateWithoutEmpresaInput, ClienteUncheckedCreateWithoutEmpresaInput>
  }

  export type ClienteUpdateWithWhereUniqueWithoutEmpresaInput = {
    where: ClienteWhereUniqueInput
    data: XOR<ClienteUpdateWithoutEmpresaInput, ClienteUncheckedUpdateWithoutEmpresaInput>
  }

  export type ClienteUpdateManyWithWhereWithoutEmpresaInput = {
    where: ClienteScalarWhereInput
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyWithoutEmpresaInput>
  }

  export type ClienteScalarWhereInput = {
    AND?: ClienteScalarWhereInput | ClienteScalarWhereInput[]
    OR?: ClienteScalarWhereInput[]
    NOT?: ClienteScalarWhereInput | ClienteScalarWhereInput[]
    id?: IntFilter<"Cliente"> | number
    empresaId?: IntFilter<"Cliente"> | number
    telefone?: StringFilter<"Cliente"> | string
    nome?: StringFilter<"Cliente"> | string
    endereco?: StringFilter<"Cliente"> | string
    criadoEm?: DateTimeFilter<"Cliente"> | Date | string
    atualizadoEm?: DateTimeFilter<"Cliente"> | Date | string
  }

  export type PedidoUpsertWithWhereUniqueWithoutEmpresaInput = {
    where: PedidoWhereUniqueInput
    update: XOR<PedidoUpdateWithoutEmpresaInput, PedidoUncheckedUpdateWithoutEmpresaInput>
    create: XOR<PedidoCreateWithoutEmpresaInput, PedidoUncheckedCreateWithoutEmpresaInput>
  }

  export type PedidoUpdateWithWhereUniqueWithoutEmpresaInput = {
    where: PedidoWhereUniqueInput
    data: XOR<PedidoUpdateWithoutEmpresaInput, PedidoUncheckedUpdateWithoutEmpresaInput>
  }

  export type PedidoUpdateManyWithWhereWithoutEmpresaInput = {
    where: PedidoScalarWhereInput
    data: XOR<PedidoUpdateManyMutationInput, PedidoUncheckedUpdateManyWithoutEmpresaInput>
  }

  export type PedidoScalarWhereInput = {
    AND?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
    OR?: PedidoScalarWhereInput[]
    NOT?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
    id?: IntFilter<"Pedido"> | number
    empresaId?: IntFilter<"Pedido"> | number
    clienteId?: IntFilter<"Pedido"> | number
    status?: StringFilter<"Pedido"> | string
    pedido?: JsonFilter<"Pedido">
    observacoes?: StringNullableFilter<"Pedido"> | string | null
    valorTotal?: FloatFilter<"Pedido"> | number
    criadoEm?: DateTimeFilter<"Pedido"> | Date | string
    atualizadoEm?: DateTimeFilter<"Pedido"> | Date | string
  }

  export type EmpresaCreateWithoutInsumosInput = {
    nome: string
    email: string
    senha: string
    createdAt?: Date | string
    produtos?: ProdutoCreateNestedManyWithoutEmpresaInput
    clientes?: ClienteCreateNestedManyWithoutEmpresaInput
    pedidos?: PedidoCreateNestedManyWithoutEmpresaInput
  }

  export type EmpresaUncheckedCreateWithoutInsumosInput = {
    id?: number
    nome: string
    email: string
    senha: string
    createdAt?: Date | string
    produtos?: ProdutoUncheckedCreateNestedManyWithoutEmpresaInput
    clientes?: ClienteUncheckedCreateNestedManyWithoutEmpresaInput
    pedidos?: PedidoUncheckedCreateNestedManyWithoutEmpresaInput
  }

  export type EmpresaCreateOrConnectWithoutInsumosInput = {
    where: EmpresaWhereUniqueInput
    create: XOR<EmpresaCreateWithoutInsumosInput, EmpresaUncheckedCreateWithoutInsumosInput>
  }

  export type ProdutoInsumoCreateWithoutInsumoInput = {
    quantidadeGasta: number
    produto: ProdutoCreateNestedOneWithoutIngredientesInput
  }

  export type ProdutoInsumoUncheckedCreateWithoutInsumoInput = {
    id?: number
    produtoId: number
    quantidadeGasta: number
  }

  export type ProdutoInsumoCreateOrConnectWithoutInsumoInput = {
    where: ProdutoInsumoWhereUniqueInput
    create: XOR<ProdutoInsumoCreateWithoutInsumoInput, ProdutoInsumoUncheckedCreateWithoutInsumoInput>
  }

  export type ProdutoInsumoCreateManyInsumoInputEnvelope = {
    data: ProdutoInsumoCreateManyInsumoInput | ProdutoInsumoCreateManyInsumoInput[]
    skipDuplicates?: boolean
  }

  export type EmpresaUpsertWithoutInsumosInput = {
    update: XOR<EmpresaUpdateWithoutInsumosInput, EmpresaUncheckedUpdateWithoutInsumosInput>
    create: XOR<EmpresaCreateWithoutInsumosInput, EmpresaUncheckedCreateWithoutInsumosInput>
    where?: EmpresaWhereInput
  }

  export type EmpresaUpdateToOneWithWhereWithoutInsumosInput = {
    where?: EmpresaWhereInput
    data: XOR<EmpresaUpdateWithoutInsumosInput, EmpresaUncheckedUpdateWithoutInsumosInput>
  }

  export type EmpresaUpdateWithoutInsumosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    produtos?: ProdutoUpdateManyWithoutEmpresaNestedInput
    clientes?: ClienteUpdateManyWithoutEmpresaNestedInput
    pedidos?: PedidoUpdateManyWithoutEmpresaNestedInput
  }

  export type EmpresaUncheckedUpdateWithoutInsumosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    produtos?: ProdutoUncheckedUpdateManyWithoutEmpresaNestedInput
    clientes?: ClienteUncheckedUpdateManyWithoutEmpresaNestedInput
    pedidos?: PedidoUncheckedUpdateManyWithoutEmpresaNestedInput
  }

  export type ProdutoInsumoUpsertWithWhereUniqueWithoutInsumoInput = {
    where: ProdutoInsumoWhereUniqueInput
    update: XOR<ProdutoInsumoUpdateWithoutInsumoInput, ProdutoInsumoUncheckedUpdateWithoutInsumoInput>
    create: XOR<ProdutoInsumoCreateWithoutInsumoInput, ProdutoInsumoUncheckedCreateWithoutInsumoInput>
  }

  export type ProdutoInsumoUpdateWithWhereUniqueWithoutInsumoInput = {
    where: ProdutoInsumoWhereUniqueInput
    data: XOR<ProdutoInsumoUpdateWithoutInsumoInput, ProdutoInsumoUncheckedUpdateWithoutInsumoInput>
  }

  export type ProdutoInsumoUpdateManyWithWhereWithoutInsumoInput = {
    where: ProdutoInsumoScalarWhereInput
    data: XOR<ProdutoInsumoUpdateManyMutationInput, ProdutoInsumoUncheckedUpdateManyWithoutInsumoInput>
  }

  export type ProdutoInsumoScalarWhereInput = {
    AND?: ProdutoInsumoScalarWhereInput | ProdutoInsumoScalarWhereInput[]
    OR?: ProdutoInsumoScalarWhereInput[]
    NOT?: ProdutoInsumoScalarWhereInput | ProdutoInsumoScalarWhereInput[]
    id?: IntFilter<"ProdutoInsumo"> | number
    produtoId?: IntFilter<"ProdutoInsumo"> | number
    insumoId?: IntFilter<"ProdutoInsumo"> | number
    quantidadeGasta?: FloatFilter<"ProdutoInsumo"> | number
  }

  export type ProdutoInsumoCreateWithoutProdutoInput = {
    quantidadeGasta: number
    insumo: InsumoCreateNestedOneWithoutReceitasInput
  }

  export type ProdutoInsumoUncheckedCreateWithoutProdutoInput = {
    id?: number
    insumoId: number
    quantidadeGasta: number
  }

  export type ProdutoInsumoCreateOrConnectWithoutProdutoInput = {
    where: ProdutoInsumoWhereUniqueInput
    create: XOR<ProdutoInsumoCreateWithoutProdutoInput, ProdutoInsumoUncheckedCreateWithoutProdutoInput>
  }

  export type ProdutoInsumoCreateManyProdutoInputEnvelope = {
    data: ProdutoInsumoCreateManyProdutoInput | ProdutoInsumoCreateManyProdutoInput[]
    skipDuplicates?: boolean
  }

  export type EmpresaCreateWithoutProdutosInput = {
    nome: string
    email: string
    senha: string
    createdAt?: Date | string
    insumos?: InsumoCreateNestedManyWithoutEmpresaInput
    clientes?: ClienteCreateNestedManyWithoutEmpresaInput
    pedidos?: PedidoCreateNestedManyWithoutEmpresaInput
  }

  export type EmpresaUncheckedCreateWithoutProdutosInput = {
    id?: number
    nome: string
    email: string
    senha: string
    createdAt?: Date | string
    insumos?: InsumoUncheckedCreateNestedManyWithoutEmpresaInput
    clientes?: ClienteUncheckedCreateNestedManyWithoutEmpresaInput
    pedidos?: PedidoUncheckedCreateNestedManyWithoutEmpresaInput
  }

  export type EmpresaCreateOrConnectWithoutProdutosInput = {
    where: EmpresaWhereUniqueInput
    create: XOR<EmpresaCreateWithoutProdutosInput, EmpresaUncheckedCreateWithoutProdutosInput>
  }

  export type ProdutoInsumoUpsertWithWhereUniqueWithoutProdutoInput = {
    where: ProdutoInsumoWhereUniqueInput
    update: XOR<ProdutoInsumoUpdateWithoutProdutoInput, ProdutoInsumoUncheckedUpdateWithoutProdutoInput>
    create: XOR<ProdutoInsumoCreateWithoutProdutoInput, ProdutoInsumoUncheckedCreateWithoutProdutoInput>
  }

  export type ProdutoInsumoUpdateWithWhereUniqueWithoutProdutoInput = {
    where: ProdutoInsumoWhereUniqueInput
    data: XOR<ProdutoInsumoUpdateWithoutProdutoInput, ProdutoInsumoUncheckedUpdateWithoutProdutoInput>
  }

  export type ProdutoInsumoUpdateManyWithWhereWithoutProdutoInput = {
    where: ProdutoInsumoScalarWhereInput
    data: XOR<ProdutoInsumoUpdateManyMutationInput, ProdutoInsumoUncheckedUpdateManyWithoutProdutoInput>
  }

  export type EmpresaUpsertWithoutProdutosInput = {
    update: XOR<EmpresaUpdateWithoutProdutosInput, EmpresaUncheckedUpdateWithoutProdutosInput>
    create: XOR<EmpresaCreateWithoutProdutosInput, EmpresaUncheckedCreateWithoutProdutosInput>
    where?: EmpresaWhereInput
  }

  export type EmpresaUpdateToOneWithWhereWithoutProdutosInput = {
    where?: EmpresaWhereInput
    data: XOR<EmpresaUpdateWithoutProdutosInput, EmpresaUncheckedUpdateWithoutProdutosInput>
  }

  export type EmpresaUpdateWithoutProdutosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    insumos?: InsumoUpdateManyWithoutEmpresaNestedInput
    clientes?: ClienteUpdateManyWithoutEmpresaNestedInput
    pedidos?: PedidoUpdateManyWithoutEmpresaNestedInput
  }

  export type EmpresaUncheckedUpdateWithoutProdutosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    insumos?: InsumoUncheckedUpdateManyWithoutEmpresaNestedInput
    clientes?: ClienteUncheckedUpdateManyWithoutEmpresaNestedInput
    pedidos?: PedidoUncheckedUpdateManyWithoutEmpresaNestedInput
  }

  export type ProdutoCreateWithoutIngredientesInput = {
    nome: string
    descricao?: string | null
    preco: number
    categoria: string
    disponivel?: boolean
    empresa: EmpresaCreateNestedOneWithoutProdutosInput
  }

  export type ProdutoUncheckedCreateWithoutIngredientesInput = {
    id?: number
    empresaId: number
    nome: string
    descricao?: string | null
    preco: number
    categoria: string
    disponivel?: boolean
  }

  export type ProdutoCreateOrConnectWithoutIngredientesInput = {
    where: ProdutoWhereUniqueInput
    create: XOR<ProdutoCreateWithoutIngredientesInput, ProdutoUncheckedCreateWithoutIngredientesInput>
  }

  export type InsumoCreateWithoutReceitasInput = {
    nome: string
    unidadeMedida: string
    quantidadeAtual: number
    estoqueMinimo: number
    empresa: EmpresaCreateNestedOneWithoutInsumosInput
  }

  export type InsumoUncheckedCreateWithoutReceitasInput = {
    id?: number
    empresaId: number
    nome: string
    unidadeMedida: string
    quantidadeAtual: number
    estoqueMinimo: number
  }

  export type InsumoCreateOrConnectWithoutReceitasInput = {
    where: InsumoWhereUniqueInput
    create: XOR<InsumoCreateWithoutReceitasInput, InsumoUncheckedCreateWithoutReceitasInput>
  }

  export type ProdutoUpsertWithoutIngredientesInput = {
    update: XOR<ProdutoUpdateWithoutIngredientesInput, ProdutoUncheckedUpdateWithoutIngredientesInput>
    create: XOR<ProdutoCreateWithoutIngredientesInput, ProdutoUncheckedCreateWithoutIngredientesInput>
    where?: ProdutoWhereInput
  }

  export type ProdutoUpdateToOneWithWhereWithoutIngredientesInput = {
    where?: ProdutoWhereInput
    data: XOR<ProdutoUpdateWithoutIngredientesInput, ProdutoUncheckedUpdateWithoutIngredientesInput>
  }

  export type ProdutoUpdateWithoutIngredientesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    preco?: FloatFieldUpdateOperationsInput | number
    categoria?: StringFieldUpdateOperationsInput | string
    disponivel?: BoolFieldUpdateOperationsInput | boolean
    empresa?: EmpresaUpdateOneRequiredWithoutProdutosNestedInput
  }

  export type ProdutoUncheckedUpdateWithoutIngredientesInput = {
    id?: IntFieldUpdateOperationsInput | number
    empresaId?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    preco?: FloatFieldUpdateOperationsInput | number
    categoria?: StringFieldUpdateOperationsInput | string
    disponivel?: BoolFieldUpdateOperationsInput | boolean
  }

  export type InsumoUpsertWithoutReceitasInput = {
    update: XOR<InsumoUpdateWithoutReceitasInput, InsumoUncheckedUpdateWithoutReceitasInput>
    create: XOR<InsumoCreateWithoutReceitasInput, InsumoUncheckedCreateWithoutReceitasInput>
    where?: InsumoWhereInput
  }

  export type InsumoUpdateToOneWithWhereWithoutReceitasInput = {
    where?: InsumoWhereInput
    data: XOR<InsumoUpdateWithoutReceitasInput, InsumoUncheckedUpdateWithoutReceitasInput>
  }

  export type InsumoUpdateWithoutReceitasInput = {
    nome?: StringFieldUpdateOperationsInput | string
    unidadeMedida?: StringFieldUpdateOperationsInput | string
    quantidadeAtual?: FloatFieldUpdateOperationsInput | number
    estoqueMinimo?: FloatFieldUpdateOperationsInput | number
    empresa?: EmpresaUpdateOneRequiredWithoutInsumosNestedInput
  }

  export type InsumoUncheckedUpdateWithoutReceitasInput = {
    id?: IntFieldUpdateOperationsInput | number
    empresaId?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    unidadeMedida?: StringFieldUpdateOperationsInput | string
    quantidadeAtual?: FloatFieldUpdateOperationsInput | number
    estoqueMinimo?: FloatFieldUpdateOperationsInput | number
  }

  export type EmpresaCreateWithoutClientesInput = {
    nome: string
    email: string
    senha: string
    createdAt?: Date | string
    insumos?: InsumoCreateNestedManyWithoutEmpresaInput
    produtos?: ProdutoCreateNestedManyWithoutEmpresaInput
    pedidos?: PedidoCreateNestedManyWithoutEmpresaInput
  }

  export type EmpresaUncheckedCreateWithoutClientesInput = {
    id?: number
    nome: string
    email: string
    senha: string
    createdAt?: Date | string
    insumos?: InsumoUncheckedCreateNestedManyWithoutEmpresaInput
    produtos?: ProdutoUncheckedCreateNestedManyWithoutEmpresaInput
    pedidos?: PedidoUncheckedCreateNestedManyWithoutEmpresaInput
  }

  export type EmpresaCreateOrConnectWithoutClientesInput = {
    where: EmpresaWhereUniqueInput
    create: XOR<EmpresaCreateWithoutClientesInput, EmpresaUncheckedCreateWithoutClientesInput>
  }

  export type PedidoCreateWithoutClienteInput = {
    status?: string
    pedido: JsonNullValueInput | InputJsonValue
    observacoes?: string | null
    valorTotal?: number
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    empresa: EmpresaCreateNestedOneWithoutPedidosInput
  }

  export type PedidoUncheckedCreateWithoutClienteInput = {
    id?: number
    empresaId: number
    status?: string
    pedido: JsonNullValueInput | InputJsonValue
    observacoes?: string | null
    valorTotal?: number
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type PedidoCreateOrConnectWithoutClienteInput = {
    where: PedidoWhereUniqueInput
    create: XOR<PedidoCreateWithoutClienteInput, PedidoUncheckedCreateWithoutClienteInput>
  }

  export type PedidoCreateManyClienteInputEnvelope = {
    data: PedidoCreateManyClienteInput | PedidoCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type EmpresaUpsertWithoutClientesInput = {
    update: XOR<EmpresaUpdateWithoutClientesInput, EmpresaUncheckedUpdateWithoutClientesInput>
    create: XOR<EmpresaCreateWithoutClientesInput, EmpresaUncheckedCreateWithoutClientesInput>
    where?: EmpresaWhereInput
  }

  export type EmpresaUpdateToOneWithWhereWithoutClientesInput = {
    where?: EmpresaWhereInput
    data: XOR<EmpresaUpdateWithoutClientesInput, EmpresaUncheckedUpdateWithoutClientesInput>
  }

  export type EmpresaUpdateWithoutClientesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    insumos?: InsumoUpdateManyWithoutEmpresaNestedInput
    produtos?: ProdutoUpdateManyWithoutEmpresaNestedInput
    pedidos?: PedidoUpdateManyWithoutEmpresaNestedInput
  }

  export type EmpresaUncheckedUpdateWithoutClientesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    insumos?: InsumoUncheckedUpdateManyWithoutEmpresaNestedInput
    produtos?: ProdutoUncheckedUpdateManyWithoutEmpresaNestedInput
    pedidos?: PedidoUncheckedUpdateManyWithoutEmpresaNestedInput
  }

  export type PedidoUpsertWithWhereUniqueWithoutClienteInput = {
    where: PedidoWhereUniqueInput
    update: XOR<PedidoUpdateWithoutClienteInput, PedidoUncheckedUpdateWithoutClienteInput>
    create: XOR<PedidoCreateWithoutClienteInput, PedidoUncheckedCreateWithoutClienteInput>
  }

  export type PedidoUpdateWithWhereUniqueWithoutClienteInput = {
    where: PedidoWhereUniqueInput
    data: XOR<PedidoUpdateWithoutClienteInput, PedidoUncheckedUpdateWithoutClienteInput>
  }

  export type PedidoUpdateManyWithWhereWithoutClienteInput = {
    where: PedidoScalarWhereInput
    data: XOR<PedidoUpdateManyMutationInput, PedidoUncheckedUpdateManyWithoutClienteInput>
  }

  export type EmpresaCreateWithoutPedidosInput = {
    nome: string
    email: string
    senha: string
    createdAt?: Date | string
    insumos?: InsumoCreateNestedManyWithoutEmpresaInput
    produtos?: ProdutoCreateNestedManyWithoutEmpresaInput
    clientes?: ClienteCreateNestedManyWithoutEmpresaInput
  }

  export type EmpresaUncheckedCreateWithoutPedidosInput = {
    id?: number
    nome: string
    email: string
    senha: string
    createdAt?: Date | string
    insumos?: InsumoUncheckedCreateNestedManyWithoutEmpresaInput
    produtos?: ProdutoUncheckedCreateNestedManyWithoutEmpresaInput
    clientes?: ClienteUncheckedCreateNestedManyWithoutEmpresaInput
  }

  export type EmpresaCreateOrConnectWithoutPedidosInput = {
    where: EmpresaWhereUniqueInput
    create: XOR<EmpresaCreateWithoutPedidosInput, EmpresaUncheckedCreateWithoutPedidosInput>
  }

  export type ClienteCreateWithoutPedidosInput = {
    telefone: string
    nome: string
    endereco: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    empresa: EmpresaCreateNestedOneWithoutClientesInput
  }

  export type ClienteUncheckedCreateWithoutPedidosInput = {
    id?: number
    empresaId: number
    telefone: string
    nome: string
    endereco: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type ClienteCreateOrConnectWithoutPedidosInput = {
    where: ClienteWhereUniqueInput
    create: XOR<ClienteCreateWithoutPedidosInput, ClienteUncheckedCreateWithoutPedidosInput>
  }

  export type EmpresaUpsertWithoutPedidosInput = {
    update: XOR<EmpresaUpdateWithoutPedidosInput, EmpresaUncheckedUpdateWithoutPedidosInput>
    create: XOR<EmpresaCreateWithoutPedidosInput, EmpresaUncheckedCreateWithoutPedidosInput>
    where?: EmpresaWhereInput
  }

  export type EmpresaUpdateToOneWithWhereWithoutPedidosInput = {
    where?: EmpresaWhereInput
    data: XOR<EmpresaUpdateWithoutPedidosInput, EmpresaUncheckedUpdateWithoutPedidosInput>
  }

  export type EmpresaUpdateWithoutPedidosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    insumos?: InsumoUpdateManyWithoutEmpresaNestedInput
    produtos?: ProdutoUpdateManyWithoutEmpresaNestedInput
    clientes?: ClienteUpdateManyWithoutEmpresaNestedInput
  }

  export type EmpresaUncheckedUpdateWithoutPedidosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    insumos?: InsumoUncheckedUpdateManyWithoutEmpresaNestedInput
    produtos?: ProdutoUncheckedUpdateManyWithoutEmpresaNestedInput
    clientes?: ClienteUncheckedUpdateManyWithoutEmpresaNestedInput
  }

  export type ClienteUpsertWithoutPedidosInput = {
    update: XOR<ClienteUpdateWithoutPedidosInput, ClienteUncheckedUpdateWithoutPedidosInput>
    create: XOR<ClienteCreateWithoutPedidosInput, ClienteUncheckedCreateWithoutPedidosInput>
    where?: ClienteWhereInput
  }

  export type ClienteUpdateToOneWithWhereWithoutPedidosInput = {
    where?: ClienteWhereInput
    data: XOR<ClienteUpdateWithoutPedidosInput, ClienteUncheckedUpdateWithoutPedidosInput>
  }

  export type ClienteUpdateWithoutPedidosInput = {
    telefone?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    empresa?: EmpresaUpdateOneRequiredWithoutClientesNestedInput
  }

  export type ClienteUncheckedUpdateWithoutPedidosInput = {
    id?: IntFieldUpdateOperationsInput | number
    empresaId?: IntFieldUpdateOperationsInput | number
    telefone?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InsumoCreateManyEmpresaInput = {
    id?: number
    nome: string
    unidadeMedida: string
    quantidadeAtual: number
    estoqueMinimo: number
  }

  export type ProdutoCreateManyEmpresaInput = {
    id?: number
    nome: string
    descricao?: string | null
    preco: number
    categoria: string
    disponivel?: boolean
  }

  export type ClienteCreateManyEmpresaInput = {
    id?: number
    telefone: string
    nome: string
    endereco: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type PedidoCreateManyEmpresaInput = {
    id?: number
    clienteId: number
    status?: string
    pedido: JsonNullValueInput | InputJsonValue
    observacoes?: string | null
    valorTotal?: number
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type InsumoUpdateWithoutEmpresaInput = {
    nome?: StringFieldUpdateOperationsInput | string
    unidadeMedida?: StringFieldUpdateOperationsInput | string
    quantidadeAtual?: FloatFieldUpdateOperationsInput | number
    estoqueMinimo?: FloatFieldUpdateOperationsInput | number
    receitas?: ProdutoInsumoUpdateManyWithoutInsumoNestedInput
  }

  export type InsumoUncheckedUpdateWithoutEmpresaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    unidadeMedida?: StringFieldUpdateOperationsInput | string
    quantidadeAtual?: FloatFieldUpdateOperationsInput | number
    estoqueMinimo?: FloatFieldUpdateOperationsInput | number
    receitas?: ProdutoInsumoUncheckedUpdateManyWithoutInsumoNestedInput
  }

  export type InsumoUncheckedUpdateManyWithoutEmpresaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    unidadeMedida?: StringFieldUpdateOperationsInput | string
    quantidadeAtual?: FloatFieldUpdateOperationsInput | number
    estoqueMinimo?: FloatFieldUpdateOperationsInput | number
  }

  export type ProdutoUpdateWithoutEmpresaInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    preco?: FloatFieldUpdateOperationsInput | number
    categoria?: StringFieldUpdateOperationsInput | string
    disponivel?: BoolFieldUpdateOperationsInput | boolean
    ingredientes?: ProdutoInsumoUpdateManyWithoutProdutoNestedInput
  }

  export type ProdutoUncheckedUpdateWithoutEmpresaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    preco?: FloatFieldUpdateOperationsInput | number
    categoria?: StringFieldUpdateOperationsInput | string
    disponivel?: BoolFieldUpdateOperationsInput | boolean
    ingredientes?: ProdutoInsumoUncheckedUpdateManyWithoutProdutoNestedInput
  }

  export type ProdutoUncheckedUpdateManyWithoutEmpresaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    preco?: FloatFieldUpdateOperationsInput | number
    categoria?: StringFieldUpdateOperationsInput | string
    disponivel?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ClienteUpdateWithoutEmpresaInput = {
    telefone?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    pedidos?: PedidoUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateWithoutEmpresaInput = {
    id?: IntFieldUpdateOperationsInput | number
    telefone?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    pedidos?: PedidoUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateManyWithoutEmpresaInput = {
    id?: IntFieldUpdateOperationsInput | number
    telefone?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PedidoUpdateWithoutEmpresaInput = {
    status?: StringFieldUpdateOperationsInput | string
    pedido?: JsonNullValueInput | InputJsonValue
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    valorTotal?: FloatFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: ClienteUpdateOneRequiredWithoutPedidosNestedInput
  }

  export type PedidoUncheckedUpdateWithoutEmpresaInput = {
    id?: IntFieldUpdateOperationsInput | number
    clienteId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    pedido?: JsonNullValueInput | InputJsonValue
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    valorTotal?: FloatFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PedidoUncheckedUpdateManyWithoutEmpresaInput = {
    id?: IntFieldUpdateOperationsInput | number
    clienteId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    pedido?: JsonNullValueInput | InputJsonValue
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    valorTotal?: FloatFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProdutoInsumoCreateManyInsumoInput = {
    id?: number
    produtoId: number
    quantidadeGasta: number
  }

  export type ProdutoInsumoUpdateWithoutInsumoInput = {
    quantidadeGasta?: FloatFieldUpdateOperationsInput | number
    produto?: ProdutoUpdateOneRequiredWithoutIngredientesNestedInput
  }

  export type ProdutoInsumoUncheckedUpdateWithoutInsumoInput = {
    id?: IntFieldUpdateOperationsInput | number
    produtoId?: IntFieldUpdateOperationsInput | number
    quantidadeGasta?: FloatFieldUpdateOperationsInput | number
  }

  export type ProdutoInsumoUncheckedUpdateManyWithoutInsumoInput = {
    id?: IntFieldUpdateOperationsInput | number
    produtoId?: IntFieldUpdateOperationsInput | number
    quantidadeGasta?: FloatFieldUpdateOperationsInput | number
  }

  export type ProdutoInsumoCreateManyProdutoInput = {
    id?: number
    insumoId: number
    quantidadeGasta: number
  }

  export type ProdutoInsumoUpdateWithoutProdutoInput = {
    quantidadeGasta?: FloatFieldUpdateOperationsInput | number
    insumo?: InsumoUpdateOneRequiredWithoutReceitasNestedInput
  }

  export type ProdutoInsumoUncheckedUpdateWithoutProdutoInput = {
    id?: IntFieldUpdateOperationsInput | number
    insumoId?: IntFieldUpdateOperationsInput | number
    quantidadeGasta?: FloatFieldUpdateOperationsInput | number
  }

  export type ProdutoInsumoUncheckedUpdateManyWithoutProdutoInput = {
    id?: IntFieldUpdateOperationsInput | number
    insumoId?: IntFieldUpdateOperationsInput | number
    quantidadeGasta?: FloatFieldUpdateOperationsInput | number
  }

  export type PedidoCreateManyClienteInput = {
    id?: number
    empresaId: number
    status?: string
    pedido: JsonNullValueInput | InputJsonValue
    observacoes?: string | null
    valorTotal?: number
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type PedidoUpdateWithoutClienteInput = {
    status?: StringFieldUpdateOperationsInput | string
    pedido?: JsonNullValueInput | InputJsonValue
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    valorTotal?: FloatFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    empresa?: EmpresaUpdateOneRequiredWithoutPedidosNestedInput
  }

  export type PedidoUncheckedUpdateWithoutClienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    empresaId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    pedido?: JsonNullValueInput | InputJsonValue
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    valorTotal?: FloatFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PedidoUncheckedUpdateManyWithoutClienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    empresaId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    pedido?: JsonNullValueInput | InputJsonValue
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    valorTotal?: FloatFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
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