import * as Yup from 'yup'

export interface ICreateAccount {
  first_name: any;
  middle_name: any;
  last_name: any;
  email: any
  phone: any
  password: any
  reg_id: number;
  uni_reg_id: string
  uni_email: string
  SentEmail: string
  qulification: string;
  area: string;
}

const createAccountSchemas = [

  // Yup.object({
  //   uni_reg_id: Yup.string().required().label('Registration Id'),
  // }),
  Yup.object({
    uni_reg_id: Yup.string()
      .required('Registration Id is required')
      .matches(/^[A-Za-z]{2}\d{6}$/, 'Registration Id must start with 2 alphabets and end with 6 numbers')
      .label('Registration Id'),
  }),

  Yup.object({
    SentEmail: Yup.string().required().label('Sent Email'),
  }),
]

const inits: ICreateAccount = {
  uni_reg_id: '',
  reg_id: 0,
  SentEmail: 'se201003@dsu.edpk',
  email: undefined,
  phone: undefined,
  password: undefined,
  first_name: undefined,
  middle_name: undefined,
  last_name: undefined,
  uni_email: '',
  qulification: '',
  area: ''
}

export { createAccountSchemas, inits }
