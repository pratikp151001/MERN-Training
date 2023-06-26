import * as yup from 'yup'

export const RegistrationScheema=yup.object().shape({
   
    birthday: yup.string().required(),
    color: yup.string().required(),
    email: yup.string().required().email(), 
    gender :yup.string().required(),
    lastname :yup.string().required(),
    firstname :yup.string().required(),
    mobile :yup.string().required().length(10),
    password :yup.string().required(),
    hobbies :yup.array() ,
    file :yup.string().required(),
})