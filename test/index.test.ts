import tw, { cx } from "../src/index";

describe(`Tagged classnames function`, () => {
  it(`Returns a string of class names without line breaks`, () => {
    let result = tw`
      class1 class2 class3
      
      class4
      class5
    `;

    expect(result).not.toMatch(/[\r\n]/g);

    result = cx`
      class1 class2 class3
      
      class4
      class5
    `;

    expect(result).not.toMatch(/[\r\n]/g);
  });

  it(`Returns a string of class names without leading or trailing whitespace`, () => {
    let result = tw`\t class1 class2 class3    `;

    expect(result).toBe(`class1 class2 class3`);

    result = cx`\t class1 class2 class3    `;

    expect(result).toBe(`class1 class2 class3`);
  });

  it(`Returns the same list of class names as specified in the input`, () => {
    let result = tw`class1 class2 class3`;

    expect(result).toBe(`class1 class2 class3`);

    result = cx`class1 class2 class3`;

    expect(result).toBe(`class1 class2 class3`);
  });

  it(`Removes line comments from final output`, () => {
    const result = tw`
      class1
      
      // This is a line comment
      class2
      
          // Indented line comment
      
// comment at end of string
    `;

    expect(result).toBe(`class1 class2`);
  });

  it(`Removes block comments from final output`, () => {
    const result = tw`
      class1
      
      /*
        This is a block comment
      */
      
      class2
      
      /* Block comment on one line */
      
      /*


      comment */
      
      /*          
      \t\tcomment    */
      \t\t/*comment
      \t\t

      \t\t*/
      \t\t
      \t\t/*
      \t\t
      \t\t
      \t\tcomment*/
      /*comment
      
      
      
      */
      
/*comment

*/
      
/*

comment*/
      
      /*
        This is a block comment
        
        This is the next line
        
        This is the third line
      */
      
      /**/
      
/*
*/

      /**
       *
       *
       */
      
      /*
      **/
      
      /* begin block comment */
      /*

      /*
      
      */
      /* end block comment */
      
      /* begin block comment */
      /*
      /* /*
       */
      /* end block comment */
      
      /*
      //
      */
    `;

    expect(result).toBe(`class1 class2`);
  });

  it(`Returns a string of class names without duplicated white space`, () => {
    let result = tw`
      class1  class2    class3      class4
    `;

    expect(result).toBe(`class1 class2 class3 class4`);

    result = cx`
      class1  class2    class3      class4
    `;

    expect(result).toBe(`class1 class2 class3 class4`);
  });

  it(`Returns a string of class names without falsy values`, () => {
    let result = tw`
      class1 ${undefined}
      class2 ${null}
      class3 ${``}
    `;

    expect(result).toBe(`class1 class2 class3`);

    result = cx`
      class1 ${undefined}
      class2 ${null}
      class3 ${``}
    `;

    expect(result).toBe(`class1 class2 class3`);
  });

  it(`Throws an error when there is interpolation within a line comment`, () => {
    const errorMessage = `String interpolation can not occur within a line comment`;
    expect(() => tw`
      // ${`class`}

    `).toThrow(errorMessage);

    expect(() => tw`// ${`class`}`).toThrow(errorMessage);

    expect(() => tw`
    // ${`class`}`).toThrow(errorMessage);

    expect(() => tw`// EOF line comment`).not.toThrow(errorMessage);
  });

  it(`Throws an error when there is interpolation within a block comment`, () => {
    expect(() => tw`
      /* ${`class`} */
    `).toThrow(`String interpolation can not occur within a block comment`);
  });

  it(`Throws an error when there is an incomplete block comment`, () => {
    expect(() => tw`
      /*
    `).toThrow(`Block comment is not terminated`);
  });

  it(`Places interpolated class names at the end of the class list`, () => {
    let result = tw`
      class1 class2 ${`class3`} class4 ${`class5`} class6
    `;

    expect(result).toBe(`class1 class2 class4 class6 class3 class5`);

    result = cx`
      class1 class2 ${`class3`} class4 ${`class5`} class6
    `;

    expect(result).toBe(`class1 class2 class4 class6 class3 class5`);
  });
});
