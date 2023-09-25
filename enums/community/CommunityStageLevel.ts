/**
 * Represents the various stage levels of a community.
 *
 * - **PUBLIC**: All logged-in users have the ability to create topics and send posts to the community.
 * - **PRIVATE**: Only administrators and moderators are granted the privilege to create topics, while other users can only send posts within these created topics.
 * - **VERIFIED**: Administrators, moderators, and users who have been verified or nominated possess the right to create topics. All other members are limited to sending posts within these established topics.
 */
export const CommunityStageLevel = {
  PUBLIC: {
    code: "PUBLIC",
    name: "community.stage_level.PUBLIC",
    icon: "public",
    description: "This level provides an open platform where every logged-in user can freely create topics and send posts. Ideal for promoting extensive community interaction and engagement."
  },
  PRIVATE: {
    code: "PRIVATE",
    name: "community.stage_level.PRIVATE",
    icon: "admin_panel_settings",
    description: "This level restricts topic creation to only administrators and moderators. However, all other members can contribute by sending posts in the topics created by these privileged users. Suited for controlled and moderated community environments."
  },
  VERIFIED: {
    code: "VERIFIED",
    name: "community.stage_level.VERIFIED",
    icon: "verified",
    description: "Topic creation at this level is reserved for administrators, moderators, and users who've been either verified or nominated. However, every other user retains the right to send posts within these topics. Best for communities that seek a balance between openness and controlled topic generation."
  },
};
