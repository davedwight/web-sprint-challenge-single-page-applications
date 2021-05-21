import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('Name is required')
        .min(2, 'name must be at least 2 characters'),
    size: yup
        .string()
        .required('Please choose a size'),
    pepperoni: yup
        .boolean(),
    mushrooms: yup
        .boolean(),
    olives: yup
        .boolean(),
    sausage: yup
        .boolean(),
    peppers: yup
        .boolean(),
    special: yup
        .string()
        .trim(),

})

export default formSchema;