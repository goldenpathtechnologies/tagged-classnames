# tagged-classnames

A utility designed to ease maintenance and organization of Tailwind classes.

![GitHub package.json version](https://img.shields.io/github/package-json/v/goldenpathtechnologies/tagged-classnames)
[![Release](https://github.com/goldenpathtechnologies/tagged-classnames/actions/workflows/release.yml/badge.svg)](https://github.com/goldenpathtechnologies/tagged-classnames/actions/workflows/release.yml)
[![Deploy Documentation Site to Pages](https://github.com/goldenpathtechnologies/tagged-classnames/actions/workflows/docs.yml/badge.svg)](https://github.com/goldenpathtechnologies/tagged-classnames/actions/workflows/docs.yml)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
![GitHub](https://img.shields.io/github/license/goldenpathtechnologies/tagged-classnames)

## Demo

See `tagged-classnames` in action [here](https://tagged-classnames.goldenpath.ca/demo/).

## Installation

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

## Usage

### Basic example

Import `tagged-classnames` and use it to make long class lists more maintainable.

```tsx
import tw from "tagged-classnames";

export default function Example() {
  return (
    <button
      type="button"
      className={tw`
        text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300
        font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600
        dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800
      `}
    >
      Button
    </button>
  );
}
```

The same can be accomplished using only a template literal, however, all whitespace would be retained. This is what 
that looks like in the DOM:

```html
<button type="button" class="
        text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300
        font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600
        dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800
      ">Button</button>
```

This is what the same element looks like in the DOM after using `tagged-classnames`:

```html
<button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Button</button>
```

`tagged-classnames` gives you the flexibility template literals offer while keeping the resulting DOM tidy.

### String interpolation

`tagged-classnames` retains the ability to use string interpolation as with plain template literals, but with an 
important [caveat](#known-limitations).

```tsx
import tw from "tagged-classnames";

export default function Example({ someCondition }) {
  return (
    <button
      type="button"
      className={tw`
        text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300
        ${someCondition ? `font-medium` : `font-light`} rounded-lg text-sm px-5
        py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none
        dark:focus:ring-blue-800
      `}
    >
      Button
    </button>
  );
}
```

Don't do this:

```jsx
<button
  type="button"
  className={tw`
    text-white bg-${someCondition ? `blue` : `green`}-700 hover:bg-blue-800
    focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5
    mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none
    dark:focus:ring-blue-800
  `}
>
  Button
</button>
```

The above example will produce `bg-`, `-700`, and one of `blue` or `green` classes. Use whole class names like in 
the first string interpolation example if you need to conditionally apply classes.

### Use variables for reusability and cleaner tags 

```tsx
import tw from "tagged-classnames";

const buttonStyles = tw`
  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300
  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600
  dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800
`;

export default function Example() {
  return (
    <button type="button" className={buttonStyles}>Button</button>
  );
}
```

### Line comments

`tagged-classnames` supports line comments in the tag function's template literal to help document complex style rules.

```tsx
import tw from "tagged-classnames";

export default function Example() {
  return (
    <button
      type="button"
      className={tw`
        // Comment 1
        text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300
        
        // Comment 2
        font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600
        
        // Comment 3
        dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800
        
        text-base // Comment 4
      `}
    >
      Button
    </button>
  );
}
```

Comments are not rendered in the DOM and don't affect the formatting of the class list. String interpolation is not 
allowed in comments and will throw an error.

Don't do this:

```jsx
<button
  type="button"
  className={tw`
    // This is invalid and will throw an error: ${`text-base`}
    text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300
  `}
>
  Button
</button>
```

### Block comments

C-style block comments are also supported. The same string interpolation limitations as with line comments also 
applies to block comments.

```tsx
import tw from "tagged-classnames";

export default function Example() {
  return (
    <button
      type="button"
      className={tw`
        /* Block comment on one line */
        text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300
        font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600
        
        /**
         * Block comment spanning multiple lines
         */
        dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800
        
        /* Don't do this! ${`text-normal`} An error will be thrown */
      `}
    >
      Button
    </button>
  );
}
```

Additionally, block comments must be properly terminated or an error will be thrown.

```jsx
<button
  type="button"
  className={tw`
    /* This is invalid and will throw an error due to an absent comment terminator
    text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300
  `}
>
  Button
</button>
```

### Performant class list rendering

An alternative function `cx` is available for faster class list rendering if you don't need to use comments.

```tsx
import { cx } from "tagged-classnames";

export default function Example() {
  return (
    <button
      type="button"
      className={cx`
        text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300
        font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600
        dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800
      `}
    >
      Button
    </button>
  );
}
```

If you're worried about performance, it's a good idea to use `cx` by default, and only use the default function if 
you need to comment your classes.

## Functions

### `tw` (default)

Removes excessive whitespace and comments from CSS class lists. Enables flexible formatting of long lists of CSS 
classes.

```typescript
function tw(classNames: TemplateStringsArray, ...args: string[]): string {}
```

### `cx`

Removes excessive whitespace from CSS class lists. Does not support comments. More performant than `tw`.

```typescript
function cx(classNames: TemplateStringsArray, ...args: string[]): string {}
```

## Known limitations

- When using string interpolation in the `tagged-classnames` tag function, all interpolated values will be appended 
  to the end of the class list.
- String interpolation can not be used to construct class names within the tag function. This must be done elsewhere 
  in the code.

## Issues

Please report any issues with this software
[here](https://github.com/goldenpathtechnologies/tagged-classnames/issues). If you would like to contribute to 
this project, feel free to fork it and send a pull request. Note that this project is governed by a
[code of conduct](https://github.com/goldenpathtechnologies/tagged-classnames/blob/main/CODE_OF_CONDUCT.md).

## License

This project is [MIT](https://github.com/goldenpathtechnologies/tagged-classnames/blob/main/LICENSE) 
licensed.
