/** @type {import('next').NextConfig} */

const path = require('path')
const { withSentryConfig } = require('@sentry/nextjs')

const moduleExports = {
  reactStrictMode: true,
  sentry: {
      hideSourceMaps: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

const sentryWebpackPluginOptions = {
  silent: true, // Suppresses all logs
}

module.exports = withSentryConfig(moduleExports, sentryWebpackPluginOptions)
