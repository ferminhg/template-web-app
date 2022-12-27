import {githubApiResponses} from "../../github_api_responses"
import {InMemoryExampleRepository} from "../../infrastructure/InMemoryExampleRepository"

import {Check, Error, Lock, Unlock, Start, Watchers, Forks} from "./Icons"

import styles from './Dashboard.module.scss'

const isoToReadableDate = (lastUpdate: string): string => {
	const lastUpdateDate = new Date(lastUpdate)
	const currentDate = new Date()
	const diffDays = currentDate.getDate() - lastUpdateDate.getDate()

	if (diffDays === 0) {
		return "today"
	}

	if (diffDays > 30) {
		return "more than a month ago"
	}

	return `${diffDays} days ago`
}


const repository = new InMemoryExampleRepository()
const repositories = repository.search()

export function Dashboard() {
    const title = "Dashboard"
    
    return (
		<>
			<header className={styles.container}>
				<h1>{title}</h1>
			</header>
			<section className={styles.container}>
				{repositories.map((widget) => (
					<article className={styles.widget} key={widget.repositoryData.id}>
						<header className={styles.widget__header}>
							<a
								className={styles.widget__title}
								href={widget.repositoryData.html_url}
								target="_blank"
								title={`${widget.repositoryData.organization.login}/${widget.repositoryData.name}`}
								rel="noreferrer"
							>
								{widget.repositoryData.organization.login}/{widget.repositoryData.name}
							</a>
							{widget.repositoryData.private ? <Lock /> : <Unlock />}
						</header>
						<div className={styles.widget__body}>
							<div className={styles.widget__status}>
								<p>Last update {isoToReadableDate(widget.repositoryData.updated_at)}</p>
								{widget.CiStatus.workflow_runs.length > 0 && (
									<div>
										{widget.CiStatus.workflow_runs[0].status === "completed" ? (
											<Check />
										) : (
											<Error />
										)}
									</div>
								)}
							</div>
							<p className={styles.widget__description}>{widget.repositoryData.description}</p>
						</div>
						<footer className={styles.widget__footer}>
							<div className={styles.widget__stat}>
								<Start />
								<span>{widget.repositoryData.stargazers_count}</span>
							</div>
							<div className={styles.widget__stat}>
								<Watchers />
								<span>{widget.repositoryData.watchers_count}</span>
							</div>
							<div className={styles.widget__stat}>
								<Forks />
								<span>{widget.repositoryData.forks_count}</span>
							</div>
						</footer>
					</article>
				))}
			</section>
		</>
	)
}