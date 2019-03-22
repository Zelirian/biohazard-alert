/**
 * Information about the event to be analyzed.
 */
interface EventInfo {
  /** GitHub username of the author of the event */
  readonly author: string

  /** Markdown text content to be analyzed from the event */
  readonly content: string

  /** GitHub webhook event name */
  readonly event: string

  /** Probot-style full event name */
  readonly fullEvent: string

  /** Indicates whether or not the repo the event occurred on is private */
  readonly isRepoPrivate: boolean

  /** URI of the event */
  readonly source: string
}
