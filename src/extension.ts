import * as vscode from 'vscode';
import { AstProvider, OPEN_SELECTION_COMMAND_ID } from './ast-provider';

export function activate(context: vscode.ExtensionContext) {
    const astProvider = new AstProvider();
    vscode.window.registerTreeDataProvider('typescript-ast-explorer.view', astProvider);
    vscode.commands.registerCommand(OPEN_SELECTION_COMMAND_ID, range => astProvider.select(range));
}
