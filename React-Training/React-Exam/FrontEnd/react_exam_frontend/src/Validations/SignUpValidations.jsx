import * as yup from 'yup'

export const SignUpScheema=yup.object().shape({
    name:yup.string().required(),
    email:yup.string().required().email(),
    password:yup.string().required(),
    mobile:yup.string().required().length(10),
})