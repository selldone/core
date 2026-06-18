/*
 * Copyright (c) 2023. Selldone® Business OS™
 *
 * Author: M.Pajuhaan
 * Web: https://selldone.com
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 *
 * All rights reserved. In the weave of time, where traditions and innovations intermingle, this content was crafted.
 * From the essence of thought, through the corridors of creativity, each word, and sentiment has been molded.
 * Not just to exist, but to inspire. Like an artist's stroke or a sculptor's chisel, every nuance is deliberate.
 * Our journey is not just about reaching a destination, but about creating a masterpiece.
 * Tread carefully, for you're treading on dreams.
 */

/**
 * Legal/business company profile owned by a Selldone user.
 *
 * Backend source: `App\Storefront\Company\Company`, persisted in the
 * `companies` table. Company rows are used for developer identity, billing
 * account linkage, verification documents, app publishing eligibility, and
 * platform-level business trust workflows.
 */
export interface Company {
  /**
   * Primary key of the company profile.
   *
   * Backend: `companies.id`.
   */
  id: number;

  /**
   * Owner user ID.
   *
   * Backend: required foreign key to `users.id`.
   */
  user_id: number;

  /**
   * Company legal or display name.
   *
   * Backend column is nullable text, although normal creation requires a name.
   */
  name: string | null;

  /**
   * Company logo path or URL.
   */
  logo: string | null;

  /**
   * Company website URL.
   */
  website: string | null;

  /**
   * Company contact email.
   */
  email: string | null;

  /**
   * Company address payload stored as text.
   *
   * Some flows may store formatted text; others may store serialized JSON.
   */
  address: string | null;

  /**
   * Company landline phone.
   */
  phone: string | null;

  /**
   * Company mobile phone.
   */
  mobile: string | null;

  /**
   * ISO 3166-1 alpha-2 country code.
   *
   * Backend column length is 2.
   */
  country: string | null;

  /**
   * Tax or registration identifier.
   *
   * Backend column length is 32.
   */
  tax: string | null;

  /**
   * Whether the company is marked as registered.
   */
  register: boolean;

  /**
   * Registration review timestamp.
   */
  register_at: Company.Timestamp | null;

  /**
   * Whether the company can publish developer apps.
   */
  developer: boolean;

  /**
   * Whether the company has passed verification.
   */
  verified: boolean;

  /**
   * Whether the company has Golden status.
   */
  golden: boolean;

  /**
   * Whether the latest verification review was rejected.
   */
  rejected: boolean;

  /**
   * Rejection reason payload.
   *
   * Backend casts this field to array. It can contain reason IDs or richer
   * review payloads depending on the review workflow.
   */
  rejected_reasons: Company.RejectedReasons | null;

  /**
   * Soft-delete timestamp.
   *
   * Present only when the backend query includes trashed companies.
   */
  deleted_at?: Company.Timestamp | null;

  /**
   * Creation timestamp from Laravel `timestamps`.
   */
  created_at?: Company.Timestamp | null;

  /**
   * Last update timestamp from Laravel `timestamps`.
   */
  updated_at?: Company.Timestamp | null;

  /**
   * Loaded owner user relation, when explicitly included by the API.
   */
  user?: Record<string, unknown>;

  /**
   * Loaded apps owned or published by the company.
   */
  apps?: Record<string, unknown>[];

  /**
   * Loaded verification documents.
   */
  documents?: Company.CompanyDocument[];

  /**
   * Loaded backoffice accounts linked to this company for billing.
   */
  accounts?: Record<string, unknown>[];

  /**
   * Loaded article relation from backend `HasArticle`, when included.
   */
  article?: Record<string, unknown> | null;
}

//█████████████████████████████████████████████████████████████
//―――――――――――――――― 🦫 Types ――――――――――――――――
//█████████████████████████████████████████████████████████████
export namespace Company {
  /**
   * Laravel datetime fields are Carbon instances in PHP and ISO strings in JSON
   * responses. Some frontend callers hydrate them into `Date` objects.
   */
  export type Timestamp = string | Date;

  /**
   * Rejection reason payload cast from `companies.rejected_reasons`.
   */
  export type RejectedReasons = Array<
    string | number | Record<string, unknown>
  >;

  /**
   * Supported verification document type codes.
   */
  export type DocumentTypeCode = "REGISTRATION" | "VAT" | "TAX" | "IP";

  /**
   * Interface representing a document type.
   */
  export interface IDocumentType {
    /** Code representing the document type. */
    code: DocumentTypeCode;

    /** Title of the document type. */
    title: string;
  }

  /**
   * Verification document uploaded for a Selldone company.
   *
   * Backend source: `App\Storefront\Company\CompanyDocument`, persisted in the
   * `company_docs` table.
   */
  export interface CompanyDocument {
    /**
     * Primary key of the company document.
     */
    id: number;

    /**
     * Parent company ID.
     */
    company_id: number;

    /**
     * Short document type code.
     */
    type: DocumentTypeCode | string;

    /**
     * Optional online document URL.
     */
    url: string | null;

    /**
     * Optional private-storage file path.
     */
    file: string | null;

    /**
     * Verification timestamp.
     */
    verify_at: Timestamp | null;

    /**
     * Rejection timestamp.
     */
    reject_at: Timestamp | null;

    /**
     * User ID that uploaded the document.
     */
    user_id: number | null;

    /**
     * Officer user ID that reviewed the document.
     */
    officer_id: number | null;

    /**
     * Soft-delete timestamp.
     */
    deleted_at?: Timestamp | null;

    /**
     * Creation timestamp from Laravel `timestamps`.
     */
    created_at?: Timestamp | null;

    /**
     * Last update timestamp from Laravel `timestamps`.
     */
    updated_at?: Timestamp | null;

    /** Loaded uploader relation, when explicitly included by the API. */
    user?: Record<string, unknown> | null;

    /** Loaded officer relation, when explicitly included by the API. */
    officer?: Record<string, unknown> | null;

    /** Loaded parent company relation, when explicitly included by the API. */
    company?: Company;
  }

  /**
   * Constant array of document types.
   */
  export const DocumentTypes: IDocumentType[] = [
    { code: "REGISTRATION", title: "Registration documents" },
    { code: "VAT", title: "VAT documents" },
    { code: "TAX", title: "Tax documents" },
    { code: "IP", title: "Intellectual Property documents" },
  ];
}
