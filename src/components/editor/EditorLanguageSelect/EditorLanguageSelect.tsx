import type { BaseSyntheticEvent, MouseEvent } from 'react';
import { useState } from 'react';

import Select from '@/components/system/Select';
import SelectContent from '@/components/system/Select/SelectContent';
import useRefEffect from '@/hooks/useRefEffect';
import type { SupportLanguage } from '@/models';
import { SUPPORT_LANGUAGES } from '@/models';
import { editorService, languageService } from '@/services';

export default function EditorLanguageSelect() {
  const [visible, setVisible] = useState(false);
  const [language, setLanguage] = useState<SupportLanguage>('json');

  const handleVisible = () => setVisible((visible) => !visible);

  const handleLanguage = (e: MouseEvent<HTMLLIElement>) => {
    const language = e.currentTarget.dataset.language as SupportLanguage;

    if (!languageService.isSupportLanguage(language)) return;

    setLanguage(language);
    setVisible(false);
    languageService
      .getByKey(language)
      .then((data) => editorService.setModel(data.language, data.value))
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
        <SelectContent>
          {SUPPORT_LANGUAGES.map((language) => (
            <Select.Option
              key={language}
              onClick={handleLanguage}
              data-language={language}
            >
              {language}
            </Select.Option>
          ))}
        </SelectContent>
      )}
    </Select>
  );
}
