import { githubApiResponses } from "../github_api_responses"

export class InMemoryExampleRepository {
    search(): typeof githubApiResponses {
        return githubApiResponses
    }
}
