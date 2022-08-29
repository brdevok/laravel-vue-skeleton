# Vue Skeleton by [@brdevok](https://github.com/brdevok)

This is a ready-to-go Vue skeleton equipped with most vital tools for small and large SPA applications, up to date with the latest and most popular technologies in market.

## Features

- **Typescript**.
- **Sass**.
- **Storybook**.
- **Babel** compiler.
- **Webpack** for bundling and live development server.
- **generate-template-files** for component templates and other stuff generation via CLI.
- **i18next** for internationalization.
- **Vuex** plugin for state management.
- **Vue Router** plugin for SPA routing.
- **Axios** for AJAX requests.
- **ESLint & Prettier** for code formatting and standars.
- **[Atomic design methodology](https://atomicdesign.bradfrost.com/chapter-2/)**.

## Commands

- **dev:** starts a development server at port 9000 (default) with hot reloading.
- **build:** compile and bundle all your application in a generated `dist` folder ready for production.
- **create:** create component, page and store skeletons from the CLI in an easy way.
- **lint:** check for code formatting issues in your application.
- **fix:** fix all code formatting issues displayed by `npm run lint`.

## Folder structure

- :open_file_folder: **.storybook** - Storybook config folder, visit [storybook.js.org](https://storybook.js.org/) for more information.
- :open_file_folder: **.templates** - Contains everything related to `npm run create` script.
	- :open_file_folder: **options** - CLI options.
	- :open_file_folder: **templates** - Template files used to generate components, views, stores, etc.
	- **`generate.ts`** - Main file for templates generation CLI tool.
- :open_file_folder: **src** - Source folder for your application.
	- :open_file_folder: **api** - Your AJAX requests goes here.
		- :open_file_folder: **getters** - GET requests.
		- :open_file_folder: **mutations** - POST, PUT, DELETE, etc., requests.
	- :open_file_folder: **app** - Contains main Vue app component `App.vue`.
		- **`App.scss`** - Styles related to this component.
		- **`App.ts`** - Scripts related to this component.
		- **`App.types.ts`** - Types related to this component.
		- **`App.vue`** - Template related to this component.
		- **`index.ts`** - Exports your component from `@/app` to prevent path digging on imports (i.e: `@/app/App.vue`).
	- :open_file_folder: **assets** - Static resources
		- :open_file_folder: **fonts**
		- :open_file_folder: **icons**
		- :open_file_folder: **images**
		- :open_file_folder: **videos**
	- :open_file_folder: **components** - Contains your application components.
		- :open_file_folder: **atoms**
			- :open_file_folder: **a1-hello-world** - Your kebab-case component folder (molecules, organisms and templates follow the same structure).
				- :open_file_folder: **icon-test** - **Test** folder for svg icons.
					- **`icon.svg`** - Sample svg icon.
				- **`A1HelloWorld.mocks.ts`** - Mock data used in storybook.
				- **`A1HelloWorld.scss`** - Styles related to this component.
				- **`A1HelloWorld.stories.ts`** - Stories for this component.
				- **`A1HelloWorld.ts`** - Scripts related to this component.
				- **`A1HelloWorld.types.ts`** - Types related to this component.
				- **`A1HelloWorld.vue`** - Template related to this component.
				- **`index.ts`** - Exports your component from `@/components/atoms/hello-world`.
		- :open_file_folder: **blocks** - Block components, usually directly used in templates/views.
		- :open_file_folder: **molecules**
		- :open_file_folder: **organisms**
		- :open_file_folder: **templates**
	- :open_file_folder: **data** - Put here static data for your application.
	- :open_file_folder: **i18next**
		- **`i18next.ts`** - `i18next` configuration.
	- :open_file_folder: **locales** - Translations used by i18next.
		- :open_file_folder: **en** - Language name.
			- **`translation.json`** - Translations for above language.
	- :open_file_folder: **mocks** - Mock data for your application.
	- :open_file_folder: **router** - Contains the routes and router of your SPA app.
		- **`router.ts`** - Vue router plugin configuration.
		- **`routes.ts`** - Routes of your site.
	- :open_file_folder: **store** - Vuex folder for your state stores.
		- :open_file_folder: **hello-world** - Your store folder
			- **`hello-world.namespace.ts`** - Contains a namespace and names for your store getters, mutations and actions.
			- **`hello-world.ts`** - Your store.
			- **`hello-world.types.ts`** - Types to use in `hello-world.ts`.
		- **`store.ts`** - Register all your stores inside modules to serve them in your app.
	- :open_file_folder: **styles** - Core styling for your app.
		- :open_file_folder: **mixins** - For your mixins.
		- :open_file_folder: **utils** - Utils, like variables.
			- **`_colors.scss`** - Color variables example.
		- **`_fonts.scss`** - Load your custom fonts here.
		- **`_base.scss`** - Base styles for your app.
		- **`main.ts`** - Main style file, everything inside the folder should be imported here.
	- :open_file_folder: **types** - For types without explicit context.
	- :open_file_folder: **utils** - Utils folder.
	- :open_file_folder: **views** - Pages of your SPA application.
		- :open_file_folder: **home** - Name of the page.
			- **`HomeView.mocks.ts`** - Mock data used in storybook.
			- **`HomeView.scss`** - Styles related to this component.
			- **`HomeView.stories.ts`** - Stories for this component.
			- **`HomeView.ts`** - Scripts related to this component.
			- **`HomeView.types.ts`** - Types related to this component.
			- **`HomeView.vue`** - Template related to this component.
			- **`index.ts`** - Exports your component from `@/views/home`.
	- **`main.ts`** - Core file of all your Vue application.
	- **`modules.d.ts`** - Contains modules types declarations.
- **`.babelrc`** - Babel config. file.
- **`.editorconfig`** - Set of rules for your editor.
- **`.eslintignore`** - Files to ignore/include in ESLint coverage.
- **`.eslintrc`** - ESLint config. file.
- **`.npmrc`** - NPM config. file.
- **`.prettierignore`** - Files to ignore/include in Prettier coverage.
- **`.prettierrc.json`** - Prettier config. file.
- **`package-lock.json`**
- **`package.json`**
- **`README.md`** - You are here.
- **`tsconfig.json`** - Typescript config. file.
- **`webpack.config.ts`** - Core webpack configuration file.
- **`webpack.dev.ts`** - Webpack settings for development server.
- **`webpack.prod.ts`** - Webpack settings for production build.



