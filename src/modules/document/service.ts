import Doc from "./model";

class DocService {
  static async getDocById(id: String) {
    try {
      const doc = await Doc.findById(id);
      if (doc) {
        return { doc };
      } else {
        throw "NO DOC WITH THE GIVEN ID";
      }
    } catch (err) {
      return { error: err };
    }
  }

  static async createDoc() {
    try {
      const newDoc = new Doc();
      await newDoc.save();
      return { docId: newDoc._id };
    } catch (err) {
      return { error: err };
    }
  }

  static async updateDoc(id: string, content: string) {
    try {
      await Doc.findByIdAndUpdate(id, { content });
      return { isUpdated: true };
    } catch (_) {
      return { isUpdated: false, error: "Doc updation failed" };
    }
  }
}

export default DocService;
