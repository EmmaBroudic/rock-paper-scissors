// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
import App from './App.svelte'

declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
		target: document.getElementById('app')
	}
}

export {};
