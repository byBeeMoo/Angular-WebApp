import { RequestHandler } from 'express';
import { model } from 'mongoose';
import Comment from '../models/Comment'

export const getComments: RequestHandler = async (req,res) => {
    res.json(await Comment.find());
};

export const getComment: RequestHandler = async (req,res) => {
    res.json(await Comment.findById(req.params.id));
};

export const createComment: RequestHandler = async (req,res) => {
    const newComment = new Comment(req.body);
    await newComment.save();
    res.json({success: true});
};

export const editComment: RequestHandler = async (req,res) => {
    const doc = await Comment.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.send(`Edited: ${doc}`);
};

export const deleteComment: RequestHandler = async (req,res) => {
    const doc = await Comment.findByIdAndDelete(req.params.id);
    res.send(`Deleted: ${doc != null ? null : "None"}`);
};