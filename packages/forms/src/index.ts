import Form from './formContext';
import { useForm } from './formContext/FormProvider';
import { FormHandles, FormProps } from './formContext/types/contextTypes';
import * as formControl from './functions';

export default Form;
export { useForm, formControl };
export type { FormHandles, FormProps };
