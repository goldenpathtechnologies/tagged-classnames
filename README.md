# Tagged Classnames

A utility designed to ease maintenance and organization of Tailwind classes.

![GitHub package.json version](https://img.shields.io/github/package-json/v/goldenpathtechnologies/tagged-classnames)
[![Release](https://github.com/goldenpathtechnologies/tagged-classnames/actions/workflows/release.yml/badge.svg)](https://github.com/goldenpathtechnologies/tagged-classnames/actions/workflows/release.yml)
[![Deploy Documentation Site to Pages](https://github.com/goldenpathtechnologies/tagged-classnames/actions/workflows/docs.yml/badge.svg)](https://github.com/goldenpathtechnologies/tagged-classnames/actions/workflows/docs.yml)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
![GitHub](https://img.shields.io/github/license/goldenpathtechnologies/tagged-classnames)
[![tippin.me](https://badgen.net/badge/%E2%9A%A1%EF%B8%8Ftippin.me/@GoldenPathTech/F0918E)](https://tippin.me/@GoldenPathTech)

## <span>🎬</span> Demo

View a demo [here](https://tagged-classnames.goldenpath.ca/demo/).

## <span>🛠</span> Installation

PNPM:

```bash
pnpm add tagged-classnames
```

NPM:

```bash
npm install tagged-classnames
```

Yarn:

```bash
yarn install tagged-classnames
```

## <span>👨‍💻</span> Basic usage

```tsx
import tw from "tagged-classnames";

export default function FlowbiteToggleExample(): JSX.Element {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input type="checkbox" value="" className="sr-only peer" />
      <div
        className={tw`
          w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300
          dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700
          
          // Comments and string interpolation are supported
          peer-checked:after:translate-x-full ${`peer-checked:after:border-white`} after:content-['']
          after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300
          after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600
          peer-checked:bg-blue-600
        `}
      />
      <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Toggle me</span>
    </label>
  );
}
```

See the [demo](https://tagged-classnames.goldenpath.ca/demo/) for more examples.

## <span>📋</span> Properties


## <span>🤦🏿‍♂️</span> Issues

Please report any issues with this software
[here](https://github.com/goldenpathtechnologies/tagged-classnames/issues). If you would like to contribute to 
this project, feel free to fork it and send a pull request. Note that this project is governed by a
[code of conduct](https://github.com/goldenpathtechnologies/tagged-classnames/blob/main/CODE_OF_CONDUCT.md).

## <span>📃</span> License

This project is [MIT](https://github.com/goldenpathtechnologies/tagged-classnames/blob/main/LICENSE) 
licensed.
