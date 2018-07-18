import * as shell from "shelljs"
import { resolve } from "path"
const base = resolve(".")
shell.echo("\n----- formatting with prettier -----\n")
shell.exec(
    `npx prettier --write --config ${base}/.prettierrc ${base}/**/{**/*.ts*,'*.ts*'}`
)
shell.echo("\n----- linting with tslint -----\n")
shell.exec(`npx tslint --fix -c '${base}/tslint.json' ${base}/**/*.ts*`)
