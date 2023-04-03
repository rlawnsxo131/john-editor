/**
 * @TODO typescript, graphql 지원하기
 */
export type SupportLanguage = 'json' | 'javascript' | 'html' | 'css';
// | 'typescript'
// | 'graphql'

export type LanguageRecord = {
  language: SupportLanguage;
  origin: string;
  modify: string;
};

export const SUPPORT_LANGUAGES: readonly SupportLanguage[] = [
  'json',
  'javascript',
  'html',
  'css',
  // 'typescript',
  // 'graphql',
];

export const SUPPORT_LAUNGUAGE_INITIAL_VALUE: Record<
  SupportLanguage,
  Record<'origin' | 'modify', string>
> = {
  json: {
    origin: '{ "name": "name", "age": "1" }',
    modify: '{ "name": "name", "age": "1" }',
  },
  javascript: {
    origin: "function hello() {\n  console.log('world');\n}",
    modify: "function hello() {\n  console.log('world');\n}",
  },
  html: {
    origin: '<div>hello world</div>',
    modify: '<div>hello world</div>',
  },
  css: {
    origin: '.root { position: absolute; }',
    modify: '.root { position: absolute; }',
  },
  // typescript: {
  //   origin:
  //     "type HelloWorld = Record<string, string>;\nconst helloWorld: HelloWorld = { hello: 'world' };",
  //   modify:
  //     "type HelloWorld = Record<string, string>;\nconst helloWorld: HelloWorld = { hello: 'world' };",
  // },
  // graphql: {
  //   origin: 'query {\nhello {\n id\n name\n}\n }',
  //   modify: 'query {\nhello {\n id\n name\n}\n }',
  // },
} as const;

type LanguageValue = Record<SupportLanguage, SupportLanguage>;

export const RECENT_LANGUAGE_KEY = 'recent_language';
export const LANGUAGE_VALUE = SUPPORT_LANGUAGES.reduce<LanguageValue>(
  (acc, language) => {
    acc[language] = language;
    return acc;
  },
  {} as Readonly<LanguageValue>,
);
