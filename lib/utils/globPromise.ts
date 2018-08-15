import glob from "glob";

const globPromise = (pattern: string, options = {}): Promise<string[]> => {
  return new Promise((resolve, reject) => {
    glob(pattern, options, (err: Error | null, files: string[]) => {
      if (err) {
        reject(err);
      }
      resolve(files);
    });
  });
};

export default globPromise;
