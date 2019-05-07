import globPromise from "../../lib/utils/globPromise";
import path from "path";

describe("utils tests", () => {
  describe("globPromise()", () => {
    it("should find itself file with a glob", async () => {
      const fileName = path.basename(__filename);

      const files = await globPromise(fileName, {
        cwd: path.resolve(__dirname),
      });

      expect(files).toHaveLength(1);
    });

    it("shouldn't find any file with a glob", async () => {
      const files = await globPromise("anything", {
        cwd: path.resolve(__dirname),
      });

      expect(files).toHaveLength(0);
    });

    it("should throw an error", async () => {
      const promise = globPromise("/**/*", {
        silent: true,
      });

      await expect(promise).rejects.toThrowError();
    });
  });
});
