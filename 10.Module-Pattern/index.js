

import child1Info from "./child1.js"
import { child2Info } from "./child2.js"

function main() {
  console.log('main module')
}

main()

child1Info('child1 module')

child2Info()