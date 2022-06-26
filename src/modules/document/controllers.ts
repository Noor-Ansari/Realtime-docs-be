import { Request, response, Response } from "express";

import DocService from "./service";

export const getDocById = async (req: Request, res: Response) => {
  const { doc, error } = await DocService.getDocById(req.params.id);
  if (doc) {
    return res.status(200).json({ res: doc });
  } else {
    return res.status(404).json({
      message: error,
    });
  }
};

export const createDoc = async (_: Request, res: Response) => {
  const { docId, error } = await DocService.createDoc();
  if (docId) {
    return res.status(201).json({ res: docId });
  } else {
    return res.status(500).json({ message: error });
  }
};

export const updateDoc = async (req: Request, res: Response) => {
  const { id, content } = req.body;
  const { isUpdated, error } = await DocService.updateDoc(id, content);
  if (isUpdated) {
    return res.status(200).json({ res: "Doc updated successfully" });
  } else {
    return res.status(500).json({ message: error });
  }
};
