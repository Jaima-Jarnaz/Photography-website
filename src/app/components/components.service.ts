import { Injectable } from '@angular/core';

export type modifiersType<M extends string> = M | M[];

@Injectable({
    providedIn: 'root'
})
export class ComponentsService {
    private modifiers: modifiersType<string> = '';
    constructor() {}

    getClasses(block: string, mods?: modifiersType<string>): string {
        if (!mods) return block;

        this.modifiers = typeof mods === 'string' ? [mods] : mods;
        return this.modifiers
            .reduce(
                (acc: string[], curr: string) => {
                    if (curr === undefined) return acc;
                    acc.push(`${block}--${curr}`);
                    return acc;
                },
                [block] as string[]
            )
            .join(' ');
    }
}
