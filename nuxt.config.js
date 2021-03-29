export default {
    head: {
      metaInfo: {
        title: 'Foo Bar',
        titleTemplate: '%s - Baz'
      },
    title: 'my website title',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Kiteris Solutions'
      }
    ],
  },
    buildModules: ['@nuxtjs/tailwindcss']
}
