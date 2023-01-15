const { writeFile, readFile, stat } = require("fs").promises;
const { exec } = require("child_process");
const { paramCase, pascalCase } = require("change-case");

const inquirer = require("inquirer");
const prompt = inquirer.createPromptModule();

const angularConfig = require("../angular.json");

const project = Object.keys(angularConfig.projects)[0];
const sourceRoot = angularConfig.projects[project].sourceRoot;
const appRoot = `${sourceRoot}/app`;
const routingModulePath = `${appRoot}/app-routing.module.ts`;
const prefix = angularConfig.projects[project].prefix;

const main = async () => {
  const answers = await prompt([
    {
      type: "list",
      name: "type",
      message: "Select a component type.",
      choices: ["Component", "Page"],
    },
    {
      type: "list",
      name: "atomic",
      message: "Select the atomic-level.",
      choices: ["Atom", "Molecule", "Organism"],
      when: (answers) => answers.type === "Component",
    },
    {
      type: "confirm",
      name: "useModifier",
      message: "Use the modifier class names?",
      when: (answers) => answers.type === "Component",
    },
    {
      name: "componentName",
      message: "Enter a component name.",
      default: `component-${new Date().getTime()}`,
      validate: (input) => {
        if (!input.match(/\;|\||\&|\`|\(|\)|\$|\<|\>|\*|\?|\{|\}|\[|\]|\!/g)) {
          return true;
        } else {
          return "You should use alphanumeric, underscore and hyphen.";
        }
      },
      when: (answers) => answers.type === "Component",
    },
  ]);

  // Checking type from console
  const type = answers.type;

  const isComponentType = type === "Component";

  if (isComponentType) {
    if (answers.type) console.info("COMPONENT_TYPE:", answers.type);
    if (answers.atomic) console.info("ATOMIC_LEVEL:", answers.atomic);
    if (answers.useModifier) console.info("ATOMIC_LEVEL:", answers.useModifier);
    if (answers.componentName)
      console.info("COMPONENT_NAME:", answers.componentName);
  }

  const atomic = answers.atomic ? answers.atomic.toLowerCase() : "";
  const useModifier = answers.useModifier;
  const componentName = answers.componentName
    ? paramCase(answers.componentName)
    : "";
  const formattedComponentName = componentName && pascalCase(componentName);
  const selector = `${prefix}-${componentName}`;
  const className = atomic ? `${atomic.slice(0, 1)}-${componentName}` : "";

  const dirPath = `${type.toLowerCase()}s${
    isComponentType ? `/${atomic}s/${componentName}` : ""
  }`;

  //const pageModuleDir = `${type.toLowerCase()}s/${pageDirectoryName}`;
  //const pageModulePath = `${appRoot}/${pageModuleDir}/${pageDirectoryName}.module.ts`;

  const componentCli = `ng generate component --project=${project} --prefix=${prefix} --selector=${selector}${
    isComponentType ? " --module=components --export" : ""
  } ${dirPath}`;
  const moduleCli = `ng generate module --project=${project}`;

  const makeComponent = () => {
    exec(componentCli, (error, stdout, stderr) => {
      if (error) return console.error("ERROR:", error);
      // if (isPageType) {
      //   const pageComponentName = formattedPageIdName + "Component";
      //   readFile(routingModulePath, "utf-8")
      //     .then((data) => {
      //       const newData = data.replace(
      //         `const routes: Routes = [`,
      //         `import { ${pageComponentName} } from './${dirPath}/${pageIdName}.component';const routes: Routes = [{path: '${pageDirectoryName}/${pageIdName}', component: ${pageComponentName}},`
      //       );
      //       writeFile(routingModulePath, newData).then(() => {
      //         console.info(stdout);
      //         console.info(stderr);
      //       });
      //     })
      //     .catch((_error) => {
      //       console.error("ERROR:", _error);
      //     });
      //   return;
      // }

      const sbFile =
        stdout.split(" ")[1].split(".")[0] + ".component.stories.ts";
      const sbData = `import { moduleMetadata, Story, Meta } from '@storybook/angular';import { ${
        formattedComponentName + type
      } } from './${componentName}.component';export default {title: '${formattedComponentName}',component: ${
        formattedComponentName + type
      },decorators: [moduleMetadata({declarations: [${
        formattedComponentName + type
      }],}),],} as Meta;const Template: Story<${
        formattedComponentName + type
      }> = args => ({ props: { ...args }});export const Default = Template.bind({});Default.args = {};`;
      writeFile(sbFile, sbData).then(() => {
        stat(sbFile).then((sbStat) => {
          console.info(stdout + "CREATE " + sbFile + `(${sbStat.size} bytes)`);
          console.info(stderr);

          const componentPath =
            stdout.split(" ")[1].split(".")[0] + ".component";
          const scssPath = componentPath + ".scss";
          const tsPath = componentPath + ".ts";

          writeFile(scssPath, "@use 'forwards' as *;");

          readFile(tsPath, "utf-8")
            .then((data) => {
              const newData = data
                .replace(
                  `import { Component, OnInit } from '@angular/core';`,
                  `import { Component, OnInit,${
                    useModifier ? ` Input,` : ``
                  } HostBinding } from '@angular/core';${
                    useModifier
                      ? `import { ComponentsService, modifiersType } from '../../components.service';`
                      : ``
                  }`
                )
                .replace(
                  `implements OnInit {`,
                  `implements OnInit {${
                    useModifier
                      ? `@Input() modifiers?: modifiersType<''>;@HostBinding('class') get classes(): string {return this.componentsService.getClasses('${className}', this.modifiers);}`
                      : `@HostBinding('class') classes: string = '${className}';`
                  }`
                )
                .replace(
                  `constructor()`,
                  `constructor(${
                    useModifier
                      ? `private componentsService: ComponentsService`
                      : ``
                  })`
                );
              writeFile(tsPath, newData);
            })
            .catch((_error) => {
              console.error("ERROR:", _error);
            });
        });
      });
    });
  };

  makeComponent();

  // if (isPageType && !(await require("fs").existsSync(pageModulePath))) {
  //   exec(moduleCli, (error, stdout, stderr) => {
  //     if (error) return console.error("ERROR:", error);
  //     console.info(stdout);
  //     console.info(stderr);
  //     makeComponent();
  //   });
  // } else {
  //   makeComponent();
  // }
};

main();
