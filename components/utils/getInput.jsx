import { EmailInput, InlineFile, TextInput, PasswordInput } from '@/components/inputs';

export default function getInput(type) {
    switch (type) {
        case 'text':
            return <TextInput />;
        case 'email':
            return <EmailInput />;
            break;
        case 'file':
            return <InlineFile />;
            break;
        case 'password':
            return <PasswordInput />;
            break;
        default:
            return <TextInput />;
    }
}