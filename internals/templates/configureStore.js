import { AsyncTrunk } from 'mobx-sync'

import { store } from './stores/RootStore'

const trunk = new AsyncTrunk(store, { storage: localStorage })
export default trunk
