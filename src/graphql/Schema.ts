import { gql } from 'apollo-server-express';

const Schema = gql`
  #
  # Schemas
  # Have no direct dependendencies with 'orm/schema.prisma' [SameName]
  #
  type User @cacheControl(maxAge: 1000) {
    id: Int!
    email: String!
    name: String!
    password: String!
    role: Int!
    lastLogin: String!
    created: String!
    updated: String!
    ### Only graphql types
    roleName: String!
    token: String
    refreshToken: String
  }
  type Article @cacheControl(maxAge: 1000) {
    id: Int!
    v: String!
    url: String!
    email: String!
    isPublished: String!
    added: String!
    edited: String!
    published: String!
    avgTimeStory: String!
    avgAllTimeStory: String!
    created: String!
    updated: String!
  }
  type Filter @cacheControl(maxAge: 1000) {
    id: Int!
    filter: String!
    value: String!
    created: String!
    updated: String!
  }
  type Brand @cacheControl(maxAge: 1000) {
    id: Int!
    v: String!
    url: String!
    email: String!
    isPublished: String!
    added: String!
    edited: String!
    published: String!
    avgTimeStory: String!
    avgAllTimeStory: String!
    created: String!
    updated: String!
  }
  type TopAuthor @cacheControl(maxAge: 1000) {
    id: Int!
    v: String!
    url: String!
    email: String!
    isPublished: String!
    added: String!
    edited: String!
    published: String!
    avgTimeStory: String!
    avgAllTimeStory: String!
    created: String!
    updated: String!
  }
  type Editor @cacheControl(maxAge: 1000) {
    id: Int!
    name: String!
    edited: String!
    editedPercent: String!
    published: String!
    publishedPercent: String!
    rejected: String!
    rejectedPercent: String!
    created: String!
    updated: String!
  }
  type Expandable @cacheControl(maxAge: 1000) {
    id: Int!
    key: Int!
    name: String!
    age: Int!
    address: String!
    description: String!
    created: String!
    updated: String!
  }
  type Appearance @cacheControl(maxAge: 1000) {
    id: Int!
    search: String!
    clicks: Int!
    impressions: Int!
    ctr: String!
    position: Float!
    created: String!
    updated: String!
  }
  type ClicksPosition @cacheControl(maxAge: 1000) {
    id: Int!
    date: String!
    clicks: Int!
    impressions: Int!
    ctr: String!
    position: Float!
    created: String!
    updated: String!
  }
  type Country @cacheControl(maxAge: 1000) {
    id: Int!
    name: String!
    clicks: Int!
    impressions: Int!
    ctr: String!
    position: Float!
    created: String!
    updated: String!
  }
  type Device @cacheControl(maxAge: 1000) {
    id: Int!
    name: String!
    clicks: Int!
    impressions: Int!
    ctr: String!
    position: Float!
    created: String!
    updated: String!
  }
  type Page @cacheControl(maxAge: 1000) {
    id: Int!
    url: String!
    clicks: Int!
    impressions: Int!
    ctr: String!
    position: Float!
    created: String!
    updated: String!
  }
  type QueryS @cacheControl(maxAge: 1000) {
    id: Int!
    name: String!
    clicks: Int!
    impressions: Int!
    ctr: String!
    position: Float!
    created: String!
    updated: String!
  }
  type Tag @cacheControl(maxAge: 1000) {
    id: Int!
    word: String!
    count: Int!
    char: String!
    created: String!
    updated: String!
  }
  # Inputs as requests parameters
  ## User
  input RegistrationParams {
    name: String
    password: String!
    passwordRepeat: String!
    email: String!
  }
  input LoginParams {
    email: String!
    password: String!
  }
  input GetOneUserParams {
    id: Int!
  }
  input UpdateOneUserParams {
    name: String
    email: String
    role: Int
    password: String
  }
  ## Article
  input PostOneArticleParams {
    v: String!
    url: String!
    email: String!
    isPublished: String!
    added: String!
    edited: String!
    published: String!
    avgTimeStory: String!
    avgAllTimeStory: String!
  }
  input GetOneArticleParams {
    id: Int!
  }
  input UpdateOneArticleParams {
    v: String
    url: String
    email: String
    isPublished: String
    added: String
    edited: String
    published: String
    avgTimeStory: String
    avgAllTimeStory: String
  }
  ## Brand
  input PostOneBrandParams {
    v: String!
    url: String!
    email: String!
    isPublished: String!
    added: String!
    edited: String!
    published: String!
    avgTimeStory: String!
    avgAllTimeStory: String!
  }
  input GetOneBrandParams {
    id: Int!
  }
  input UpdateOneBrandParams {
    v: String
    url: String
    email: String
    isPublished: String
    added: String
    edited: String
    published: String
    avgTimeStory: String
    avgAllTimeStory: String
  }
  ## TopAuthor
  input PostOneTopAuthorParams {
    v: String!
    url: String!
    email: String!
    isPublished: String!
    added: String!
    edited: String!
    published: String!
    avgTimeStory: String!
    avgAllTimeStory: String!
  }
  input GetOneTopAuthorParams {
    id: Int!
  }
  input UpdateOneTopAuthorParams {
    v: String
    url: String
    email: String
    isPublished: String
    added: String
    edited: String
    published: String
    avgTimeStory: String
    avgAllTimeStory: String
  }
  ## Editor
  input PostOneEditorParams {
    name: String!
    edited: String!
    editedPercent: String!
    published: String!
    publishedPercent: String!
    rejected: String!
    rejectedPercent: String!
  }
  input GetOneEditorParams {
    id: Int!
  }
  input UpdateOneEditorParams {
    name: String
    edited: String
    editedPercent: String
    published: String
    publishedPercent: String
    rejected: String
    rejectedPercent: String
  }
  ## Expandable
  input PostOneExpandableParams {
    key: Int!
    name: String!
    age: Int!
    address: String!
    description: String!
  }
  input GetOneExpandableParams {
    id: Int!
  }
  input UpdateOneExpandableParams {
    key: Int
    name: String
    age: Int
    address: String
    description: String
  }
  ## Filter
  input PostOneFilterParams {
    filter: String!
    value: String!
  }
  input GetOneFilterParams {
    id: Int!
  }
  input UpdateOneFilterParams {
    filter: String
    value: String
  }
  ## Appearance
  input PostOneAppearanceParams {
    search: String!
    clicks: Int!
    impressions: Int!
    ctr: String!
    position: Float!
  }
  input GetOneAppearanceParams {
    id: Int!
  }
  input UpdateOneAppearanceParams {
    search: String
    clicks: Int
    impressions: Int
    ctr: String
    position: Float
  }
  ## ClicksPosition
  input PostOneClicksPositionParams {
    date: String!
    clicks: Int!
    impressions: Int!
    ctr: String!
    position: Float!
  }
  input GetOneClicksPositionParams {
    id: Int!
  }
  input UpdateOneClicksPositionParams {
    date: String
    clicks: Int
    impressions: Int
    ctr: String
    position: Float
  }
  ## Country
  input PostOneCountryParams {
    name: String!
    clicks: Int!
    impressions: Int!
    ctr: String!
    position: Float!
  }
  input GetOneCountryParams {
    id: Int!
  }
  input UpdateOneCountryParams {
    name: String
    clicks: Int
    impressions: Int
    ctr: String
    position: Float
  }
  ## Device
  input PostOneDeviceParams {
    name: String!
    clicks: Int!
    impressions: Int!
    ctr: String!
    position: Float!
  }
  input GetOneDeviceParams {
    id: Int!
  }
  input UpdateOneDeviceParams {
    name: String
    clicks: Int
    impressions: Int
    ctr: String
    position: Float
  }
  ## Page
  input PostOnePageParams {
    url: String!
    clicks: Int!
    impressions: Int!
    ctr: String!
    position: Float!
  }
  input GetOnePageParams {
    id: Int!
  }
  input UpdateOnePageParams {
    url: String
    clicks: Int
    impressions: Int
    ctr: String
    position: Float
  }
  ## QueryS
  input PostOneQuerySParams {
    name: String!
    clicks: Int!
    impressions: Int!
    ctr: String!
    position: Float!
  }
  input GetOneQuerySParams {
    id: Int!
  }
  input UpdateOneQuerySParams {
    name: String
    clicks: Int
    impressions: Int
    ctr: String
    position: Float
  }
  ## Tag
  input PostOneTagParams {
    word: String!
    count: Int!
    char: String!
  }
  input GetOneTagParams {
    id: Int!
  }
  input UpdateOneTagParams {
    word: String
    count: Int
    char: String
  }
  type Query {
    # Get many
    getManyArticle: [Article]!
    getManyTag: [Tag]!
    getManyQueryS: [QueryS]!
    getManyPage: [Page]!
    getManyDevice: [Device]!
    getManyCountry: [Country]!
    getManyClicksPosition: [ClicksPosition]!
    getManyAppearance: [Appearance]!
    getManyFilter: [Filter]!
    getManyBrand: [Brand]!
    getManyTopAuthor: [TopAuthor]!
    getManyEditor: [Editor]!
    getManyExpandable: [Expandable]!
    # Get one
    getOneUser(where: GetOneUserParams!): User
    getOneTag(where: GetOneTagParams!): Tag
    getOneQueryS(where: GetOneQuerySParams!): QueryS
    getOnePage(where: GetOnePageParams!): Page
    getOneDevice(where: GetOneDeviceParams!): Device
    getOneCountry(where: GetOneCountryParams!): Country
    getOneClicksPosition(where: GetOneClicksPositionParams!): ClicksPosition
    getOneAppearance(where: GetOneAppearanceParams!): Appearance
    getOneArticle(where: GetOneArticleParams!): Article
    getOneFilter(where: GetOneFilterParams!): Filter
    getOneExpandable(where: GetOneExpandableParams!): Expandable
    getOneBrand(where: GetOneBrandParams!): Brand
    getOneTopAuthor(where: GetOneTopAuthorParams!): TopAuthor
    getOneEditor(where: GetOneEditorParams!): Editor
  }
  type Mutation {
    # Special user mutations
    registration(data: RegistrationParams!): User
    login(data: LoginParams!): User
    # Post one
    postOneExpandable(data: PostOneExpandableParams!): Expandable
    postOneTag(data: PostOneTagParams!): Tag
    postOneBrand(data: PostOneBrandParams!): Brand
    postOneQueryS(data: PostOneQuerySParams!): QueryS
    postOnePage(data: PostOnePageParams!): Page
    postOneDevice(data: PostOneDeviceParams!): Device
    postOneCountry(data: PostOneCountryParams!): Country
    postOneClicksPosition(data: PostOneClicksPositionParams!): ClicksPosition
    postOneAppearance(data: PostOneAppearanceParams!): Appearance
    postOneFilter(data: PostOneFilterParams!): Filter
    postOneArticle(data: PostOneArticleParams!): Article
    postOneTopAuthor(data: PostOneTopAuthorParams!): TopAuthor
    postOneEditor(data: PostOneEditorParams!): Editor
    # Update one
    updateOneUser(where: GetOneUserParams!, data: UpdateOneUserParams!): User
    updateOneAppearance(
      where: GetOneAppearanceParams!
      data: UpdateOneAppearanceParams!
    ): Appearance
    updateOneFilter(where: GetOneFilterParams!, data: UpdateOneFilterParams!): Filter
    updateOneClicksPosition(
      where: GetOneClicksPositionParams!
      data: UpdateOneClicksPositionParams!
    ): ClicksPosition
    updateOneArticle(where: GetOneArticleParams!, data: UpdateOneArticleParams!): Article
    updateOneBrand(where: GetOneBrandParams!, data: UpdateOneBrandParams!): Brand
    updateOneExpandable(
      where: GetOneExpandableParams!
      data: UpdateOneExpandableParams!
    ): Expandable
    updateOneTopAuthor(where: GetOneTopAuthorParams!, data: UpdateOneTopAuthorParams!): TopAuthor
    updateOneEditor(where: GetOneEditorParams!, data: UpdateOneEditorParams!): Editor
    updateOneCountry(where: GetOneCountryParams!, data: UpdateOneCountryParams!): Country
    updateOneDevice(where: GetOneDeviceParams!, data: UpdateOneDeviceParams!): Device
    updateOnePage(where: GetOnePageParams!, data: UpdateOnePageParams!): Page
    updateOneQueryS(where: GetOneQuerySParams!, data: UpdateOneQuerySParams!): QueryS
    updateOneTag(where: GetOneTagParams!, data: UpdateOneTagParams!): Tag
    # Delete one
    deleteOneUser(where: GetOneUserParams!): User
    deleteOneTag(where: GetOneTagParams!): Tag
    deleteOneQueryS(where: GetOneQuerySParams!): QueryS
    deleteOnePage(where: GetOnePageParams!): Page
    deleteOneDevice(where: GetOneDeviceParams!): Device
    deleteOneCountry(where: GetOneCountryParams!): Country
    deleteOneClicksPosition(where: GetOneClicksPositionParams!): ClicksPosition
    deleteOneAppearance(where: GetOneAppearanceParams!): Appearance
    deleteOneFilter(where: GetOneFilterParams!): Filter
    deleteOneArticle(where: GetOneArticleParams!): Article
    deleteOneExpandable(where: GetOneExpandableParams!): Expandable
    deleteOneBrand(where: GetOneBrandParams!): Brand
    deleteOneTopAuthor(where: GetOneTopAuthorParams!): TopAuthor
    deleteOneEditor(where: GetOneEditorParams!): Editor
  }
`;

export default Schema;
