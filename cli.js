#!/usr/bin/env node
"use strict";
const React = require("react");
const importJsx = require("import-jsx");
const { render } = require("ink");
const meow = require("meow");

const ui = importJsx("./ui");

const cli = meow(`
	Usage
	  $ sbom-generator

	Options
		--dir Directory to generate SBOM for
		--out	Output SBOM file name

	Examples
	  $ sbom-generator --dir=some_dir --out=some_file.sbom
`);

render(React.createElement(ui, cli.flags));
