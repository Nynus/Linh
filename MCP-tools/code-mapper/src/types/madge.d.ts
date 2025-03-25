declare module 'madge' {
  interface MadgeInstance {
    obj: () => Record<string, string[]>;
    circular: () => Promise<string[][]>;
    orphans: () => Promise<string[]>;
    warnings: () => Promise<any>;
  }

  interface MadgeOptions {
    baseDir?: string;
    includeNpm?: boolean;
    requireConfig?: string;
    webpackConfig?: string;
    excludeRegExp?: RegExp;
    fileExtensions?: string[];
    dependencyFilter?: (dependencyFilePath: string, traversedFilePath: string) => boolean;
    tsConfig?: string;
    tsPreCompilationDeps?: boolean;
    detectiveOptions?: any;
    graphVizOptions?: any;
    graphVizPath?: string;
  }

  function madge(path: string, options?: MadgeOptions): Promise<MadgeInstance>;
  export = madge;
} 