namespace ChatHelper {
    export function log(message: any): void {
        Chat.log(message);
    }

    export function warn(message: any): void {
        Chat.log(Chat.ampersandToSectionSymbol(`&6[WARNING] &e${escapeAmpersands(message)}`));
    }

    export function error(message: any): void {
        Chat.log(Chat.ampersandToSectionSymbol(`&6[ERROR] &c${escapeAmpersands(message)}`));
    }

    export function info(message: any): void {
        Chat.log(Chat.ampersandToSectionSymbol(`&6[INFO] &f${escapeAmpersands(message)}`));
    }

    export function success(message: any): void {
        Chat.log(Chat.ampersandToSectionSymbol(`&6[SUCCESS] &a${escapeAmpersands(message)}`));
    }

    function escapeAmpersands(message: any): string {
        if (typeof message === 'string') {
            return message.replaceAll('&', '&&');
        }

        return message;
    }
}

export { ChatHelper as default };
