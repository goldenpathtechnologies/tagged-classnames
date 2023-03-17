export default function tw(classNames: TemplateStringsArray, ...args: string[]): string {
  // Block comment regex pattern modified from:
  // https://www.npmjs.com/package/block-comment-regex?activeTab=code
  const blockCommentPattern = /(\/\*(?!(\*?\/))(.|(\r?\n))+?\*\/(\r?\n)?)|(\/\*\*\/)/g;
  const lineCommentPattern = /\/\/.*((\r?\n)|$)/g;

  classNames.forEach((token: string, index: number, array: string[]) => {
    if (token.includes(`//`)) {
      const commentHasInterpolation = /\/\/.*(?![\S\s])/g.test(token);
      if (commentHasInterpolation && index !== array.length - 1) {
        throw new Error(`String interpolation can not occur within a line comment`);
      }
    }

    // An incomplete block comment is an indicator that it has been bisected via
    // interpolation
    if (token.includes(`/*`) && !blockCommentPattern.test(token)) {
      if (index !== array.length - 1) {
        throw new Error(`String interpolation can not occur within a block comment`);
      } else {
        throw new Error(`Block comment is not terminated`);
      }
    }
  });

  return classNames
    .concat(args)
    .join(` `)
    .replace(blockCommentPattern, ``)
    .replace(lineCommentPattern, ``)
    .replace(/\s+/g, ` `)
    .trim();
}

export function cx(classNames: TemplateStringsArray, ...args: string[]): string {
  return classNames.concat(args).join(` `).replace(/\s+/g, ` `).trim();
}
