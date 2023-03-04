export type SupportLanguage =
  | 'json'
  | 'javascript'
  | 'typescript'
  | 'graphql'
  | 'html';

export const SUPPORT_LANGUAGES: readonly SupportLanguage[] = [
  'json',
  'javascript',
  'typescript',
  'graphql',
  'html',
] as const;

export const SUPPORT_LAUNGUAGE_INITIAL_VALUE: Record<SupportLanguage, string> =
  {
    json: '{"name": "name", "age": "1"}',
    javascript: "function hello() {\n console.log('world');\n}",
    typescript:
      "type HelloWorld = Record<string, string>;\nconst helloWorld: HelloWorld = { hello: 'world'};",
    graphql: 'query {\nhello {\n id\n name\n}\n }',
    html: `<div>hello world</div>`,
  };
