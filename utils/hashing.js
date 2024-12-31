import { hash } from 'bcryptjs';

export const doHash = async ({ value, setValue }) => {
    const result = await hash(value, setValue);
    return result;
};
 