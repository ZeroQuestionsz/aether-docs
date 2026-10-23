import { defineClientConfig } from 'vuepress/client'
import SystemOverview from './components/SystemOverview.vue'
import ChatDemo from './components/ChatDemo.vue'
import HangarDemo from './components/HangarDemo.vue'
import Cheatsheet from './components/Cheatsheet.vue'
import Badge from './components/VersionBadge.vue'

export default defineClientConfig({
  enhance({ app }) {
    app.component('SystemOverview', SystemOverview)
    app.component('ChatDemo', ChatDemo)
    app.component('HangarDemo', HangarDemo)
    app.component('Cheatsheet', Cheatsheet)
    app.component('VersionBadge', Badge)
  },
})
