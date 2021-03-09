export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6046dbd8c58b0622cd5741bb',
                  title: 'Sanity Studio',
                  name: 'nmbayustaticblog-studio',
                  apiId: '5a75a9b7-651e-49b3-ab22-0d25880fb2e3'
                },
                {
                  buildHookId: '6046dbd87d6b572ec8b01b1e',
                  title: 'Blog Website',
                  name: 'nmbayustaticblog',
                  apiId: '6e2963ec-1e23-4495-8728-711d508e3d6c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nmbayu/nmbayustaticblog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://nmbayustaticblog.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
