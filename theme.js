/**
 * @module  Theme
 * @name    we-theme-event
 */

module.exports = {
  // theme config
  configs: {
    emailTemplates: {
      path: 'templates/email',
    },
    javascript: 'files/public/scripts.js',
    stylesheet: 'files/public/style.css'
  },

  autoLoadAllTemplates: true,
  // will be auto loaded
  templates: {},
  // set layouts here
  layouts: {
    'default': {
      template: __dirname + '/templates/server/layout.hbs',
      regions: {
        highlighted: {
          name: 'Highlighted'
        },
        afterContent: {
          name: 'After content'
        },
        sidebar: {
          name: 'Sidebar'
        }
      }
    },
    'eventHome': {
      template: __dirname + '/templates/server/event-home-layout.hbs',
      regions: {
        highlighted: {
          name: 'Highlighted'
        },
        afterContent: {
          name: 'afterContent'
        }
      }
    },
    'fullwidth': {
      template: __dirname + '/templates/server/full-width-layout.hbs',
      regions: {
        highlighted: {
          name: 'Highlighted'
        }
      }
    },
    'eventAdmin': {
      template: __dirname + '/templates/server/event/event-admin-layout.hbs',
      regions: {
        highlighted: {
          name: 'Highlighted'
        },
        sidebar: {
          name: 'Sidebar'
        }
      }
    }
  },
  widgets: {
    'we-cf-speakers': __dirname + '/templates/server/widgets/we-cf-speakers.hbs',
    // 'we-cf-schedule': __dirname + '/templates/server/widgets/we-cf-schedule.hbs',
    'we-cf-partners': __dirname + '/templates/server/widgets/we-cf-partners.hbs',
    // 'we-cf-topics': __dirname + '/templates/server/widgets/we-cf-topics.hbs',
    // 'we-cf-video': __dirname + '/templates/server/widgets/we-cf-video.hbs',
    // 'we-cf-news': __dirname + '/templates/server/widgets/we-cf-news.hbs'
  }
};