import { Application } from 'probot' // eslint-disable-line no-unused-vars

import SentimentAnalyzer from './sentiment-analyzer'

export = (app: Application) => {
  app.log.debug('Install issue_comment handler')

  app.on('issue_comment', async (context) => {
    const analyzer = new SentimentAnalyzer(app.log)
    const commentUrl = context.payload.comment.html_url
    const commentText = context.payload.comment.body
    const score = await analyzer.analyze(commentUrl, commentText)

    app.log.info(`Toxicity score ${score} for ${commentUrl}`)
  })
}
