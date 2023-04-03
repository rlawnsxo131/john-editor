import type { BaseSyntheticEvent, MouseEvent } from 'react';
import { useState } from 'react';

import Select from '@/components/system/Select';
import type { SupportLanguage } from '@/domain';
import { SUPPORT_LANGUAGES } from '@/domain';
import useRefEffect from '@/hooks/useRefEffect';
import { editorService, languageService } from '@/services';

export default function EditorLanguageSelect() {
  const [visible, setVisible] = useState(false);
  const [language, setLanguage] = useState<SupportLanguage>(
    languageService.getRecentLanguage(),
  );

  const handleVisible = () => setVisible((visible) => !visible);

  const handleLanguage = (e: MouseEvent<HTMLLIElement>) => {
    const language = e.currentTarget.dataset.language as SupportLanguage;

    if (!languageService.isSupportLanguage(language)) return;

    setLanguage(language);
    setVisible(false);

    languageService
      .getByKey(language)
      .then((data) =>
        editorService.setModel(data.language, {
          origin: data.origin,
          modify: data.modify,
        }),
      )
      .then((monaco) => monaco.updateTabSize(2))
      .then(() => languageService.setRecentLanguage(language))
      .catch((reason) => console.error(reason));
  };

  const ref = useRefEffect(
    (div: HTMLDivElement) => {
      const handler = (e: BaseSyntheticEvent | Event | TouchEvent) => {
        if (div.contains(e.target)) return;
        setVisible(false);
      };

      document.addEventListener('mousedown', handler);
      document.addEventListener('touchstart', handler);

      return () => {
        document.removeEventListener('mousedown', handler);
        document.removeEventListener('touchstart', handler);
      };
    },
    [visible],
  );

  return (
    <Select ref={ref}>
      <Select.Trigger onClick={handleVisible}>{language}</Select.Trigger>
      {visible && (
        <Select.Content>
          {SUPPORT_LANGUAGES.map((language) => (
            <Select.Option
              key={language}
              onClick={handleLanguage}
              data-language={language}
            >
              {language}
            </Select.Option>
          ))}
        </Select.Content>
      )}
    </Select>
  );
}
