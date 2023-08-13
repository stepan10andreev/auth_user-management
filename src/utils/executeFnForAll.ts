export const executeFnForAll = async <T>(array: T[], fn: (id: T, arg: string) => Promise<any>, arg: string) => {
    for (const item of array) {
      fn(item, arg);
    }
}
