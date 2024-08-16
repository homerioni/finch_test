declare module "*.scss" {
    const content: {[className: string]: string};
    export = content;
}

declare module "*.svg" {
    const value: any;
    export = value;
}
