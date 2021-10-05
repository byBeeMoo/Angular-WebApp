import { RequestHandler } from 'express';
import { model } from 'mongoose';
import Comment from '../models/Comment'

export const getComments: RequestHandler = async (req,res) => {
    res.json(await Comment.find());
};

export const getComment: RequestHandler = async (req,res) => {
    const doc = res.json(await Comment.findById(req.params.id));
    res.json(`Result: ${doc != null ? doc : "Failure"}`)
};

export const createComment: RequestHandler = async (req,res) => {
    const ip = JSON.parse('{"ip": "' + req.ip + '"}');
    const json = Object.assign({}, req.body, ip);  
    const res1 = await Comment.find(ip);
    
    if (res1.toString() == '') { // prevents flooding correctly now, doesnt expect more than 1 comment per person/ip
        try{
            const newComment = new Comment(json);
            const doc = await newComment.save();
            res.json(`Created: true`)
        } catch(err) {
            const errStr = JSON.stringify(err).split("\"");     
            const errorName = errStr[7];
            const errorMsg = errStr[3];
            
            res.json(`Error: ${errorName}: Field '${errorMsg}' is missing.'`);
        }
    } else {
        res.send("Stop flooding my comments.")
    }
};

export const editComment: RequestHandler = async (req,res) => {
    const doc = await Comment.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.send(`Edited: ${doc != null ? doc : "Failure"}`);
};

export const deleteComment: RequestHandler = async (req,res) => {
    const doc = await Comment.findByIdAndDelete(req.params.id);
    res.send(`Deleted: ${doc != null ? doc : "Failure"}`);
};