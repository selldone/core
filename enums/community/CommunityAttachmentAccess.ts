/**
 * CommunityAttachmentAccess Enum
 *
 * Represents the different access levels for attaching files within a community.
 */
export enum CommunityAttachmentAccessCode {
  PUBLIC = "PUBLIC",
  PRIVATE = "PRIVATE",
  VERIFIED = "VERIFIED"
}

interface ICommunityAttachmentAccessDetails {
  code: CommunityAttachmentAccessCode;
  name: string;
  icon: string;
  description: string;
}

/**
 * community.stage_level.PUBLIC: All registered users, irrespective of their roles or verification status, have the ability to attach files.
 * community.stage_level.PRIVATE: Only those users with administrative or moderating roles can attach files. Regular users or members without any elevated permissions cannot.
 * community.stage_level.VERIFIED: In addition to admins and moderators, users who have undergone a verification process or have been nominated for the same can attach files. This can be useful in communities where certain privileges are reserved for trusted or recognized members.
 */
export const CommunityAttachmentAccess: Record<CommunityAttachmentAccessCode, ICommunityAttachmentAccessDetails> = {
  [CommunityAttachmentAccessCode.PUBLIC]: {
    code: CommunityAttachmentAccessCode.PUBLIC,
    name: "community.stage_level.PUBLIC",
    icon: "public",
    description: "All registered users can attach files.",
  },
  [CommunityAttachmentAccessCode.PRIVATE]: {
    code: CommunityAttachmentAccessCode.PRIVATE,
    name: "community.stage_level.PRIVATE",
    icon: "admin_panel_settings",
    description: "Only admins and moderators can attach files.",
  },
  [CommunityAttachmentAccessCode.VERIFIED]: {
    code: CommunityAttachmentAccessCode.VERIFIED,
    name: "community.stage_level.VERIFIED",
    icon: "verified",
    description: "Admins, moderators, and all verified or nominated users can attach files.",
  },
};
