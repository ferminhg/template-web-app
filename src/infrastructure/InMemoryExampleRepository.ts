import { ExampleRepository } from "../domain/ExampleRepository"
import { githubApiResponses } from "../github_api_responses"

export class InMemoryExampleRepository {
    search(): typeof githubApiResponses {
        return githubApiResponses
    }
}
