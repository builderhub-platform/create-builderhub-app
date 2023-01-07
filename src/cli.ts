#!/usr/bin/env node

import { create } from "create-create-app";
import { resolve } from "path";

const templateRoot = resolve(__dirname, "..", "templates");

const caveat = `
Happy coding!! Builderhub Platform Dev TEAM!
`;

create("create-builderhub-app", {
  templateRoot,
  promptForPackageManager: true,
  caveat,
});
