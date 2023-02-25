import { useState } from 'react';

import type { SupportLanguage } from '@/@types';
import Select from '@/components/system/Select';
import SelectContent from '@/components/system/Select/SelectContent';

export default function EditorLanguageSelect() {
  const [visible, setVisible] = useState(false);
  const [language, setLanguage] = useState<SupportLanguage>('json');

  const handleVisible = () => setVisible((visible) => !visible);

  return (
    <Select>
      <Select.Trigger onClick={handleVisible}>{language}</Select.Trigger>
      {visible && (
        <SelectContent>
          <li>asdf</li>
          <li>asdf</li>
          <li>asdf</li>
          <li>asdf</li>
          <li>asdf</li>
          <li>asdf</li>
          <li>asdf</li>
        </SelectContent>
      )}
    </Select>
  );
}
