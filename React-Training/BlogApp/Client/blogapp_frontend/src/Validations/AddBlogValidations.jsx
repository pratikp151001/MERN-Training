import * as yup from 'yup'

export const BlogScheema=yup.object().shape({
    title:yup.string().required(),
    description:yup.string().required(),
    category:yup.string().required()
})