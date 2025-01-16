// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as path from 'path';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "put-local-files" is now active!');

	// Register the command
	context.subscriptions.push(
		vscode.commands.registerCommand('put-local-files.helloWorld', () => {
		vscode.window.showInformationMessage('Put Local Files!', 'Select Destination Folder');
		})
	);
}

// This method is called when your extension is deactivated
export function deactivate() {}
