import { useState } from 'react';

import Select from '@/components/system/Select';
import SelectContent from '@/components/system/Select/SelectContent';
import type { SupportLanguage } from '@/models';
import { SUPPORT_LANGUAGES } from '@/models';

export default function EditorLanguageSelect() {
  const [visible, setVisible] = useState(false);
  const [language, setLanguage] = useState<SupportLanguage>('json');

  const handleVisible = () => setVisible((visible) => !visible);

  return (
    <Select>
      <Select.Trigger onClick={handleVisible}>{language}</Select.Trigger>
      {visible && (
        <SelectContent>
          {SUPPORT_LANGUAGES.map((language) => (
            <Select.Option key={language}>{language}</Select.Option>
          ))}
        </SelectContent>
      )}
    </Select>
  );
}
