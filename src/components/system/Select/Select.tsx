import SelectContent from './SelectContent';
import SelectMain from './SelectMain';
import SelectTrigger from './SelectTrigger';

const Select = Object.assign(SelectMain, {
  Trigger: SelectTrigger,
  Content: SelectContent,
});

export default Select;
