"use strict";
const React = require("react");
const { useState } = require("react");
const { Text, Box, useFocus } = require("ink");
const Gradient = require("ink-gradient");
const BigText = require("ink-big-text");
const { default: Spinner } = require("ink-spinner");
const { exec } = require("child_process");

const App = ({ dir, out = "sample" }) => {
	const [inputDirectory, setInputDirectory] = useState("");
	const [outputName, setOutputName] = useState("");

	exec(`(syft ${dir} -o spdx-json) > ${out}.sbom`, (error, stdout, stderr) => {
		if (error) {
			console.log(`error: ${error.message}`);
			return;
		}
		if (stderr) {
			console.log(`stderr: ${stderr}`);
			return;
		}
		console.log(`stdout: ${stdout}`);
	});
	return (
		<>
			<Box alignItems="center" justifyContent="center">
				<Gradient name="atlas">
					<BigText text="SBOM Generator" />
				</Gradient>
			</Box>
			<Box>
				<Box marginRight={1}>
					<Text color="magenta">
						Enter the name of the directory/docker image: {dir}
					</Text>
				</Box>
				{/* <TextInput
					focus={true}
					value={inputDirectory}
					onChange={setInputDirectory}
				/> */}
			</Box>
			<Box>
				<Box marginRight={1}>
					<Text color="green">
						What should the output file be called: {out}
					</Text>
				</Box>
				{/* <TextInput value={outputName} onChange={setOutputName} /> */}
			</Box>
			<Box paddingTop="2px">
				<Gradient name="retro">
					<Text>Generating SBOM... ⏳</Text>
				</Gradient>
			</Box>
			<Box>
				<Gradient name="atlas">
					<Text color="green">Generated {out}! ✅</Text>
				</Gradient>
			</Box>
		</>
	);
};

module.exports = App;
