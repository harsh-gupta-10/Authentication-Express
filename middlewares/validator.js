import Joi from 'joi';

export const signupSchema = Joi.object({
    email: Joi.string()
    .min(6)
    .max(255)
    .email({
        minDomainSegments: 2,
        tlds: { allow: ['com', 'net'] }
    })
    .required(),

    password: Joi.string()
    .min(6)
    .max(1024)
    .required()
    .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
});
