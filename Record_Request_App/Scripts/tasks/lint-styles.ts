import * as shell from "shelljs"
import { resolve } from "path"
const base = resolve(".")
shell.echo("\n----- linting and formatting styles -----\n")
shell.exec(`npx stylelint --fix "./src/**/*.scss"`)
