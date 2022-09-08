/* tslint:disable */
/* eslint-disable */
/**
* @param {string} text
* @returns {string}
*/
export function echo(text: string): string;
/**
* @param {string} text
* @returns {string}
*/
export function getVTT(text: string): string;
/**
* @param {string} text
* @returns {string}
*/
export function countDialogueWordToJson(text: string): string;
/**
* @returns {string}
*/
export function getDefaultConfigJson(): string;
/**
* @param {string} text
* @param {string} json
* @returns {string}
*/
export function parseMeSToJsonWithConf(text: string, json: string): string;
/**
* @param {string} text
* @returns {string}
*/
export function parseMeSToJson(text: string): string;
/**
*/
export class WasmMeSBuilder {
  free(): void;
/**
* @returns {string}
*/
  static getDefaultConfig(): string;
/**
* @returns {string}
*/
  showConfig(): string;
}
/**
*/
export class WasmMedo {
  free(): void;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly echo: (a: number, b: number, c: number) => void;
  readonly getVTT: (a: number, b: number, c: number) => void;
  readonly countDialogueWordToJson: (a: number, b: number, c: number) => void;
  readonly getDefaultConfigJson: (a: number) => void;
  readonly parseMeSToJsonWithConf: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly parseMeSToJson: (a: number, b: number, c: number) => void;
  readonly wasmmesbuilder_getDefaultConfig: (a: number) => void;
  readonly wasmmesbuilder_showConfig: (a: number, b: number) => void;
  readonly __wbg_wasmmesbuilder_free: (a: number) => void;
  readonly __wbg_wasmmedo_free: (a: number) => void;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
  readonly __wbindgen_malloc: (a: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number) => number;
  readonly __wbindgen_free: (a: number, b: number) => void;
}

/**
* Synchronously compiles the given `bytes` and instantiates the WebAssembly module.
*
* @param {BufferSource} bytes
*
* @returns {InitOutput}
*/
export function initSync(bytes: BufferSource): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
