export interface Event {
  id: string;
  type: string;
  actor: Actor;
  repo: Repo;
  payload: Payload;
  public: boolean;
  created_at: Date;
}

export interface Actor {
  id: number;
  login: DisplayLogin;
  display_login: DisplayLogin;
  gravatar_id: string;
  url: string;
  avatar_url: string;
}

export enum DisplayLogin {
  GideonAdeti = "Gideon Adeti",
  Gideonadeti = "gideonadeti",
}

export interface Payload {
  ref?: MasterBranch | null;
  ref_type?: RefType;
  master_branch?: MasterBranch;
  description?: null | string;
  pusher_type?: PusherType;
  repository_id?: number;
  push_id?: number;
  size?: number;
  distinct_size?: number;
  head?: string;
  before?: string;
  commits?: Commit[];
  action?: string;
  issue?: Issue;
  forkee?: Forkee;
  number?: number;
  pull_request?: PullRequest;
}

export interface Commit {
  sha: string;
  author: Author;
  message: string;
  distinct: boolean;
  url: string;
}

export interface Author {
  email: Email;
  name: DisplayLogin;
}

export enum Email {
  Gideonadeti0GmailCOM = "gideonadeti0@gmail.com",
}

export interface Forkee {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  owner: Owner;
  html_url: string;
  description: string;
  fork: boolean;
  url: string;
  forks_url: string;
  keys_url: string;
  collaborators_url: string;
  teams_url: string;
  hooks_url: string;
  issue_events_url: string;
  events_url: string;
  assignees_url: string;
  branches_url: string;
  tags_url: string;
  blobs_url: string;
  git_tags_url: string;
  git_refs_url: string;
  trees_url: string;
  statuses_url: string;
  languages_url: string;
  stargazers_url: string;
  contributors_url: string;
  subscribers_url: string;
  subscription_url: string;
  commits_url: string;
  git_commits_url: string;
  comments_url: string;
  issue_comment_url: string;
  contents_url: string;
  compare_url: string;
  merges_url: string;
  archive_url: string;
  downloads_url: string;
  issues_url: string;
  pulls_url: string;
  milestones_url: string;
  notifications_url: string;
  labels_url: string;
  releases_url: string;
  deployments_url: string;
  created_at: Date;
  updated_at: Date;
  pushed_at: Date;
  git_url: string;
  ssh_url: string;
  clone_url: string;
  svn_url: string;
  homepage: null;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language: null | string;
  has_issues: boolean;
  has_projects: boolean;
  has_downloads: boolean;
  has_wiki: boolean;
  has_pages: boolean;
  has_discussions: boolean;
  forks_count: number;
  mirror_url: null;
  archived: boolean;
  disabled: boolean;
  open_issues_count: number;
  license: null;
  allow_forking: boolean;
  is_template: boolean;
  web_commit_signoff_required: boolean;
  topics: any[];
  visibility: string;
  forks: number;
  open_issues: number;
  watchers: number;
  default_branch: MasterBranch;
  public?: boolean;
}

export enum MasterBranch {
  HTMLSkeleton = "html-skeleton",
  Main = "main",
  RefsHeadsMain = "refs/heads/main",
}

export interface Owner {
  login: DisplayLogin;
  id: number;
  node_id: NodeID;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: FollowingURL;
  gists_url: GistsURL;
  starred_url: StarredURL;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: EventsURL;
  received_events_url: string;
  type: Type;
  site_admin: boolean;
}

export enum EventsURL {
  HTTPSAPIGithubCOMUsersGideonadetiEventsPrivacy = "https://api.github.com/users/gideonadeti/events{/privacy}",
}

export enum FollowingURL {
  HTTPSAPIGithubCOMUsersGideonadetiFollowingOtherUser = "https://api.github.com/users/gideonadeti/following{/other_user}",
}

export enum GistsURL {
  HTTPSAPIGithubCOMUsersGideonadetiGistsGistID = "https://api.github.com/users/gideonadeti/gists{/gist_id}",
}

export enum NodeID {
  UKgDOCqdjWQ = "U_kgDOCqdjWQ",
}

export enum StarredURL {
  HTTPSAPIGithubCOMUsersGideonadetiStarredOwnerRepo = "https://api.github.com/users/gideonadeti/starred{/owner}{/repo}",
}

export enum Type {
  User = "User",
}

export interface Issue {
  url: string;
  repository_url: string;
  labels_url: string;
  comments_url: string;
  events_url: string;
  html_url: string;
  id: number;
  node_id: string;
  number: number;
  title: string;
  user: Owner;
  labels: Label[];
  state: string;
  locked: boolean;
  assignee: null;
  assignees: any[];
  milestone: null;
  comments: number;
  created_at: Date;
  updated_at: Date;
  closed_at: null;
  author_association: string;
  active_lock_reason: null;
  body: string;
  reactions: Reactions;
  timeline_url: string;
  performed_via_github_app: null;
  state_reason: null;
}

export interface Label {
  id: number;
  node_id: string;
  url: string;
  name: string;
  color: string;
  default: boolean;
  description: string;
}

export interface Reactions {
  url: string;
  total_count: number;
  "+1": number;
  "-1": number;
  laugh: number;
  hooray: number;
  confused: number;
  heart: number;
  rocket: number;
  eyes: number;
}

export interface PullRequest {
  url: string;
  id: number;
  node_id: string;
  html_url: string;
  diff_url: string;
  patch_url: string;
  issue_url: string;
  number: number;
  state: string;
  locked: boolean;
  title: string;
  user: Owner;
  body: null;
  created_at: Date;
  updated_at: Date;
  closed_at: Date | null;
  merged_at: Date | null;
  merge_commit_sha: null | string;
  assignee: null;
  assignees: any[];
  requested_reviewers: any[];
  requested_teams: any[];
  labels: any[];
  milestone: null;
  draft: boolean;
  commits_url: string;
  review_comments_url: string;
  review_comment_url: string;
  comments_url: string;
  statuses_url: string;
  head: Base;
  base: Base;
  _links: Links;
  author_association: string;
  auto_merge: null;
  active_lock_reason: null;
  merged: boolean;
  mergeable: null;
  rebaseable: null;
  mergeable_state: string;
  merged_by: Owner | null;
  comments: number;
  review_comments: number;
  maintainer_can_modify: boolean;
  commits: number;
  additions: number;
  deletions: number;
  changed_files: number;
}

export interface Links {
  self: Comments;
  html: Comments;
  issue: Comments;
  comments: Comments;
  review_comments: Comments;
  review_comment: Comments;
  commits: Comments;
  statuses: Comments;
}

export interface Comments {
  href: string;
}

export interface Base {
  label: string;
  ref: MasterBranch;
  sha: string;
  user: Owner;
  repo: Forkee;
}

export enum PusherType {
  User = "user",
}

export enum RefType {
  Branch = "branch",
  Repository = "repository",
}

export interface Repo {
  id: number;
  name: string;
  url: string;
}
