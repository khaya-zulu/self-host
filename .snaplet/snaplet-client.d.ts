type ScalarField = {
  name: string;
  type: string;
};
type ObjectField = ScalarField & {
  relationFromFields: string[];
  relationToFields: string[];
};
type Inflection = {
  modelName?: (name: string) => string;
  scalarField?: (field: ScalarField) => string;
  parentField?: (field: ObjectField, oppositeBaseNameMap: Record<string, string>) => string;
  childField?: (field: ObjectField, oppositeField: ObjectField, oppositeBaseNameMap: Record<string, string>) => string;
  oppositeBaseNameMap?: Record<string, string>;
};
type Override = {
  Transaction?: {
    name?: string;
    fields?: {
      id?: string;
      type?: string;
      reference?: string;
      createdByUsername?: string;
      createdAt?: string;
      updateAt?: string;
      amount?: string;
      User?: string;
    };
  }
  User?: {
    name?: string;
    fields?: {
      username?: string;
      accountNumber?: string;
      name?: string;
      createdAt?: string;
      updateAt?: string;
      Transaction?: string;
    };
  }
  _prisma_migrations?: {
    name?: string;
    fields?: {
      id?: string;
      checksum?: string;
      finished_at?: string;
      migration_name?: string;
      logs?: string;
      rolled_back_at?: string;
      started_at?: string;
      applied_steps_count?: string;
    };
  }}
export type Alias = {
  inflection?: Inflection | boolean;
  override?: Override;
};
interface FingerprintRelationField {
  count?: number | MinMaxOption;
}
interface FingerprintJsonField {
  schema?: any;
}
interface FingerprintDateField {
  options?: {
    minYear?: number;
    maxYear?: number;
  }
}
interface FingerprintNumberField {
  options?: {
    min?: number;
    max?: number;
  }
}
export interface Fingerprint {
  transactions?: {
    createdAt?: FingerprintDateField;
    updateAt?: FingerprintDateField;
    amount?: FingerprintNumberField;
    createdBy?: FingerprintRelationField;
  }
  users?: {
    accountNumber?: FingerprintNumberField;
    createdAt?: FingerprintDateField;
    updateAt?: FingerprintDateField;
    transactionsByCreatedByUsername?: FingerprintRelationField;
  }
  PrismaMigrations?: {
    finishedAt?: FingerprintDateField;
    rolledBackAt?: FingerprintDateField;
    startedAt?: FingerprintDateField;
    appliedStepsCount?: FingerprintNumberField;
  }}