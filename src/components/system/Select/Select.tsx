import SelectContent from './SelectContent';
import SelectMain from './SelectMain';
import SelectOption from './SelectOption';
import SelectTrigger from './SelectTrigger';

const Select = Object.assign(SelectMain, {
  Trigger: SelectTrigger,
  Content: SelectContent,
  Option: SelectOption,
});

export default Select;
